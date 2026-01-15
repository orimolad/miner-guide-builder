import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InfoBox from "@/components/InfoBox";

interface WalletOption {
  name: string;
  description: string;
  platforms: string[];
  link: string;
  icon: string;
  beginner: boolean;
}

const wallets: WalletOption[] = [
  {
    name: "Exodus",
    description: "Beautiful, easy-to-use wallet with built-in exchange. Great for beginners.",
    platforms: ["Desktop", "Mobile", "Browser"],
    link: "https://www.exodus.com/",
    icon: "💎",
    beginner: true,
  },
  {
    name: "BlueWallet",
    description: "Bitcoin-only wallet with Lightning Network support. Simple and focused.",
    platforms: ["iOS", "Android"],
    link: "https://bluewallet.io/",
    icon: "🔵",
    beginner: true,
  },
  {
    name: "Electrum",
    description: "Lightweight, fast, and feature-rich. Popular among experienced users.",
    platforms: ["Desktop", "Android"],
    link: "https://electrum.org/",
    icon: "⚡",
    beginner: false,
  },
  {
    name: "Sparrow Wallet",
    description: "Privacy-focused desktop wallet with advanced features and hardware wallet support.",
    platforms: ["Desktop"],
    link: "https://sparrowwallet.com/",
    icon: "🐦",
    beginner: false,
  },
  {
    name: "Ledger",
    description: "Hardware wallet for maximum security. Your keys stay offline.",
    platforms: ["Hardware Device"],
    link: "https://www.ledger.com/",
    icon: "🔒",
    beginner: false,
  },
  {
    name: "Trezor",
    description: "Open-source hardware wallet. Industry-trusted security.",
    platforms: ["Hardware Device"],
    link: "https://trezor.io/",
    icon: "🛡️",
    beginner: false,
  },
];

const Wallets = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-pattern" />
      <div className="container max-w-4xl">
        <Header />

        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="btn-ripple border-border hover:bg-secondary">
              <span className="relative z-10">← Back to Setup</span>
            </Button>
          </Link>
        </div>

        <div className="card-dark p-8 md:p-10 mb-8">
          <h1 className="font-display text-3xl md:text-4xl text-primary mb-4 tracking-tight">
            Recommended Bitcoin Wallets
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            You'll need a Bitcoin wallet to receive your mining rewards. Here are some trusted options.
          </p>

          <InfoBox variant="info">
            <strong className="text-foreground">💡 What you need:</strong>
            <br />
            For mining, you need a Bitcoin <strong>receiving address</strong> (starts with bc1, 1, or 3). 
            Any wallet below will give you one. Copy your address and paste it into your miner's configuration.
          </InfoBox>
        </div>

        <div className="mb-6">
          <h2 className="font-display text-xl text-primary mb-4">🌟 Best for Beginners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {wallets
              .filter((w) => w.beginner)
              .map((wallet) => (
                <Card key={wallet.name} className="card-dark border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <span className="text-2xl">{wallet.icon}</span>
                      {wallet.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {wallet.platforms.join(" • ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{wallet.description}</p>
                    <a href={wallet.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="btn-ripple">
                        Visit Website →
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-display text-xl text-primary mb-4">🔧 Advanced Options</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {wallets
              .filter((w) => !w.beginner)
              .map((wallet) => (
                <Card key={wallet.name} className="card-dark border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <span className="text-2xl">{wallet.icon}</span>
                      {wallet.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {wallet.platforms.join(" • ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{wallet.description}</p>
                    <a href={wallet.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="btn-ripple">
                        Visit Website →
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <InfoBox variant="warning">
          <strong className="text-foreground">⚠️ Security Tips:</strong>
          <br />
          • Never share your seed phrase or private keys with anyone
          <br />
          • Write down your backup phrase and store it safely offline
          <br />
          • For large amounts, consider a hardware wallet
          <br />
          • Only download wallets from official sources
        </InfoBox>
      </div>
    </div>
  );
};

export default Wallets;
