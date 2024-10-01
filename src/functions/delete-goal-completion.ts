import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  completionId: string
}

export async function deleteGoalCompletion({
  completionId,
}: { completionId: string }) {
  try {
    if (!completionId) {
      throw new Error('completionId is required')
    }

    const deletedGoalCompletion = await db
      .delete(goalCompletions)
      .where(eq(goalCompletions.id, completionId))
      .returning({
        completionId: goalCompletions.id,
      })

    return {
      success: true,
      deletedGoalCompletion,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'

    console.error('Error deleting goal completion:', errorMessage)
    return {
      success: false,
      error: errorMessage,
    }
  }
}
