#!/usr/bin/env bash
# One-time setup script for the Hostinger VPS.
# Run this manually on the VPS as the deploy user (NOT root) before the first GitHub Actions deploy.
#
# Usage:
#   ssh user@your-vps
#   curl -fsSL https://raw.githubusercontent.com/<your-org>/<your-repo>/main/deploy/setup-vps.sh | bash
#
# Or copy it manually and run: bash setup-vps.sh

set -euo pipefail

echo "==> Installing nvm + Node.js 20 LTS"
if [ ! -d "$HOME/.nvm" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"
nvm install 20
nvm alias default 20

echo "==> Installing PM2 globally"
npm install -g pm2

echo "==> Configuring PM2 to start on boot"
pm2 startup systemd -u "$USER" --hp "$HOME" | tail -n 1 | sudo bash || true

echo "==> Done."
echo "Next steps:"
echo "  1. Add your SSH public key to GitHub Deploy Keys (read access to the repo)."
echo "  2. Add the matching private key + host info to GitHub repo Secrets (see deploy/README.md)."
echo "  3. Configure Nginx as a reverse proxy from port 80/443 to the app PORT (default 3000)."
echo "  4. Push to main — GitHub Actions will deploy automatically."