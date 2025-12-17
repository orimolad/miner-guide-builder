import { useState, useEffect } from "react";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Miner } from "@/data/miners";
import axeosPoolSetupImg from "@/assets/instructions/axeos-pool-setup.png";

interface ConfigureStepProps {
  miner: Miner;
  onAddressChange: (address: string) => void;
}

const ConfigureStep = ({ miner, onAddressChange }: ConfigureStepProps) => {
  const showAxeosImage = ["bitaxe", "nerdqaxe", "disruptor"].includes(miner.id);
  const [btcAddress, setBtcAddress] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("btcAddress");
    if (saved) {
      setBtcAddress(saved);
    }
  }, []);

  const handleAddressChange = (value: string) => {
    setBtcAddress(value);
    onAddressChange(value);
    localStorage.setItem("btcAddress", value);
  };

  return (
    <StepContainer stepNumber={4} title="Configure Your Wallet & Mining Pool">
      <p className="mb-4">This is the most important step! You need to set up your Bitcoin address and mining pool.</p>

      <InfoBox variant="warning">
        <strong className="text-foreground">⚠️ CRITICAL: Change the Default Wallet!</strong>
        <br />
        The factory-set Bitcoin address MUST be replaced with YOUR OWN address, or you won't receive any rewards!
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Step-by-Step Configuration:</h3>

      <div className="my-6">
        <Label htmlFor="btcAddress" className="text-primary font-semibold text-base mb-2 block">
          1. Enter Your Bitcoin Address:
        </Label>
        <Input
          id="btcAddress"
          type="text"
          value={btcAddress}
          onChange={(e) => handleAddressChange(e.target.value)}
          placeholder="bc1q... (your Bitcoin address)"
          className="bg-secondary/50 border-border focus:border-primary focus:ring-primary"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Don't have a Bitcoin address? Get one from a wallet like Exodus, BlueWallet, or Electrum
        </p>
      </div>

      <h4 className="text-primary font-display text-lg mt-8 mb-4">2. Set Up Pool Connection:</h4>
      <p>In your miner's web interface, enter these pool settings:</p>

      <CodeBlock>
        <strong>Pool URL:</strong> stratum+tcp://pool.bitcoinmerch.com:3333
        <br />
        <strong>Port:</strong> 3333
        <br />
        <strong>Worker Name:</strong> (is your Bitcoin address. This is how you get paid!)
        <br />
        <strong>Password:</strong> x (or leave blank)
      </CodeBlock>

      {showAxeosImage && (
        <div className="my-6 flex justify-center">
          <div className="max-w-xl">
            <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
              <img src={axeosPoolSetupImg} alt="Pool Configuration screen in AxeOS" className="w-full" />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">AxeOS Pool Configuration screen</p>
          </div>
        </div>
      )}

      <InfoBox variant="info">
        <strong className="text-foreground">💡 Pool Format Notes:</strong>
        <br />• Some miners need the full format:{" "}
        <code className="bg-background px-1 rounded">stratum+tcp://pool.bitcoinmerch.com:3333</code>
        <br />• Others just need: <code className="bg-background px-1 rounded">pool.bitcoinmerch.com</code>
        <br />• Try the full format first, then the short format if that doesn't work
      </InfoBox>

      <h4 className="text-primary font-display text-lg mt-8 mb-4">3. Optional Backup Pool:</h4>
      <p>Configure a backup pool in case the primary goes offline:</p>
      <CodeBlock>
        <strong>Backup Pool:</strong> stratum+tcp://solo.ckpool.org:3333
      </CodeBlock>

      <h4 className="text-primary font-display text-lg mt-8 mb-4">4. Save Settings:</h4>
      <CheckList
        items={[
          'Click "Save" or "Apply" in the miner interface',
          "The miner will restart (this takes 15-30 seconds)",
          "Wait for the restart to complete",
        ]}
      />
    </StepContainer>
  );
};

export default ConfigureStep;
