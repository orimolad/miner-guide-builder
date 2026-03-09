

## Add Missing X Node Mini Images

Replace the 3 placeholder sections with the uploaded images:

1. **`nodeplugin.gif`** → `src/assets/instructions/nodeplugin.gif` — used in `NodeConnectStep.tsx`, replace placeholder div
2. **`nodelogin.png`** → `src/assets/instructions/nodelogin.png` — used in `NodeLoginStep.tsx`, replace placeholder div
3. **`avalonnode.png`** → `src/assets/instructions/avalonnode.png` — used in `NodePoolStep.tsx`, replace placeholder div

### Changes

- Copy 3 assets from user-uploads to `src/assets/instructions/`
- **`NodeConnectStep.tsx`**: Import `nodeplugin.gif`, replace the placeholder `<div>` with an `<img>` tag
- **`NodeLoginStep.tsx`**: Import `nodelogin.png`, replace the placeholder `<div>` with an `<img>` tag
- **`NodePoolStep.tsx`**: Import `avalonnode.png`, replace the "Avalon Family App image coming soon" placeholder with an `<img>` tag

