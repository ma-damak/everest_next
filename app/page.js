import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Explore from './components/Explore'
import Coaches from './components/Coaches'
import Footer from './components/Footer'
import Test from './components/Test'
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Explore />
        <Coaches />
      </main>
      <Footer />
    </>
  )
}
