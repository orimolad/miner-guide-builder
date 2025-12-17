import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import { Miner } from "@/data/miners";
import axeosWifiSetupImg from "@/assets/instructions/axeos-wifi-setup.png";

interface WifiStepProps {
  miner: Miner;
}

const WifiStep = ({ miner }: WifiStepProps) => {
  const showAxeosImage = ["bitaxe", "nerdqaxe", "disruptor"].includes(miner.id);

  return (
    <StepContainer stepNumber={2} title="Connect to Your Miner's Wi-Fi Network">
      <p className="mb-4">Your miner creates its own Wi-Fi network for initial setup. Let's connect to it!</p>

      <CheckList
        items={[
          "On your phone or computer, open Wi-Fi settings",
          'Look for a network named something like <strong>"Bitaxe"</strong>, <strong>"NerdMiner"</strong>, or similar',
          "Select that network to connect",
          'If prompted for a password, check the device manual or try common defaults like <strong>"password"</strong>, <strong>"root"</strong>, <strong>"admin"</strong>, <strong>"MineYourCoins"</strong> or <strong>"12345678"</strong>',
        ]}
      />

      {/* AxeOS Wi-Fi setup image for Bitaxe, NerdQaxe++, and Disruptor */}
      {showAxeosImage && (
        <div className="my-6 flex justify-center">
          <div className="max-w-xl">
            <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
              <img
                src={axeosWifiSetupImg}
                alt="Wi-Fi setup showing network selection and configuration"
                className="w-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Connect to the miner's Wi-Fi and configure your network
            </p>
          </div>
        </div>
      )}

      <InfoBox variant="info">
        <strong className="text-foreground">💡 Can't find the Wi-Fi network?</strong>
        <br />
        • Make sure the miner has been powered on for at least 30 seconds
        <br />
        • Try restarting the miner
        <br />
        • Move closer to the device
        {miner.id !== "disruptor" && (
          <>
            <br />• Check if the miner has a physical Wi-Fi button that needs to be pressed
          </>
        )}
      </InfoBox>

      <p className="mt-4">
        Once connected, you should see the network name in your Wi-Fi settings. You might see a "No Internet" warning -
        that's normal!
      </p>
    </StepContainer>
  );
};

export default WifiStep;
