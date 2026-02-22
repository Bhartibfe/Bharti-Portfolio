import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    useAsTitle: "role",
  },
  access: {
    read: isPublic,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "period",
      type: "text",
      required: true,
    },
    {
      name: "highlights",
      type: "array",
      fields: [
        {
          name: "text",
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
