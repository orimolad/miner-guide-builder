import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";

// Instruction GIFs
import disruptorPowerGif from "@/assets/instructions/disruptor-power.gif";
import nerdqaxePowerGif from "@/assets/instructions/nerdqaxe-power.gif";
import bitaxePowerGif from "@/assets/instructions/bitaxepower.gif";
import golddiggerPowerGif from "@/assets/instructions/plugingolddigger.gif";
import golddiggerQrImg from "@/assets/instructions/golddiggerqr.jpg";

interface PowerUpStepProps {
  miner: Miner;
}

const PowerUpStep = ({ miner }: PowerUpStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";
  const isDisruptor = miner.id === "disruptor";
  const isGoldDigger = miner.id === "golddigger";

  return (
    <StepContainer stepNumber={1} title="Power Up Your Miner">
      {isGoldDigger ? (
        <>
          <p className="mb-4">Your {miner.name} is USB-powered, making setup incredibly simple!</p>
          
          {/* Gold Digger power GIF */}
          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={golddiggerPowerGif} alt="Gold Digger power up demonstration" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connecting power to your Gold Digger
              </p>
            </div>
          </div>

          <CheckList
            items={[
              "Connect Gold Digger to USB port with the provided USB-A to USB-C cable",
              "Wait for the software to load. When it is done, it will display a QR code and WiFi information for connecting to your device.",
            ]}
          />

          {/* Gold Digger QR screen */}
          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={golddiggerQrImg} alt="Gold Digger screen showing QR code and WiFi info" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Gold Digger screen showing QR code and WiFi credentials
              </p>
            </div>
          </div>
        </>
      ) : isDisruptor ? (
        <>
          <p className="mb-4">Your {miner.name} is USB-powered, making setup incredibly simple!</p>
          <CheckList
            items={[
              "Connect Disruptor to USB port (at least 5V 2A is recommended, lower power may cause performance issues)",
              "Wait 10-15 seconds for the device to boot with a blue flashing light cycle",
            ]}
          />

          {/* Disruptor power GIF */}
          <div className="my-6 flex justify-center">
            <div className="w-32">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={disruptorPowerGif} alt="Disruptor power up demonstration" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connecting power to your Disruptor
              </p>
            </div>
          </div>

          <InfoBox variant="warning">
            <strong className="text-foreground">⚠️ Look for these signs that your miner is powered on:</strong>
            <br />
            • LED lights turning on
            <br />
            • Fan is spinning
            <br />
            • Device feeling warm to the touch
          </InfoBox>
        </>
      ) : miner.isUsbPowered ? (
        <>
          <p className="mb-4">Your {miner.name} is USB-powered, making setup incredibly simple!</p>
          <CheckList
            items={[
              "Connect the USB cable to your miner",
              "Plug the USB into a power adapter or computer USB port",
              "Wait 10-15 seconds for the device to boot",
            ]}
          />
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
        </>
      ) : isBitaxe ? (
        <>
          <p className="mb-4">Your Bitaxe came with an external power supply.</p>

          {/* Bitaxe power GIF */}
          <div className="my-6 flex justify-center">
            <div className="w-32">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={bitaxePowerGif} alt="Bitaxe power up demonstration" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connecting power to your Bitaxe
              </p>
            </div>
          </div>

          <CheckList
            items={[
              "Plug the power supply into a wall outlet, verify that the light on the power supply comes on",
              "Connect the power supply to your miner",
              "Wait 10-15 seconds for the device to boot",
            ]}
          />

          <InfoBox variant="warning">
            <strong className="text-foreground">⚠️ Look for these signs that your miner is powered on:</strong>
            <br />
            • Fan spinning
            <br />
            • Screen display showing boot information
          </InfoBox>
        </>
      ) : isNerdqaxe ? (
        <>
          <p className="mb-4">Your Nerdaxe came with an external power supply.</p>

          {/* Nerdaxe power GIF */}
          <div className="my-6 flex justify-center">
            <div className="w-32">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={nerdqaxePowerGif} alt="Nerdaxe power up demonstration" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connecting power to your Nerdaxe
              </p>
            </div>
          </div>

          <CheckList
            items={[
              "Plug the power supply into a wall outlet, verify that the light on the power supply comes on",
              "Connect the power supply to your miner",
              "Wait 10-15 seconds for the device to boot",
            ]}
          />

          <InfoBox variant="warning">
            <strong className="text-foreground">⚠️ Look for these signs that your miner is powered on:</strong>
            <br />
            • Fan spinning
            <br />
            • Screen display showing boot information
          </InfoBox>
        </>
      ) : (
        <>
          <p className="mb-4">Your {miner.name} requires an external power supply.</p>
          <CheckList
            items={[
              "Connect the power supply to your miner",
              "Plug the power supply into a wall outlet",
              "Switch on the power (if there's a power switch)",
              "Wait 20-30 seconds for the device to boot",
            ]}
          />

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
        </>
      )}

      <p className="mt-4">Once you see these indicators, your miner is ready for the next step!</p>
    </StepContainer>
  );
};

export default PowerUpStep;
