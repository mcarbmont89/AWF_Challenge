'use client'

import { useState } from 'react'
import { ChatForm } from '@/components/chat-form'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaChartLine, FaBullseye, FaBullhorn } from 'react-icons/fa'

export function MarketingStrategist() {
  const [isHired, setIsHired] = useState(false)

  return (
    <Card className="overflow-hidden transform transition-all hover:scale-105">
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Marketing Mastermind</CardTitle>
          <CardDescription className="text-green-100">
            Crafting campaigns that captivate and convert
          </CardDescription>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-center space-x-4 mb-4">
          <FaChartLine className="text-green-600 text-2xl" />
          <FaBullseye className="text-red-500 text-2xl" />
          <FaBullhorn className="text-yellow-500 text-2xl" />
        </div>
        {isHired ? (
          <ChatForm
            apiEndpoint="/api/chat/marketing"
            placeholder="Ask about campaign strategies, market trends..."
          />
        ) : (
          <Button onClick={() => setIsHired(true)} className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600">
            Unleash Marketing Brilliance
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

