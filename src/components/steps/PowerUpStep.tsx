import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";

// Disruptor instruction GIF
import disruptorPowerGif from "@/assets/instructions/disruptor-power.gif";

interface PowerUpStepProps {
  miner: Miner;
}

const PowerUpStep = ({ miner }: PowerUpStepProps) => {
  return (
    <StepContainer stepNumber={1} title="Power Up Your Miner">
      {miner.isUsbPowered ? (
        <>
          <p className="mb-4">
            Your {miner.name} is USB-powered, making setup incredibly simple!
          </p>
          <CheckList
            items={[
              "Connect the USB cable to your miner",
              "Plug the USB into a power adapter or computer USB port",
              "Wait 10-15 seconds for the device to boot",
            ]}
          />
        </>
      ) : (
        <>
          <p className="mb-4">
            Your {miner.name} requires an external power supply.
          </p>
          <CheckList
            items={[
              "Connect the power supply to your miner",
              "Plug the power supply into a wall outlet",
              "Switch on the power (if there's a power switch)",
              "Wait 20-30 seconds for the device to boot",
            ]}
          />
        </>
      )}
      
      {/* Disruptor-specific instructional GIF */}
      {miner.id === "disruptor" && (
        <div className="my-6">
          <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
            <img 
              src={disruptorPowerGif} 
              alt="Disruptor power up demonstration"
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Connecting power to your Disruptor
          </p>
        </div>
      )}
      
      <InfoBox variant="warning">
        <strong className="text-foreground">⚠️ Look for these signs that your miner is powered on:</strong>
        <br />
        • LED lights turning on
        <br />
        • Fan noise (for larger miners)
        <br />
        • Screen display showing boot information
        <br />
        • Device feeling warm to the touch
      </InfoBox>
      
      <p className="mt-4">
        Once you see these indicators, your miner is ready for the next step!
      </p>
    </StepContainer>
  );
};

export default PowerUpStep;
