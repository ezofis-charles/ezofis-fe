import { ScrollArea } from '@/components/base/scroll-area'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const ScrollAreaStory = () => {
  return (
    <>
      <Header title='Scroll Area' />

      <Section title='Default'>
        <div className='w-80'>
          <ScrollArea className='h-80'>
            <div className='space-y-6 pr-4'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                non necessitatibus atque eum assumenda quos corporis, neque
                nostrum tempora molestias blanditiis laborum earum quasi!
                Voluptas vero molestias voluptates excepturi necessitatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minus tenetur magni deleniti vitae eaque maxime sapiente hic
                aperiam quo earum quia excepturi vel fugiat et aliquid, dolores
                iure quisquam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                omnis minima nesciunt veritatis velit temporibus quas dolorum
                eum neque quidem, quisquam explicabo corporis soluta, ipsum
                dolor voluptatum magnam alias vitae.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                non necessitatibus atque eum assumenda quos corporis, neque
                nostrum tempora molestias blanditiis laborum earum quasi!
                Voluptas vero molestias voluptates excepturi necessitatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minus tenetur magni deleniti vitae eaque maxime sapiente hic
                aperiam quo earum quia excepturi vel fugiat et aliquid, dolores
                iure quisquam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                omnis minima nesciunt veritatis velit temporibus quas dolorum
                eum neque quidem, quisquam explicabo corporis soluta, ipsum
                dolor voluptatum magnam alias vitae.
              </p>
            </div>
          </ScrollArea>
        </div>
      </Section>

      <Section title='Horizontal'>
        <div className='w-80'>
          <ScrollArea className='w-80' orientation='horizontal'>
            <div className='w-screen space-y-6 pb-4'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                non necessitatibus atque eum assumenda quos corporis, neque
                nostrum tempora molestias blanditiis laborum earum quasi!
                Voluptas vero molestias voluptates excepturi necessitatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minus tenetur magni deleniti vitae eaque maxime sapiente hic
                aperiam quo earum quia excepturi vel fugiat et aliquid, dolores
                iure quisquam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                omnis minima nesciunt veritatis velit temporibus quas dolorum
                eum neque quidem, quisquam explicabo corporis soluta, ipsum
                dolor voluptatum magnam alias vitae.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                non necessitatibus atque eum assumenda quos corporis, neque
                nostrum tempora molestias blanditiis laborum earum quasi!
                Voluptas vero molestias voluptates excepturi necessitatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minus tenetur magni deleniti vitae eaque maxime sapiente hic
                aperiam quo earum quia excepturi vel fugiat et aliquid, dolores
                iure quisquam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                omnis minima nesciunt veritatis velit temporibus quas dolorum
                eum neque quidem, quisquam explicabo corporis soluta, ipsum
                dolor voluptatum magnam alias vitae.
              </p>
            </div>
          </ScrollArea>
        </div>
      </Section>

      <Section title='Both'>
        <div className='w-80'>
          <ScrollArea className='h-80' orientation='both'>
            <div className='w-120 space-y-6 pr-4 pb-4'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                non necessitatibus atque eum assumenda quos corporis, neque
                nostrum tempora molestias blanditiis laborum earum quasi!
                Voluptas vero molestias voluptates excepturi necessitatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minus tenetur magni deleniti vitae eaque maxime sapiente hic
                aperiam quo earum quia excepturi vel fugiat et aliquid, dolores
                iure quisquam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                omnis minima nesciunt veritatis velit temporibus quas dolorum
                eum neque quidem, quisquam explicabo corporis soluta, ipsum
                dolor voluptatum magnam alias vitae.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                non necessitatibus atque eum assumenda quos corporis, neque
                nostrum tempora molestias blanditiis laborum earum quasi!
                Voluptas vero molestias voluptates excepturi necessitatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                minus tenetur magni deleniti vitae eaque maxime sapiente hic
                aperiam quo earum quia excepturi vel fugiat et aliquid, dolores
                iure quisquam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                omnis minima nesciunt veritatis velit temporibus quas dolorum
                eum neque quidem, quisquam explicabo corporis soluta, ipsum
                dolor voluptatum magnam alias vitae.
              </p>
            </div>
          </ScrollArea>
        </div>
      </Section>
    </>
  )
}
