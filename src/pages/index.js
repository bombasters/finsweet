import PostsSection from '@/components/PostsSection'
import WelcomeSection from '@/components/WelcomeSection'
import Image from 'next/image'
import Link from 'next/link'
import backgroundImage from '../assets/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.jpg'
import AboutUs from '@/components/AboutUs'
import ChooseCategory from '@/components/ChooseCategory'

export default function Home() {
  return (
    <div>
      <WelcomeSection/>
      <PostsSection/>
      <AboutUs/>
      <ChooseCategory/>
    </div>
  )
}
