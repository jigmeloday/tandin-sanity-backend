import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'birdingTourPage',
  title: 'Birding Tour Page',
  type: 'document',
  fields: [
    // HERO SECTION
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),

    // TITLE + DESCRIPTION SECTION
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),

    // SLIDER SECTION
    defineField({
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      of: [{type: 'image'}],
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

    // LETS TALK SECTION
    defineField({
      name: 'letsTalk',
      title: "Let's Talk Image",
      type: 'image',
    }),
    defineField({
      name: 'letsTalkDescription',
      title: "Let's Talk Description",
      type: 'text',
    }),

    // PARALLAX SECTION
    defineField({
      name: 'parallaxImage',
      title: 'Parallax Background Image',
      type: 'image',
    }),

    // TRAVEL WITH PURPOSE SECTION
    defineField({
      name: 'purposeTitle',
      title: 'Purpose Title',
      type: 'string',
    }),
    defineField({
      name: 'purposeDescription1',
      title: 'Description Section 1',
      type: 'text',
    }),
    defineField({
      name: 'purposeDescription2',
      title: 'Description Section 2',
      type: 'text',
    }),
    defineField({
      name: 'purposeImage',
      title: 'Right Side Image',
      type: 'image',
    }),

    // RELATED ADVENTURES
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
