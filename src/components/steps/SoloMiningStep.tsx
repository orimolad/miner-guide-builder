import { Miner, BitaxeVariant, NerdqaxeVariant } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";

interface SoloMiningStepProps {
  miner: Miner;
  selectedVariant?: BitaxeVariant | NerdqaxeVariant;
  stepNumber?: number;
}

const SoloMiningStep = ({ miner, selectedVariant, stepNumber = 6 }: SoloMiningStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";
  const isDisruptor = miner.id === "disruptor";
  const isGoldDigger = miner.id === "golddigger";

  // Get hashrate description based on variant or miner
  const getHashrateDescription = (): string => {
    if (isGoldDigger) {
      return "~1000 KH/s (1 million hashes / second)";
    }
    if (isDisruptor) {
      return "~300 GH/s (300 billion hashes / second)";
    }
    if ((isBitaxe || isNerdqaxe) && selectedVariant) {
      const value = selectedVariant.hashrateValue;
      if (value >= 1000) {
        return `~${value / 1000} TH/s (${value / 1000} trillion hashes / second)`;
      } else {
        return `~${value} GH/s (${value} billion hashes / second)`;
      }
    }
    return miner.hashrate;
  };

  const getDeviceName = (): string => {
    if (isBitaxe && selectedVariant) {
      return `Bitaxe ${selectedVariant.name}`;
    }
    if (isNerdqaxe && selectedVariant) {
      return selectedVariant.name;
    }
    return miner.name;
  };

  return (
    <StepContainer stepNumber={stepNumber} title="Understanding the Solo Mining Lottery">
      <div className="text-center py-10 my-8 bg-card/30 rounded-2xl border-2 border-dashed border-primary/30">
        <div className="text-6xl mb-5">🎰</div>
        <h3 className="text-primary font-display text-xl">Solo Mining = Lottery Tickets</h3>
      </div>

      <p className="mb-6">Solo mining works differently than pool mining. Here's what you need to know:</p>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">How It Works:</h3>
      <InfoBox variant="info">
        <strong className="text-foreground">Every hash your miner computes is like a lottery ticket:</strong>
        <br />
        <br />• Your {getDeviceName()} generates {getHashrateDescription()}
        <br />
        • Each hash is a chance to find a valid block
        <br />
        • If you find a block, you get the FULL block reward (<strong>3.125 BTC PLUS transaction fees</strong>) sent
        directly to your wallet!
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Key Differences from Pool Mining:</h3>
      <CheckList
        items={[
          "<strong>All or Nothing:</strong> No partial rewards until you find a block",
          "<strong>More Tickets = Better Odds:</strong> Higher hash rate increases your chances",
          "<strong>Full Reward:</strong> If you win, the entire block reward is yours",
        ]}
      />

      <InfoBox variant="warning">
        <strong className="text-foreground">⚠️ Realistic Expectations:</strong>
        <br />
        Finding a block with consumer mining hardware is unlikely but possible. Think of it as a fun hobby with a
        chance of a massive reward, rather than a reliable income source.
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Your Mining is Helping:</h3>
      <p className="mb-4">Even without finding blocks, your miner:</p>
      <CheckList
        items={[
          "Contributes to Bitcoin network security",
          "Decentralizes mining",
          "Gives you hands-on experience with Bitcoin mining",
          "Takes blocks from corporate mining pools and puts freshly created BTC into the hands of the people",
          "Might just get lucky! 🍀",
        ]}
      />
    </StepContainer>
  );
};

export default SoloMiningStep;
