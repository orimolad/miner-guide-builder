import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";

interface SoloMiningStepProps {
  miner: Miner;
}

const SoloMiningStep = ({ miner }: SoloMiningStepProps) => {
  return (
    <StepContainer stepNumber={6} title="Understanding the Solo Mining Lottery">
      <div className="text-center py-10 my-8 bg-card/30 rounded-2xl border-2 border-dashed border-primary/30">
        <div className="text-6xl mb-5">🎰</div>
        <h3 className="text-primary font-display text-xl">Solo Mining = Lottery Tickets</h3>
      </div>

      <p className="mb-6">Solo mining works differently than pool mining. Here's what you need to know:</p>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">How It Works:</h3>
      <InfoBox variant="info">
        <strong className="text-foreground">Every hash your miner computes is like a lottery ticket:</strong>
        <br />
        <br />• Your {miner.name} generates {miner.hashrate}
        <br />
        • Each hash is a chance to find a valid block
        <br />
        • If you find a block, you get the FULL block reward (~3.125 BTC + fees)
        <br />• If you don't find a block, you get nothing
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Key Differences from Pool Mining:</h3>
      <CheckList
        items={[
          "<strong>All or Nothing:</strong> No partial rewards until you find a block",
          "<strong>More Tickets = Better Odds:</strong> Higher hash rate increases your chances",
          "<strong>Still a Lottery:</strong> Even with high hash rates, finding a block is rare",
          "<strong>Full Reward:</strong> If you win, the entire block reward is yours",
        ]}
      />

      <InfoBox variant="warning">
        <strong className="text-foreground">⚠️ Realistic Expectations:</strong>
        <br />
        Finding a block with consumer mining hardware is extremely unlikely but possible. Think of it as a fun hobby
        with a tiny chance of a massive reward, rather than a reliable income source.
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Your Mining is Helping:</h3>
      <p className="mb-4">Even without finding blocks, your miner:</p>
      <CheckList
        items={[
          "Contributes to Bitcoin network security",
          "Participates in the decentralization of mining",
          "Gives you hands-on experience with Bitcoin mining",
          "Might just get lucky! 🍀",
        ]}
      />
    </StepContainer>
  );
};

export default SoloMiningStep;
