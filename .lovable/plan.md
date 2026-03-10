

## Update Avalon Q Product Image

Replace the current Avalon Q image with the uploaded photo of the black tower miner.

### Steps

1. Copy `user-uploads://avalon_q.png` to `src/assets/miners/avalonq.png`
2. Update import in `src/data/miners.ts` — change `avalonq.webp` to `avalonq.png`

Note: The Avalon Q entry currently uses `goldnuggetImg` and the Gold Nugget uses `avalonqImg` (they're swapped per the memory note). We also need to fix the Gold Nugget to use the correct asset. Let me check the current state of miners.ts first.

Looking at the code: the Avalon Q miner uses `image: goldnuggetImg` and Gold Nugget uses `image: avalonqImg`. This is noted as intentional in the memory — the files were swapped to show correct photos. So:

- `avalonq.webp` file actually contains the Gold Nugget image → used by Gold Nugget entry
- `goldnugget.webp` file actually contains the Avalon Q image → used by Avalon Q entry

Now we're replacing the Avalon Q photo with the new upload. The Avalon Q entry uses `goldnuggetImg` (imported from `goldnugget.webp`). So we should either:
- Replace `goldnugget.webp` with the new image, or
- Create a new file and fix the import mapping

Cleanest approach: save the new image as `avalonq.png`, update the Avalon Q entry to use a new import for it, and leave Gold Nugget as-is.

### Changes

1. **Copy uploaded image** to `src/assets/miners/avalonq.png`
2. **`src/data/miners.ts`**:
   - Add new import: `import avalonqNewImg from "@/assets/miners/avalonq.png"`
   - Update the Avalon Q miner entry to use `image: avalonqNewImg` instead of `image: goldnuggetImg`
   - Remove the old `avalonqImg` import from `avalonq.webp` if it's only used by Gold Nugget — actually Gold Nugget uses `avalonqImg`, so keep that

