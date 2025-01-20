import React from 'react'
import Card from './Card'
const Sections = () => {
  return (
    
       <div className="flex flex-wrap gap-8 justify-center py-12">
    <Card
      id="startups"
      title="Startup Ecosystem"
      description="Explore resources and tools to turn your ideas into reality and scale your business effectively."
    />
    <Card
      id="dsa"
      title="DSA Mastery"
      description="Interactive tutorials and hands-on challenges to boost your problem-solving skills."
    />
    <Card
      id="tech"
      title="Technology Insights"
      description="Stay ahead with curated content on emerging tech, frameworks, and best practices."
    />
  </div>
    
  )
}

export default Sections
