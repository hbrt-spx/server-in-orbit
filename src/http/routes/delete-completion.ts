import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { deleteGoalCompletion } from '../../functions/delete-goal-completion'

export const deleteCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/delete-completions',
    {
      schema: {
        body: z.object({
          id: z.string(),
        }),
      },
    },
    async request => {
      const { id } = request.body

      await deleteGoalCompletion({
        id,
      })
    }
  )
}
