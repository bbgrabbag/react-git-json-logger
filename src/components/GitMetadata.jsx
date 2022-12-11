import React from "react";
import { DEFAULT_TEMPLATE_TEST_ID } from "../test-utils/mock.jsx";

/**
 * @param {object} props.metadata git repo info: user, branch, commit, date, remotes
 * @param {(metadata) => JSX.Element} props.render custom render component
 * @returns {JSX.Element} JSX Element
 */
export const GitMetadata = (props) => {
  if (!props.metadata)
    throw Error(
      `Invalid <GitMetadata> props: Must provide 'metadata' attribute`
    );

  if (props.render) return props.render({ metadata: props.metadata });

  return (
    <div
      data-testid={DEFAULT_TEMPLATE_TEST_ID}
      style={{ fontFamily: "monospace", padding: "1rem" }}
    >
      {Object.keys(props.metadata).map((k) =>
        k === "remotes" ? (
          <div key={k}>
            <p>
              <b>{k}</b>:
            </p>
            <ul>
              {props.metadata[k].map((remote, i) => {
                return (
                  <li key={remote + i}>
                    <b>{remote.name}</b>: <span>{remote.url}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p key={k}>
            <b>{k}</b>: <span>{props.metadata[k]}</span>
          </p>
        )
      )}
    </div>
  );
};
