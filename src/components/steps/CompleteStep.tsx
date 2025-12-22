import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";
import { Button } from "../ui/button";

interface CompleteStepProps {
  miner: Miner;
  onBackToSelection: () => void;
}

const CompleteStep = ({ miner, onBackToSelection }: CompleteStepProps) => {
  const isDisruptorOrBitaxe = miner.id === "disruptor" || miner.id === "bitaxe";
  
  const openPoolStats = () => {
    const address = localStorage.getItem("btcAddress") || "YOUR_BTC_ADDRESS";
    const url = isDisruptorOrBitaxe 
      ? `https://pool.bitcoinmerch.com/app/${address}`
      : `https://pool.bitcoinmerch.com/#/app/${address}`;
    window.open(url, "_blank");
  };

  return (
    <StepContainer stepNumber="✓" title="Setup Complete! 🎉">
      <InfoBox variant="success">
        <strong className="text-foreground">Congratulations!</strong> Your {miner.name} is now mining Bitcoin!
      </InfoBox>
      
      <h3 className="text-primary font-display text-xl mt-8 mb-4">Quick Reference:</h3>
      <CodeBlock>
        <strong>Your Miner:</strong> {miner.name}
        <br />
        <strong>Hash Rate:</strong> {miner.hashrate}
        <br />
        <strong>Pool:</strong> pool.bitcoinmerch.com:3333
        <br />
        <strong>Pool Stats:</strong> {isDisruptorOrBitaxe 
          ? "https://pool.bitcoinmerch.com/app/YOUR_ADDRESS"
          : "https://pool.bitcoinmerch.com/#/app/YOUR_ADDRESS"}
      </CodeBlock>
      
      <h3 className="text-primary font-display text-xl mt-8 mb-4">Next Steps:</h3>
      <CheckList
        items={[
          "Monitor your stats regularly on the pool dashboard",
          "Keep your miner in a well-ventilated area",
          ...(!isDisruptorOrBitaxe ? ["Check for firmware updates periodically"] : []),
          "Join the Bitcoin Merch community for tips",
        ]}
      />
      
      <div className="flex flex-wrap gap-4 mt-10">
        <Button
          onClick={openPoolStats}
          className="gradient-primary text-primary-foreground glow-primary btn-ripple"
        >
          <span className="relative z-10">📊 View Pool Stats</span>
        </Button>
        <a
          href="https://bitcoinmerch.com/pages/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
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
