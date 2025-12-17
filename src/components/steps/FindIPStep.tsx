import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";

// Instruction images
import nerdqaxeScreenImg from "@/assets/instructions/nerdqaxe-screen.png";

interface FindIPStepProps {
  miner: Miner;
}

const FindIPStep = ({ miner }: FindIPStepProps) => {
  const defaultIPClean = miner.defaultIP.split(" ")[0];

  return (
    <StepContainer stepNumber={3} title="Find Your Miner's IP Address">
      <p className="mb-4">
        To configure your miner, you need to access its web interface. Here's how to find its IP address:
      </p>

      <InfoBox variant="info">
        <strong className="text-foreground">🎯 For {miner.name}:</strong>
        <br />
        Default IP: <code className="bg-background px-2 py-0.5 rounded">{miner.defaultIP}</code>
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Method 1: Try the Default IP</h3>
      <p>Open your web browser and type this address:</p>
      <CodeBlock>http://{defaultIPClean}</CodeBlock>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Method 2: Check the Device Screen</h3>
      <p>
        {miner.hasDisplay
          ? "Your miner has a display that should show the IP address on boot or in the settings menu."
          : "If your miner has a display, the IP address might be shown there."}
      </p>

      {/* NerdQaxe++ screen image */}
      {miner.id === "nerdqaxe" && (
        <div className="my-6 flex justify-center">
          <div className="w-64">
            <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
              <img src={nerdqaxeScreenImg} alt="NerdQaxe++ screen showing IP address" className="w-full" />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">IP address shown on NerdQaxe++ display</p>
          </div>
        </div>
      )}

      <h3 className="text-primary font-display text-xl mt-8 mb-4">Method 3: Use a Network Scanner</h3>
      <p>Download a network scanner app on your phone:</p>
      <CheckList
        items={[
          'iOS: <a href="https://apps.apple.com/app/fing-network-scanner/id430921107" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Fing</a> or <a href="https://apps.apple.com/app/network-analyzer/id562315041" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Network Analyzer</a>',
          'Android: <a href="https://play.google.com/store/apps/details?id=com.overlook.android.fing" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Fing</a> or <a href="https://play.google.com/store/apps/details?id=com.first_row.network_scanner" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Network Scanner</a>',
          'Look for a device with "Espressif" or similar manufacturer name',
          'Desktop: <a href="https://www.advanced-port-scanner.com/" target="_blank" rel="noopener noreferrer" class="text-bitcoin hover:underline">Advanced Port Scanner</a>',
        ]}
      />

      <InfoBox variant="success">
        <strong className="text-foreground">✅ You'll know you found it when:</strong>
        <br />
        Opening the IP in your browser shows a configuration page or miner interface
      </InfoBox>
    </StepContainer>
  );
};

export default FindIPStep;
