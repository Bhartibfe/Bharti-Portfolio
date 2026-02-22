import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    useAsTitle: "category",
  },
  access: {
    read: isPublic,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "skills",
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
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
    },
  ],
};
