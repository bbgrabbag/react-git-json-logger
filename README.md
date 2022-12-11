# React Git JSON Logger

## React component for rendering git repository metadata

> **Note**
>
> Use in tandem with [Git JSON Logger CLI](https://github.com/bbgrabbag/git-json-logger-cli) for easiest implementation

##### [Release Notes](/changelog.md)

---

### Get Started

- Install packages

```bash
npm i react-git-json-logger
npm i -D git-json-logger-cli
```

- Add CLI script to package.json (see [API reference](https://github.com/bbgrabbag/git-json-logger-cli#api-reference) for a list of command options). This will generate a JSON file containing metadata about the current git repository.
> **Note**
>
> Don't forget to add the name of the auto-generated JSON file to your project's `.gitignore`.


```json
"scripts": {
    "git-logger":"git-logger",
}
```

- Add `pre*` scripts so that the metadata file is generated automatically before builds:

```json
    // In a CRA project, for example:
"scripts": {
    "prestart": "git-logger --outdir ./src",
    "prebuild": "git-logger --outdir ./src",
}
```

- import `GitMetadata` component and JSON file generated by `git-logger` script

```tsx
import {GitMetadata} from "react-git-json-logger";
import gitMetadata from 'path/to/git-metadata.json' // output filepath is determined by `git-logger` script above

export Demo = props => {
    return (
        <div>
            <h3>Git Metadata</h3>
            <GitMetadata metadata={gitMetadata}>
        </div>
    )
}
```

- The current git user, latest commit hash/date, current branch and list of remote URL's will be displayed:
  ![Demo render](/screenshots/git-metadata.PNG)

---

### Custom Rendering

If the default UI is not desirable, `GitMetadata` can receive a prop called `render` which takes a function and provides it the raw metadata object as a parameter:

```js
<GitMetadata
  metadata={gitMetadata}
  render={(metadata) => <p>Latest Commit: {metadata.commit}</p>}
/>
```

---

### Typescript

A declaration file is provided which contains type definitions for `GitMetadata`, `IGitMetadata`, and `IGitMetadataProps` which is helpful for enforcing types on your own custom components.

```ts
import {
  IGitMetadataProps,
  IGitMetadata,
  GitMetadata,
} from "react-git-json-logger";
```

---

### Troubleshooting

- Make sure your project is a git repository and that it has at least one commit in its history, or else the `git-logger` CLI script will fail.

---

### API Reference

`IGitMetadata`
Attribute Name | Type | Description
--- | --- | ---
`user` | `string` | Current git repository user
`commit` | `string` | Hash of latest commit
`branch` | `string` | Current branch
`date` | `string` | ISO date string of latest commit
`remotes` | `Array<{name: string, url: string}>` | List of remote repository URL's linked to the current git repository

`IGitMetadataProps`
| Attribute Name | Type | Description |
| -------------- | -------------- | ----------- |
| `metadata` (required) | `IMetadata` | Object representing raw git repository data
| `render` (optional) | `React.FC<IGitMetadata>` | Overrides default UI

`GitMetadata`
Type | Description |
--- | --- |
`React.FC<IGitMetadataProps>` | React component for rendering git repository metadata
