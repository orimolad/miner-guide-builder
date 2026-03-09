

## Fix Swapped Gold Nugget / Avalon Q Images

The image files themselves are mislabeled — `goldnugget.webp` actually contains the Avalon Q hardware photo and `avalonq.webp` contains the Gold Nugget device photo.

### Fix in `src/data/miners.ts`

Swap the image assignments:
- Gold Nugget (line 191): change `goldnuggetImg` → `avalonqImg`
- Avalon Q (line 213): change `avalonqImg` → `goldnuggetImg`

This is a 2-line change. No other files affected.

