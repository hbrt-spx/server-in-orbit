import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { deleteGoalCompletion } from '../../functions/delete-goal-completion'

export const deleteCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/delete-completions',
    {
      schema: {
        body: z.object({
          completionId: z.string(),
        }),
      },
    },
    async request => {
      const { completionId } = request.body

      await deleteGoalCompletion({
        completionId,
      })
    }
  )
}
