import { request } from "@octokit/request";
import fetch from "cross-fetch";
import { preference } from "./preference";
import { DEFAULT_REGISTRY_SOURCES, IRegistrySourceItem } from "./constants";

export const getRegistrySources = async () => {
  // console.log('preference', preference)

  if (!(preference.gistId && preference.personalAccessTokens)) {
    return DEFAULT_REGISTRY_SOURCES;
  }

  let content: string = "";

  try {
    const { data } = await request(`GET /gists/${preference.gistId}`, {
      gist_id: preference.gistId,
      headers: {
        accept: "application/vnd.github+json",
        authorization: `token ${preference.personalAccessTokens}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      request: {
        fetch,
      },
    });

    // console.log('响应内容', data)

    content = data?.files?.[preference.filename]?.content || "";

    // console.log('获取到的内容', content)
    if (content) {
      return JSON.parse(content.trim()) as IRegistrySourceItem[];
    }

    return DEFAULT_REGISTRY_SOURCES;
  } catch (ex) {
    console.error(ex, content);

    return DEFAULT_REGISTRY_SOURCES;
  }
};
