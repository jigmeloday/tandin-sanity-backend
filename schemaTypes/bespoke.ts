import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'bespoke',
  title: 'Bespoke',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'link',
      title: 'link',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),

    defineField({
      name: 'section_package',
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
      name: 'section_othere_package',
      title: 'Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'packageItem'}],
        }),
      ],
    }),
    defineField({name: 'bgScrollImage', title: 'Background Image Scroll', type: 'image'}),
    defineField({name: 'travelPurposeTitle', title: 'Travel Purpose Title', type: 'text'}),
    defineField({
      name: 'travelPurposeParagraph1',
      title: 'Travel Purpose Paragraph 1',
      type: 'text',
    }),
    defineField({
      name: 'travelPurposeParagraph2',
      title: 'Travel Purpose Paragraph 2',
      type: 'text',
    }),
    defineField({name: 'travelPurposeButton', title: 'Travel Purpose Button Text', type: 'text'}),

    defineField({name: 'section1Title', title: 'Other Related Title', type: 'text'}),
    defineField({name: 'section1Description', title: 'Other Related Description', type: 'text'}),
    defineField({name: 'section1Tagline', title: 'Other Related Tagline', type: 'text'}),

    defineField({
      name: 'section_second_last_package',
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
      name: 'section_last_package',
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
  ],
})
