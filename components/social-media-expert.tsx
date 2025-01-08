'use client'

import { useState } from 'react'
import { ChatForm } from '@/components/chat-form'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export function SocialMediaExpert() {
  const [isHired, setIsHired] = useState(false)

  return (
    <Card className="overflow-hidden transform transition-all hover:scale-105">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Social Media Maestro</CardTitle>
          <CardDescription className="text-blue-100">
            Master of viral content and engagement strategies
          </CardDescription>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-center space-x-4 mb-4">
          <FaTwitter className="text-blue-400 text-2xl" />
          <FaInstagram className="text-pink-500 text-2xl" />
          <FaLinkedin className="text-blue-700 text-2xl" />
        </div>
        {isHired ? (
          <ChatForm
            apiEndpoint="/api/chat/social-media"
            placeholder="Ask about trending hashtags, content ideas..."
          />
        ) : (
          <Button onClick={() => setIsHired(true)} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
            Hire Your Social Media Guru
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

