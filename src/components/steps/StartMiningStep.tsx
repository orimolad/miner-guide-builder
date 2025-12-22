import { useState, useEffect } from "react";
import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

// Instruction images
import poolScreenshotImg from "@/assets/instructions/pool-screenshot.png";

interface StartMiningStepProps {
  miner: Miner;
}

const StartMiningStep = ({ miner }: StartMiningStepProps) => {
  const [btcAddress, setBtcAddress] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("btcAddress");
    if (saved) {
      setBtcAddress(saved);
    }
  }, []);

  const openPoolStats = () => {
    const address = btcAddress || "YOUR_BTC_ADDRESS";
    window.open(`https://pool.bitcoinmerch.com/app/${address}`, "_blank");
  };

  return (
    <StepContainer stepNumber={5} title="Start Mining & Verify Operation">
      <p className="mb-4">Your miner should now be hashing! Let's verify everything is working correctly.</p>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">On Your Device:</h3>
      <CheckList
        items={[
          "Check the miner's screen or web interface",
          `Look for a hash rate displaying: ${miner.hashrate}`,
          'Status should show "Mining" or "Connected"',
          "Accepted shares should start appearing (may take 1-5 minutes)",
        ]}
      />

      <InfoBox variant="success">
        <strong className="text-foreground">✅ Good Signs:</strong>
        <br />
        • Hash rate matches expected specs (±10%)
        <br />
        • Shares being accepted by the pool
        <br />
        • Temperature stable (usually 40-70°C)
        <br />• No error messages
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Check Pool Statistics:</h3>
      <p className="mb-4">Verify your miner is showing up on the pool:</p>

      <div className="my-6">
        <Label htmlFor="poolBtcAddress" className="text-primary font-semibold text-base mb-2 block">
          Your Bitcoin Address (from previous step):
        </Label>
        <Input
          id="poolBtcAddress"
          type="text"
          value={btcAddress}
          onChange={(e) => setBtcAddress(e.target.value)}
          placeholder="bc1q... (your Bitcoin address)"
          className="bg-secondary/50 border-border focus:border-primary focus:ring-primary"
        />
      </div>

      <Button onClick={openPoolStats} className="gradient-primary text-primary-foreground glow-primary btn-ripple mt-4">
        <span className="relative z-10">📊 View My Pool Stats</span>
      </Button>

      {(miner.id === "disruptor" || miner.id === "bitaxe") && (
        <div className="my-6 flex justify-center">
          <div className="max-w-3xl">
            <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
              <img src={poolScreenshotImg} alt="Pool dashboard showing hashrate and workers" className="w-full" />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Example pool dashboard showing your total hashrate and connected workers
            </p>
          </div>
        </div>
      )}

      <InfoBox variant="warning" className="mt-8">
        <strong className="text-foreground">⚠️ Pool showing zero hash rate?</strong>
        <br />
        • Wait 5 minutes for data to sync
        <br />
        • Double-check your Bitcoin address matches
        <br />
        • Verify pool URL is correct
        <br />• Make sure the miner shows it's connected
      </InfoBox>
    </StepContainer>
  );
};

export default StartMiningStep;
