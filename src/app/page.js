import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'
import AchievementSection from './Components/AchievementSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div className='container mx-auto px-12 py-4 mt-24'>
      <HeroSection/>
      <AchievementSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      
      </div>
      <Footer/>
    </main>
  )
}
