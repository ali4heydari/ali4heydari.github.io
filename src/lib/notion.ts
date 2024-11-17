import { env } from "src/env";
import { Client } from "@notionhq/client";

export const notionClient = new Client({
  auth: env.NOTION_TOKEN,
});
