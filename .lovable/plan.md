

## Remove Header from Setup Flow

Remove the `<Header />` component from `src/pages/SetupFlow.tsx` since it's unnecessary once the user is already in the step-by-step guide.

### Changes

**`src/pages/SetupFlow.tsx`**:
- Remove the `import Header` line
- Remove the `<Header />` JSX element from the render

This keeps the "Back to Miners" button and progress bar at the top, giving more screen space to the actual setup content.

