

## Gold Nugget Miner Setup Guide Implementation

### Summary
Add full setup flow support for the Gold Nugget miner, which currently exists in the data but lacks proper configuration. The Gold Nugget follows a flow similar to the Gold Digger — combining WiFi, Pool, and Wallet in a single "configureAll" step.

### Changes Required

**1. Copy uploaded assets to `src/assets/instructions/`**
- `plugingoldnugget.gif`, `goldnuggetwifi.gif`, `goldnuggetpool.PNG`, `goldnuggethashing.gif`

**2. Fix Gold Nugget miner data (`src/data/miners.ts`)**
- Change `hasDisplay: false` → `hasDisplay: true` (it has a screen)
- Change `hashrate` to `~300 KH/s` and `power` to `<3W`
- Fix image: currently uses `avalonqImg` (wrong) — import and use the actual Gold Nugget image (`goldnugget.webp` already exists in assets)
- Fix Avalon Q: it's currently using `goldnuggetImg` — swap the images so each miner has the correct one

**3. Add Gold Nugget step flow (`src/pages/SetupFlow.tsx`)**
- Add `GOLDNUGGET_STEPS` matching the Gold Digger flow: `welcome → power → minerWifi → configureAll → startMining → soloMining → complete`
- Update `getStepsForMiner()` to return this flow for `"goldnugget"`

**4. Add Gold Nugget content to step components**
- **PowerUpStep.tsx**: Add `goldnugget` case with USB power instructions, `plugingoldnugget.gif` image, and checklist (connect USB, wait for QR code/WiFi info)
- **WifiStep.tsx**: Add `goldnugget` case — SSID: `NerdMinerAP`, Password: `MineYourCoins`, show `goldnuggetwifi.gif`, include captive portal fallback (`http://192.168.4.1/`)
- **ConfigureAllStep.tsx**: Add `goldnugget` conditional content — pool fields use `Pool URL` + `Pool Port` (separated) instead of `stratum+tcp://` format, show `goldnuggetpool.PNG`
- **StartMiningStep.tsx**: Add `goldnugget` case — show `goldnuggethashing.gif`, hashrate in KH/s
- **SoloMiningStep.tsx**: Add `goldnugget` case — 300 KH/s = 300,000 hashes/second
- **CompleteStep.tsx**: Ensure Gold Nugget displays correct specs in summary

### Technical Notes
- The Gold Nugget uses `NerdMinerAP` WiFi (not `nmap-2.4g` like Gold Digger) with password `MineYourCoins`
- Pool config uses separate URL and Port fields (not combined `stratum+tcp://` format)
- The guide skips step 4 (goes from step 3 to step 5) — this is because the "configureAll" step combines what would be steps 3-4, so numbering will be handled naturally by the step flow system

