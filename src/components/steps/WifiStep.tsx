import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import { Miner } from "@/data/miners";
import axeosWifiSetupImg from "@/assets/instructions/axeos-wifi-setup.png";
import bitaxeScreenImg from "@/assets/instructions/bitaxescreen.png";
import bitaxeWifiGif from "@/assets/instructions/bitaxewifi.gif";

interface WifiStepProps {
  miner: Miner;
}

const WifiStep = ({ miner }: WifiStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const showAxeosImage = ["nerdqaxe", "disruptor"].includes(miner.id);

  return (
    <StepContainer stepNumber={2} title="Connect to Your Miner's Wi-Fi Network">
      <p className="mb-4">
        {isBitaxe
          ? "Your Bitaxe creates its own temporary WiFi network for initial setup. Let's connect to it!"
          : "Your miner creates its own Wi-Fi network for initial setup. Let's connect to it!"}
      </p>

      {/* Bitaxe-specific content */}
      {isBitaxe ? (
        <>
          {/* Bitaxe images */}
          <div className="my-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-1 max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={bitaxeScreenImg} alt="Bitaxe screen showing WiFi network name" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Bitaxe screen showing WiFi network name
              </p>
            </div>
            <div className="flex-1 max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={bitaxeWifiGif} alt="WiFi connection animation" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                WiFi connection animation
              </p>
            </div>
          </div>

          <CheckList
            items={[
              "Your Bitaxe's screen will be in setup mode and display the name of the WiFi network it generates - i.e. <strong>Bitaxe_XXXX</strong>",
              "On your phone/tablet/computer, open WiFi settings",
              'Look for a network with <strong>Bitaxe</strong> in the name - i.e. Bitaxe_XXXX',
              "Select that network to connect and wait several seconds. A captive WiFi screen will appear with the AxeOS Network Configuration screen.",
              "In the Wi-Fi SSID field, enter your home network's name. <strong>Please note this is case sensitive and must be 2.4GHz to mine properly.</strong>",
              "Enter your WiFi Password",
              'Click <strong>"Save"</strong>. A popup will say "Success! Settings saved"',
              'Click <strong>"Restart"</strong> and wait for the restart to complete.',
            ]}
          />

          <InfoBox variant="warning" className="mt-6">
            <strong className="text-foreground">!!! If the Network Configuration Screen doesn't pop up automatically:</strong>
            <br />
            <br />
            The device you are using may be blocking the pop up. If this happens:
            <br />
            <br />
            1. Connect to the Bitaxe's WiFi network
            <br />
            2. Select "Use Without Internet" if prompted
            <br />
            3. In a web browser, navigate to: <code className="bg-background px-2 py-0.5 rounded">http://192.168.4.1/</code>
          </InfoBox>

          <InfoBox variant="info" className="mt-4">
            <strong className="text-foreground">💡 Connection Troubleshooting:</strong>
            <br />
            If your miner refuses to connect to your network, please verify the case sensitive SSID and password are correct. If they are, it may be a setting in your router blocking the device from connecting. Please reach out to your ISP if you need help configuring your router.
          </InfoBox>
        </>
      ) : (
        <>
          {/* Non-Bitaxe content */}
          <CheckList
            items={[
              "On your phone or computer, open Wi-Fi settings",
              'Look for a network named something like <strong>"Bitaxe"</strong>, <strong>"NerdMiner"</strong>, or similar',
              "Select that network to connect",
              ...(miner.id !== "disruptor"
                ? [
                    'If prompted for a password, check the device manual or try common defaults like <strong>"password"</strong>, <strong>"root"</strong>, <strong>"admin"</strong>, <strong>"MineYourCoins"</strong> or <strong>"12345678"</strong>',
                  ]
                : []),
            ]}
          />

          {/* AxeOS Wi-Fi setup image for NerdQaxe++ and Disruptor */}
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
            Once connected, you should see the network name in your Wi-Fi settings. You might see a "No Internet"
            warning - that's normal!
          </p>
        </>
      )}
    </StepContainer>
  );
};

export default WifiStep;
