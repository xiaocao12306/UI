import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main style={{ fontFamily: "ui-sans-serif, system-ui", padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Aurora Storybook Playground</h1>
      <p>Use <code>pnpm --filter @aurora-ui/storybook-app storybook</code> to start Storybook.</p>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
