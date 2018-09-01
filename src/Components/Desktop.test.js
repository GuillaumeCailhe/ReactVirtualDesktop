import React from "react";
import { mount } from "enzyme";
import Desktop from "./Desktop";

it("renders without crashing", () => {
  mount(
    <Desktop
      tasks={[]}
      windowMinimizeFunction={function() {}}
      windowCloseFunction={function() {}}
      windowFocusFunction={function() {}}
    />
  );
});
