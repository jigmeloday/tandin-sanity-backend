import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'trek',
  title: 'Trek Page',
  type: 'document',
  fields: [
    // ============ SLUG ============
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 200},
      validation: (Rule) => Rule.required(),
    }),

    // ============ TITLE ============
    defineField({
      name: 'title',
      title: 'Trek Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Trek Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    // ============ HERO SECTION ============
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heroImage',
          title: 'Hero Background Image',
          type: 'image',
          options: {hotspot: true},
        }),
         defineField({
          name: 'image',
          title: 'Thumbnail Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({name: 'title', title: 'Hero Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Hero Subtitle', type: 'string'}),
      ],
    }),

    // ============ INTRO ============
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
      ],
    }),

    // ============ SLIDER ============
    defineField({
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      of: [{type: 'image'}],
    }),

    // ============ TREK FACTS ============
    defineField({
      name: 'facts',
      title: 'Trek Facts',
      type: 'object',
      fields: [
        defineField({name: 'bestSeason', title: 'Best Season', type: 'string'}),
        defineField({name: 'highAltitude', title: 'Highest Altitude', type: 'string'}),
        defineField({name: 'lowAltitude', title: 'Lowest Altitude', type: 'string'}),
        defineField({name: 'days', title: 'Days on Trek', type: 'string'}),
        defineField({name: 'grade', title: 'Difficulty Grade', type: 'string'}),
      ],
    }),
    // ============ ESSENTIAL INFO ============
    defineField({
      name: 'essentialsHeader',
      title: 'Essential Information Header',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'string'}),
      ],
    }),
    // ============ ESSENTIAL INFO ============
    defineField({
      name: 'essentialsRight',
      title: 'Essential Information Right',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Block Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'Image', value: 'image'},
                ],
              },
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              hidden: ({parent}) => parent?.type !== 'image',
            }),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
          ],
        }),
      ],
    }),

    // ============ ESSENTIAL INFO ============
    defineField({
      name: 'essentialsLeft',
      title: 'Essential Information Left',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Block Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'Image', value: 'image'},
                ],
              },
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              hidden: ({parent}) => parent?.type !== 'image',
            }),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
          ],
        }),
      ],
    }),
    
    // ============ LET'S TALK ============
    defineField({
      name: 'letsTalk',
      title: "Let's Talk Section",
      type: 'object',
      fields: [defineField({name: 'description', title: 'Description', type: 'text'}), defineField({
      name: 'letsTalk',
      title: 'Lets talk Image',
      type: 'image',
      options: {hotspot: true},
    }),],
    }),

    // ============ PARALLAX IMAGE ============
     defineField({
      name: 'bgScrollImage',
      title: 'Background Scroll',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              {title: 'Image', value: 'image'},
              {title: 'Video', value: 'video'},
            ],
            layout: 'dropdown',
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          hidden: ({parent}) => parent?.type !== 'image',
        }),
        defineField({
          name: 'video',
          title: 'Video File',
          type: 'file',
          hidden: ({parent}) => parent?.type !== 'video',
          options: {accept: 'video/*'},
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        // defineField({
        //   name: 'description',
        //   title: 'Description',
        //   type: 'text',
        // }),
      ],
    }),

    // ============ TRAVEL WITH PURPOSE ============
    defineField({
      name: 'purpose',
      title: 'Travel With Purpose',
      type: 'object',
      fields: [
        defineField({name: 'image', title: 'Image', type: 'image'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description1', title: 'Paragraph 1', type: 'text'}),
        defineField({name: 'description2', title: 'Paragraph 2', type: 'text'}),
        defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
      ],
    }),

    // ============ RELATED TREKS ============
    defineField({
      name: 'relatedTreksSection',
      title: 'Related Related Header',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ],
    }),
    defineField({
      name: 'relatedTreks',
      title: 'Related Treks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'trek'}],
        }),
      ],
    }),
    defineField({
      name: 'relatedTreks2',
      title: 'Related Treks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'trek'}],
        }),
      ],
    }),
  ],
})
