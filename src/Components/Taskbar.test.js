import React from "react";
import { shallow } from "enzyme";
import Taskbar from "./Taskbar";

it("renders without crashing", () => {
  shallow(
    <Taskbar
      tasks={[]}
      onTaskClick={function() {}}
      openAppMenuFunction={function() {}}
    />
  );
});
