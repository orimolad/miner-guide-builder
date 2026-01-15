import { useState, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMiner, BitaxeVariant, bitaxeVariants, NerdqaxeVariant, nerdqaxeVariants } from "@/data/miners";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import WelcomeStep from "@/components/steps/WelcomeStep";
import PowerUpStep from "@/components/steps/PowerUpStep";
import WifiStep from "@/components/steps/WifiStep";
import FindIPStep from "@/components/steps/FindIPStep";
import ConfigureStep from "@/components/steps/ConfigureStep";
import StartMiningStep from "@/components/steps/StartMiningStep";
import SoloMiningStep from "@/components/steps/SoloMiningStep";
import CompleteStep from "@/components/steps/CompleteStep";
import { Button } from "@/components/ui/button";

const TOTAL_STEPS = 8;

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
  
  const miner = getMiner(minerId || "");

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
  }, [currentStep]);

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
  }, [currentStep, nextStep, prevStep]);

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
    return undefined;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <WelcomeStep
            miner={miner}
            selectedVariant={getSelectedVariant()}
            onVariantChange={miner.hasBitaxeVariants ? setSelectedBitaxeVariant : setSelectedNerdqaxeVariant}
            btcAddress={btcAddress}
            onBtcAddressChange={handleBtcAddressChange}
          />
        );
      case 1:
        return <PowerUpStep miner={miner} />;
      case 2:
        return <WifiStep miner={miner} />;
      case 3:
        return <FindIPStep miner={miner} />;
      case 4:
        return (
          <ConfigureStep
            miner={miner}
            btcAddress={btcAddress}
            onAddressChange={handleBtcAddressChange}
          />
        );
      case 5:
        return (
          <StartMiningStep
            miner={miner}
            btcAddress={btcAddress}
            selectedVariant={getSelectedVariant()}
          />
        );
      case 6:
        return (
          <SoloMiningStep
            miner={miner}
            selectedVariant={getSelectedVariant()}
          />
        );
      case 7:
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
    <div className="min-h-screen">
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