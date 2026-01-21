import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Concept', value: 'concept' },
          { title: 'Planning', value: 'planning' },
          { title: 'In Development', value: 'development' },
          { title: 'Completed', value: 'completed' },
          { title: 'Coming Soon', value: 'coming-soon' },
        ],
      },
    }),
    defineField({
      name: 'geography',
      title: 'Geography',
      type: 'string',
    }),
    defineField({
      name: 'assetType',
      title: 'Asset Type',
      type: 'string',
      options: {
        list: [
          { title: 'Branded Residences', value: 'residences' },
          { title: 'Branded Hospitality', value: 'hospitality' },
          { title: 'Mixed-use', value: 'mixed-use' },
        ],
      },
    }),
    defineField({
      name: 'confidential',
      title: 'Confidential',
      type: 'boolean',
      description: 'If true, minimal public information will be shown.',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in selected concepts on homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      geography: 'geography',
      media: 'heroImage',
    },
    prepare({ title, status, geography, media }) {
      return {
        title,
        subtitle: [status, geography].filter(Boolean).join(' • '),
        media,
      }
    },
  },
})
