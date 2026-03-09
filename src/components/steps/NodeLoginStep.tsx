import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import CodeBlock from "../CodeBlock";
import nodesettingsImg from "@/assets/instructions/nodesettings.png";
import nodeloginImg from "@/assets/instructions/nodelogin.png";

interface NodeLoginStepProps {
  miner: Miner;
  stepNumber?: number;
}

const NodeLoginStep = ({ miner, stepNumber = 2 }: NodeLoginStepProps) => {
  return (
    <StepContainer stepNumber={stepNumber} title="Connect to Your Node">
      <p className="mb-4">Let's connect to your X Node!</p>

      <CheckList
        items={[
          "On your computer or device, open your web browser. Make sure you are on the same network that the Node is plugged into",
          'Go to <a href="http://umbrel.local" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">http://umbrel.local</a>',
        ]}
      />

      <InfoBox variant="info">
        If that doesn't load, log in to your router, find the device called "umbrel," and use its IP address, for example: <code className="text-primary">http://192.168.x.xxx</code>
      </InfoBox>

      <p className="my-4">The Umbrel login screen will appear. The default login credentials are:</p>

      <CodeBlock>
        <strong>Username:</strong> root
        <br />
        <strong>Password:</strong> 123456
      </CodeBlock>

      <p className="my-4">Click <strong className="text-foreground">Log In</strong></p>

      <img
        src={nodeloginImg}
        alt="Umbrel login screen"
        className="rounded-xl border border-border my-6 w-full"
        loading="lazy"
      />

      <h3 className="text-primary font-display text-xl mt-8 mb-4">
        Change Your Settings
      </h3>

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

export default NodeLoginStep;
