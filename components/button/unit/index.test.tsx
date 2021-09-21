import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from "enzyme";
import Button from "..";

describe("Button", () => {
  it("mount correctly", () => {
    expect(() => mount(<Button />)).not.toThrow();
  });
});
