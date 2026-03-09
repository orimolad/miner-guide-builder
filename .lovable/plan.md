

## Add USB Nerd Miner with Standard/Large Screen Variants

A new miner entry with two variants, following the exact text from the provided spec.

### 1. Copy uploaded assets

- `user-uploads://USB_MINER_MAIN_PHOTO_FOR_APP.jpg` → `src/assets/miners/nerdminer.jpg`
- `user-uploads://pluginstandard.gif` → `src/assets/instructions/pluginstandard.gif`
- `user-uploads://pluginlargescreen.gif` → `src/assets/instructions/pluginlargescreen.gif`
- `user-uploads://nerdminerwifi.gif` → `src/assets/instructions/nerdminerwifi.gif`
- `user-uploads://usbminersettings.PNG` → `src/assets/instructions/usbminersettings.png`

### 2. `src/data/miners.ts`

- Add `NerdminerVariant` interface and `nerdminerVariants` array:
  - Standard: id `"standard"`, name `"Standard"`, hashrate `"55KH/s"`, hashrateValue `55`, power `"<1W"`
  - Large Screen: id `"large-screen"`, name `"Large Screen"`, hashrate `"250KH/s"`, hashrateValue `250`, power `"<1W"`
- Add `hasNerdminerVariants?: boolean` to `Miner` interface
- Add miner entry: id `"nerdminer"`, name `"Nerd Miner"`, hashrate `"55KH/s"`, power `"<1W"`, defaultIP `"192.168.4.1"`, isUsbPowered true, hasDisplay true, hasNerdminerVariants true
- Add `getNerdminerVariant` helper

### 3. `src/pages/SetupFlow.tsx`

- Import `NerdminerVariant`, `nerdminerVariants`
- Add `NERDMINER_STEPS` = welcome → power → minerWifi → configureAll → startMining → soloMining → complete
- Add `selectedNerdminerVariant` state (default: `nerdminerVariants[0]`)
- Wire into `getStepsForMiner`, `getSelectedVariant`, and `onVariantChange`
- Pass `selectedVariant` to `PowerUpStep` (new prop needed)

### 4. `src/components/steps/WelcomeStep.tsx`

- Import `NerdminerVariant`, `nerdminerVariants`
- Add `isNerdminer = miner.hasNerdminerVariants` flag
- Include in `hasVariants` check
- `getTitle()` → return `"Nerd Miner"` for nerdminer
- Variant dropdown label: `"Select your Nerd Miner Model:"`
- Dropdown items show just name (Standard / Large Screen) without hashrate to match spec "Select your Bitaxe Model:" pattern but with label items `Standard` and `Large Screen`
- Specs box: show `"USB Miner"` or `"USB Miner Large Screen"` as display name based on variant
- Checklist order same as goldnugget (wallet before WiFi)
- "What You'll Need" → "USB Power Source"
- Handle variant change for nerdminer variants

### 5. `src/components/steps/PowerUpStep.tsx`

- Add `selectedVariant` as optional prop
- Add `isNerdminer = miner.id === "nerdminer"` check
- Import `pluginstandard.gif` and `pluginlargescreen.gif`
- Text exactly: `"Your Nerd Miner is USB-powered, making setup incredibly simple!"`
- Show variant-specific GIF (pluginstandard vs pluginlargescreen based on `selectedVariant?.id`)
- Checklist exactly:
  - `"Plug the Nerd Miner to USB port"`
  - `"Wait for the software to load. When it is done, it will prompt you to connect to its WiFi to begin setup."`

### 6. `src/components/steps/WifiStep.tsx`

- Add `isNerdminer = miner.id === "nerdminer"` check
- Title: `"Connect to your miner via WiFi"`
- Intro: `"Your miner creates its own temporary WiFi network for initial setup. Let's connect to it!"`
- Import and show `nerdminerwifi.gif`
- Checklist exactly:
  - `"On your phone/tablet/computer, open WiFi settings"`
  - `"Look for a network SSID called NerdMinerAP"`
  - `"Enter the password MineYourCoins" + Note: This is case sensitive`
  - `"Select that network to connect and wait several seconds. A captive WiFi screen will appear with the device's setup screen"`
- Can't find WiFi info box (same as goldnugget)
- Warning box: says "miner's WiFi network" (not "Gold Nugget's"), fallback to `http://192.168.4.1/`

### 7. `src/components/steps/ConfigureAllStep.tsx`

- Add `isNerdminer = miner.id === "nerdminer"` check
- Title intro: `"Time to configure your miner!"` (not miner.name)
- Import and show `usbminersettings.png` for nerdminer
- Same checklist as goldnugget but text says "Configure WiFi button" (same)
- Warning: `"⚠️ CRITICAL: Change the Wallet!"` (same as goldnugget)
- Pool settings: Pool URL / Pool Port / BTC Address format (same as goldnugget)
- Save checklist: `"Scroll down and press "Save""` + `"Your device will restart automatically"`

### 8. `src/components/steps/StartMiningStep.tsx`

- Add `isNerdminer = miner.id === "nerdminer"` check
- "On Your Device:" section with CheckList: `"Check the miner's screen. Your hashrate will show measured in KH/s"`
- Show goldnugget hashing gif as placeholder (no specific hashing images provided)
- Caption: "Nerd Miner screen displaying hashrate in KH/s"
- Expected hashrate: variant-dependent (`"~55 KH/s"` or `"~250 KH/s"`)

### 9. `src/components/steps/SoloMiningStep.tsx`

- Add `isNerdminer = miner.id === "nerdminer"` and `isNerdminerVariant` checks
- Device name: `"Nerd Miner"`
- Hashrate description based on variant:
  - Standard: `"~55 KH/s (55,000 hashes / second)"`
  - Large Screen: `"~250 KH/s (250,000 hashes / second)"`

### 10. `src/components/steps/CompleteStep.tsx`

- Add `isNerdminer = miner.id === "nerdminer"` check
- Congratulations text: `"Your Nerd Miner is now mining for Bitcoin!"`
- Quick Reference:
  - Standard: Miner `"Nerd Miner"`, Hash Rate `"~75 KH/s"` (per spec)
  - Large Screen: Miner `"Nerd Miner Large Screen"`, Hash Rate `"~250KH/s"`
- Next Steps checklist (NO "well-ventilated area" item per spec):
  - `"Monitor your stats regularly on the pool dashboard"`
  - `"Join the Bitcoin Merch community for tips"`

### Missing assets note

No `standardhashing.gif` or `largescreenhashing.gif` were provided. The Gold Nugget hashing GIF will be used as a temporary placeholder for both variants.

