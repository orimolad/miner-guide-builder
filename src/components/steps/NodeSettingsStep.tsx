import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import nodesettingsImg from "@/assets/instructions/nodesettings.png";

interface NodeSettingsStepProps {
  miner: Miner;
  stepNumber?: number;
}

const NodeSettingsStep = ({ miner, stepNumber = 3 }: NodeSettingsStepProps) => {
  return (
    <StepContainer stepNumber={stepNumber} title="Change Your Settings">
      <p className="mb-4">Open the <strong className="text-foreground">Settings</strong> icon from the dock.</p>

      <img
        src={nodesettingsImg}
        alt="Umbrel settings screen"
        className="rounded-xl border border-border my-4 w-full"
        loading="lazy"
      />

      <p className="mb-2">From here, you can:</p>
      <CheckList
        items={[
          "Change your username and password",
          "See your device's IP address (take note of this for connecting your miners)",
          "Connect it to your WiFi network if you wish to unplug the ethernet cable",
        ]}
      />

      <InfoBox variant="warning">
        <strong className="text-foreground">Recommended:</strong> Use an Ethernet connection during node synchronization for the fastest and most reliable sync.
      </InfoBox>
    </StepContainer>
  );
};

export default NodeSettingsStep;
