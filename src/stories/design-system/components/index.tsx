import { Link } from '@tanstack/react-router'
import { Header } from '../shared/header'

const components = [
  [
    {
      label: 'Icon',
      route: '/design-system/components/icon',
    },
    {
      label: 'Button',
      route: '/design-system/components/button',
    },
    {
      label: 'Icon Button',
      route: '/design-system/components/icon-button',
    },
    {
      label: 'Tooltip',
      route: '/design-system/components/tooltip',
    },
    {
      label: 'Drawer',
      route: '/design-system/components/drawer',
    },
    {
      label: 'Modal',
      route: '/design-system/components/modal',
    },
    {
      label: 'Menu',
      route: '/design-system/components/menu',
    },
    {
      label: 'Avatar',
      route: '/design-system/components/avatar',
    },
    {
      label: 'Scroll Area',
      route: '/design-system/components/scroll-area',
    },
    {
      label: 'Indicator',
      route: '/design-system/components/indicator',
    },
    {
      label: 'Divider',
      route: '/design-system/components/divider',
    },
    {
      label: 'Badge',
      route: '/design-system/components/badge',
    },
    {
      label: 'Pagination',
      route: '/design-system/components/pagination',
    },
    {
      label: 'Popover',
      route: '/design-system/components/popover',
    },
    {
      label: 'Highlight',
      route: '/design-system/components/highlight',
    },
  ],
  [
    {
      label: 'AI Icon',
      route: '/design-system/components/ai-icon',
    },
    {
      label: 'Tabs',
      route: '/design-system/components/tabs',
    },
    {
      label: 'Empty State',
      route: '/design-system/components/empty-state',
    },
    {
      label: 'Toast',
      route: '/design-system/components/toast',
    },
    {
      label: 'Alert',
      route: '/design-system/components/alert',
    },
    {
      label: 'Input Text',
      route: '/design-system/components/input-text',
    },
    {
      label: 'Input Password',
      route: '/design-system/components/input-password',
    },
    {
      label: 'Input Textarea',
      route: '/design-system/components/input-textarea',
    },
    {
      label: 'Input Number',
      route: '/design-system/components/input-number',
    },
    {
      label: 'Input Radio',
      route: '/design-system/components/input-radio',
    },
    {
      label: 'Input Radio Group',
      route: '/design-system/components/input-radio-group',
    },
    {
      label: 'Input Radio Card',
      route: '/design-system/components/input-radio-card',
    },
    {
      label: 'Input Checkbox',
      route: '/design-system/components/input-checkbox',
    },
    {
      label: 'Input Checkbox Group',
      route: '/design-system/components/input-checkbox-group',
    },
    {
      label: 'Input Checkbox Card',
      route: '/design-system/components/input-checkbox-card',
    },
  ],
  [
    {
      label: 'Input Switch',
      route: '/design-system/components/input-switch',
    },
    {
      label: 'Input Switch Group',
      route: '/design-system/components/input-switch-group',
    },
    {
      label: 'Input Pin',
      route: '/design-system/components/input-pin',
    },
    {
      label: 'Input Date',
      route: '/design-system/components/input-date',
    },
    {
      label: 'Input Time',
      route: '/design-system/components/input-time',
    },
    {
      label: 'Input Select',
      route: '/design-system/components/input-select',
    },
    {
      label: 'Input Select Multiple',
      route: '/design-system/components/input-select-multiple',
    },
    {
      label: 'Rating',
      route: '/design-system/components/rating',
    },
    {
      label: 'Slider',
      route: '/design-system/components/slider',
    },
    {
      label: 'Range Slider',
      route: '/design-system/components/range-slider',
    },
    {
      label: 'Accordion',
      route: '/design-system/components/accordion',
    },
    {
      label: 'Stepper',
      route: '/design-system/components/stepper',
    },
    {
      label: 'Progress',
      route: '/design-system/components/progress',
    },
    {
      label: 'Progress Circle',
      route: '/design-system/components/progress-circle',
    },
    {
      label: 'Progress Semi Circle',
      route: '/design-system/components/progress-semi-circle',
    },
  ],
  [
    {
      label: 'Segment Group',
      route: '/design-system/components/segment-group',
    },
    {
      label: 'Timeline',
      route: '/design-system/components/timeline',
    },
    {
      label: 'Tree',
      route: '/design-system/components/tree',
    },
    {
      label: 'Floating Panel',
      route: '/design-system/components/floating-panel',
    },
    {
      label: 'QR Code',
      route: '/design-system/components/qr-code',
    },
    {
      label: 'Tour',
      route: '/design-system/components/tour',
    },
    {
      label: 'File Upload',
      route: '/design-system/components/file-upload',
    },
    {
      label: 'Image Upload',
      route: '/design-system/components/image-upload',
    },
    {
      label: 'Signature Pad',
      route: '/design-system/components/signature-pad',
    },
    {
      label: 'Table',
      route: '/design-system/components/table',
    },
    {
      label: 'Data Table',
      route: '/design-system/components/data-table',
    },
  ],
]

export const IndexStory = () => {
  return (
    <>
      <Header title='Components' />

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {components.map((group, index) => (
          <ul className='space-y-6' key={index}>
            {group.map((item) => (
              <li key={item.route}>
                <Link
                  className='text-14 font-medium text-gray-11 transition-colors hover:text-gray-12'
                  to={item.route}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  )
}
