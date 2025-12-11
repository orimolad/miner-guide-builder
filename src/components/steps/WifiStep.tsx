import StepContainer from "../StepContainer";
import CheckList from "../CheckList";
import InfoBox from "../InfoBox";

const WifiStep = () => {
  return (
    <StepContainer stepNumber={2} title="Connect to Your Miner's Wi-Fi Network">
      <p className="mb-4">
        Your miner creates its own Wi-Fi network for initial setup. Let's connect to it!
      </p>
      
      <CheckList
        items={[
          "On your phone or computer, open Wi-Fi settings",
          'Look for a network named something like <strong>"Bitaxe"</strong>, <strong>"NerdMiner"</strong>, or similar',
          "Select that network to connect",
          'If prompted for a password, check the device manual or try common defaults like <strong>"password"</strong> or <strong>"12345678"</strong>',
        ]}
      />
      
      <InfoBox variant="info">
        <strong className="text-foreground">💡 Can't find the Wi-Fi network?</strong>
        <br />
        • Make sure the miner has been powered on for at least 30 seconds
        <br />
        • Try restarting the miner
        <br />
        • Move closer to the device
        <br />
        • Check if the miner has a physical Wi-Fi button that needs to be pressed
      </InfoBox>
      
      <p className="mt-4">
        Once connected, you should see the network name in your Wi-Fi settings. You might see a "No Internet" warning - that's normal!
      </p>
    </StepContainer>
  );
};

export default WifiStep;
