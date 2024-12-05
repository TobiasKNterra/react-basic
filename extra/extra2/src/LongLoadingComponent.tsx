import { useEffect } from "react";

export default function LongLoadingComponent() {
  useEffect(() => {
    // Simulate a long loading component
    const elmt = document.getElementById("long-loading") as HTMLElement;
    elmt.innerText = "loading ...";
    setTimeout(() => {
      elmt.innerText =
        "Component loaded. This component is used to simulate a long loading component.";
    }, 5000);
  });

  return <div id="long-loading">loading ...</div>;
}
