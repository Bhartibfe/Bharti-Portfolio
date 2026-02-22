import type { GlobalConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "tagline", type: "text", required: true },
        { name: "bio", type: "textarea", required: true },
        { name: "avatarUrl", type: "text" },
        { name: "resumeUrl", type: "text" },
      ],
    },
    {
      name: "about",
      type: "group",
      fields: [
        {
          name: "stats",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "value", type: "number", required: true },
            { name: "suffix", type: "text" },
          ],
        },
      ],
    },
    {
      name: "contact",
      type: "group",
      fields: [
        { name: "email", type: "email", required: true },
        { name: "location", type: "text", required: true },
      ],
    },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        { name: "siteUrl", type: "text" },
      ],
    },
    {
      name: "skillIconSlugs",
      type: "array",
      fields: [
        { name: "slug", type: "text", required: true },
      ],
    },
  ],
};
