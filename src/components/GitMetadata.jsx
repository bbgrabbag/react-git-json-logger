import React from "react";
import { DATA_TEST_ID } from "../config";

/**
 * @param {{
 *  metadata: object,
 *  filepath: string
 * }} props - React Component props
 *
 * @param {string} props.filepath - path to git metadata json file
 * @param {{
 *  author,
 *  commit,
 *  date,
 *  remotes
 *  }} props.metadata - git repository info
 * @param {(metadata) => JSX.element} render - custom renderer
 * @returns JSX.Element
 */
export const GitMetadata = (props) => {
  if (!props.metadata && !props.filepath)
    throw Error(
      `Invalid <GitMetadata> props: Must provide either 'metadata' or 'filepath'`
    );

  const metadata = React.useMemo(
    () => props.metadata || require(props.filepath),
    [props]
  );

  const defaultTemplate = React.useMemo(
    () => <div data-testid={DATA_TEST_ID}>data</div>,
    [props]
  );

  const template = React.useMemo(
    () => (props.render ? props.render(metadata) : defaultTemplate),
    [props]
  );

  return template;
};
