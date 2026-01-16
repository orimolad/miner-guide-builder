import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";

// Instruction images
import ipAddressImg from "@/assets/instructions/ipaddress.jpg";
import nerdaxeIpAddressImg from "@/assets/instructions/nerdaxe-ip-address.jpg";

interface FindIPStepProps {
  miner: Miner;
  stepNumber?: number;
}

const FindIPStep = ({ miner, stepNumber = 3 }: FindIPStepProps) => {
  const defaultIPClean = miner.defaultIP.split(" ")[0];
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";

  return (
    <StepContainer stepNumber={stepNumber} title="Find Your Miner's IP Address">
      {isBitaxe ? (
        <>
          <p className="mb-4">
            To configure your miner, you need to access its web interface. Once you have successfully configured the
            Bitaxe with your WiFi, it will stop emitting the Bitaxe network and be assigned its own IP address on your
            network.
          </p>

          <p className="mb-4">
            To access the web interface (AxeOS), enter this IP number into your web browser. This is how you can
            configure your miner's settings.
          </p>

          {/* IP Address image */}
          <div className="my-6 flex justify-center">
            <div className="w-64">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={ipAddressImg} alt="IP address shown in browser" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                IP address shown on Bitaxe display or in browser
              </p>
            </div>
          </div>

          <InfoBox variant="success">
            <strong className="text-foreground">✅ You'll know you found it when:</strong>
            <br />
            Opening the IP in your browser shows the AxeOS configuration page
          </InfoBox>
        </>
      ) : isNerdqaxe ? (
        <>
          <p className="mb-4">
            To configure your miner, you need to access its web interface. Once you have successfully configured the
            Nerdaxe with your WiFi, it will stop emitting the Nerdaxe network and be assigned its own IP address on your
            network which is displayed at the top of the screen.
          </p>

          <p className="mb-4">
            To access the web interface, enter this IP number into your web browser and navigate to it like a website.
          </p>

          {/* IP Address image */}
          <div className="my-6 flex justify-center">
            <div className="max-w-md">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={nerdaxeIpAddressImg} alt="IP address shown at the top of Nerdaxe display" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                IP address (e.g., 192.168.0.220) shown at the top of the Nerdaxe screen
              </p>
            </div>
          </div>

          <InfoBox variant="success">
            <strong className="text-foreground">✅ You'll know you found it when:</strong>
            <br />
            Opening the IP in your browser shows the Nerdaxe configuration page
          </InfoBox>
        </>
      ) : (
        <>
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

          <h3 className="text-primary font-display text-xl mt-8 mb-4">
            Method 2: Check the Device Screen
          </h3>
          <p>
            {miner.hasDisplay
              ? "Your miner has a display that should show the IP address on boot or in the settings menu."
              : "If your miner has a display, the IP address might be shown there."}
          </p>

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
        </>
      )}
    </StepContainer>
  );
};

export default FindIPStep;
