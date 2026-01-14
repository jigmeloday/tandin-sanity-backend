import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // HERO SECTION
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),

    // INTRO SECTION
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
    }),
    defineField({
      name: 'introParagraphs',
      title: 'Intro Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
    }),

    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Title',
      type: 'string',
    }),
    // TESTIMONIALS
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'quote', title: 'Quote', type: 'text'}),
            defineField({name: 'author', title: 'Author', type: 'string'}),
            defineField({name: 'authorImage', title: 'Author Image', type: 'image'}),
            defineField({name: 'date', title: 'Date', type: 'string'}),
          ],
        }),
      ],
    }),

    defineField({
      name: 'founder',
      title: 'Founder Section',
      type: 'object',
      fields: [
        defineField({name: 'founderImage', title: 'Founder Image', type: 'image'}),
        defineField({name: 'founderName', title: 'Name', type: 'string'}),
        defineField({
          name: 'introParagraphs',
          title: 'Intro Paragraphs',
          type: 'array',
          of: [{type: 'text'}],
        }),
      ],
    }),

    // TEAM HEADER
    defineField({
      name: 'teamHeader',
      title: 'Team Header',
      type: 'string',
    }),
    defineField({
      name: 'teamDescription',
      title: 'Team Description',
      type: 'text',
    }),

    // TEAM MEMBERS
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Full Name', type: 'string'}),
            defineField({name: 'role', title: 'Role / Job Title', type: 'string'}),
            defineField({name: 'bio', title: 'Short Bio', type: 'text'}),
            defineField({name: 'photo', title: 'Photo', type: 'image'}),
          ],
        }),
      ],
    }),

    // HOW IT WORKS / STEPS
    defineField({
      name: 'steps',
      title: 'How it works Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Step Title', type: 'string'}),
            defineField({name: 'description', title: 'Step Description', type: 'text'}),
            defineField({name: 'icon', title: 'Icon', type: 'image'}),
          ],
        }),
      ],
    }),

    // VIDEO SECTION
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),

    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
    }),

    // CALL TO ACTION SECTION
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),

     defineField({
      name: 'contactTitle',
      title: 'Title',
      type: 'string',
    }),
     defineField({
      name: 'contactSubtitle',
      title: 'Subtitle',
      type: 'string',
    }),
     defineField({
      name: 'tagline',
      title: 'Taglin',
      type: 'string',
    }),

    // LETS TALK SECTION
    defineField({
      name: 'letsTalkDescription',
      title: "Let's Talk Description",
      type: 'text',
    }),
  ],
})
