import { useState } from "react";
import { ExternalLink, Cpu, Zap, Volume2, Monitor, Power } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Miner, BitaxeVariant, NerdqaxeVariant, NerdminerVariant } from "@/data/miners";

interface MinerSpecsSheetProps {
  miner: Miner;
  selectedVariant?: BitaxeVariant | NerdqaxeVariant | NerdminerVariant;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MinerSpecsSheet = ({ miner, selectedVariant, isOpen, onOpenChange }: MinerSpecsSheetProps) => {
  const [imageError, setImageError] = useState(false);
  const isBitaxe = miner.hasBitaxeVariants;
  const isNerdqaxe = miner.hasNerdqaxeVariants;
  const isNerdminer = miner.hasNerdminerVariants;
  const hasVariants = isBitaxe || isNerdqaxe || isNerdminer;

  // Derive display values
  const displayName = isBitaxe && selectedVariant 
    ? `Bitaxe ${selectedVariant.name}` 
    : isNerdqaxe && selectedVariant 
      ? selectedVariant.name 
      : isNerdminer && selectedVariant
        ? selectedVariant.id === "large-screen" ? "Nerd Miner Large Screen" : "Nerd Miner"
        : miner.name;
  
  const displayHashrate = hasVariants && selectedVariant ? selectedVariant.hashrate : miner.hashrate;
  const displayPower = hasVariants && selectedVariant ? selectedVariant.power : miner.power;
  const displayProductLink = hasVariants && selectedVariant ? selectedVariant.productLink : miner.productLink;

  // Derived specs
  const powerSource = miner.isUsbPowered ? "USB Powered" : "External Power Supply";
  const hasDisplay = miner.hasDisplay ? "Built-in Display" : "No Display";
  const noiseLevel = miner.isUsbPowered ? "Silent (0dB)" : "Low Noise";

  const handleBuyClick = () => {
    window.open(displayProductLink, '_blank');
  };

  const specs = [
    { icon: Cpu, label: "Algorithm", value: "SHA-256" },
    { icon: Zap, label: "Hashrate", value: displayHashrate },
    { icon: Power, label: "Power", value: displayPower },
    { icon: Zap, label: "Power Source", value: powerSource },
    { icon: Monitor, label: "Display", value: hasDisplay },
    { icon: Volume2, label: "Noise Level", value: noiseLevel },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-2xl max-h-[85vh] overflow-y-auto border-t border-border bg-background">
        <SheetHeader className="text-left">
          <SheetTitle className="text-2xl font-display text-primary">
            {displayName} Specs
          </SheetTitle>
          <SheetDescription>
            Technical specifications for your miner
          </SheetDescription>
        </SheetHeader>

        {/* Miner Image */}
        <div className="my-6 flex justify-center">
          <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10 bg-secondary/50 flex items-center justify-center">
            {imageError ? (
              <Cpu className="w-20 h-20 text-muted-foreground" />
            ) : (
              <img 
                src={miner.image} 
                alt={displayName} 
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 my-6">
          {specs.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-secondary/30 rounded-lg p-3 border border-border">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Icon className="w-4 h-4" />
                {label}
              </div>
              <div className="text-foreground font-semibold text-sm">{value}</div>
            </div>
          ))}
        </div>

        <SheetFooter className="mt-6 pb-4 safe-area-bottom">
          <Button
            onClick={handleBuyClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
          >
            Buy from Official Store
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MinerSpecsSheet;
