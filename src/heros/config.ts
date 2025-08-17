import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Landing Hero',
          value: 'landingHero',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      label: 'Landing Badge',
      name: 'landingBadge',
      type: 'text',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['landingHero'].includes(type),
      },
    },
    {
      label: 'Landing Title',
      name: 'landingTitle',
      type: 'text',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['landingHero'].includes(type),
      },
    },
    {
      label: 'Landing Subtitle',
      name: 'landingSubtitle',
      type: 'text',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['landingHero'].includes(type),
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      admin: {
        condition: (_, { type } = {}) => !['landingHero'].includes(type),
      },
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),

    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
