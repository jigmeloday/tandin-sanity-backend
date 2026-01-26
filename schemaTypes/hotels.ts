import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'hotels',
  title: 'Hotels',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'herotitle', title: 'Hero Title', type: 'string'}),
    defineField({name: 'herosubtitle', title: 'Hero Subtitle', type: 'string'}),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({name: 'image1', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'image2', title: 'Image 2', type: 'image', options: {hotspot: true}}),
    defineField({name: 'image3', title: 'Image 3', type: 'image', options: {hotspot: true}}),
    defineField({name: 'image4', title: 'Image 4', type: 'image', options: {hotspot: true}}),
    defineField({name: 'section1_title', title: 'Image Section Title', type: 'text'}),
    defineField({name: 'section1_description', title: 'Image Section Description', type: 'text'}),
    defineField({name: 'section1_tagline', title: 'Image Section Tagline', type: 'text'}),
    // defineField({name: 'description', title: 'Description', type: 'text'}),
    // defineField({name: 'bgScrollImage', title: 'Background Image Scroll', type: 'image'}),
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
    defineField({name: 'section2Title', title: 'Section 2 Title', type: 'text'}),
    defineField({name: 'section2Description', title: 'Section 2 Description', type: 'text'}),
    defineField({name: 'section2Tagline', title: 'Section 2 Tagline', type: 'text'}),
    defineField({
      name: 'section2Image1',
      title: 'Image 1',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'section2Image2',
      title: 'Image 2',
      type: 'image',
      options: {hotspot: true},
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
    defineField({name: 'section3Title', title: 'Section 3 Title', type: 'text'}),
    defineField({name: 'section3Description', title: 'Section 3 Description', type: 'text'}),
    defineField({name: 'section3Tagline', title: 'Section 3 Tagline', type: 'text'}),
    defineField({
      name: 'section_slug',
      title: 'Hotel Pages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'hotels'}],
        }),
      ],
    }),
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
  ],
})
