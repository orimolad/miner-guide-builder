import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import publicpoolImg from "@/assets/instructions/nodepublicpool.png";
import bitaxenodeImg from "@/assets/instructions/bitaxenode.png";
import avalonnodeImg from "@/assets/instructions/avalonnode.png";

interface NodePoolStepProps {
  miner: Miner;
  stepNumber?: number;
}

const NodePoolStep = ({ miner, stepNumber = 4 }: NodePoolStepProps) => {
  return (
    <StepContainer stepNumber={stepNumber} title="Set Up Your Personal Mining Pool">
      <p className="mb-4">
        Your X Node Mini can run your own personal mining pool directly from Umbrel — using the official Public Pool app!
      </p>

      <InfoBox variant="warning">
        <strong className="text-foreground">Important:</strong> Your Bitcoin Core Node must be completely synced before connecting miners to your pool.
      </InfoBox>

      <CheckList
        items={[
          "Open <strong>Public Pool</strong> on the Umbrel Dashboard",
          "It will display your node's stratum host / port number. You can use either the IP address of the Node or <code>umbrel.local</code> in your miner settings. Either works",
        ]}
      />

      <img
        src={publicpoolImg}
        alt="Public Pool stratum settings"
        className="rounded-xl border border-border my-6 w-full"
        loading="lazy"
      />

      <CheckList
        items={[
          "In a new browser tab, open your miner's configuration page",
          "Use the pool settings from above. Here are examples of what it will look like on AxeOS and Avalon Family App",
        ]}
      />

      <h3 className="text-primary font-display text-lg mt-6 mb-3">AxeOS Example:</h3>
      <img
        src={bitaxenodeImg}
        alt="AxeOS pool configuration for X Node"
        className="rounded-xl border border-border my-4 w-full"
        loading="lazy"
      />

      <h3 className="text-primary font-display text-lg mt-6 mb-3">Avalon Family App Example:</h3>
      <img
        src={avalonnodeImg}
        alt="Avalon Family App pool configuration for X Node"
        className="rounded-xl border border-border my-4 w-full"
        loading="lazy"
      />

      <CheckList
        items={["Save and restart your miner"]}
      />

      <InfoBox variant="info">
        <strong className="text-foreground">Note:</strong> Your miners must be on the same WiFi network as the X Node for them to connect to it.
      </InfoBox>
    </StepContainer>
  );
};

export default NodePoolStep;
