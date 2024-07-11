import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Features />
            <Faq />
            <Footer />
        </>
    )
}
