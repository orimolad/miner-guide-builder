

## Add X Node Mini Setup Guide

The X Node Mini is fundamentally different from existing miners — it's a **Bitcoin full node** running Umbrel OS. It needs a unique step flow with new step components for Umbrel login, blockchain sync, and Public Pool setup.

### Missing Assets

The guide references 9 images. You uploaded 6 of them. These 3 are still missing:
- **`nodeplugin.gif`** — Step 1, showing Ethernet + power connection
- **`nodelogin.png`** — Step 2, showing Umbrel login screen
- **`avalonnode.png`** — Step 5, showing Avalon Family App pool config

I will use placeholder sections for these 3 until you upload them.

### Asset Mapping (6 uploaded)

- `user-uploads://X_NODE_APP_PHOTO.png` → `src/assets/miners/xnodemini.png` (card image)
- `user-uploads://nodesettings.png` → `src/assets/instructions/nodesettings.png`
- `user-uploads://bitcoincoresyncing.png` → `src/assets/instructions/bitcoincoresyncing.png`
- `user-uploads://publicpool.png` → `src/assets/instructions/publicpool.png`
- `user-uploads://bitaxenode.png` → `src/assets/instructions/bitaxenode.png`
- `user-uploads://publicpoolwithminers.png` → `src/assets/instructions/publicpoolwithminers.png`
- `user-uploads://nodedashboard.png` → `src/assets/instructions/nodedashboard.png`

### Technical Plan

#### 1. `src/data/miners.ts`
- Add new miner entry: `id: "xnodemini"`, `name: "X Node Mini"`, `isUsbPowered: false`, `hasDisplay: false`, `image: xnodeminiImg`
- No variants needed

#### 2. `src/pages/SetupFlow.tsx`
- Add `XNODEMINI_STEPS`: `welcome → nodeConnect → nodeLogin → nodeSettings → nodeSync → nodePool → nodeMonitor → complete`
- These are mostly **new step types** since the flow is entirely different from miners
- Wire into `getStepsForMiner`

#### 3. New Step Components (4 new files)

**`src/components/steps/NodeConnectStep.tsx`** — Step 1: "Connect and Power On"
- Checklist: Ethernet cable → plug in power → wait 1-2 min
- Note about fan behavior
- Show `nodeplugin.gif` (placeholder until uploaded)
- Power indicators: LED lights, fans spinning

**`src/components/steps/NodeLoginStep.tsx`** — Steps 2+3: "Connect to Your Node" + "Change Your Settings"
- Navigate to `http://umbrel.local`
- Fallback: router IP lookup
- Default credentials: `root` / `123456`
- Show `nodelogin.png` (placeholder until uploaded)
- Settings section: change username/password, see IP address, WiFi option
- Show `nodesettings.png`
- Note: recommended to use Ethernet during sync

**`src/components/steps/NodeSyncStep.tsx`** — Step 4: "Sync Your Bitcoin Node"
- Launch Bitcoin Node from Umbrel
- Automatic blockchain sync
- Show `bitcoincoresyncing.png`
- Keep powered and connected
- Monitor from Umbrel dashboard

**`src/components/steps/NodePoolStep.tsx`** — Step 5: "Set Up Your Personal Mining Pool"
- Note: Bitcoin Core must be fully synced first
- Open Public Pool on Umbrel
- Show `publicpool.png` with stratum host/port
- Show `bitaxenode.png` (AxeOS example)
- Show `avalonnode.png` placeholder
- Miners must be on same WiFi as Node

**`src/components/steps/NodeMonitorStep.tsx`** — Step 6: "Monitor Your Pool"
- Dashboard stats: connected miners, hashrate, shares, block submissions, pool uptime
- Show `publicpoolwithminers.png`

#### 4. Modify existing `WelcomeStep.tsx`
- Add `isXNodeMini` check
- Title: "X Node Mini"
- Checklist: Ethernet cable, WiFi network, PC/laptop/smartphone/tablet, Power outlet
- BTC address input (same pattern)
- No variant selector needed

#### 5. Modify existing `CompleteStep.tsx`
- Add `isXNodeMini` check
- Congratulations: "You now have: A fully synced Bitcoin full node, A private mining pool powered by your own hardware, Local control over validation, rewards, and privacy"
- "Welcome to true Bitcoin sovereignty — all running on your X Node Mini"
- Show `nodedashboard.png`
- No pool stats button (different from miners)

#### 6. `SetupFlow.tsx` step rendering
- Map new step types to new components
- No `soloMining` or `startMining` steps for this device
- No variant handling needed

