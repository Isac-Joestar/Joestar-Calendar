# 📆 Joestar Calendar — Checklist de Desenvolvimento

## 📌 Planejamento e Definição

- [x] Definir objetivo e público-alvo do sistema
- [x] Mapear funcionalidades essenciais
- [x] Escolher design system ou estilo visual base
- [ ] Criar wireframes das telas principais
- [x] Definir modelo de dados (usuários, clientes, agendamentos)

## 🛠️ Configuração do Ambiente

- [x] Criar repositório GitHub
- [x] Configurar ambiente com Docker (MongoDB + Node.js)
- [x] Estrutura inicial do projeto (monorepo ou separado)
- [x] Instalar ESLint, Prettier e Husky
- [x] Configurar variáveis de ambiente (.env)

## 🎨 Front-end (Next.js + React)

- [x] Criar estrutura base com Next.js e TypeScript
- [ ] Página de Login e Registro
- [ ] Página de Dashboard
- [ ] Página da Agenda com FullCalendar
- [ ] Página de Cadastro de Clientes
- [ ] Formulário de Novo Agendamento
- [ ] Criar componentes reutilizáveis
- [ ] Validação de formulários
- [ ] Integração com API

## ⚙️ Back-end (Node.js + Express)

- [ ] Criar estrutura base com Express e TypeScript
- [ ] Conectar com banco de dados (MongoDB via Prisma)
- [x] Rotas de autenticação (login/registro)
- [ ] Rotas de agendamentos (CRUD)
- [ ] Rotas de clientes (CRUD)
- [ ] Middleware de autenticação (JWT)
- [ ] Tratamento de erros e respostas padronizadas

## 🔐 Autenticação e Segurança

- [x] Implementar login com JWT
- [ ] Proteger rotas com middleware
- [x] Criptografar senhas com bcrypt
- [ ] Configurar cookie HTTP-only (Next.js)

## 📩 E-mails com Nodemailer

- [ ] Configurar serviço gratuito (ex: Gmail)
- [ ] Criar template de e-mail (HTML básico)
- [ ] Enviar e-mails de confirmação de agendamento
- [ ] (Opcional) Implementar lembrete por e-mail via CRON

## ☁️ Upload de Imagem (Cloudinary)

- [ ] Criar conta gratuita no Cloudinary
- [ ] Implementar upload de imagem de perfil/cliente
- [ ] Armazenar URL no banco de dados

## 🚀 Deploy

- [ ] Deploy do front-end no Vercel
- [ ] Deploy do back-end no Render ou Railway (free tier)
- [ ] Usar MongoDB Atlas (free tier)
- [ ] Configurar variáveis de ambiente no deploy
- [ ] Testar funcionalidades em produção

## 📋 Documentação e Portfólio

- [x] Criar README.md completo no GitHub
- [x] Criar seção no portfólio apresentando o projeto
- [ ] Adicionar prints ou vídeo demonstrativo
- [ ] Disponibilizar link do projeto online e do repositório

## 💡 Ideias Futuras (Extras)

- [ ] Integração com Stripe (modo teste)
- [ ] Painel administrativo com métricas
- [ ] Notificações via WhatsApp ou in-app
- [ ] Aplicativo mobile com React Native

