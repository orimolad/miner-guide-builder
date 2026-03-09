import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";

interface NodeConnectStepProps {
  miner: Miner;
  stepNumber?: number;
}

const NodeConnectStep = ({ miner, stepNumber = 1 }: NodeConnectStepProps) => {
  return (
    <StepContainer stepNumber={stepNumber} title="Connect and Power On">
      <p className="mb-4">Let's get your Node connected to the internet!</p>

      <CheckList
        items={[
          "Connect an Ethernet cable from your X Node Mini to your router or network switch",
          "Plug in the power supply. The device will automatically boot up",
          "Wait for 1-2 minutes for the Node to start fully",
        ]}
      />

      <InfoBox variant="info">
        <strong className="text-foreground">Note:</strong> The black fan in the middle of the Node only turns on if it detects high temperatures.
      </InfoBox>

      <h3 className="text-primary font-display text-xl mt-8 mb-4">
        Look for these signs that your Node is powered on:
      </h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>LED lights turning on</li>
        <li>Fans are spinning</li>
      </ul>

      <div className="my-6 rounded-xl overflow-hidden border border-border bg-secondary/30 p-8 text-center">
        <p className="text-muted-foreground italic">📷 Connection image coming soon</p>
      </div>

      <p className="mt-6 text-xl font-semibold text-foreground">
        You're ready for the next step!
      </p>
    </StepContainer>
  );
};

export default NodeConnectStep;
