import React from "react";

interface IGitMetadata {
  // info
}

type IGitMetadataProps = {
  render?: React.FC<IGitMetadata>;
} & (
  | {
      metadata: IGitMetadata;
    }
  | {
      filepath: string;
    }
);

export const GitMetadata: React.FC<IGitMetadataProps>;
