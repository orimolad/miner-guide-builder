

## Fix Scroll-to-Top on Step Change

The code already has `window.scrollTo({ top: 0, behavior: "smooth" })` in `nextStep` and `prevStep`, but it may not work because the scrolling container might not be `window` — it could be a nested container or the `document.documentElement`.

### Change

In `src/pages/SetupFlow.tsx`, replace both `window.scrollTo` calls with a more robust approach that scrolls both `window` and `document.documentElement` to the top, and also add a `useEffect` on `currentStep` as a fallback to ensure scroll happens after re-render:

```ts
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, [currentStep]);
```

This ensures that regardless of which element is the scroll container, the page scrolls to top whenever the step changes (including via keyboard arrows, button clicks, or any other mechanism).

