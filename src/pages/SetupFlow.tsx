import { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMiner, BitaxeVariant, bitaxeVariants, NerdqaxeVariant, nerdqaxeVariants, NerdminerVariant, nerdminerVariants } from "@/data/miners";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import WelcomeStep from "@/components/steps/WelcomeStep";
import PowerUpStep from "@/components/steps/PowerUpStep";
import WifiStep from "@/components/steps/WifiStep";
import FindIPStep from "@/components/steps/FindIPStep";
import ConfigureStep from "@/components/steps/ConfigureStep";
import ConfigureAllStep from "@/components/steps/ConfigureAllStep";
import HomeWifiStep from "@/components/steps/HomeWifiStep";
import StartMiningStep from "@/components/steps/StartMiningStep";
import SoloMiningStep from "@/components/steps/SoloMiningStep";
import NodeConnectStep from "@/components/steps/NodeConnectStep";
import NodeLoginStep from "@/components/steps/NodeLoginStep";
import NodeSyncStep from "@/components/steps/NodeSyncStep";
import NodePoolStep from "@/components/steps/NodePoolStep";
import NodeMonitorStep from "@/components/steps/NodeMonitorStep";
import CompleteStep from "@/components/steps/CompleteStep";
import { Button } from "@/components/ui/button";

// Step types for dynamic step rendering
type StepType =
  | "welcome"
  | "power"
  | "minerWifi"
  | "findIP"
  | "configure"
  | "configureAll"
  | "homeWifi"
  | "startMining"
  | "soloMining"
  | "complete";

// Default flow for Bitaxe/Nerdaxe/others
const DEFAULT_STEPS: StepType[] = [
  "welcome",
  "power",
  "minerWifi",
  "findIP",
  "configure",
  "startMining",
  "soloMining",
  "complete",
];

// Disruptor-specific flow (pool before home WiFi, Find IP is optional inline)
const DISRUPTOR_STEPS: StepType[] = [
  "welcome",
  "power",
  "minerWifi",
  "configure",
  "homeWifi",
  "startMining",
  "soloMining",
  "complete",
];

// Gold Digger flow - combines WiFi + Pool + Wallet in one step
const GOLDDIGGER_STEPS: StepType[] = [
  "welcome",
  "power",
  "minerWifi",
  "configureAll",
  "startMining",
  "soloMining",
  "complete",
];

// Gold Nugget flow - same as Gold Digger (combines WiFi + Pool + Wallet in one step)
const GOLDNUGGET_STEPS: StepType[] = [
  "welcome",
  "power",
  "minerWifi",
  "configureAll",
  "startMining",
  "soloMining",
  "complete",
];

// Nerd Miner flow - same as Gold Nugget (combines WiFi + Pool + Wallet in one step)
const NERDMINER_STEPS: StepType[] = [
  "welcome",
  "power",
  "minerWifi",
  "configureAll",
  "startMining",
  "soloMining",
  "complete",
];

// Get steps based on miner ID
const getStepsForMiner = (minerId: string): StepType[] => {
  if (minerId === "disruptor") return DISRUPTOR_STEPS;
  if (minerId === "golddigger") return GOLDDIGGER_STEPS;
  if (minerId === "goldnugget") return GOLDNUGGET_STEPS;
  if (minerId === "nerdminer") return NERDMINER_STEPS;
  return DEFAULT_STEPS;
};

const SetupFlow = () => {
  const { minerId } = useParams<{ minerId: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [btcAddress, setBtcAddress] = useState("");
  const [selectedBitaxeVariant, setSelectedBitaxeVariant] = useState<BitaxeVariant | undefined>(
    bitaxeVariants[0]
  );
  const [selectedNerdqaxeVariant, setSelectedNerdqaxeVariant] = useState<NerdqaxeVariant | undefined>(
    nerdqaxeVariants[0]
  );
  const [selectedNerdminerVariant, setSelectedNerdminerVariant] = useState<NerdminerVariant | undefined>(
    nerdminerVariants[0]
  );

  const miner = getMiner(minerId || "");
  const steps = useMemo(() => getStepsForMiner(minerId || ""), [minerId]);
  const TOTAL_STEPS = steps.length;

  // Load BTC address from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("btcAddress");
    if (saved) {
      setBtcAddress(saved);
    }
  }, []);

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  const nextStep = useCallback(() => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep, TOTAL_STEPS]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep]);

  const backToSelection = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentStep < TOTAL_STEPS - 1) {
        nextStep();
      } else if (e.key === "ArrowLeft" && currentStep > 0) {
        prevStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, nextStep, prevStep, TOTAL_STEPS]);

  useEffect(() => {
    if (!miner) {
      navigate("/");
    }
  }, [miner, navigate]);

  if (!miner) {
    return null;
  }

  const handleBtcAddressChange = (address: string) => {
    setBtcAddress(address);
    localStorage.setItem("btcAddress", address);
  };

  // Determine which variant to pass based on miner type
  const getSelectedVariant = () => {
    if (miner.hasBitaxeVariants) return selectedBitaxeVariant;
    if (miner.hasNerdqaxeVariants) return selectedNerdqaxeVariant;
    if (miner.hasNerdminerVariants) return selectedNerdminerVariant;
    return undefined;
  };

  const getVariantChangeHandler = () => {
    if (miner.hasBitaxeVariants) return setSelectedBitaxeVariant;
    if (miner.hasNerdqaxeVariants) return setSelectedNerdqaxeVariant;
    if (miner.hasNerdminerVariants) return setSelectedNerdminerVariant;
    return undefined;
  };

  // Get the display step number based on the current step type
  const getDisplayStepNumber = (stepType: StepType): number => {
    const index = steps.indexOf(stepType);
    return index >= 0 ? index : 0;
  };

  const renderStep = () => {
    const currentStepType = steps[currentStep];

    switch (currentStepType) {
      case "welcome":
        return (
          <WelcomeStep
            miner={miner}
            selectedVariant={getSelectedVariant()}
            onVariantChange={getVariantChangeHandler()}
            btcAddress={btcAddress}
            onBtcAddressChange={handleBtcAddressChange}
          />
        );
      case "power":
        return <PowerUpStep miner={miner} selectedVariant={getSelectedVariant()} />;
      case "minerWifi":
        return <WifiStep miner={miner} stepNumber={getDisplayStepNumber("minerWifi")} />;
      case "findIP":
        return <FindIPStep miner={miner} stepNumber={getDisplayStepNumber("findIP")} />;
      case "configure":
        return (
          <ConfigureStep
            miner={miner}
            btcAddress={btcAddress}
            onAddressChange={handleBtcAddressChange}
            stepNumber={getDisplayStepNumber("configure")}
          />
        );
      case "configureAll":
        return (
          <ConfigureAllStep
            miner={miner}
            btcAddress={btcAddress}
            onAddressChange={handleBtcAddressChange}
            stepNumber={getDisplayStepNumber("configureAll")}
          />
        );
      case "homeWifi":
        return <HomeWifiStep miner={miner} />;
      case "startMining":
        return (
          <StartMiningStep
            miner={miner}
            btcAddress={btcAddress}
            selectedVariant={getSelectedVariant()}
            stepNumber={getDisplayStepNumber("startMining")}
          />
        );
      case "soloMining":
        return (
          <SoloMiningStep
            miner={miner}
            selectedVariant={getSelectedVariant()}
            stepNumber={getDisplayStepNumber("soloMining")}
          />
        );
      case "complete":
        return (
          <CompleteStep
            miner={miner}
            btcAddress={btcAddress}
            selectedVariant={getSelectedVariant()}
            onBackToSelection={backToSelection}
          />
        );
      default:
        return null;
    }
  };

  const isLastStep = currentStep === TOTAL_STEPS - 1;

  return (
    <div className="min-h-screen safe-area-inset">
      <div className="bg-pattern" />
      <div className="container max-w-4xl">
        <Header />

        <div className="mb-4">
          <Button
            variant="outline"
            onClick={backToSelection}
            className="btn-ripple border-border hover:bg-secondary"
          >
            <span className="relative z-10">← Back to Miners</span>
          </Button>
        </div>

        <ProgressBar progress={progress} />

        <div className="animate-fade-in-up" key={currentStep}>
          {renderStep()}
        </div>

        {!isLastStep && (
          <div className="flex flex-col sm:flex-row gap-4 my-10">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={prevStep}
                className="btn-ripple border-border hover:bg-secondary"
              >
                <span className="relative z-10">← Previous Step</span>
              </Button>
            )}
            <Button
              onClick={nextStep}
              className="gradient-primary text-primary-foreground glow-primary btn-ripple sm:ml-auto"
            >
              <span className="relative z-10">
                {currentStep === TOTAL_STEPS - 2 ? "Complete Setup ✓" : "Next Step →"}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetupFlow;
