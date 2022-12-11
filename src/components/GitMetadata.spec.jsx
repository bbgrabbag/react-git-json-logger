import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { GitMetadata } from "./GitMetadata";
import { DATA_TEST_ID } from "../config";

describe("Test <GitMetadata/> Component", () => {
  it(`Should throw with missing props: 'metadata', 'filepath' `, async () => {
    expect(() => render(<GitMetadata />)).toThrow(
      `Invalid <GitMetadata> props: Must provide either 'metadata' or 'filepath'`
    );
  });

  it("Should render default template with metadata provided", async () => {
    const cmp = render(<GitMetadata metadata={{}} />);
    const el = await cmp.findByTestId(DATA_TEST_ID);
    expect(el).toBeDefined();
  });
});
