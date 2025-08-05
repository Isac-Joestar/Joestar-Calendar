---

# 📆 **Joestar Calendar — MVP Roadmap**

Aplicação de agendamento online para profissionais autônomos.

## 🔰 1. Estratégia e Planejamento

- [x] Definir objetivo (agenda online para autônomos)
- [x] Escolher nicho inicial (ex: barbearias ou clínicas)
- [x] Mapear personas (ex: dono de barbearia, cliente final)
- [x] Levantar funcionalidades mínimas do MVP
- [x] Escolher stack: `Next.js`, `Node.js`, `TypeScript`, `Prisma`, `MongoDB`, `Zod`, `Jest`, `ESLint`, `Prettier`, `Husky`, `Docker`, `GitHub Actions`
- [x] Criar repositório GitHub
- [x] Modelar banco (usuários, clientes, agendamentos)

---

## 🧱 2. Infraestrutura e Qualidade

- [x] Configurar Docker com MongoDB + App
- [x] Estrutura inicial (monorepo Next.js API Routes + Front)
- [x] Configurar ESLint, Prettier e Husky (padrão de código)
- [x] Configurar variáveis de ambiente
- [x] Integrar Prisma com MongoDB Atlas
- [x] CI com GitHub Actions
- [x] Cobertura com Jest + Testes de API

---

## 🎨 3. Interface do Usuário (Front-end)

- [x] Base com `Next.js + TypeScript`
- [ ] Landing page pública
- [ ] Página de Login/Registro
- [ ] Dashboard com calendário (`FullCalendar`)
- [ ] Formulário de agendamento
- [ ] Listagem de agendamentos
- [ ] Página de perfil do profissional
- [ ] Integração com back-end via API
- [x] Validação com `Zod` + mensagens amigáveis

---

## ⚙️ 4. API e Lógica de Negócio (Back-end)

- [x] Base com `Next.js API Routes` (ou Express se preferir separação)
- [x] Criptografia com `bcrypt`
- [x] Autenticação com `JWT`
- [ ] Middleware de rotas protegidas (ex: `withAuth`)
- [ ] CRUD: Usuário / Agendamentos / Clientes
- [ ] Validação com `Zod` no back-end
- [ ] Tratamento global de erros

---

## 🔐 5. Segurança

- [x] Criptografia de senha com `bcrypt`
- [ ] Cookies HTTP-only e Secure
- [ ] Rate limiting básico para evitar spam
- [ ] Verificação de input malicioso

---

## 💌 6. Comunicação

- [ ] Configurar `Nodemailer` com Gmail ou Resend
- [ ] Enviar e-mail de confirmação após agendamento
- [ ] (Opcional) CRON de lembrete antes do horário marcado

---

## 🖼️ 7. Upload de Avatar (Profissional)

- [ ] Integração com `Cloudinary` ou `UploadThing`
- [ ] Permitir upload de imagem no perfil
- [ ] Salvar URL no MongoDB via Prisma

---

## 🚀 8. Deploy e Validação

- [ ] Deploy front-end com `Vercel`
- [ ] Deploy back-end com `Render` ou `Railway`
- [ ] MongoDB Atlas configurado com acesso seguro
- [ ] Teste com usuário real (beta)
- [ ] Coletar feedback qualitativo (tipo Google Forms)

---

## 🖼️ 9. Portfólio e Divulgação

- [ ] Criar README.md explicativo
- [ ] Adicionar ao portfólio
- [ ] Prints + vídeo de navegação no sistema
- [ ] Disponibilizar link online para teste (com demo login)

---

## 🌱 10. Evolução Pós-MVP (V2)

- [ ] Multiusuários (vários profissionais por conta)
- [ ] Estatísticas (agendamentos por semana, cancelamentos etc.)
- [ ] Notificações via WhatsApp (usando Twilio) ou e-mail
- [ ] Integração com `Stripe` (pagamentos agendados)
- [ ] App mobile com `React Native` + Firebase Auth

---
