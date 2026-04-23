import { TreeView } from '@ark-ui/react/tree-view'
import { Icon } from '@/components/base/icon'

export interface Node {
  id: string
  name: string
  children?: Node[] | undefined
}

export const TreeNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { indexPath, node } = props

  return (
    <TreeView.NodeProvider indexPath={indexPath} key={node.id} node={node}>
      <TreeView.NodeContext>
        {(nodeState) =>
          node.children ? (
            <TreeView.Branch className='relative'>
              <TreeView.BranchControl className='user-select-none flex items-center gap-1.5 rounded p-2 outline-primary-8 hover:cursor-pointer hover:bg-gray-3 data-selected:bg-gray-3'>
                <TreeView.BranchIndicator className='flex size-5 items-center justify-center text-gray-9 transition-transform data-[state=open]:rotate-90'>
                  <Icon name='tabler:chevron-right' />
                </TreeView.BranchIndicator>
                <TreeView.BranchText className='flex items-center gap-2'>
                  <div className='flex size-5 items-center justify-center text-gray-10'>
                    {nodeState.expanded ? (
                      <Icon name='tabler:folder-open' />
                    ) : (
                      <Icon name='tabler:folder' />
                    )}
                  </div>
                  <div className='text-14 font-medium text-gray-12 xl:text-13'>
                    {node.name}
                  </div>
                </TreeView.BranchText>
              </TreeView.BranchControl>
              <TreeView.BranchContent className='pl-6.5'>
                <TreeView.BranchIndentGuide className='absolute top-8 left-[17.25px] h-[calc(100%-36px)] border-l border-gray-3' />
                {node.children.map((child, index) => (
                  <TreeNode
                    indexPath={[...indexPath, index]}
                    key={child.id}
                    node={child}
                  />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Item className='rounded p-2 outline-primary-8 hover:cursor-pointer hover:bg-gray-3 data-selected:bg-gray-3'>
              <TreeView.ItemText className='flex items-center gap-2'>
                <div className='flex size-5 items-center justify-center text-gray-10'>
                  <Icon name='tabler:file' />
                </div>
                <div className='text-14 font-medium text-gray-12 xl:text-13'>
                  {node.name}
                </div>
              </TreeView.ItemText>
            </TreeView.Item>
          )
        }
      </TreeView.NodeContext>
    </TreeView.NodeProvider>
  )
}
