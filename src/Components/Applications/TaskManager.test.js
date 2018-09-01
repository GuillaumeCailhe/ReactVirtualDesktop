import React from "react";
import { shallow } from "enzyme";
import TaskManager from "./TaskManager";

it("renders without crashing", () => {
  shallow(<TaskManager tasks={[]} killFunction={function() {}} />);
});
