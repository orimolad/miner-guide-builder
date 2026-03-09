

## Split NodeLogin into Two Steps

Currently, "Connect to Your Node" (login) and "Change Your Settings" are combined in one step. Split them into two separate steps.

### Changes

1. **New step type `"nodeSettings"` in `SetupFlow.tsx`**
   - Add `"nodeSettings"` to the `StepType` union
   - Insert it into `XNODEMINI_STEPS` after `"nodeLogin"`: `welcome → nodeConnect → nodeLogin → nodeSettings → nodeSync → nodePool → nodeMonitor → complete`
   - Add case in `renderStep()` for `"nodeSettings"` rendering a new `NodeSettingsStep` component

2. **Trim `NodeLoginStep.tsx`** — Remove everything after the login image (lines 47-71: the "Change Your Settings" section)

3. **New `src/components/steps/NodeSettingsStep.tsx`** — "Change Your Settings"
   - Contains the settings icon instruction, `nodesettings.png` image, checklist (change password, IP address, WiFi), and Ethernet recommendation InfoBox
   - Receives `miner` and `stepNumber` props

