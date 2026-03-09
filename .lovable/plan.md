

## Add Nerd Miner Hashing GIFs

The user has uploaded the two missing hashing images. The plan:

### 1. Copy assets
- `user-uploads://standardhashing.gif` → `src/assets/instructions/standardhashing.gif`
- `user-uploads://largescreenhashing.gif` → `src/assets/instructions/largescreenhashing.gif`

### 2. Update `src/components/steps/StartMiningStep.tsx`
- Import `standardhashing.gif` and `largescreenhashing.gif`
- In the `isNerdminer` block, replace the Gold Nugget placeholder GIF with variant-specific images:
  - Standard variant → `standardhashing.gif`
  - Large Screen variant → `largescreenhashing.gif`
- Update captions accordingly ("Nerd Miner Standard screen..." / "Nerd Miner Large Screen screen...")

