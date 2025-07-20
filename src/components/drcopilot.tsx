"use client";

import { CopilotPopup } from "@copilotkit/react-ui";

export default function CopilotPopupChat() {
  return (
    <CopilotPopup
      instructions="You are assisting the user as best as you can. Answer in the best way possible given the data you have."
      labels={{
        title: "Soulful Dental Care Assistant",
        initial: "Hello, I am Soulful Chat, here to help with any Dental Queries?",
      }}
    />
  );
}
