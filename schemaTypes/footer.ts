import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    // LOGO
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),

    // NEWSLETTER SECTION
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'string',
    }),
    defineField({
      name: 'newsletterSubtitle1',
      title: 'Newsletter Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'newsletterSubtitle2',
      title: 'Newsletter Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'newsletterDescription',
      title: 'Newsletter Description',
      type: 'text',
    }),

    // SOCIAL LINKS
    // defineField({
    //   name: 'socialLinks',
    //   title: 'Social Links',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'object',
    //       fields: [
    //         defineField({ name: 'platform', title: 'Platform', type: 'string' }),
    //         defineField({ name: 'url', title: 'URL', type: 'url' }),
    //         defineField({
    //           name: 'icon',
    //           title: 'Icon Name (for FE mapping)',
    //           type: 'string',
    //         }),
    //       ],
    //     }),
    //   ],
    // }),

    // COMPANY LINKS
    defineField({
      name: 'companyLinks',
      title: 'Company Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'url' }),
          ],
        }),
      ],
    }),

    // SERVICES LINKS
    defineField({
      name: 'servicesLinks',
      title: 'Services Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'url' }),
          ],
        }),
      ],
    }),
  ],
});
