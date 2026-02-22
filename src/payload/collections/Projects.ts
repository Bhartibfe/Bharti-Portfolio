import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: isPublic,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "techStack",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "liveUrl",
      type: "text",
    },
    {
      name: "githubUrl",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
    },
  ],
};
