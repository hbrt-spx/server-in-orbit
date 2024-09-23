import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  id: string
}

export async function deleteGoalCompletion({
  id,
}: DeleteGoalCompletionRequest) {
  const deletedGoalCompletion = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, id))

  return {
    deletedGoalCompletion,
  }
}
