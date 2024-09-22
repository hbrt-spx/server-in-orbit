import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  goalId: string
}

export async function deleteGoalCompletion({
  goalId,
}: DeleteGoalCompletionRequest) {
  const deletedGoalCompletion = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.goalId, goalId))

  return {
    deletedGoalCompletion,
  }
}
