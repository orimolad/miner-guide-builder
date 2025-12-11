import { Miner } from "@/data/miners";
import InfoBox from "../InfoBox";
import CheckList from "../CheckList";

interface WelcomeStepProps {
  miner: Miner;
}

const WelcomeStep = ({ miner }: WelcomeStepProps) => {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl text-primary mb-5 tracking-tight">
        Let's Get Your {miner.name} Mining!
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
        
        <InfoBox variant="info">
          <strong className="text-foreground">📊 Your Miner Specs:</strong>
          <br />
          Hash Rate: {miner.hashrate}
          <br />
          Power: {miner.power}
          <br />
          <a
            href={miner.productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View Product Page →
          </a>
        </InfoBox>
        
        <p className="mt-6">Ready? Let's begin!</p>
      </div>
    </div>
  );
};

export default WelcomeStep;
