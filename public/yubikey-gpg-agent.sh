#!/usr/bin/env bash

set -e

PUBKEY="$HOME/yubikey-arnaud.pub"
PUBKEY_URL="https://arntanguy.fr/yubikey.pub"

# 1. Ensure gnupg and curl are installed
for pkg in gnupg curl; do
    if ! command -v $pkg >/dev/null 2>&1; then
        echo "Installing $pkg..."
        sudo apt update
        sudo apt install -y $pkg
    fi
done

# 2. Download the public key if not present
if [[ ! -f "$PUBKEY" ]]; then
    echo "Downloading public key from $PUBKEY_URL..."
    curl -fsSL "$PUBKEY_URL" -o "$PUBKEY"
fi

# 3. Import the public key
echo "Importing public key from $PUBKEY..."
gpg --import "$PUBKEY"

# 4. Stop ssh-agent if running
if pgrep ssh-agent >/dev/null; then
    echo "Killing running ssh-agent..."
    pkill ssh-agent
fi

# 5. Start gpg-agent with SSH support
echo "Starting gpg-agent with SSH support..."
# enable ssh support in gpg-agent only if not already enabled
if ! grep -q '^enable-ssh-support' ~/.gnupg/gpg-agent.conf 2>/dev/null; then
  echo "enable-ssh-support" >> ~/.gnupg/gpg-agent.conf
fi
gpgconf --launch gpg-agent

# 6. Set SSH_AUTH_SOCK to GPG agent's socket
export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)
echo "SSH_AUTH_SOCK set to $SSH_AUTH_SOCK"

# 7. Prompt user to plug in YubiKey
read -p "Plug in your YubiKey and press Enter to continue..."

# 8. Show card status
gpg --card-status

# 9. List public keys
echo "Available GPG public keys:"
gpg --list-keys
echo "Available GPG secret keys:"
gpg --list-secret-keys

echo "YubiKey setup complete."
