import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../routeTree.gen'
import { tanstackQueryClient } from '../tanstack-query'

export const router = createRouter({
  context: {
    queryClient: tanstackQueryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultStructuralSharing: true,
  notFoundMode: 'root',
  routeTree,
  scrollRestoration: true,
})
