import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Experiences } from "./payload/collections/Experiences";
import { Projects } from "./payload/collections/Projects";
import { Skills } from "./payload/collections/Skills";
import { SiteSettings } from "./payload/globals/SiteSettings";
import { SocialLinks } from "./payload/globals/SocialLinks";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Media, Experiences, Projects, Skills],
  globals: [SiteSettings, SocialLinks],
  secret: process.env.PAYLOAD_SECRET || "default-secret",
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/b-site",
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
