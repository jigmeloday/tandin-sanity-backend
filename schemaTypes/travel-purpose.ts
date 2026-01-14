import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'travelPurpose',
  title: 'Travel Purpose',
  type: 'document',
  fields: [
     defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),


    defineField({
      name: "section1_title",
      title: "Section 1 Title",
      type: "string",
    }),

    defineField({
      name: "section1_description",
      title: "Section 1 Description",
      type: "text",
    }),

    defineField({
      name: "section1_tagline",
      title: "Section 1 Tagline",
      type: "string",
    }),


    defineField({
      name: "featureBlocks",
      title: "Feature Blocks",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "tagline",
              title: "Tagline",
              type: "string",
            }),
          ],
        }),
      ],
    }),


     defineField({
      name: "footer_title",
      title: "Footer Title",
      type: "string",
    }),

    defineField({
      name: "footer_lines",
      title: "Footer Lines",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "footer_tagline",
      title: "Footer Tagline",
      type: "string",
    }),
    
  ]
})
