import config from "@/config";
import { defineLive } from "next-sanity";
import "server-only";

import { client } from "./client";

export const {
  SanityLive,
  SanityLiveStream,
  sanityFetch,
  // verifyPreviewSecret
} = defineLive({
  browserToken: config.sanity.token,
  client,
  serverToken: config.sanity.token,
});
