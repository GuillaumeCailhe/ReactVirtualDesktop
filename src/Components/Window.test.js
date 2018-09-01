import React from "react";
import { shallow } from "enzyme";
import Window from "./Window";

it("renders without crashing", () => {
  shallow(
    <Window
      id={0}
      maxWidth={0}
      maxHeight={0}
      minimizeFunction={function() {}}
      closeFunction={function() {}}
      focusFunction={function() {}}
    />
  );
});
