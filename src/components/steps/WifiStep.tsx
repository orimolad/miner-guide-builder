import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";
import { Miner } from "@/data/miners";
import axeosWifiSetupImg from "@/assets/instructions/axeos-wifi-setup.png";
import bitaxeScreenImg from "@/assets/instructions/bitaxescreen.png";
import bitaxeWifiGif from "@/assets/instructions/bitaxewifi.gif";
import nerdaxeScreenImg from "@/assets/instructions/nerdaxescreen.jpg";
import nerdaxeWifiGif from "@/assets/instructions/nerdaxewifi.gif";
import disruptorWifiGif from "@/assets/instructions/disruptorwifi.gif";
import golddiggerWifiGif from "@/assets/instructions/golddiggerwifi.gif";
import goldnuggetWifiGif from "@/assets/instructions/goldnuggetwifi.gif";
import zyberScreenImg from "@/assets/instructions/zyberscreen.jpg";
import zyberWifiGif from "@/assets/instructions/zyberwifi.gif";
import nerdminerWifiGif from "@/assets/instructions/nerdminerwifi.gif";

interface WifiStepProps {
  miner: Miner;
  stepNumber?: number;
}

const WifiStep = ({ miner, stepNumber = 2 }: WifiStepProps) => {
  const isBitaxe = miner.id === "bitaxe";
  const isNerdqaxe = miner.id === "nerdqaxe";
  const isDisruptor = miner.id === "disruptor";
  const isGoldDigger = miner.id === "golddigger";
  const isGoldNugget = miner.id === "goldnugget";
  const isZyber = miner.id === "zyber";
  const isNerdminer = miner.id === "nerdminer";

  const getTitle = () => {
    if (isNerdminer) return "Connect to your miner via WiFi";
    if (isDisruptor) return "Connect to your Disruptor via WiFi";
    if (isGoldDigger) return "Connect to your Gold Digger via WiFi";
    if (isGoldNugget) return "Connect to your Gold Nugget via WiFi";
    if (isZyber) return "Connect to your Zyber's WiFi Network";
    return "Connect to Your Miner's Wi-Fi Network";
  };

  const getIntroText = () => {
    if (isNerdminer) return "Your miner creates its own temporary WiFi network for initial setup. Let's connect to it!";
    if (isBitaxe) return "Your Bitaxe creates its own temporary WiFi network for initial setup. Let's connect to it!";
    if (isNerdqaxe) return "Your Nerdaxe creates its own temporary WiFi network for initial setup. Let's connect to it!";
    if (isDisruptor) return "Your miner creates its own temporary WiFi network for initial setup. Let's connect to it!";
    if (isGoldDigger) return "Your Gold Digger creates its own temporary WiFi network for initial setup. Let's connect to it!";
    if (isGoldNugget) return "Your Gold Nugget creates its own temporary WiFi network for initial setup. Let's connect to it!";
    if (isZyber) return "Your Zyber creates its own temporary WiFi network for initial setup. Let's connect to it!";
    return "Your miner creates its own Wi-Fi network for initial setup. Let's connect to it!";
  };

  return (
    <StepContainer stepNumber={stepNumber} title={getTitle()}>
      <p className="mb-4">{getIntroText()}</p>

      {/* Nerd Miner-specific content */}
      {isNerdminer ? (
        <>
          <CheckList
            items={[
              "On your phone/tablet/computer, open WiFi settings",
              'Look for a network SSID called <strong>NerdMinerAP</strong>',
              'Enter the password <strong>MineYourCoins</strong><br/><span class="text-muted-foreground ml-6 text-sm">Note: This is case sensitive</span>',
              "Select that network to connect and wait several seconds. A captive WiFi screen will appear with the device's setup screen",
            ]}
          />

          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={nerdminerWifiGif} alt="Phone connecting to NerdMinerAP WiFi network" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connect to the NerdMinerAP network from your WiFi settings
              </p>
            </div>
          </div>

          <InfoBox variant="info" className="mt-6">
            <strong className="text-foreground">💡 Can't find the WiFi network?</strong>
            <br />
            <br />
            • Make sure the miner has been powered on for at least 30 seconds
            <br />
            • Try restarting the miner
            <br />
            • Move closer to the device
          </InfoBox>

          <InfoBox variant="warning" className="mt-4">
            <strong className="text-foreground">⚠️ If the dashboard doesn't pop up automatically:</strong>
            <br />
            <br />
            The device you are using may be blocking the pop up. If this happens:
            <br />
            <br />
            1. Connect to the miner's WiFi network
            <br />
            2. Select "Use Without Internet" if prompted
            <br />
            3. In a web browser, navigate to: <code className="bg-background px-2 py-0.5 rounded">http://192.168.4.1/</code>
          </InfoBox>
        </>
      ) : isGoldNugget ? (
        <>
          <CheckList
            items={[
              "On your phone/tablet/computer, open WiFi settings",
              'Look for a network SSID called <strong>NerdMinerAP</strong>',
              'Enter the password <strong>MineYourCoins</strong><br/><span class="text-muted-foreground ml-6 text-sm">Note: This is case sensitive</span>',
              "Select that network to connect and wait several seconds. A captive WiFi screen will appear with the device's setup screen",
            ]}
          />

          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={goldnuggetWifiGif} alt="Phone connecting to NerdMinerAP WiFi network" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connect to the NerdMinerAP network from your WiFi settings
              </p>
            </div>
          </div>

          <InfoBox variant="info" className="mt-6">
            <strong className="text-foreground">💡 Can't find the WiFi network?</strong>
            <br />
            <br />
            • Make sure the miner has been powered on for at least 30 seconds
            <br />
            • Try restarting the miner
            <br />
            • Move closer to the device
          </InfoBox>

          <InfoBox variant="warning" className="mt-4">
            <strong className="text-foreground">⚠️ If the dashboard doesn't pop up automatically:</strong>
            <br />
            <br />
            The device you are using may be blocking the pop up. If this happens:
            <br />
            <br />
            1. Connect to the Gold Nugget's WiFi network
            <br />
            2. Select "Use Without Internet" if prompted
            <br />
            3. In a web browser, navigate to: <code className="bg-background px-2 py-0.5 rounded">http://192.168.4.1/</code>
          </InfoBox>
        </>
      ) : isGoldDigger ? (
        <>
          <CheckList
            items={[
              "Scan the QR code with your phone camera OR on your phone/tablet/computer, open WiFi settings",
              'Look for a network SSID called <strong>nmap-2.4g</strong>',
              'If prompted, enter the password <strong>12345678</strong>',
              "Select that network to connect and wait several seconds. A captive WiFi screen will appear with the device's setup screen.",
            ]}
          />

          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={golddiggerWifiGif} alt="Phone connecting to nmap-2.4g WiFi network" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connect to the nmap-2.4g network from your WiFi settings
              </p>
            </div>
          </div>

          <InfoBox variant="info" className="mt-6">
            <strong className="text-foreground">💡 Can't find the WiFi network?</strong>
            <br />
            <br />
            • Make sure the miner has been powered on for at least 30 seconds
            <br />
            • Try restarting the miner
            <br />
            • Move closer to the device
          </InfoBox>

          <InfoBox variant="warning" className="mt-4">
            <strong className="text-foreground">!!! If the dashboard doesn't pop up automatically:</strong>
            <br />
            <br />
            The device you are using may be blocking the pop up. If this happens:
            <br />
            <br />
            1. Connect to the Gold Digger's WiFi network
            <br />
            2. Select "Use Without Internet" if prompted
            <br />
            3. In a web browser, navigate to: <code className="bg-background px-2 py-0.5 rounded">http://192.168.4.1/</code>
          </InfoBox>
        </>
      ) : isDisruptor ? (
        <>
          <CheckList
            items={[
              "On your phone/tablet/computer, open WiFi settings",
              'Look for a network with <strong>Bitaxe</strong> in the name - i.e. Bitaxe_XXXX',
              "Select that network to connect and wait several seconds. A captive WiFi screen will appear with the miner's web interface / dashboard.",
            ]}
          />

          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={disruptorWifiGif} alt="Phone showing Bitaxe_2705 WiFi network" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Select the Bitaxe network from your WiFi settings
              </p>
            </div>
          </div>

          <InfoBox variant="info" className="mt-6">
            <strong className="text-foreground">💡 Can't find the WiFi network?</strong>
            <br />
            <br />
            • Make sure the miner has been powered on for at least 30 seconds
            <br />
            • Try restarting the miner
            <br />
            • Move closer to the device
          </InfoBox>

          <InfoBox variant="warning" className="mt-4">
            <strong className="text-foreground">!!! If the dashboard doesn't pop up automatically:</strong>
            <br />
            <br />
            The device you are using may be blocking the pop up. If this happens:
            <br />
            <br />
            1. Connect to the Disruptor's WiFi network
            <br />
            2. Select "Use Without Internet" if prompted
            <br />
            3. In a web browser, navigate to: <code className="bg-background px-2 py-0.5 rounded">http://192.168.4.1/</code>
          </InfoBox>
        </>
      ) : isBitaxe ? (
        <>
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
      ) : isNerdqaxe ? (
        <>
          <div className="my-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-1 max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={nerdaxeScreenImg} alt="Nerdaxe screen showing WiFi network name" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Nerdaxe screen showing WiFi network name (e.g., "Nerdaxe_9461")
              </p>
            </div>
            <div className="flex-1 max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={nerdaxeWifiGif} alt="Phone connecting to Nerdaxe WiFi network" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connect to the Nerdaxe network from your phone's WiFi settings
              </p>
            </div>
          </div>

          <CheckList
            items={[
              "Your Nerdaxe's screen will be in setup mode and display the name of the WiFi network it generates - i.e. <strong>Nerdaxe_XXXX</strong>",
              "On your phone/tablet/computer, open WiFi settings",
              'Look for a network with <strong>Nerdaxe</strong> in the name - i.e. Nerdaxe_XXXX',
              "Select that network to connect and wait several seconds. A captive WiFi screen will appear with the Nerdaxe Dashboard.",
              "Navigate to the <strong>Settings</strong> tab. In the Wi-Fi SSID field, enter your home network's name. <strong>Please note this is case sensitive and must be 2.4GHz to mine properly.</strong>",
              "Enter your network's WiFi Password",
              'Scroll down and click <strong>"Save"</strong>. A popup will say "Success! Settings saved"',
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
            1. Connect to the Nerdaxe's WiFi network
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
      ) : isZyber ? (
        <>
          <div className="my-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-1 max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={zyberScreenImg} alt="Zyber screen showing WiFi network name" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Zyber screen showing WiFi network name
              </p>
            </div>
            <div className="flex-1 max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={zyberWifiGif} alt="Phone connecting to Zyber WiFi network" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Connect to the Zyber network from your phone's WiFi settings
              </p>
            </div>
          </div>

          <CheckList
            items={[
              "Your Zyber's screen will be in setup mode and display the name of the WiFi network it generates - i.e. <strong>Zyber(XXXX)</strong>",
              "On your phone/tablet/computer, open WiFi settings",
              'Look for a network with <strong>Zyber</strong> in the name - i.e. Zyber(XXXX)',
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
            1. Connect to the Zyber's WiFi network
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
          <CheckList
            items={[
              "On your phone/tablet/computer, open WiFi settings",
              `Look for a network created by your ${miner.name}`,
              "Select that network to connect",
              "Wait for the configuration page to appear",
            ]}
          />

          <div className="my-6 flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-lg overflow-hidden border border-bitcoin/30 shadow-lg shadow-bitcoin/10">
                <img src={axeosWifiSetupImg} alt="WiFi setup screen" className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Network Configuration screen
              </p>
            </div>
          </div>

          <InfoBox variant="info" className="mt-6">
            <strong className="text-foreground">💡 Can't find the WiFi network?</strong>
            <br />
            <br />
            • Make sure the miner has been powered on for at least 30 seconds
            <br />
            • Try restarting the miner
            <br />
            • Move closer to the device
          </InfoBox>
        </>
      )}
    </StepContainer>
  );
};

export default WifiStep;
