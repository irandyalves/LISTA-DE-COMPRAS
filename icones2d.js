// Biblioteca de Ícones 2D Coloridos Vetoriais para Lista de Compras
// Cada ícone é um SVG estilizado, limpo, colorido e com visual moderno (Flat / Duotone)

const ICONS_2D = {
  // BÁSICOS E MERCEARIA
  arroz: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="18" width="40" height="38" rx="8" fill="#F1C40F"/>
    <path d="M12 28C12 22.4772 16.4772 18 22 18H42C47.5228 18 52 22.4772 52 28V32H12V28Z" fill="#F39C12"/>
    <rect x="20" y="8" width="24" height="12" rx="4" fill="#E67E22"/>
    <ellipse cx="32" cy="40" rx="12" ry="7" fill="#FFFFFF"/>
    <ellipse cx="30" cy="38" rx="3" ry="1.5" fill="#BDC3C7" transform="rotate(-20 30 38)"/>
    <ellipse cx="34" cy="41" rx="3" ry="1.5" fill="#BDC3C7" transform="rotate(15 34 41)"/>
    <ellipse cx="33" cy="37" rx="3" ry="1.5" fill="#BDC3C7" transform="rotate(40 33 37)"/>
  </svg>`,

  feijao: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="16" width="36" height="40" rx="10" fill="#795548"/>
    <rect x="22" y="8" width="20" height="10" rx="3" fill="#5D4037"/>
    <circle cx="32" cy="36" r="12" fill="#D7CCC8"/>
    <path d="M28 32C26 34 26 38 29 40C32 42 36 40 37 36C38 32 35 30 32 31C30 31.5 29 31 28 32Z" fill="#4E342E"/>
    <path d="M30 34C31 35 33 35 34 34" stroke="#FFF" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  oleo: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="22" width="24" height="34" rx="6" fill="#F9CA24"/>
    <path d="M26 14H38V22H26V14Z" fill="#F0932B"/>
    <rect x="28" y="8" width="8" height="6" rx="2" fill="#EB4D4B"/>
    <circle cx="32" cy="36" r="6" fill="#FFF" fill-opacity="0.6"/>
    <path d="M32 32C32 32 36 36 36 38C36 40.2 34.2 42 32 42C29.8 42 28 40.2 28 38C28 36 32 32 32 32Z" fill="#F0932B"/>
  </svg>`,

  acucar: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="18" width="36" height="38" rx="8" fill="#48DBFB"/>
    <path d="M14 26H50V50C50 53.3 47.3 56 44 56H20C16.7 56 14 53.3 14 50V26Z" fill="#0ABDE3"/>
    <rect x="22" y="10" width="20" height="10" rx="3" fill="#0097E6"/>
    <rect x="26" y="32" width="12" height="12" rx="2" fill="#FFFFFF" transform="rotate(45 32 38)"/>
  </svg>`,

  sal: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 22H42L44 54C44 56.2 42.2 58 40 58H24C21.8 58 20 56.2 20 54L22 22Z" fill="#54A0FF"/>
    <rect x="24" y="12" width="16" height="10" rx="3" fill="#2E86DE"/>
    <circle cx="28" cy="16" r="1.5" fill="#FFF"/>
    <circle cx="32" cy="16" r="1.5" fill="#FFF"/>
    <circle cx="36" cy="16" r="1.5" fill="#FFF"/>
    <circle cx="32" cy="38" r="8" fill="#FFFFFF"/>
    <text x="32" y="42" font-size="10" font-weight="bold" fill="#2E86DE" text-anchor="middle" font-family="Arial">S</text>
  </svg>`,

  cafe: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24H44V42C44 48 39 52 33 52H23C17 52 12 48 12 42V24Z" fill="#8D6E63"/>
    <path d="M44 30H48C51.3 30 54 32.7 54 36C54 39.3 51.3 42 48 42H44V30Z" stroke="#8D6E63" stroke-width="4"/>
    <path d="M20 12C20 16 22 18 22 20" stroke="#BCAAA4" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M28 10C28 15 30 17 30 20" stroke="#BCAAA4" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 12C36 16 38 18 38 20" stroke="#BCAAA4" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="28" cy="56" rx="20" ry="3" fill="#6D4C41"/>
  </svg>`,

  achocolatado: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="16" width="28" height="42" rx="6" fill="#795548"/>
    <rect x="16" y="24" width="32" height="24" rx="3" fill="#D84315"/>
    <rect x="22" y="10" width="20" height="8" rx="3" fill="#F4511E"/>
    <circle cx="32" cy="36" r="8" fill="#FFE082"/>
    <path d="M28 36L32 32L36 36L32 40Z" fill="#E65100"/>
    <path d="M30 42C30 42 32 44 34 42" stroke="#5D4037" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  macarrao: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="10" width="28" height="46" rx="6" fill="#F6E58D"/>
    <rect x="18" y="24" width="28" height="18" fill="#ECCC68"/>
    <path d="M24 16V50" stroke="#FFA502" stroke-width="2" stroke-linecap="round"/>
    <path d="M30 16V50" stroke="#FFA502" stroke-width="2" stroke-linecap="round"/>
    <path d="M36 16V50" stroke="#FFA502" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 16V50" stroke="#FFA502" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  farinha: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 20C16 16 20 12 24 12H40C44 12 48 16 48 20V52C48 55 45 58 42 58H22C19 58 16 55 16 52V20Z" fill="#F8EFBA"/>
    <rect x="20" y="28" width="24" height="20" rx="4" fill="#E1B12C"/>
    <circle cx="32" cy="38" r="6" fill="#FFFFFF"/>
    <path d="M22 18L42 18" stroke="#DDA815" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  leite: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 14L28 8H36L40 14V18H24V14Z" fill="#45AAF2"/>
    <path d="M20 18H44V54C44 56.2 42.2 58 40 58H24C21.8 58 20 56.2 20 54V18Z" fill="#FFFFFF"/>
    <path d="M20 28H44V42H20V28Z" fill="#2D98DA"/>
    <circle cx="32" cy="35" r="4" fill="#FFFFFF"/>
    <rect x="20" y="18" width="24" height="40" rx="4" stroke="#2D98DA" stroke-width="2"/>
  </svg>`,

  queijo: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 46L48 20V46H12Z" fill="#FED330"/>
    <path d="M12 46H52V52H12V46Z" fill="#F7B731"/>
    <circle cx="28" cy="40" r="3.5" fill="#FA8231"/>
    <circle cx="40" cy="34" r="2.5" fill="#FA8231"/>
    <circle cx="42" cy="42" r="3" fill="#FA8231"/>
    <path d="M12 46L32 16L48 20" fill="#FFEAA7"/>
  </svg>`,

  ovos: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="32" width="44" height="22" rx="6" fill="#D2B48C"/>
    <ellipse cx="22" cy="30" rx="7" ry="10" fill="#FFF9E6" stroke="#F1C40F" stroke-width="1.5"/>
    <ellipse cx="32" cy="27" rx="7" ry="10.5" fill="#FFFFFF" stroke="#BDC3C7" stroke-width="1.5"/>
    <ellipse cx="42" cy="30" rx="7" ry="10" fill="#FFF9E6" stroke="#F1C40F" stroke-width="1.5"/>
    <line x1="12" y1="42" x2="52" y2="42" stroke="#B59975" stroke-width="2"/>
  </svg>`,

  manteiga: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="32" width="36" height="20" rx="4" fill="#FFEAA7"/>
    <rect x="18" y="24" width="28" height="12" rx="3" fill="#FED330"/>
    <ellipse cx="32" cy="54" rx="22" ry="4" fill="#DFE6E9"/>
    <path d="M22 28H36" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  iogurte: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20H44L40 54H24L20 20Z" fill="#FF9FF3"/>
    <path d="M18 16H46V20H18V16Z" fill="#F368E0"/>
    <circle cx="32" cy="36" r="6" fill="#FFFFFF"/>
    <circle cx="32" cy="36" r="3" fill="#EE5253"/>
  </svg>`,

  pao: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 36C14 26 22 20 32 20C42 20 50 26 50 36V44C50 48 46 50 42 50H22C18 50 14 48 14 44V36Z" fill="#E67E22"/>
    <ellipse cx="32" cy="32" rx="14" ry="7" fill="#F39C12"/>
    <path d="M25 28C26 31 29 33 30 33" stroke="#D35400" stroke-width="2" stroke-linecap="round"/>
    <path d="M34 28C35 31 38 33 39 33" stroke="#D35400" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // CARNES E PROTEÍNAS
  frango: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="36" cy="30" rx="16" ry="12" fill="#FFB142"/>
    <path d="M24 34L14 46" stroke="#F7F1E3" stroke-width="5" stroke-linecap="round"/>
    <circle cx="13" cy="47" r="4" fill="#F7F1E3"/>
    <circle cx="17" cy="50" r="4" fill="#F7F1E3"/>
    <ellipse cx="36" cy="28" rx="12" ry="7" fill="#FFA502"/>
  </svg>`,

  carne: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28C16 20 25 18 36 20C46 22 50 28 50 36C50 46 42 50 30 48C18 46 16 38 16 28Z" fill="#EB4D4B"/>
    <ellipse cx="28" cy="32" rx="5" ry="3.5" fill="#FFFFFF"/>
    <ellipse cx="28" cy="32" rx="2.5" ry="2" fill="#E84118"/>
    <path d="M35 26C37 30 40 33 43 35" stroke="#FF7979" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M28 40C32 41 37 40 40 38" stroke="#FF7979" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  peixe: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 32C20 22 38 20 48 32C38 44 20 42 12 32Z" fill="#22A6B3"/>
    <path d="M46 32L54 24V40L46 32Z" fill="#0984E3"/>
    <circle cx="20" cy="30" r="2.5" fill="#FFFFFF"/>
    <circle cx="19" cy="30" r="1.2" fill="#2C3E50"/>
    <path d="M28 28C30 32 30 34 28 36" stroke="#7ED6DF" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  linguica: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 38C14 26 24 16 36 18C48 20 50 32 46 42C42 50 24 48 18 42" stroke="#D63031" stroke-width="9" stroke-linecap="round"/>
    <circle cx="16" cy="38" r="3" fill="#B71540"/>
    <circle cx="20" cy="44" r="3" fill="#B71540"/>
  </svg>`,

  // FRUTAS E VERDURAS
  fruta: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="36" r="14" fill="#FF5252"/>
    <circle cx="38" cy="36" r="14" fill="#FF5252"/>
    <path d="M32 24C32 16 36 12 36 12" stroke="#795548" stroke-width="3" stroke-linecap="round"/>
    <path d="M34 16C40 14 44 18 44 18C44 18 40 22 34 18" fill="#2ED573"/>
    <ellipse cx="26" cy="32" rx="3" ry="6" fill="#FF7979" transform="rotate(-20 26 32)"/>
  </svg>`,

  banana: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 44C24 48 38 46 46 32C50 24 50 16 50 16C50 16 42 18 36 24C28 32 20 38 18 44Z" fill="#F9CA24"/>
    <path d="M18 44L14 46" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 16L53 13" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
    <path d="M26 38C34 38 40 30 44 22" stroke="#F6B93B" stroke-width="2"/>
  </svg>`,

  legumes: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 16L44 48C46 51 44 54 40 54C37 54 20 40 18 36C16 32 21 18 24 16Z" fill="#FF793F"/>
    <path d="M22 18L18 10C22 10 24 14 24 14" stroke="#2ED573" stroke-width="3" stroke-linecap="round"/>
    <path d="M24 16L28 8C30 11 27 15 27 15" stroke="#2ED573" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 32L34 34" stroke="#CD6133" stroke-width="2" stroke-linecap="round"/>
    <path d="M25 40L31 42" stroke="#CD6133" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  tomate: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="38" r="18" fill="#EB3B5A"/>
    <path d="M32 20V14" stroke="#20BF6B" stroke-width="3" stroke-linecap="round"/>
    <path d="M26 22C28 20 32 21 32 21C32 21 36 20 38 22" stroke="#20BF6B" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="26" cy="32" rx="3" ry="5" fill="#FA8231" transform="rotate(-30 26 32)"/>
  </svg>`,

  batata: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="36" rx="20" ry="15" fill="#D1A054" transform="rotate(-10 32 36)"/>
    <circle cx="26" cy="32" r="1.5" fill="#8C6228"/>
    <circle cx="36" cy="38" r="1.5" fill="#8C6228"/>
    <circle cx="42" cy="30" r="1.5" fill="#8C6228"/>
    <circle cx="24" cy="42" r="1.5" fill="#8C6228"/>
  </svg>`,

  cebola: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 14C20 22 16 34 20 44C24 52 40 52 44 44C48 34 44 22 32 14Z" fill="#C56CF0"/>
    <path d="M32 14V8" stroke="#10AC84" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 26C26 32 26 38 29 44" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  </svg>`,

  alho: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="40" rx="16" ry="14" fill="#F8EFBA"/>
    <path d="M32 18V26" stroke="#A4B0BE" stroke-width="3" stroke-linecap="round"/>
    <path d="M24 30C23 35 24 43 27 48" stroke="#DCDDE1" stroke-width="1.5"/>
    <path d="M40 30C41 35 40 43 37 48" stroke="#DCDDE1" stroke-width="1.5"/>
  </svg>`,

  // LIMPEZA E CASA
  detergente: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="24" width="20" height="32" rx="6" fill="#1DD1A1"/>
    <path d="M26 14H38V24H26V14Z" fill="#10AC84"/>
    <rect x="29" y="8" width="6" height="6" rx="2" fill="#EE5253"/>
    <ellipse cx="32" cy="38" rx="6" ry="8" fill="#FFFFFF" fill-opacity="0.8"/>
    <circle cx="32" cy="38" r="3" fill="#1DD1A1"/>
  </svg>`,

  amaciante: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 22C20 18 24 16 28 16H36C40 16 44 18 44 22V52C44 55 41 58 38 58H26C23 58 20 55 20 52V22Z" fill="#54A0FF"/>
    <rect x="26" y="8" width="12" height="8" rx="2" fill="#EE5253"/>
    <path d="M44 28H48C50 28 52 30 52 32V42C52 44 50 46 48 46H44V28Z" fill="#2E86DE"/>
    <circle cx="32" cy="36" r="6" fill="#FFF"/>
    <path d="M30 36L34 36" stroke="#54A0FF" stroke-width="2"/>
  </svg>`,

  sabao: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="16" width="36" height="42" rx="4" fill="#3867D6"/>
    <path d="M14 26L50 36V54C50 56 48 58 46 58H18C16 58 14 56 14 54V26Z" fill="#26DE81"/>
    <circle cx="32" cy="32" r="8" fill="#FED330"/>
    <path d="M28 32L36 32" stroke="#2C3E50" stroke-width="2"/>
    <circle cx="44" cy="18" r="4" fill="#FFF" fill-opacity="0.6"/>
    <circle cx="48" cy="12" r="2.5" fill="#FFF" fill-opacity="0.6"/>
  </svg>`,

  sanitaria: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="24" width="20" height="32" rx="5" fill="#2ED573"/>
    <path d="M26 14H38V24H26V14Z" fill="#26AF61"/>
    <rect x="27" y="8" width="10" height="6" rx="2" fill="#FFA502"/>
    <rect x="22" y="32" width="20" height="12" fill="#FFFFFF"/>
    <text x="32" y="41" font-size="7" font-weight="bold" fill="#2ED573" text-anchor="middle" font-family="Arial">CLORO</text>
  </svg>`,

  desinfetante: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 22H40V54C40 56 38 58 36 58H28C26 58 24 56 24 54V22Z" fill="#9B59B6"/>
    <path d="M28 14H36V22H28V14Z" fill="#8E44AD"/>
    <rect x="29" y="8" width="6" height="6" rx="2" fill="#F1C40F"/>
    <circle cx="32" cy="38" r="6" fill="#FFF" fill-opacity="0.8"/>
  </svg>`,

  papel: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="20" rx="16" ry="8" fill="#F5F6FA"/>
    <rect x="16" y="20" width="32" height="28" fill="#DCDDE1"/>
    <ellipse cx="32" cy="48" rx="16" ry="8" fill="#F5F6FA"/>
    <ellipse cx="32" cy="20" rx="6" ry="3" fill="#718093"/>
  </svg>`,

  // HIGIENE PESSOAL
  shampoo: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="20" width="20" height="36" rx="8" fill="#FF6B81"/>
    <rect x="26" y="10" width="12" height="10" rx="3" fill="#2F3542"/>
    <rect x="25" y="30" width="14" height="16" rx="2" fill="#FFFFFF"/>
    <line x1="28" y1="36" x2="36" y2="36" stroke="#FF6B81" stroke-width="2"/>
    <line x1="28" y1="40" x2="34" y2="40" stroke="#FF6B81" stroke-width="2"/>
  </svg>`,

  sabonete: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="24" width="36" height="22" rx="11" fill="#70A1FF"/>
    <rect x="18" y="28" width="28" height="14" rx="7" fill="#1E90FF"/>
    <ellipse cx="26" cy="32" rx="4" ry="2" fill="#FFF" fill-opacity="0.6"/>
  </svg>`,

  dente: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 44L38 20C40 18 44 18 46 20L48 22C50 24 50 28 48 30L26 54L16 44Z" fill="#00D2D3"/>
    <path d="M42 16L48 22" stroke="#54A0FF" stroke-width="4" stroke-linecap="round"/>
    <circle cx="34" cy="34" r="3" fill="#FFFFFF"/>
  </svg>`,

  fiodental: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="32" rx="10" fill="#00CEC9"/>
    <rect x="22" y="14" width="20" height="8" rx="3" fill="#81ECEC"/>
    <circle cx="32" cy="36" r="8" fill="#FFFFFF"/>
    <path d="M28 36H36" stroke="#00CEC9" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M38 18C44 18 48 24 48 28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  costela: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="22" width="40" height="26" rx="8" fill="#C0392B"/>
    <rect x="18" y="14" width="6" height="12" rx="3" fill="#ECF0F1"/>
    <rect x="29" y="14" width="6" height="12" rx="3" fill="#ECF0F1"/>
    <rect x="40" y="14" width="6" height="12" rx="3" fill="#ECF0F1"/>
    <line x1="16" y1="35" x2="48" y2="35" stroke="#E74C3C" stroke-width="3"/>
  </svg>`,

  folhas: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 42C16 30 26 20 40 18C44 28 42 42 30 48C22 52 16 48 16 42Z" fill="#2ECC71"/>
    <path d="M20 44L36 24" stroke="#27AE60" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M32 38C38 32 46 28 48 20C40 22 34 28 32 38Z" fill="#55E6C1"/>
  </svg>`,

  // BEBIDAS E LANCHES
  refrigerante: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="16" width="20" height="38" rx="6" fill="#EA2027"/>
    <ellipse cx="32" cy="16" rx="10" ry="3" fill="#C0392B"/>
    <ellipse cx="32" cy="54" rx="10" ry="3" fill="#962d22"/>
    <rect x="28" y="10" width="8" height="6" rx="1" fill="#BDC3C7"/>
    <path d="M22 28C26 34 38 34 42 40" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  suco: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L24 54H40L44 20H20Z" fill="#FFA502"/>
    <line x1="32" y1="10" x2="38" y2="46" stroke="#2ED573" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="34" r="5" fill="#FF6348"/>
  </svg>`,

  agua: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="20" width="20" height="34" rx="6" fill="#70A1FF"/>
    <rect x="26" y="12" width="12" height="8" rx="2" fill="#1E90FF"/>
    <path d="M22 28H42" stroke="#5352ED" stroke-width="2"/>
    <path d="M22 36H42" stroke="#5352ED" stroke-width="2"/>
    <path d="M22 44H42" stroke="#5352ED" stroke-width="2"/>
  </svg>`,

  biscoito: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="18" fill="#E1B12C"/>
    <circle cx="26" cy="24" r="2.5" fill="#6D4C41"/>
    <circle cx="38" cy="26" r="2.5" fill="#6D4C41"/>
    <circle cx="30" cy="34" r="2.5" fill="#6D4C41"/>
    <circle cx="38" cy="40" r="2.5" fill="#6D4C41"/>
    <circle cx="24" cy="38" r="2.5" fill="#6D4C41"/>
  </svg>`,

  cabelo: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10C16.4772 10 12 14.4772 12 20C12 28 17 34 22 36V54C22 56.2 23.8 58 26 58H30C32.2 58 34 56.2 34 54V36C39 34 44 28 44 20C44 14.4772 39.5228 10 34 10H22Z" fill="#E84393"/>
    <rect x="18" y="16" width="20" height="14" rx="4" fill="#FD79A8"/>
    <circle cx="23" cy="20" r="1.5" fill="#FFFFFF"/>
    <circle cx="28" cy="20" r="1.5" fill="#FFFFFF"/>
    <circle cx="33" cy="20" r="1.5" fill="#FFFFFF"/>
    <circle cx="23" cy="25" r="1.5" fill="#FFFFFF"/>
    <circle cx="28" cy="25" r="1.5" fill="#FFFFFF"/>
    <circle cx="33" cy="25" r="1.5" fill="#FFFFFF"/>
    <path d="M44 18H52M44 23H50M44 28H48" stroke="#E84393" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  cerveja: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="26" height="36" rx="4" fill="#F1C40F"/>
    <path d="M42 26H48C51.3 26 54 28.7 54 32V42C54 45.3 51.3 48 48 48H42V26Z" stroke="#F39C12" stroke-width="4"/>
    <path d="M14 16C14 13.8 15.8 12 18 12H40C42.2 12 44 13.8 44 16C44 18.2 42.2 20 40 20H18C15.8 20 14 18.2 14 16Z" fill="#FFFFFF"/>
    <ellipse cx="23" cy="13" rx="6" ry="4" fill="#FFFFFF"/>
    <ellipse cx="35" cy="13" rx="7" ry="5" fill="#FFFFFF"/>
    <rect x="22" y="26" width="4" height="24" rx="2" fill="#FFEAA7"/>
  </svg>`,

  vinho: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="26" width="16" height="32" rx="4" fill="#6C5CE7"/>
    <path d="M22 16H30V26H22V16Z" fill="#4834D4"/>
    <rect x="23" y="10" width="8" height="6" rx="1" fill="#D63031"/>
    <path d="M38 34C38 34 38 46 44 46H46C52 46 52 34 52 34H38Z" fill="#D63031"/>
    <path d="M45 46V56M40 56H50" stroke="#D63031" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  pet: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="40" rx="12" ry="10" fill="#E67E22"/>
    <circle cx="20" cy="25" r="5" fill="#D35400"/>
    <circle cx="32" cy="20" r="5" fill="#D35400"/>
    <circle cx="44" cy="25" r="5" fill="#D35400"/>
  </svg>`,

  utilidades: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 26C22 18 26.5 12 32 12C37.5 12 42 18 42 26C42 32 38 36 36 40H28C26 36 22 32 22 26Z" fill="#F1C40F"/>
    <rect x="27" y="42" width="10" height="4" rx="1" fill="#7F8C8D"/>
    <rect x="28" y="48" width="8" height="4" rx="1" fill="#95A5A6"/>
    <path d="M32 6V2M14 20L10 18M50 20L54 18" stroke="#F39C12" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // PADRÃO / OUTROS
  padrao: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="20" width="36" height="34" rx="8" fill="#6C5CE7"/>
    <path d="M22 20C22 14 26 10 32 10C38 10 42 14 42 20" stroke="#A29BFE" stroke-width="4" stroke-linecap="round"/>
    <circle cx="32" cy="36" r="6" fill="#FFFFFF"/>
    <path d="M29 36L31 38L35 34" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
};

// Função inteligente para detectar o ícone 2D baseado no nome do produto
function obterIcone2D(nomeProduto, iconeManual) {
  if (iconeManual && ICONS_2D[iconeManual]) {
    return ICONS_2D[iconeManual];
  }
  if (!nomeProduto) return ICONS_2D.padrao;
  const t = nomeProduto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (t.includes('arroz')) return ICONS_2D.arroz;
  if (t.includes('feijao') || t.includes('feijoada')) return ICONS_2D.feijao;
  if (t.includes('oleo') || t.includes('azeite')) return ICONS_2D.oleo;
  if (t.includes('acucar') || t.includes('adocante')) return ICONS_2D.acucar;
  if (t.includes('sal ') || t.endsWith('sal')) return ICONS_2D.sal;
  if (t.includes('cafe')) return ICONS_2D.cafe;
  if (t.includes('macarrao') || t.includes('massa') || t.includes('espaguete')) return ICONS_2D.macarrao;
  if (t.includes('farinha') || t.includes('trigo') || t.includes('fuba') || t.includes('tapioca')) return ICONS_2D.farinha;
  if (t.includes('leite') && !t.includes('condensado')) return ICONS_2D.leite;
  if (t.includes('queijo') || t.includes('mussarela') || t.includes('parmesao') || t.includes('prato')) return ICONS_2D.queijo;
  if (t.includes('ovo')) return ICONS_2D.ovos;
  if (t.includes('manteiga') || t.includes('margarina') || t.includes('requeijao')) return ICONS_2D.manteiga;
  if (t.includes('iogurte') || t.includes('danone')) return ICONS_2D.iogurte;
  if (t.includes('pao') || t.includes('torrada')) return ICONS_2D.pao;
  
  if (t.includes('frango') || t.includes('peito') || t.includes('coxa') || t.includes('asa') || t.includes('galinha')) return ICONS_2D.frango;
  if (t.includes('carne') || t.includes('bife') || t.includes('patinho') || t.includes('alcatra') || t.includes('picanha') || t.includes('moida')) return ICONS_2D.carne;
  if (t.includes('peixe') || t.includes('tilapia') || t.includes('salmao') || t.includes('sardinha') || t.includes('atum')) return ICONS_2D.peixe;
  if (t.includes('calabresa') || t.includes('linguica') || t.includes('salsicha') || t.includes('bacon')) return ICONS_2D.linguica;

  if (t.includes('maca') || t.includes('laranja') || t.includes('fruta') || t.includes('uva') || t.includes('morango') || t.includes('limao') || t.includes('mamao')) return ICONS_2D.fruta;
  if (t.includes('banana')) return ICONS_2D.banana;
  if (t.includes('tomate')) return ICONS_2D.tomate;
  if (t.includes('cenoura') || t.includes('legume') || t.includes('chuchu') || t.includes('abobrinha')) return ICONS_2D.legumes;
  if (t.includes('batata')) return ICONS_2D.batata;
  if (t.includes('cebola')) return ICONS_2D.cebola;
  if (t.includes('alho')) return ICONS_2D.alho;

  if (t.includes('detergente') || t.includes('ypê') || t.includes('ype')) return ICONS_2D.detergente;
  if (t.includes('amaciante') || t.includes('comfort') || t.includes('downy')) return ICONS_2D.amaciante;
  if (t.includes('sabao') || t.includes('omo') || t.includes('ariel') || t.includes('lava roupas')) return ICONS_2D.sabao;
  if (t.includes('qboa') || t.includes('cloro') || t.includes('agua sanitaria') || t.includes('sanitaria')) return ICONS_2D.sanitaria;
  if (t.includes('desinfetante') || t.includes('lysoform') || t.includes('pinho')) return ICONS_2D.desinfetante;
  if (t.includes('papel') || t.includes('higienico') || t.includes('guardanapo')) return ICONS_2D.papel;

  if (t.includes('shampoo') || t.includes('condicionador') || t.includes('creme')) return ICONS_2D.shampoo;
  if (t.includes('sabonete')) return ICONS_2D.sabonete;
  
  if (t.includes('cabelo') || t.includes('pente') || (t.includes('escova') && (t.includes('cabelo') || t.includes('raquete') || t.includes('secador') || t.includes('desembaracad')))) return ICONS_2D.cabelo;
  if (t.includes('escova') && (t.includes('roupa') || t.includes('lavar') || t.includes('sanitaria') || t.includes('vaso') || t.includes('limpeza'))) return ICONS_2D.sanitaria;
  if (t.includes('dente') || t.includes('colgate') || t.includes('pasta') || t.includes('dental') || t.includes('escova')) return ICONS_2D.dente;

  if (t.includes('cerveja') || t.includes('chopp') || t.includes('heineken') || t.includes('stella') || t.includes('spaten') || t.includes('corona') || t.includes('amstel') || t.includes('budweiser')) return ICONS_2D.cerveja;
  if (t.includes('vinho') || t.includes('espumante') || t.includes('whisky') || t.includes('vodka') || t.includes('gin ') || t.includes('cachaca') || t.includes('licor')) return ICONS_2D.vinho;
  if (t.includes('racao') || t.includes('petisco cao') || t.includes('petisco gato') || t.includes('whiskas') || t.includes('pedigree') || t.includes('gato') || t.includes('pet')) return ICONS_2D.pet;
  if (t.includes('lampada') || t.includes('pilha') || t.includes('fosforo') || t.includes('isqueiro') || t.includes('vela') || t.includes('carvao')) return ICONS_2D.utilidades;

  if (t.includes('refrigerante') || t.includes('coca') || t.includes('guarana') || t.includes('pepsi')) return ICONS_2D.refrigerante;
  if (t.includes('suco')) return ICONS_2D.suco;
  if (t.includes('agua') || t.includes('mineral')) return ICONS_2D.agua;
  if (t.includes('biscoito') || t.includes('bolacha') || t.includes('snack') || t.includes('salgadinho')) return ICONS_2D.biscoito;
  if (t.includes('achocolatado') || t.includes('toddy') || t.includes('tody') || t.includes('nescau') || t.includes('cacau') || t.includes('chocolate')) return ICONS_2D.achocolatado;

  if (t.includes('fio dental')) return ICONS_2D.fiodental;
  if (t.includes('costela')) return ICONS_2D.costela;
  if (t.includes('alface') || t.includes('couve') || t.includes('espinafre') || t.includes('rucula') || t.includes('verdura')) return ICONS_2D.folhas;
  if (t.includes('beterraba') || t.includes('mandioca') || t.includes('abobora') || t.includes('pepino')) return ICONS_2D.legumes;

  return ICONS_2D.padrao;
}

// Chave do ícone para salvar no banco
function detectarChaveIcone(nomeProduto) {
  if (!nomeProduto) return 'padrao';
  const t = nomeProduto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (t.includes('fio dental')) return 'fiodental';
  if (t.includes('costela')) return 'costela';
  if (t.includes('alface') || t.includes('couve') || t.includes('espinafre') || t.includes('rucula') || t.includes('verdura')) return 'folhas';
  if (t.includes('achocolatado') || t.includes('toddy') || t.includes('tody') || t.includes('nescau') || t.includes('cacau') || t.includes('chocolate')) return 'achocolatado';

  if (t.includes('cabelo') || t.includes('pente') || (t.includes('escova') && (t.includes('cabelo') || t.includes('raquete') || t.includes('secador') || t.includes('desembaracad')))) return 'cabelo';
  if (t.includes('escova') && (t.includes('roupa') || t.includes('lavar') || t.includes('sanitaria') || t.includes('vaso') || t.includes('limpeza'))) return 'sanitaria';
  if (t.includes('dente') || t.includes('colgate') || t.includes('pasta') || t.includes('dental') || t.includes('escova')) return 'dente';

  if (t.includes('cerveja') || t.includes('chopp') || t.includes('heineken') || t.includes('stella') || t.includes('spaten') || t.includes('corona') || t.includes('amstel') || t.includes('budweiser')) return 'cerveja';
  if (t.includes('vinho') || t.includes('espumante') || t.includes('whisky') || t.includes('vodka') || t.includes('gin ') || t.includes('cachaca') || t.includes('licor')) return 'vinho';
  if (t.includes('racao') || t.includes('petisco cao') || t.includes('petisco gato') || t.includes('whiskas') || t.includes('pedigree') || t.includes('gato') || t.includes('pet')) return 'pet';
  if (t.includes('lampada') || t.includes('pilha') || t.includes('fosforo') || t.includes('isqueiro') || t.includes('vela') || t.includes('carvao')) return 'utilidades';

  for (let chave in ICONS_2D) {
    if (chave === 'padrao') continue;
    if (t.includes(chave)) return chave;
  }
  if (t.includes('azeite')) return 'oleo';
  if (t.includes('bife') || t.includes('picanha') || t.includes('alcatra') || t.includes('costela') || t.includes('patinho') || t.includes('acem') || t.includes('lagarto') || t.includes('musculo') || t.includes('maminha')) return 'carne';
  if (t.includes('peito') || t.includes('coxa') || t.includes('galinha') || t.includes('asinha') || t.includes('sobrecoxa') || t.includes('sassami') || t.includes('moela') || t.includes('coracao')) return 'frango';
  if (t.includes('qboa') || t.includes('cloro')) return 'sanitaria';
  if (t.includes('mussarela')) return 'queijo';
  if (t.includes('beterraba') || t.includes('chuchu') || t.includes('mandioca') || t.includes('quiabo') || t.includes('abobrinha') || t.includes('berinjela') || t.includes('pimentao')) return 'legumes';
  return 'padrao';
}
