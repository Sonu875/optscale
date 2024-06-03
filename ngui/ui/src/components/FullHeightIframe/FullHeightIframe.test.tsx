import { createRoot } from "react-dom/client";
import TestProvider from "tests/TestProvider";
import FullHeightIframe from "./FullHeightIframe";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <TestProvider>
      <FullHeightIframe
        source=""
        iframeTitleMessageId="title"
        fallbackUrl=""
        fallbackMessageId="unableToLoad"
        fallbackButtonMessageId="proceedToFinopsWebsite"
      />
    </TestProvider>
  );
  root.unmount();
});
