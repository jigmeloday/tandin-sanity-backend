import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'cultureWellness',
  title: 'Culture Wellness',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'cover', title: 'Cover Image', type: 'image'}),
    defineField({name: 'bannerImage', title: 'Banner Image', type: 'image', options: {hotspot: true}}),

    defineField({name: 'section1_title', title: 'Section 1 Title', type: 'string'}),
    defineField({name: 'section1_subtitle', title: 'Section 1 Subtitle', type: 'string'}),
    defineField({
      name: 'section1_tagline',
      title: 'Section1 Tagline',
      type: 'text',
    }),

    defineField({name: 'section2_title', title: 'Section2 Title', type: 'text'}),
    defineField({
      name: 'section_2_cards',
      title: 'Section 2 - Cards',
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
              name: 'btn',
              title: 'Text',
              type: 'text',
            }),
          ],
        }),
      ],
    }),

    defineField({name: 'section3_title', title: 'Image Section Title', type: 'text'}),
    defineField({name: 'section3_description', title: 'Image Section Description', type: 'text'}),
    defineField({name: 'section3_tagline', title: 'Image Section Tagline', type: 'text'}),
    defineField({
      name: 'section3Image1',
      title: 'Image 1',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'section3Image2',
      title: 'Image 2',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({name: 'bgScrollImage', title: 'Background Image Scroll', type: 'image'}),

    defineField({name: 'section4Title', title: 'Section 4 Title', type: 'text'}),
    defineField({name: 'section4Description', title: 'Section 4 Description', type: 'text'}),

    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'packageItem'}],
        }),
      ],
    }),

    defineField({name: 'letsTalkTitle', title: 'lets Title', type: 'text'}),
    defineField({name: 'letsTalkDescription', title: 'lets Description', type: 'text'}),
    defineField({name: 'letsTalkButton', title: 'lets Button Text', type: 'text'}),
     defineField({
              name: 'letsTalk',
              title: 'Lets talk Image',
              type: 'image',
              options: {hotspot: true},
            }),
  ],
})
