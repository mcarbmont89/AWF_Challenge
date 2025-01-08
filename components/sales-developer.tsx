'use client'

import { useState } from 'react'
import { ChatForm } from '@/components/chat-form'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaHandshake, FaRocket, FaChartBar } from 'react-icons/fa'

export function SalesDeveloper() {
  const [isHired, setIsHired] = useState(false)

  return (
    <Card className="overflow-hidden transform transition-all hover:scale-105">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Sales Sorcerer</CardTitle>
          <CardDescription className="text-orange-100">
            Turning leads into loyal customers with finesse
          </CardDescription>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-center space-x-4 mb-4">
          <FaHandshake className="text-blue-500 text-2xl" />
          <FaRocket className="text-red-500 text-2xl" />
          <FaChartBar className="text-green-500 text-2xl" />
        </div>
        {isHired ? (
          <ChatForm
            apiEndpoint="/api/chat/sales"
            placeholder="Ask about sales techniques, customer acquisition..."
          />
        ) : (
          <Button onClick={() => setIsHired(true)} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
            Empower Your Sales Team
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

