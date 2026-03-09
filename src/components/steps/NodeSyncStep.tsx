import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import bitcoincoresyncingImg from "@/assets/instructions/bitcoincoresyncing.png";

interface NodeSyncStepProps {
  miner: Miner;
  stepNumber?: number;
}

const NodeSyncStep = ({ miner, stepNumber = 3 }: NodeSyncStepProps) => {
  return (
    <StepContainer stepNumber={stepNumber} title="Sync Your Bitcoin Node">
      <p className="mb-4">
        Once logged into Umbrel, you'll see the Bitcoin Node app already preinstalled. Time to begin the sync!
      </p>

      <CheckList
        items={[
          "Launch the Bitcoin Node",
          "Bitcoin Core will automatically begin synchronizing the blockchain, downloading block by block every single transaction that has ever taken place on the Bitcoin network!",
          "The full sync can take several hours depending on your internet speed",
        ]}
      />

      <InfoBox variant="warning">
        <strong className="text-foreground">Important:</strong> Keep the X Node Mini powered on and connected to the internet continuously during synchronization.
      </InfoBox>

      <img
        src={bitcoincoresyncingImg}
        alt="Bitcoin Core syncing progress"
        className="rounded-xl border border-border my-6 w-full"
        loading="lazy"
      />

      <p className="text-muted-foreground">
        You can monitor progress anytime from the Umbrel dashboard. Once completed, you are now actively running and verifying transactions on the Bitcoin Network!
      </p>
    </StepContainer>
  );
};

export default NodeSyncStep;
