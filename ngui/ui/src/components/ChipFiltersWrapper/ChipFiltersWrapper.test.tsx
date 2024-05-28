import { createRoot } from "react-dom/client";
import TestProvider from "tests/TestProvider";
import ChipFiltersWrapper from "./ChipFiltersWrapper";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <TestProvider>
      <ChipFiltersWrapper chips={[]} />
    </TestProvider>
  );
  root.unmount();
});
