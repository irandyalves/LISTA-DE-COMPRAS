Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

 pastaAtual = fso.GetParentFolderName(WScript.ScriptFullName)
WshShell.CurrentDirectory = pastaAtual

' Verifica se a porta 8000 ja esta em uso; se nao estiver, inicia o servidor Python em segundo plano (oculto)
 Sub IniciarServidorSeNecessario()
    On Error Resume Next
    Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
    http.setTimeouts 500, 500, 500, 500
    http.Open "GET", "http://localhost:8000/manifest.json", False
    http.Send
    If Err.Number <> 0 Or http.Status <> 200 Then
        WshShell.Run "cmd /c python servidor.py", 0, False
        WScript.Sleep 1200
    End If
    On Error GoTo 0
End Sub

IniciarServidorSeNecessario()

' Abre o sistema no navegador padrao
WshShell.Run "http://localhost:8000", 1, False
