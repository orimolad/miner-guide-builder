import { Miner } from "@/data/miners";
import StepContainer from "../StepContainer";
import CheckList from "../CheckList";

interface HomeWifiStepProps {
  miner: Miner;
}

const HomeWifiStep = ({ miner }: HomeWifiStepProps) => {
  return (
    <StepContainer stepNumber={4} title="Connect to Your WiFi Network">
      <p className="mb-4">
        Once you connect the {miner.name} to your network, it will generate a new IP address for the device's AxeOS web interface.
      </p>

      <CheckList
        items={[
          "From the Menu, navigate to <strong>Network</strong>",
          "In the WiFi SSID field, enter your home network's name. <strong>Please note this is case sensitive and must be 2.4GHz to mine properly.</strong>",
          "Enter your WiFi Password",
          'Click <strong>"Save"</strong>. A popup will say "Success! Settings saved"',
          'Click <strong>"Restart"</strong> and wait for the restart to complete.',
        ]}
      />
    </StepContainer>
  );
};

export default HomeWifiStep;
