import { useState } from "react";
import { Miner, BitaxeVariant, bitaxeVariants, NerdqaxeVariant, nerdqaxeVariants } from "@/data/miners";
import InfoBox from "../InfoBox";
import CheckList from "../CheckList";
import MinerSpecsSheet from "../MinerSpecsSheet";
import WalletRecommendationsSheet from "../WalletRecommendationsSheet";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

interface WelcomeStepProps {
  miner: Miner;
  selectedVariant?: BitaxeVariant | NerdqaxeVariant;
  onVariantChange?: (variant: BitaxeVariant | NerdqaxeVariant) => void;
  btcAddress: string;
  onBtcAddressChange: (address: string) => void;
}

const WelcomeStep = ({
  miner,
  selectedVariant,
  onVariantChange,
  btcAddress,
  onBtcAddressChange,
}: WelcomeStepProps) => {
  const [isSpecsSheetOpen, setIsSpecsSheetOpen] = useState(false);
  const [isWalletSheetOpen, setIsWalletSheetOpen] = useState(false);
  
  const isBitaxe = miner.hasBitaxeVariants;
  const isNerdqaxe = miner.hasNerdqaxeVariants;
  const hasVariants = isBitaxe || isNerdqaxe;

  const handleVariantChange = (variantId: string) => {
    if (isBitaxe) {
      const variant = bitaxeVariants.find((v) => v.id === variantId);
      if (variant && onVariantChange) {
        onVariantChange(variant);
      }
    } else if (isNerdqaxe) {
      const variant = nerdqaxeVariants.find((v) => v.id === variantId);
      if (variant && onVariantChange) {
        onVariantChange(variant);
      }
    }
  };

  const handleAddressChange = (value: string) => {
    onBtcAddressChange(value);
    localStorage.setItem("btcAddress", value);
  };

  // Get the appropriate variants array
  const variants = isBitaxe ? bitaxeVariants : isNerdqaxe ? nerdqaxeVariants : [];

  // Get display specs based on whether it has variants or is a regular miner
  const displayHashrate = hasVariants && selectedVariant ? selectedVariant.hashrate : miner.hashrate;
  const displayPower = hasVariants && selectedVariant ? selectedVariant.power : miner.power;
  const displayProductLink = hasVariants && selectedVariant ? selectedVariant.productLink : miner.productLink;
  const displayName = isBitaxe && selectedVariant 
    ? `Bitaxe ${selectedVariant.name}` 
    : isNerdqaxe && selectedVariant 
      ? selectedVariant.name 
      : miner.name;

  // Get the title based on miner type
  const getTitle = () => {
    if (isBitaxe) return "Bitaxe";
    if (isNerdqaxe) return "Nerdaxe";
    if (miner.id === "goldnugget") return "Nerd Miner";
    return miner.name;
  };

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl text-primary mb-5 tracking-tight">
        Let's Get Your {getTitle()} Mining!
      </h2>
      <div className="text-lg leading-relaxed text-muted-foreground">
        <p className="mb-4">This guide will walk you through every step of setting up your miner. We'll cover:</p>

        <CheckList
          items={
            miner.id === "goldnugget"
              ? [
                  "Powering up your device",
                  "Configuring your wallet and mining pool",
                  "Connecting to Wi-Fi",
                  "Verifying everything is working correctly",
                  "Understanding solo mining",
                ]
              : [
                  "Powering up your device",
                  "Connecting to Wi-Fi",
                  "Configuring your wallet and mining pool",
                  "Verifying everything is working correctly",
                  "Understanding solo mining",
                ]
          }
        />

        {/* Model Selection for variants */}
        {hasVariants && (
          <div className="my-8">
            <Label htmlFor="minerModel" className="text-primary font-semibold text-base mb-3 block">
              Select your {isBitaxe ? "Bitaxe" : "Nerdaxe"} Model:
            </Label>
            <Select
              value={selectedVariant?.id || ""}
              onValueChange={handleVariantChange}
            >
              <SelectTrigger className="w-full max-w-xs bg-secondary/50 border-border">
                <SelectValue placeholder="Choose your model..." />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {variants.map((variant) => (
                  <SelectItem key={variant.id} value={variant.id}>
                    {variant.name} {variant.hashrate}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div
          onClick={() => (!hasVariants || selectedVariant) && setIsSpecsSheetOpen(true)}
          className={cn(
            "border-l-4 border-l-accent bg-accent/10 p-4 rounded-r-lg my-4",
            (!hasVariants || selectedVariant) && "cursor-pointer hover:bg-accent/20 transition-colors"
          )}
        >
          <strong className="text-foreground">📊 Your Miner Specs:</strong>
          <br />
          {hasVariants && !selectedVariant ? (
            <span className="text-muted-foreground italic">Select a model above to see specs</span>
          ) : (
            <>
              Hash Rate: {displayHashrate}
              <br />
              Power: {displayPower}
              <br />
              <span className="text-primary">View Detailed Specs →</span>
            </>
          )}
        </div>

        <MinerSpecsSheet
          miner={miner}
          selectedVariant={selectedVariant}
          isOpen={isSpecsSheetOpen}
          onOpenChange={setIsSpecsSheetOpen}
        />

        <WalletRecommendationsSheet
          isOpen={isWalletSheetOpen}
          onOpenChange={setIsWalletSheetOpen}
        />

        {/* What You'll Need Section */}
        <h3 className="text-primary font-display text-xl mt-8 mb-4">🛠 What You'll Need:</h3>
        <CheckList
          items={[
            "AC Power Outlet",
            "WiFi network with internet access",
            "Mobile phone, tablet, or PC for initial configuration",
            'Your Bitcoin wallet address - It is easiest if you have your BTC address copied and pasted in the field below before starting setup.',
          ]}
        />

        <p className="mt-4 mb-2">
          <span 
            onClick={() => setIsWalletSheetOpen(true)}
            className="text-primary hover:underline cursor-pointer"
          >
            Check out our recommended wallets if you don't have one yet! →
          </span>
        </p>

        {/* BTC Address Input */}
        <div className="my-6">
          <Label htmlFor="welcomeBtcAddress" className="text-primary font-semibold text-base mb-2 block">
            Enter your Bitcoin Address here for easy reference later:
          </Label>
          <Input
            id="welcomeBtcAddress"
            type="text"
            value={btcAddress}
            onChange={(e) => handleAddressChange(e.target.value)}
            placeholder="bc1q... (your Bitcoin address)"
            className="bg-secondary/50 border-border focus:border-primary focus:ring-primary"
          />
        </div>

        <p className="mt-6 text-xl font-semibold text-foreground">Ready? Let's begin!</p>
      </div>
    </div>
  );
};

export default WelcomeStep;