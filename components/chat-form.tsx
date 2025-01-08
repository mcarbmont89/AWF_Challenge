'use client'

import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'
import { ArrowUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useRef, useEffect } from 'react'

interface ChatFormProps extends React.ComponentProps<'div'> {
  apiEndpoint: string
  placeholder: string
  customData?: Record<string, any>
}

export function ChatForm({
  className,
  apiEndpoint,
  placeholder,
  customData,
  ...props
}: ChatFormProps) {
  const { messages, input, setInput, append } = useChat({
    api: apiEndpoint,
    initialMessages: customData
      ? [{ role: 'system', content: JSON.stringify(customData) }]
      : undefined,
  })

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      void append({ content: input, role: 'user' })
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [input])

  return (
    <div className={cn('flex flex-col h-[400px]', className)} {...props}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              'max-w-[80%] rounded-lg px-4 py-2 text-sm',
              message.role === 'user'
                ? 'bg-indigo-500 text-white self-end'
                : 'bg-gray-200 text-gray-800 self-start'
            )}
          >
            {message.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-t border-gray-200 p-4 flex items-center space-x-2"
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none min-h-[40px] max-h-[200px] overflow-y-auto"
          rows={1}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button type="submit" size="icon" className="rounded-full bg-indigo-500 hover:bg-indigo-600">
              <ArrowUpIcon className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Send message</TooltipContent>
        </Tooltip>
      </form>
    </div>
  )
}

