import { CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are an expert marketing strategist. Provide advice and strategies for effective marketing campaigns and brand development.',
    messages,
  })

  return result.toDataStreamResponse()
}

