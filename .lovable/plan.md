

## Update Gold Digger Product Image

Replace the current Gold Digger miner image (`src/assets/miners/golddigger.jpg`) with the uploaded photo of the yellow cube miner.

### Steps

1. **Copy uploaded image** to `src/assets/miners/golddigger.png` (replacing the old `.jpg`)
2. **Update import** in `src/data/miners.ts` — change `golddigger.jpg` to `golddigger.png`

No other files reference the Gold Digger image directly; it flows through the `miner.image` property.

