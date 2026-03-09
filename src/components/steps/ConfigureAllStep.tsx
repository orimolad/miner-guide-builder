import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Miner } from "@/data/miners";
import golddiggerPoolImg from "@/assets/instructions/golddiggerpool.png";
import goldnuggetPoolImg from "@/assets/instructions/goldnuggetpool.png";

interface ConfigureAllStepProps {
  miner: Miner;
  btcAddress: string;
  onAddressChange: (address: string) => void;
  stepNumber?: number;
}

const ConfigureAllStep = ({ miner, btcAddress, onAddressChange, stepNumber = 3 }: ConfigureAllStepProps) => {
  const isGoldNugget = miner.id === "goldnugget";

  const handleAddressChange = (value: string) => {
    onAddressChange(value);
    localStorage.setItem("btcAddress", value);
  };

  return (
    <StepContainer stepNumber={stepNumber} title="Connect to your WiFi Network, Mining Pool, and Wallet">
      <p className="mb-4">Time to configure your {miner.name}!</p>

      <h3 className="text-primary font-display text-xl mt-6 mb-4">Connect to Your Home WiFi:</h3>
      <CheckList
        items={[
          'Click the <strong>"Configure WiFi"</strong> button',
          'A list of accessible WiFi networks will be displayed. Select your network<br/><span class="text-muted-foreground ml-6 text-sm">Note: These require 2.4GHz internet to mine properly</span>',
          "Alternatively, you can type your WiFi network name in the SSID field (case sensitive)",
          "Enter your WiFi Password (case sensitive)",
        ]}
      />

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Configure Your Wallet & Mining Pool:</h3>

      <InfoBox variant="warning">
        <strong className="text-foreground">⚠️ CRITICAL: Change the {isGoldNugget ? "Wallet" : "Default Wallet"}!</strong>
        <br />
        The factory-set Bitcoin address MUST be replaced with YOUR OWN address, or you won't receive any rewards!
        {isGoldNugget && (
          <>
            <br />
            It MUST be a Bitcoin address only, no other crypto
          </>
        )}
      </InfoBox>

      {/* Display BTC Address from Welcome step */}
      <div className="my-6">
        <Label htmlFor="btcAddress" className="text-primary font-semibold text-base mb-2 block">
          Your Bitcoin Address from earlier:
        </Label>
        <Input
          id="btcAddress"
          type="text"
          value={btcAddress}
          onChange={(e) => handleAddressChange(e.target.value)}
          placeholder="bc1q... (your Bitcoin address)"
          className="bg-secondary/50 border-border focus:border-primary focus:ring-primary"
        />
      </div>

      <h4 className="text-primary font-display text-lg mt-6 mb-4">Enter your pool settings here:</h4>
      <p className="mb-2">Recommended settings:</p>
      <CodeBlock>
        {isGoldNugget ? (
          <>
            <strong>Pool URL:</strong> pool.bitcoinmerch.com
            <br />
            <strong>Pool Port:</strong> 3333
            <br />
            <strong>BTC Address:</strong> (Paste your BTC address here. This is how you get paid!)
          </>
        ) : (
          <>
            <strong>Pool URL:</strong> stratum+tcp://pool.bitcoinmerch.com:3333
            <br />
            <strong>Pool Password:</strong> x
            <br />
            <strong>BTC Address:</strong> (Paste your BTC address here. This is how you get paid!)
          </>
        )}
      </CodeBlock>

      {/* Pool screenshot */}
      <div className="my-6 flex justify-center">
        <div className="max-w-xl">
          <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
            <img
              src={isGoldNugget ? goldnuggetPoolImg : golddiggerPoolImg}
              alt={`${miner.name} Pool Configuration screen`}
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            {miner.name} configuration screen with pool settings
          </p>
        </div>
      </div>

      {!isGoldNugget && (
        <>
          <h4 className="text-primary font-display text-lg mt-8 mb-4">(Optional) Backup Pool:</h4>
          <p className="mb-2">Configure a backup pool in case the primary goes offline:</p>
          <CodeBlock>
            <strong>Pool URL (Fallback):</strong> stratum+tcp://public-pool.io:3333
            <br />
            <strong>Pool Password (Fallback):</strong> x
            <br />
            <strong>BTC Address (Fallback):</strong> (Paste your BTC address here again)
          </CodeBlock>
        </>
      )}

      <h4 className="text-primary font-display text-lg mt-8 mb-4">Save Settings:</h4>
      <CheckList
        items={[
          'Scroll down and press <strong>"Save"</strong>',
          "Your device will restart automatically",
        ]}
      />
    </StepContainer>
  );
};

export default ConfigureAllStep;
