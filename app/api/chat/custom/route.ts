import { CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()
  const systemMessage = messages[0]
  const userMessages = messages.slice(1)

  const customData = JSON.parse(systemMessage.content)

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are ${customData.name}, a ${customData.description}. Provide expert advice and insights based on your role.`,
    messages: userMessages,
  })

  return result.toDataStreamResponse()
}

