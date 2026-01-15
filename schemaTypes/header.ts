import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "mainLinks",
      title: "Top Navigation Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "link", title: "URL / Slug", type: "string" }),
          ],
        }),
      ],
    }),

    // Platform Links (Dropdown)
    defineField({
      name: "platforms",
      title: "Our platforms",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "link", title: "URL / Slug", type: "string" }),
          ],
        }),
      ],
    }),

    // Trip Types (Grid Links)
    
    defineField({
      name: 'packageLink',
      title: 'Packages Link',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'packageItem'}],
        }),
      ],
    }),

    defineField({
      name: "otherLink",
      title: "Other Navigation Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "link", title: "URL / Slug", type: "string" }),
          ],
        }),
      ],
    }),

  ],
});
