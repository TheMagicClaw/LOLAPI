import { APIs, TOTAL_API_COUNT } from '@/lib/api-data'
import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      count: TOTAL_API_COUNT,
      data: APIs,
    })
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to load APIs' },
      { status: 500 }
    )
  }
}
