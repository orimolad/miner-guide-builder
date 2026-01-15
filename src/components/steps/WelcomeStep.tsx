import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Miner, BitaxeVariant, bitaxeVariants } from "@/data/miners";
import InfoBox from "../InfoBox";
import CheckList from "../CheckList";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface WelcomeStepProps {
  miner: Miner;
  selectedVariant?: BitaxeVariant;
  onVariantChange?: (variant: BitaxeVariant) => void;
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
  const isBitaxe = miner.hasBitaxeVariants;

  const handleVariantChange = (variantId: string) => {
    const variant = bitaxeVariants.find((v) => v.id === variantId);
    if (variant && onVariantChange) {
      onVariantChange(variant);
    }
  };

  const handleAddressChange = (value: string) => {
    onBtcAddressChange(value);
    localStorage.setItem("btcAddress", value);
  };

  // Get display specs based on whether it's Bitaxe with variant or regular miner
  const displayHashrate = isBitaxe && selectedVariant ? selectedVariant.hashrate : miner.hashrate;
  const displayPower = isBitaxe && selectedVariant ? selectedVariant.power : miner.power;
  const displayProductLink = isBitaxe && selectedVariant ? selectedVariant.productLink : miner.productLink;
  const displayName = isBitaxe && selectedVariant ? `Bitaxe ${selectedVariant.name}` : miner.name;

  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl text-primary mb-5 tracking-tight">
        Let's Get Your {isBitaxe ? "Bitaxe" : miner.name} Mining!
      </h2>
      <div className="text-lg leading-relaxed text-muted-foreground">
        <p className="mb-4">This guide will walk you through every step of setting up your miner. We'll cover:</p>

        <CheckList
          items={[
            "Powering up your device",
            "Connecting to Wi-Fi",
            "Configuring your wallet and mining pool",
            "Verifying everything is working correctly",
            "Understanding solo mining",
          ]}
        />

        {/* Bitaxe Model Selection */}
        {isBitaxe && (
          <div className="my-8">
            <Label htmlFor="bitaxeModel" className="text-primary font-semibold text-base mb-3 block">
              Select your Bitaxe Model:
            </Label>
            <Select
              value={selectedVariant?.id || ""}
              onValueChange={handleVariantChange}
            >
              <SelectTrigger className="w-full max-w-xs bg-secondary/50 border-border">
                <SelectValue placeholder="Choose your model..." />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {bitaxeVariants.map((variant) => (
                  <SelectItem key={variant.id} value={variant.id}>
                    {variant.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <InfoBox variant="info">
          <strong className="text-foreground">📊 Your Miner Specs:</strong>
          <br />
          {isBitaxe && !selectedVariant ? (
            <span className="text-muted-foreground italic">Select a model above to see specs</span>
          ) : (
            <>
              Hash Rate: {displayHashrate}
              <br />
              Power: {displayPower}
              <br />
              <a
                href={displayProductLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Product Page →
              </a>
            </>
          )}
        </InfoBox>

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
          <Link to="/wallets" className="text-primary hover:underline">
            Check out our recommended wallets if you don't have one yet! →
          </Link>
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
