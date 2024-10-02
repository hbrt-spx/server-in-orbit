import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goals } from '../db/schema'

interface DeleteGoalRequest {
  completionId: string
}

export async function deleteGoal({ goalId }: { goalId: string }) {
  try {
    if (!goalId) {
      throw new Error('goalId is required')
    }

    const deletedGoal = await db
      .delete(goals)
      .where(eq(goals.id, goalId))
      .returning({
        completionId: goals.id,
      })

    return {
      success: true,
      deletedGoal,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'

    console.error('Error deleting goal:', errorMessage)
    return {
      success: false,
      error: errorMessage,
    }
  }
}
