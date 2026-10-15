// Service Worker para Lista de Compras PWA
// Gerencia Notificações Push, Alertas do Sistema Operacional e Ícone com Badge (Bolinha de Mensagens)

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Ao clicar na notificação que desce no celular
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : './index.html';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Se já houver uma aba aberta, foca nela
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      // Se não houver aba aberta, abre uma nova
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

// Recebe mensagens da aplicação principal (ex: disparar notificação em segundo plano)
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.action === 'notificar') {
    const { titulo, corpo, badgeCount } = event.data;
    
    // Atualiza a bolinha no ícone do atalho no celular
    if ('setAppBadge' in self.navigator && badgeCount) {
      self.navigator.setAppBadge(badgeCount).catch(() => {});
    }

    self.registration.showNotification(titulo || 'Lista de Compras', {
      body: corpo || 'Novo pedido recebido!',
      icon: './icone_lista.ico',
      badge: './icone_lista.ico',
      vibrate: [320, 100, 320, 100, 450],
      tag: 'pedido-patroa-' + Date.now(),
      renotify: true,
      data: { url: './index.html' }
    });
  } else if (event.data.action === 'limpar_badge') {
    if ('clearAppBadge' in self.navigator) {
      self.navigator.clearAppBadge().catch(() => {});
    }
  }
});
