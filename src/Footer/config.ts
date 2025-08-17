import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Navigation',
      name: 'navigation',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          label: 'Navigation Title',
          name: 'navTitle',
          type: 'text',
        },
        {
          name: 'navLinks',
          type: 'array',
          fields: [link({})],
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [link({})],
      maxRows: 6,
      // admin: {
      //   initCollapsed: true,
      //   components: {
      //     RowLabel: '@/Footer/RowLabel#RowLabel',
      //   },
      // },
    },
    {
      name: 'socialMediaLinks',
      label: 'Social Media Links',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Github'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'contactInfo',
      label: 'Contact Information',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
