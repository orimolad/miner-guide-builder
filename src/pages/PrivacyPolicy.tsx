import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="bg-pattern" />
      <div className="container max-w-3xl py-8 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Bitcoin Merch Miner Guide
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last Updated: December 22, 2024
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              Information We Collect
            </h2>
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <p className="text-muted-foreground">
                The Bitcoin Merch Miner Guide app collects minimal data to provide you with a personalized setup experience:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>
                  <strong className="text-foreground">Bitcoin Wallet Address:</strong> If you choose to enter your wallet address during setup, it is stored locally on your device only.
                </li>
                <li>
                  <strong className="text-foreground">UI Preferences:</strong> Your sidebar state and other UI preferences may be stored as cookies on your device.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Provide a personalized miner setup experience</li>
                <li>Generate direct links to your pool statistics dashboard</li>
                <li>Remember your UI preferences for a better user experience</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              Data Storage
            </h2>
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <p className="text-muted-foreground">
                <strong className="text-foreground">All data is stored locally on your device.</strong>
              </p>
              <p className="text-muted-foreground">
                We do not transmit your wallet address or any personal information to our servers. Your data remains entirely on your device and under your control.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              Third-Party Services
            </h2>
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <p className="text-muted-foreground">
                This app may interact with the following third-party services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>
                  <strong className="text-foreground">Google Fonts:</strong> Used for typography styling
                </li>
                <li>
                  <strong className="text-foreground">External Links:</strong> The app contains links to Bitcoin Merch, mining pool dashboards, and app stores which have their own privacy policies
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              Your Rights
            </h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground">
                Since all data is stored locally on your device, you have complete control over it. You can clear your browser's localStorage and cookies at any time to remove all stored data from this app.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              Contact Us
            </h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us through the{" "}
                <a
                  href="https://bitcoinmerch.com/pages/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Bitcoin Merch contact page
                </a>
                .
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 Bitcoin Merch. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
