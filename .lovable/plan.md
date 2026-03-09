

## Fix Gold Nugget Text Discrepancies

After comparing the spec against the current code, here are the differences to fix:

### 1. WelcomeStep.tsx — Gold Nugget-specific tweaks
- **Checklist order**: For Gold Nugget, swap items 2 & 3 so order is: "Powering up", "Configuring wallet and mining pool", "Connecting to Wi-Fi", "Verifying", "Understanding"
- **"What You'll Need"**: Change "AC Power Outlet" → "USB Power Source" when miner is Gold Nugget
- **Label text**: Change "for easy reference later" → "for reference later"

### 2. WifiStep.tsx — Fix case-sensitive note
- "Note: This is case sensitive" is currently a separate ✔ checklist item. It should be part of the password bullet (not its own checkmark line). Merge it into the password item as an indented note.

### 3. ConfigureAllStep.tsx — Minor text fixes
- Change "⚠️ CRITICAL: Change the Default Wallet!" → "⚠️ CRITICAL: Change the Wallet!" (for Gold Nugget)
- Move the 2.4GHz note from a separate InfoBox into the checklist as an inline note under the "Select your network" item

### 4. StartMiningStep.tsx — Use CheckList instead of paragraph
- For Gold Nugget, change `<p>Check the miner's screen...</p>` to a `<CheckList>` with one item: "Check the miner's screen. Your hashrate will show measured in KH/s"

All changes are small text/structure tweaks — no new components or logic needed.

