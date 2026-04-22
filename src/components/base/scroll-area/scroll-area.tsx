import { ScrollArea as Base } from '@ark-ui/react/scroll-area'
import { ScrollAreaContent } from './scroll-area-content'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'both' | 'horizontal' | 'vertical'
  onBottomReached?: () => void
  onTopReached?: () => void
}

export const ScrollArea = ({
  children,
  className,
  orientation = 'vertical',
  style,
  onBottomReached,
  onTopReached,
}: Props) => {
  return (
    <Base.Root>
      <Base.Viewport className={className} style={style}>
        <ScrollAreaContent
          onBottomReached={onBottomReached}
          onTopReached={onTopReached}
        >
          {children}
        </ScrollAreaContent>
      </Base.Viewport>

      <Base.Context>
        {(context) => (
          <>
            {orientation !== 'horizontal' && context.hasOverflowY && (
              <Base.Scrollbar orientation='vertical'>
                <Base.Thumb className='bg-gray-8 w-1 rounded' />
              </Base.Scrollbar>
            )}

            {orientation !== 'vertical' && context.hasOverflowX && (
              <Base.Scrollbar orientation='horizontal'>
                <Base.Thumb className='bg-gray-8 h-1 rounded' />
              </Base.Scrollbar>
            )}
          </>
        )}
      </Base.Context>

      <Base.Corner />
    </Base.Root>
  )
}
