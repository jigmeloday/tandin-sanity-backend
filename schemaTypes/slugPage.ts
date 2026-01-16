import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'slugPage',
  title: 'Slug Bhutan in CLound and all',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'section_1',
      title: 'Section 1',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'section_2_image1',
      title: 'Section 2 Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'section_2_image2',
      title: 'Section 2 Image 2',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'section_2_title',
      title: 'Section 2 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_2_description',
      title: 'Section 2 Description',
      type: 'text',
    }),
    defineField({
      name: 'section_2_taglin',
      title: 'Section 2 Tagline',
      type: 'string',
    }),

    defineField({
      name: 'section_3_title',
      title: 'Section 3 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_3_description',
      title: 'Section 3 Description',
      type: 'text',
    }),

    defineField({
      name: 'section_4_cards',
      title: 'Section 4 - Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'description',
              title: 'Text',
              type: 'text',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'section_5_title',
      title: 'Section 5 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_5_description',
      title: 'Section 5 Description',
      type: 'text',
    }),
    defineField({
      name: 'section_5_taglin',
      title: 'Section 5 Tagline',
      type: 'string',
    }),


     defineField({
      name: 'section_slug',
      title: 'Bhutan in cloud and all',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'slugPage'}],
        }),
      ],
    }),

    defineField({
      name: 'section_6_title',
      title: 'Section 6 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_6_description',
      title: 'Section 6 Description',
      type: 'text',
    }),
    defineField({
      name: 'section_6_taglin',
      title: 'Section 6 Tagline',
      type: 'string',
    }),

    defineField({name: 'letsTalkDescription', title: 'lets Description', type: 'text'}),
     defineField({
              name: 'letsTalk',
              title: 'Lets talk Image',
              type: 'image',
              options: {hotspot: true},
            }),
  ],
})
