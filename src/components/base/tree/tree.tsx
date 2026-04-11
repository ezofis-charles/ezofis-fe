import { createTreeCollection, TreeView } from '@ark-ui/react/tree-view'
import type { Node } from './tree-node'
import { TreeNode } from './tree-node'

interface Props {
  nodes: Node[]
  className?: string
}

export const Tree = ({ className, nodes }: Props) => {
  const collection = createTreeCollection<Node>({
    rootNode: {
      children: nodes,
      id: 'ROOT',
      name: '',
    },
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
  })

  return (
    <TreeView.Root className={className} collection={collection}>
      <TreeView.Tree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNode indexPath={[index]} key={node.id} node={node} />
        ))}
      </TreeView.Tree>
    </TreeView.Root>
  )
}
