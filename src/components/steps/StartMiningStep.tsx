import { Miner, BitaxeVariant, NerdqaxeVariant } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

// Instruction images
import poolScreenshotImg from "@/assets/instructions/pool-screenshot.png";
import nerdqaxeDashboardImg from "@/assets/instructions/nerdqaxedashboard.png";
import golddiggerHashingImg from "@/assets/instructions/golddiggerhashing.jpg";
import golddiggerIpImg from "@/assets/instructions/golddiggerip.jpg";

interface StartMiningStepProps {
  miner: Miner;
  btcAddress: string;
  selectedVariant?: BitaxeVariant | NerdqaxeVariant;
  stepNumber?: number;
}

const StartMiningStep = ({ miner, btcAddress, selectedVariant, stepNumber = 5 }: StartMiningStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";
  const isDisruptor = miner.id === "disruptor";
  const isGoldDigger = miner.id === "golddigger";
  const isZyber = miner.id === "zyber";

  // Get dynamic hashrate based on selected variant or miner
  const getExpectedHashrate = (): string => {
    if ((isBitaxe || isNerdqaxe) && selectedVariant) {
      return `~${selectedVariant.hashrateValue} GH/s`;
    }
    if (isGoldDigger) {
      return "~1000 KH/s";
    }
    if (isZyber) {
      return "~10 TH/s";
    }
    return miner.hashrate;
  };

  const openPoolStats = () => {
    const address = btcAddress || "YOUR_BTC_ADDRESS";
    window.open(`https://pool.bitcoinmerch.com/app/${address}`, "_blank");
  };

  return (
    <StepContainer stepNumber={stepNumber} title="Start Mining & Verify Operation">
      <p className="mb-4">Your miner should now be hashing! Let's verify everything is working correctly.</p>

      {/* Gold Digger on-device verification */}
      {isGoldDigger && (
        <>
          <h3 className="text-primary font-display text-xl mt-4 mb-4">On Your Device:</h3>
          <p className="mb-4">Check the miner's screen. Your hashrate will show measured in KH/s.</p>
          
          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={golddiggerHashingImg} alt="Gold Digger screen showing hashrate" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Gold Digger screen displaying hashrate in KH/s
              </p>
            </div>
          </div>
        </>
      )}

      {/* Nerdaxe dashboard showing mining stats */}
      {isNerdqaxe && (
        <div className="my-6 flex justify-center">
          <div className="max-w-3xl">
            <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
              <img
                src={nerdqaxeDashboardImg}
                alt="NerdQaxe dashboard showing hashrate, shares, and efficiency"
                className="w-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              NerdQaxe dashboard displaying hashrate, shares, efficiency, and power gauges
            </p>
          </div>
        </div>
      )}

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
          readOnly
          className="bg-secondary/50 border-border"
        />
      </div>

      <Button onClick={openPoolStats} className="gradient-primary text-primary-foreground glow-primary btn-ripple mt-4">
        <span className="relative z-10">📊 View My Pool Stats</span>
      </Button>

      <p className="text-sm text-muted-foreground mt-2">Pool dashboard showing hashrate and workers</p>

      {/* Pool screenshot */}
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

      {/* Disruptor-specific: Optional Find IP section */}
      {isDisruptor && (
        <>
          <h3 className="text-primary font-display text-xl mt-10 mb-4">Optional - Find Your Miner's IP Address</h3>
          <p className="mb-4">
            To access your miner's web interface, you need to find its new IP address on your network. Here's how to find it:
          </p>

          <h4 className="text-primary font-display text-lg mt-6 mb-4">Use a Network Scanner</h4>
          <p className="mb-2">Download a network scanner app:</p>
          <CheckList
            items={[
              'iOS: <a href="https://apps.apple.com/app/fing-network-scanner/id430921107" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Fing</a> or <a href="https://apps.apple.com/app/network-analyzer/id562315041" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Network Analyzer</a>',
              'Android: <a href="https://play.google.com/store/apps/details?id=com.overlook.android.fing" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Fing</a> or <a href="https://play.google.com/store/apps/details?id=com.first_row.network_scanner" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Network Scanner</a>',
              'Desktop: <a href="https://www.advanced-port-scanner.com/" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Advanced Port Scanner</a>',
              'Look for a device with "Espressif" or similar manufacturer name',
            ]}
          />

          <InfoBox variant="success" className="mt-4">
            <strong className="text-foreground">✅ You'll know you found it when:</strong>
            <br />
            Opening the IP in your web browser shows AxeOS, its web interface. You can monitor its performance and configure it from this number any time.
          </InfoBox>
        </>
      )}

      {/* Gold Digger-specific: IP on device screen */}
      {isGoldDigger && (
        <>
          <h3 className="text-primary font-display text-xl mt-10 mb-4">Optional - Access your miner's dashboard</h3>
          <p className="mb-4">
            Once you connect the Gold Digger to your network, it will generate a new IP address for the device's web interface.
          </p>
          <p className="mb-4">
            To access your miner's web interface, simply type in the IP address that is displayed on the screen in a web browser!
          </p>

          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={golddiggerIpImg} alt="Gold Digger screen showing IP address" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Gold Digger screen displaying the device's IP address
              </p>
            </div>
          </div>
        </>
      )}

      {/* Non-disruptor device verification */}
      {!isDisruptor && !isGoldDigger && (
        <>
          <h3 className="text-primary font-display text-xl mt-8 mb-4">On Your Device:</h3>
          <CheckList
            items={[
              "Check the miner's screen and/or web interface",
              `Look for a hash rate displaying: <strong>${getExpectedHashrate()}</strong>`,
              "Accepted shares should start appearing (may take 1-5 minutes)",
              "Monitor your miner's temperatures. Stable temperatures are <strong>40-70°C</strong>",
            ]}
          />

          {(isBitaxe || isNerdqaxe) && (
            <InfoBox variant="warning" className="mt-4">
              <strong className="text-foreground">⚠️ Temperature Warning:</strong>
              <br />
              If the ASIC Temperature goes above 70°, your miner will go into safety mode and display an{" "}
              <strong>OVERHEAT</strong> error. If this occurs, go to the Settings tab and put your frequency lower than the
              default setting.
            </InfoBox>
          )}

          {!isBitaxe && !isNerdqaxe && (
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
          )}
        </>
      )}
    </StepContainer>
  );
};

export default StartMiningStep;
