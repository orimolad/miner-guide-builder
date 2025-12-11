import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";

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
      
      <h3 className="text-primary font-display text-xl mt-8 mb-4">Method 3: Use a Network Scanner</h3>
      <p>Download a network scanner app on your phone:</p>
      <CheckList
        items={[
          'iOS: "Fing" or "Network Analyzer"',
          'Android: "Fing" or "Network Scanner"',
          'Look for a device with "Espressif" or similar manufacturer name',
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
