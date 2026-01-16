import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Miner } from "@/data/miners";
import axeosPoolSetupImg from "@/assets/instructions/axeos-pool-setup.png";
import nerdaxePoolImg from "@/assets/instructions/nerdaxepool.png";

interface ConfigureStepProps {
  miner: Miner;
  btcAddress: string;
  onAddressChange: (address: string) => void;
}

const ConfigureStep = ({ miner, btcAddress, onAddressChange }: ConfigureStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";
  const showAxeosImage = ["bitaxe", "disruptor"].includes(miner.id);

  const handleAddressChange = (value: string) => {
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

      {isBitaxe ? (
        <>
          <CheckList items={["From the Menu, navigate to <strong>Pool Settings</strong>"]} />

          <h4 className="text-primary font-display text-lg mt-6 mb-4">Enter your pool settings here:</h4>
          <p className="mb-2">Recommended settings:</p>
          <CodeBlock>
            <strong>Stratum Host:</strong> pool.bitcoinmerch.com
            <br />
            <strong>Stratum Port:</strong> 3333
            <br />
            <strong>Stratum User:</strong> (Paste your BTC address here. This is how you get paid!)
            <br />
            <strong>Password:</strong> x
          </CodeBlock>

          <InfoBox variant="info" className="mt-4">
            <strong className="text-foreground">💡 Pool Format Notes:</strong>
            <br />
            <br />
            Pools will display their Pool URL in the following format with the Stratum Port at the end separated by a
            colon:
            <br />
            <br />
            Ex. <code className="bg-background px-1 rounded">stratum+tcp://pool.bitcoinmerch.com:1234</code>
            <br />
            <br />
            If you are using a different pool, omit "stratum+tcp://" from the URL for your Bitaxe's settings as well as
            the colon. Put the number (1234 in the example) into the Stratum Port field.
          </InfoBox>
        </>
      ) : isNerdqaxe ? (
        <>
          <CheckList items={["From the Menu, navigate to <strong>Settings</strong>"]} />

          <h4 className="text-primary font-display text-lg mt-6 mb-4">Enter your pool settings here:</h4>
          <p className="mb-2">Recommended settings:</p>
          <CodeBlock>
            <strong>Stratum Host:</strong> pool.bitcoinmerch.com
            <br />
            <strong>Stratum Port:</strong> 3333
            <br />
            <strong>Stratum User:</strong> (Paste your BTC address here. This is how you get paid!)
            <br />
            <strong>Password:</strong> x
          </CodeBlock>

          <InfoBox variant="info" className="mt-4">
            <strong className="text-foreground">💡 Pool Format Notes:</strong>
            <br />
            <br />
            Pools will display their Pool URL in the following format with the Stratum Port at the end separated by a
            colon:
            <br />
            <br />
            Ex. <code className="bg-background px-1 rounded">stratum+tcp://pool.bitcoinmerch.com:1234</code>
            <br />
            <br />
            If you are using a different pool, omit "stratum+tcp://" from the URL for your Nerdaxe's settings as well as
            the colon. Put the number (1234 in the example) into the Stratum Port field.
          </InfoBox>

          {/* Nerdaxe pool screenshot */}
          <div className="my-6 flex justify-center">
            <div className="max-w-xl">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={nerdaxePoolImg} alt="Nerdaxe Pool Configuration screen" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Nerdaxe pool settings - Enter your Bitcoin address and pool URL
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-primary font-display text-xl mt-8 mb-4">Step-by-Step Configuration:</h3>
          <h4 className="text-primary font-display text-lg mt-4 mb-4">Set Up Pool Connection:</h4>
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
        </>
      )}

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

      <h4 className="text-primary font-display text-lg mt-8 mb-4">Optional Backup Pool:</h4>
      <p className="mb-2">Configure a backup pool in case the primary goes offline:</p>

      {isBitaxe || isNerdqaxe ? (
        <CodeBlock>
          <strong>Fallback Stratum Host:</strong> solo.ckpool.org
          <br />
          <strong>Fallback Stratum Port:</strong> 3333
          <br />
          <strong>Fallback Stratum User:</strong> (Paste your BTC address here again)
          <br />
          <strong>Password:</strong> x
        </CodeBlock>
      ) : (
        <CodeBlock>
          <strong>Backup Pool:</strong> stratum+tcp://solo.ckpool.org:3333
        </CodeBlock>
      )}

      <h4 className="text-primary font-display text-lg mt-8 mb-4">Save Settings:</h4>
      <CheckList
        items={[
          'Click <strong>"Save"</strong>. A popup will say "Success! Settings saved"',
          'Click <strong>"Restart"</strong> and wait for the restart to complete',
        ]}
      />
    </StepContainer>
  );
};

export default ConfigureStep;