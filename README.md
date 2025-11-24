# My Training PWA

## Como rodar (desenvolvimento)
1. Instale dependências:
   ```
   npm install
   ```
2. Rode o app:
   ```
   npm run dev
   ```
3. Abra no navegador (por padrão http://localhost:5173)

## Build para produção
```
npm run build
npm run preview
```

## O que já está pronto
- Lista de treinos (src/data/treinos.json)
- Tela de treino com timer por exercício
- Service Worker básico
- Manifest para PWA
- Ícones placeholder

## Próximos passos que posso implementar:
- Sincronização automática com Google Sheets (API + credenciais)
- Autenticação de usuário e histórico no Firestore
- Exportar/Compartilhar via WhatsApp (n8n)
- Dark mode, beeps no timer, imagens/vídeos por exercício
