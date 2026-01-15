import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the blog post',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The full content or excerpt of the blog post',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Unique URL identifier for the blog post',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'The published date of the blog post',
    }),
    defineField({
      name: 'place',
      title: 'Place',
      type: 'string',
      description: 'The location or place related to the blog post',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Category or tag for the blog post',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // allows cropping/focal point
      },
      description: 'Main image for the blog post',
    }),

    defineField({
      name: 'blockContent',
      title: 'Blog Content',
      type: 'array',
      of: [
        {
          type: 'block', // allows rich text (headings, bold, italic)
        },
        {
          type: 'image', // allows inline images
          options: {hotspot: true},
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
