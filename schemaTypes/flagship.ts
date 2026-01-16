import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'flagship',
  title: 'Flagship',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'section1Title',
      title: 'section1 Title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section1Description',
      title: 'section1 Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section1Tagline',
      title: 'section1 Tagline',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'when',
      title: 'When Date',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'howlong',
      title: 'How Long',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'hero',
      title: 'Hero Slider',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
          ],
        }),
      ],
    }),

    defineField({
      name: 'section2Title',
      title: 'Section 2 Make Itinerary Title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section2Description',
      title: 'Section 2 Make Itinerary Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section2Btn1',
      title: 'Section 2 Make Itinerary Button 1 text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section2Btn2',
      title: 'Section 2 Make Itinerary Button 2 text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'card_items',
      title: 'Card List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
          ],
        }),
      ],
    }),

    defineField({
      name: 'boutiqueTitle',
      title: 'Section 3 Boutique Hotel Title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'boutique',
      title: 'Boutique Hotels',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'section3btn',
      title: 'Section 3 Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section3link',
      title: 'Section 3 Button link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'section4Title',
      title: 'section4 Title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section4Description',
      title: 'section4 Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section4Tagline',
      title: 'section4 Tagline',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
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
