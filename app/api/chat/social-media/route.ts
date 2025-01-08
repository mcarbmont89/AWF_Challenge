import { CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are an expert social media strategist. Provide advice and strategies for creating engaging content across various social media platforms.',
    messages,
  })

  return result.toDataStreamResponse()
}

