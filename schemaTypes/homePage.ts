import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Slider',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
          ],
        }),
      ],
    }),
    // Section 1
    defineField({
      name: 'section_1',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'tag_line', title: 'Tagline', type: 'string'}),
      ],
    }),

    // Section 2 - Array of tour types
    defineField({
      name: 'section_2',
      title: 'Tour Type Section',
      type: 'reference',
      to: [{type: 'bespoke'}], // replace 'bespoke' with your tour type document name
    }),
    defineField({
      name: 'section_21',
      title: 'Tour Type Section',
      type: 'reference',
      to: [{type: 'exquisite'}], // replace 'bespoke' with your tour type document name
    }),
    defineField({
      name: 'section_22',
      title: 'Tour Type Section',
      type: 'reference',
      to: [{type: 'cultureWellness'}], // replace 'bespoke' with your tour type document name
    }),

    // Section 3 - Flagship
    defineField({
      name: 'section_3',
      title: 'Flagship Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'flagship'}],
        }),
      ],
    }),

    defineField({
      name: 'section_4',
      title: 'From Dream to Departure',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'items',
          title: 'Steps',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Use the icon name as string (Search, Headphones, Mail, Plane)',
                }),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
              ],
            }),
          ],
        }),
        defineField({name: 'button_text', title: 'Button Text', type: 'string'}),
        defineField({name: 'button_link', title: 'Button Link', type: 'string'}),
      ],
    }),

    defineField({
      name: 'section_5',
      title: 'Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'packageItem'}],
        }),
      ],
    }),

    defineField({
      name: 'section_6_background_scroll',
      title: 'Section 6 - Background Scroll',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
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

    defineField({
      name: 'section_7',
      title: 'Section 7 - Promise Section',
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
      name: 'section_9',
      title: 'Section 9 - Travel With Purpose',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description_1',
          title: 'Description 1',
          type: 'text',
        }),
        defineField({
          name: 'description_2',
          title: 'Description 2',
          type: 'text',
        }),
        defineField({
          name: 'btn',
          title: 'Button Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'section_10_slider',
      title: 'Section 10 Slider',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'img',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
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
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'cta',
              title: 'CTA Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'blogTitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blogSubtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'blog',
      title: 'Blogs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'blogPost'}],
        }),
      ],
    }),

    defineField({
      name: 'section_12',
      title: 'Section 12 - Featured Cards',
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'links',
              title: 'Link',
              type: 'text',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'section_13',
      title: 'Section 13 - Lets Talk Section',
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
         defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
        defineField({
          name: 'btn_text',
          title: 'Button Text',
          type: 'string',
        }),
      ],
    }),
  ],
})
