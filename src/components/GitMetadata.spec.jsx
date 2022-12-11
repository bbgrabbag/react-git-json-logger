import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { GitMetadata } from "./GitMetadata";
import {
  CustomTemplate,
  CUSTOM_TEMPLATE_TEST_ID,
  DEFAULT_TEMPLATE_TEST_ID,
  MOCK_METADATA,
} from "../test-utils/mock";

describe("Test <GitMetadata/> Component", () => {
  it(`Should throw with missing props: 'metadata'`, async () => {
    expect(() => render(<GitMetadata />)).toThrowError(
      `Invalid <GitMetadata> props: Must provide 'metadata' attribute`
    );
  });

  it("Should render default template with metadata populated", async () => {
    const cmp = render(<GitMetadata metadata={MOCK_METADATA} />);
    const parent = await cmp.findByTestId(DEFAULT_TEMPLATE_TEST_ID);
    expect(parent).toBeDefined();
    expect(parent).toMatchSnapshot();
  });

  it("Should render custom template with metadata populated", async () => {
    const cmp = render(
      <GitMetadata metadata={MOCK_METADATA} render={CustomTemplate} />
    );
    const parent = await cmp.findByTestId(CUSTOM_TEMPLATE_TEST_ID);
    expect(parent).toBeDefined();
    expect(parent).toMatchSnapshot();
  });
});
