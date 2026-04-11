import { Tree } from '@/components/base/tree'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const nodes = [
  {
    children: [
      { id: 'node_modules/zag-js', name: 'zag-js' },
      { id: 'node_modules/pandacss', name: 'panda' },
      {
        children: [
          { id: 'node_modules/@types/react', name: 'react' },
          { id: 'node_modules/@types/react-dom', name: 'react-dom' },
        ],
        id: 'node_modules/@types',
        name: '@types',
      },
    ],
    id: 'node_modules',
    name: 'node_modules',
  },
  {
    children: [
      { id: 'src/app.tsx', name: 'app.tsx' },
      { id: 'src/index.ts', name: 'index.ts' },
    ],
    id: 'src',
    name: 'src',
  },
  { id: 'panda.config', name: 'panda.config.ts' },
  { id: 'package.json', name: 'package.json' },
  { id: 'renovate.json', name: 'renovate.json' },
  { id: 'readme.md', name: 'README.md' },
]

export const TreeStory = () => {
  return (
    <>
      <Header title='Tree' />

      <Section title='Default'>
        <div className='max-w-80'>
          <Tree nodes={nodes} />
        </div>
      </Section>
    </>
  )
}
