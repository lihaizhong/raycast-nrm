/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Personal Access Token - GitHub personal access tokens. */
  "access-token"?: string,
  /** Gist ID - set gist id */
  "gist-id"?: string,
  /** File Name - set file name of gist */
  "filename": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `main` command */
  export type Main = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `main` command */
  export type Main = {}
}

