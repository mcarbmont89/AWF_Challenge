'use client'

import { useState } from 'react'
import { ChatForm } from '@/components/chat-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FaMagic, FaRobot } from 'react-icons/fa'

export function CustomAIAgent() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isConfigured, setIsConfigured] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && description) {
      setIsConfigured(true)
    }
  }

  if (!isConfigured) {
    return (
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <FaMagic className="mr-2" /> Custom AI Architect
            </CardTitle>
            <CardDescription className="text-indigo-100">
              Design your perfect AI assistant with unparalleled expertise
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="custom-name" className="text-indigo-700">Craft Your AI's Identity</Label>
              <Input
                id="custom-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., TechGenius, EcoExpert"
                required
                className="mt-1 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="custom-description" className="text-indigo-700">Define Your AI's Expertise</Label>
              <Input
                id="custom-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., AI expert in sustainable technology"
                required
                className="mt-1 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
              <FaRobot className="mr-2" /> Bring Your AI Assistant to Life
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
        <CardHeader>
          <CardTitle className="text-white text-2xl">{name}</CardTitle>
          <CardDescription className="text-indigo-100">{description}</CardDescription>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <ChatForm
          apiEndpoint="/api/chat/custom"
          placeholder={`Ask ${name} anything about ${description}...`}
          customData={{ name, description }}
        />
      </CardContent>
    </Card>
  )
}

