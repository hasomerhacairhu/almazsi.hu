import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Goals from './components/Goals.jsx'
import Activities from './components/Activities.jsx'
import History from './components/History.jsx'
import AnnualReports from './components/AnnualReports.jsx'
import SupportContact from './components/SupportContact.jsx'
import Footer from './components/Footer.jsx'
import SectionDivider from './components/SectionDivider.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
  <SectionDivider />
        <section id="goals"><Goals /></section>
  <SectionDivider />
        <section id="activities"><Activities /></section>
  <SectionDivider />
  <section id="history"><History /></section>
  <SectionDivider />
  <section id="reports"><AnnualReports /></section>
  <SectionDivider />
        {/* Hírek csak menüben, külön szekció nélkül */}
        <section id="support"><SupportContact /></section>
      </main>
      <Footer />
    </div>
  )
}
