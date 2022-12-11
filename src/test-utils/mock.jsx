import * as React from "react";

export const DEFAULT_TEMPLATE_TEST_ID = "rgjs__default-template";
export const CUSTOM_TEMPLATE_TEST_ID = "rgjs__custom-template";
export const MOCK_METADATA = {
  user: "Ben Turner <bbgrabbag@gmail.com>",
  branch: "master",
  commit: "76a24814698de41e5acf369c65575c83144c4726",
  date: "2022-12-11T02:39:34.000Z",
  remotes: [
    {
      name: "origin",
      url: "git@github.com:bbgrabbag/react-git-json-logger.git (fetch)",
    },
    {
      name: "origin",
      url: "git@github.com:bbgrabbag/react-git-json-logger.git (push)",
    },
  ],
};
export const CustomTemplate = (props) => {
  return (
    <div data-testid={CUSTOM_TEMPLATE_TEST_ID}>
      <p>
        <b>User</b>:{props.metadata.user}
      </p>
    </div>
  );
};
