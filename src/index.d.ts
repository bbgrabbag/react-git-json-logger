import React from "react";

export interface IGitMetadata {
  user: string;
  commit: string;
  branch: string;
  date: string;
  remotes: Array<{
    name: string;
    url: string;
  }>;
}

export type IGitMetadataProps = {
  render?: React.FC<IGitMetadata>;
  metadata: IGitMetadata;
};

export const GitMetadata: React.FC<IGitMetadataProps>;
