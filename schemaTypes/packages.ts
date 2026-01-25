import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'packageItem',
  title: 'Package Item',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),

    defineField({name: 'category', title: 'Category', type: 'string'}),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
    }),

     defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'btn',
      title: 'Btn text',
      type: 'string',
    }),

    defineField({
      name: 'section_1_title',
      title: 'Section 1 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_1_description',
      title: 'Section 1 decription',
      type: 'text',
    }),
    defineField({
      name: 'section_1_tagline',
      title: 'Section 1 tagline',
      type: 'string',
    }),

    defineField({
      name: 'imageSectionType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'image_section',
      title: 'Image',
      type: 'image',
      hidden: ({parent}) => parent?.imageSectionType !== 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'video_section',
      title: 'Video',
      type: 'file',
      options: {accept: 'video/*'},
      hidden: ({parent}) => parent?.imageSectionType !== 'video',
    }),

    defineField({
      name: 'imageTitle',
      title: 'Image Section Title',
      type: 'string',
    }),

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
              name: 'description',
              title: 'Text',
              type: 'text',
            }),
          ],
        }),
      ],
    }),

    defineField({name: 'letsTalkDescription', title: 'lets Description', type: 'text'}),
    defineField({
      name: 'letsTalk',
      title: 'Lets talk Image',
      type: 'image',
      options: {hotspot: true},
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
  ],
})
