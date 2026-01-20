import { ExternalLink, Shield, CreditCard, Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

interface Wallet {
  id: string;
  name: string;
  description: string;
  features: string[];
  productLink: string;
  icon: "shield" | "card";
}

const wallets: Wallet[] = [
  {
    id: "tangem",
    name: "Stealth Tangem Wallet",
    description: "Ultimate privacy with NFC-based cold storage",
    features: ["Card-sized design", "No battery needed", "Tap to sign transactions"],
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-stealth-tangem-wallets-for-ultimate-privacy",
    icon: "card",
  },
  {
    id: "ledger",
    name: "Ledger Nano X",
    description: "Industry-leading security with Bluetooth connectivity",
    features: ["Bluetooth enabled", "100+ crypto support", "Secure Element chip"],
    productLink: "https://bitcoinmerch.com/products/ledger-nano-x-hardware-wallet",
    icon: "shield",
  },
];

interface WalletRecommendationsSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletRecommendationsSheet = ({ isOpen, onOpenChange }: WalletRecommendationsSheetProps) => {
  const handleViewProduct = (link: string) => {
    window.open(link, '_blank');
  };

  const IconComponent = ({ type }: { type: "shield" | "card" }) => {
    if (type === "shield") {
      return <Shield className="w-8 h-8 text-primary" />;
    }
    return <CreditCard className="w-8 h-8 text-primary" />;
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-2xl max-h-[85vh] overflow-y-auto border-t border-border bg-background">
        <SheetHeader className="text-left">
          <SheetTitle className="text-2xl font-display text-primary">
            Recommended Hardware Wallets
          </SheetTitle>
          <SheetDescription>
            Secure your Bitcoin with a trusted hardware wallet
          </SheetDescription>
        </SheetHeader>

        <div className="my-6 space-y-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className="bg-secondary/30 rounded-xl p-4 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent type={wallet.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {wallet.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {wallet.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {wallet.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleViewProduct(wallet.productLink)}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Product
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground pb-4 safe-area-bottom">
          All wallets available at BitcoinMerch.com
        </p>
      </SheetContent>
    </Sheet>
  );
};

export default WalletRecommendationsSheet;
