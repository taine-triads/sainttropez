# Deploy para Hostinger VPS via GitHub Actions

Este projeto continua usando TanStack Start com SSR. O deploy roda automaticamente
via GitHub Actions sempre que houver `git push` na branch `main`.

## Pré-requisitos

- VPS da Hostinger com Ubuntu/Debian
- Domínio apontado para o IP do VPS (registro A na Hostinger)
- Repositório do projeto no GitHub conectado via integração do Lovable

---

## 1. Configuração inicial do VPS (uma vez só)

### 1.1 Conectar via SSH
```bash
ssh root@SEU_IP_DO_VPS
```

### 1.2 Criar usuário de deploy (não use root)
```bash
adduser deploy
usermod -aG sudo deploy
su - deploy
```

### 1.3 Rodar o script de setup
```bash
curl -fsSL https://raw.githubusercontent.com/<SEU_USUARIO>/<SEU_REPO>/main/deploy/setup-vps.sh | bash
```
Isso instala Node.js 20, PM2 e configura o PM2 para iniciar no boot.

### 1.4 Gerar chave SSH para o GitHub Actions
No VPS, como usuário `deploy`:
```bash
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_deploy -N ""
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
cat ~/.ssh/github_deploy   # copie esse conteúdo (chave privada)
```

### 1.5 Adicionar deploy key no GitHub
No GitHub: **Settings → Deploy keys → Add deploy key**
- Cole o conteúdo de `~/.ssh/github_deploy.pub` (chave pública)
- ✅ Allow write access **NÃO** marcar (read-only basta)

---

## 2. Configurar secrets no GitHub

No GitHub: **Settings → Secrets and variables → Actions → New repository secret**

| Secret | Valor |
|---|---|
| `HOSTINGER_HOST` | IP ou domínio do VPS (ex: `123.45.67.89`) |
| `HOSTINGER_USER` | `deploy` |
| `HOSTINGER_SSH_PORT` | `22` (ou a porta que você configurou) |
| `HOSTINGER_SSH_KEY` | Conteúdo da **chave privada** (`~/.ssh/github_deploy`) |
| `HOSTINGER_APP_DIR` | `/home/deploy/app` |
| `HOSTINGER_REPO_URL` | URL SSH do repo, ex: `git@github.com:usuario/repo.git` |

---

## 3. Configurar Nginx + HTTPS

No VPS:
```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
sudo cp /home/deploy/app/deploy/nginx.conf.example /etc/nginx/sites-available/lovable-app
sudo nano /etc/nginx/sites-available/lovable-app  # trocar "seudominio.com"
sudo ln -s /etc/nginx/sites-available/lovable-app /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d seudominio.com -d www.seudominio.com
```

---

## 4. Primeiro deploy

Faça qualquer commit e dê push em `main`. O workflow `.github/workflows/deploy-hostinger.yml`:
1. Conecta no VPS via SSH
2. Faz `git pull` no `HOSTINGER_APP_DIR`
3. Roda `npm ci && npm run build`
4. Reinicia o app com PM2 (`ecosystem.config.cjs`)

Acompanhe na aba **Actions** do GitHub.

---

## 5. Variáveis de ambiente em produção

Crie `/home/deploy/app/.env` no VPS com as variáveis necessárias (chaves de API,
URL do banco, etc). O PM2 carrega automaticamente via `dotenv` se você adicionar
`require('dotenv').config()`, ou defina-as direto no `ecosystem.config.cjs` em `env`.

---

## 6. Comandos úteis no VPS

```bash
pm2 status              # status do app
pm2 logs lovable-app    # ver logs em tempo real
pm2 restart lovable-app # reiniciar manualmente
pm2 monit               # monitor interativo
```

---

## ⚠️ Importante sobre o Lovable

- Continue editando normalmente pelo Lovable. As mudanças sincronizam para o GitHub
  e disparam o deploy automaticamente.
- O preview do Lovable continua funcionando porque **não alteramos o build padrão**.
- O build da Hostinger gera `.output/server/index.mjs` (server Node) — o Lovable
  usa o build de Cloudflare em paralelo, sem conflito.