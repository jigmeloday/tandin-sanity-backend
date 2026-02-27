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
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
    }),

    // defineField({
    //   name: 'section_package',
    //   title: 'Packages',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{type: 'packageItem'}],
    //     }),
    //   ],
    // }),
    // defineField({
    //   name: 'section_othere_package',
    //   title: 'Packages',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{type: 'packageItem'}],
    //     }),
    //   ],
    // }),

    defineField({
      name: 'bgScrollMedia',
      title: 'Background Media Scroll',
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
            layout: 'dropdown', // ✅ dropdown select
          },
        }),
         defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          hidden: ({parent}) => parent?.type !== 'image', // only show if type is image
        }),
        defineField({
          name: 'video',
          title: 'Video',
          type: 'file',
          options: {accept: 'video/*'},
          hidden: ({parent}) => parent?.type !== 'video', // only show if type is video
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
      name: 'letsTalk',
      title: 'Lets talk Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'letsTalkTitle', title: 'lets Title', type: 'text'}),
    defineField({name: 'letsTalkDescription', title: 'lets Description', type: 'text'}),
    defineField({name: 'letsTalkButton', title: 'lets Button Text', type: 'text'}),
  ],
})
