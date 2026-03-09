import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import publicpoolwithminersImg from "@/assets/instructions/publicpoolwithminers.png";

interface NodeMonitorStepProps {
  miner: Miner;
  stepNumber?: number;
}

const NodeMonitorStep = ({ miner, stepNumber = 5 }: NodeMonitorStepProps) => {
  return (
    <StepContainer stepNumber={stepNumber} title="Monitor Your Pool">
      <p className="mb-4">The Public Pool dashboard shows real-time stats:</p>

      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
        <li>Connected miners</li>
        <li>Hashrate and shares</li>
        <li>Block submissions</li>
        <li>Pool uptime</li>
      </ul>

      <img
        src={publicpoolwithminersImg}
        alt="Public Pool dashboard with connected miners"
        className="rounded-xl border border-border my-6 w-full"
        loading="lazy"
      />
    </StepContainer>
  );
};

export default NodeMonitorStep;
