import { CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are a sales development expert. Provide advice and strategies for improving sales processes, lead generation, and customer acquisition.',
    messages,
  })

  return result.toDataStreamResponse()
}

