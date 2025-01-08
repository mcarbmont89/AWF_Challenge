import { SocialMediaExpert } from '@/components/social-media-expert'
import { MarketingStrategist } from '@/components/marketing-strategist'
import { SalesDeveloper } from '@/components/sales-developer'
import { CustomAIAgent } from '@/components/custom-ai-agent'

export default function Page() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-purple-100 to-blue-100 min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">AI Workforce</h1>
        <p className="text-xl text-blue-700 mb-8">Unleash the power of AI experts to supercharge your business!</p>
      </header>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700 text-center">Ready to Hire: Your Dream Team Awaits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SocialMediaExpert />
          <MarketingStrategist />
          <SalesDeveloper />
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-purple-700 text-center">Craft Your Perfect AI Assistant</h2>
        <div className="max-w-2xl mx-auto">
          <CustomAIAgent />
        </div>
      </section>
    </div>
  )
}

