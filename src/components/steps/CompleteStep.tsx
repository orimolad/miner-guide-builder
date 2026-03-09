import { Miner, BitaxeVariant, NerdqaxeVariant, NerdminerVariant } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";
import { Button } from "../ui/button";

interface CompleteStepProps {
  miner: Miner;
  btcAddress: string;
  selectedVariant?: BitaxeVariant | NerdqaxeVariant | NerdminerVariant;
  onBackToSelection: () => void;
}

const CompleteStep = ({ miner, btcAddress, selectedVariant, onBackToSelection }: CompleteStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";
  const isNerdminer = miner.id === "nerdminer";

  const getDeviceName = (): string => {
    if (isNerdminer && selectedVariant) {
      return selectedVariant.id === "large-screen" ? "Nerd Miner Large Screen" : "Nerd Miner";
    }
    if (isBitaxe && selectedVariant) return `Bitaxe ${selectedVariant.name}`;
    if (isNerdqaxe && selectedVariant) return selectedVariant.name;
    return miner.name;
  };

  const getHashrate = (): string => {
    if (isNerdminer && selectedVariant) {
      return selectedVariant.id === "large-screen" ? "~250KH/s" : "~75 KH/s";
    }
    if ((isBitaxe || isNerdqaxe) && selectedVariant) {
      return `~${selectedVariant.hashrate}`;
    }
    return miner.hashrate;
  };

  const getCongratulationsText = (): string => {
    if (isNerdminer) return "Your Nerd Miner is now mining for Bitcoin!";
    return `Your ${getDeviceName()} is now mining Bitcoin!`;
  };

  const getNextSteps = (): string[] => {
    if (isNerdminer) {
      return [
        "Monitor your stats regularly on the pool dashboard",
        "Join the Bitcoin Merch community for tips",
      ];
    }
    return [
      "Monitor your stats regularly on the pool dashboard",
      "Keep your miner in a well-ventilated area",
      "Join the Bitcoin Merch community for tips",
    ];
  };

  const openPoolStats = () => {
    const address = btcAddress || "YOUR_BTC_ADDRESS";
    window.open(`https://pool.bitcoinmerch.com/app/${address}`, "_blank");
  };

  return (
    <StepContainer stepNumber="✓" title="Setup Complete! 🎉">
      <InfoBox variant="success">
        <strong className="text-foreground">Congratulations!</strong> {getCongratulationsText()}
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Quick Reference:</h3>
      <CodeBlock>
        <strong>Your Miner:</strong> {getDeviceName()}
        <br />
        <strong>Hash Rate:</strong> {getHashrate()}
        <br />
        <strong>Pool Stats:</strong> https://pool.bitcoinmerch.com/app/{btcAddress || "YOUR_ADDRESS"}
      </CodeBlock>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Next Steps:</h3>
      <CheckList items={getNextSteps()} />

      <div className="flex flex-wrap gap-4 mt-10">
        <Button onClick={openPoolStats} className="gradient-primary text-primary-foreground glow-primary btn-ripple">
          <span className="relative z-10">📊 View Pool Stats</span>
        </Button>
        <a href="https://bitcoinmerch.com/pages/contact-us" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="btn-ripple border-border hover:bg-secondary">
            <span className="relative z-10">💬 Get Support</span>
          </Button>
        </a>
        <Button
          variant="outline"
          onClick={onBackToSelection}
          className="btn-ripple border-border hover:bg-secondary"
        >
          <span className="relative z-10">🔄 Setup Another Miner</span>
        </Button>
      </div>

      <InfoBox variant="info" className="mt-10 text-center">
        <strong className="text-foreground">Happy Mining! ⛏️</strong>
        <br />
        May the odds be ever in your favor! 🍀
      </InfoBox>
    </StepContainer>
  );
};

export default CompleteStep;
