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
              <TreeView.BranchControl className='user-select-none outline-primary-8 flex items-center gap-1.5 rounded p-2 hover:cursor-pointer hover:bg-gray-200 data-selected:bg-gray-200'>
                <TreeView.BranchIndicator className='text-gray-9 flex size-5 items-center justify-center transition-transform data-[state=open]:rotate-90'>
                  <Icon name='tabler:chevron-right' />
                </TreeView.BranchIndicator>
                <TreeView.BranchText className='flex items-center gap-2'>
                  <div className='text-gray-10 flex size-5 items-center justify-center'>
                    {nodeState.expanded ? (
                      <Icon name='tabler:folder-open' />
                    ) : (
                      <Icon name='tabler:folder' />
                    )}
                  </div>
                  <div className='text-gray-12 text-14 font-medium xl:text-13'>
                    {node.name}
                  </div>
                </TreeView.BranchText>
              </TreeView.BranchControl>
              <TreeView.BranchContent className='pl-6.5'>
                <TreeView.BranchIndentGuide className='absolute top-8 left-[17.25px] h-[calc(100%-36px)] border-l border-gray-200' />
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
            <TreeView.Item className='outline-primary-8 rounded p-2 hover:cursor-pointer hover:bg-gray-200 data-selected:bg-gray-200'>
              <TreeView.ItemText className='flex items-center gap-2'>
                <div className='text-gray-10 flex size-5 items-center justify-center'>
                  <Icon name='tabler:file' />
                </div>
                <div className='text-gray-12 text-14 font-medium xl:text-13'>
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
