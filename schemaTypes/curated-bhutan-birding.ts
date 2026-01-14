import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "curatedBhutanBirding",
  title: "Curated Bhutan Birding",
  type: "document",
  fields: [
    // ============================
    // HERO SECTION
    // ============================
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "title",
          title: "Hero Title",
          type: "string",
        }),
      ],
    }),

    // ============================
    // SECTION 1 (Text + Slider)
    // ============================
    defineField({
      name: "section1",
      title: "Section 1",
      type: "object",
      fields: [
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
          name: "buttonLabel",
          title: "Button Label",
          type: "string",
        }),

        defineField({
          name: "sliderImages",
          title: "Slider Images",
          type: "array",
          of: [
            defineArrayMember({
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),

    // ============================
    // SECTION 2 (3 Blocks + 3 Image Grid)
    // ============================
    defineField({
      name: "section2",
      title: "Section 2",
      type: "object",
      fields: [
        defineField({
          name: "topBlocks",
          title: "Top Three Blocks",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                })
              ],
            }),
          ],
        }),

        defineField({
          name: "bottomGrid",
          title: "Bottom Image Grid",
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
              ],
            }),
          ],
        }),
      ],
    }),

    // ============================
    // SECTION 3 – GETAWAYS
    // ============================
    defineField({
      name: "getaways",
      title: "Getaways Section",
      type: "object",
      fields: [
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
      name: 'getaways_cards',
      title: 'Treks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'trek'}],
        }),
      ],
    }),
      ],
    }),

    // ============================
    // SECTION 4 – TRAVEL WITH PURPOSE
    // ============================
    defineField({
      name: "travelPurpose",
      title: "Travel With Purpose Section",
      type: "object",
      fields: [
        defineField({ name: "image", title: "Image", type: "image" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description1", title: "Paragraph 1", type: "text" }),
        defineField({ name: "description2", title: "Paragraph 2", type: "text" }),
        defineField({ name: "buttonLink", title: "Button Link", type: "string" }),
      ],
    }),

    // ============================
    // SECTION 5 – BROCHURE
    // ============================
    defineField({
      name: "brochure",
      title: "Brochure Section",
      type: "object",
      fields: [
        defineField({
          name: "images",
          title: "Brochure Images",
          type: "array",
          of: [{ type: "image" }],
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "cta1",
          title: "CTA 1 Text",
          type: "string",
        }),
        defineField({
          name: "cta2",
          title: "CTA 2 Text",
          type: "string",
        }),
      ],
    }),

    // ============================
    // SECTION 6 – LET’S TALK
    // ============================
    defineField({
      name: "letsTalk",
      title: "Let's Talk Section",
      type: "object",
      fields: [
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
      ],
    }),
  ],
});
