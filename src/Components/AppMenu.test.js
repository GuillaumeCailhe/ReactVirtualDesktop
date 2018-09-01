import React from "react";
import { shallow } from "enzyme";
import AppMenu from "./AppMenu";

it("renders without crashing", () => {
  shallow(
    <AppMenu
      applications={[]}
      closeMenuFunction={function() {}}
      createTaskFunction={function() {}}
      menuZIndex={1000}
    />
  );
});
