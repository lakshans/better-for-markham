import './App.css'
import './globals.css'
import { useEffect, useState } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import { siteContent } from './config/content'
import ReactGA from "react-ga4";

ReactGA.initialize("G-DJQFHNHJE5");

function App() {
  const { navigation, hero, notification, keyTopics, about, platform, contact } = siteContent
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track initial pageview
  useEffect(() => {
    ReactGA.event("page_view");
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const offset = 80 // Height of the fixed header
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'platform', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#382F2D] text-white relative">
      <div className="fixed bottom-0 left-0 right-0 h-[10vh] bg-gradient-to-t from-[#382F2D] to-transparent z-10 pointer-events-none" />
      <div className="relative z-0">
        <h1 className="p-4">Test</h1>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#651C32]/85 backdrop-blur-sm border-b border-[#CBC4BC]/20">
          <div className="container mx-auto px-4 md:px-8 lg:px-24 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex items-center gap-4 md:gap-3">
                <img 
                  src="/ontario-flag.jpg" 
                  alt="Ontario Flag" 
                  className="w-7 h-7 md:w-12 md:h-12 object-contain"
                />
                <span 
                  onClick={() => scrollToSection('home')}
                  className="text-[15px] md:text-4xl font-tinos font-bold text-white tracking-tight hover:scale-105 transition-transform duration-200 leading-relaxed drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)] cursor-pointer"
                >
                  Jagbir Dosanjh
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 md:px-4 py-1 md:py-1.5 bg-amber-500/90 rounded-full border border-amber-400/50 shadow-lg shadow-amber-500/20">
                <span className="text-[10px] md:text-sm font-medium text-[#382F2D] whitespace-nowrap">
                  Vote on February 27th!
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {navigation.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === id 
                      ? 'text-white bg-[#971B2F] shadow-lg shadow-[#971B2F]/20' 
                      : 'text-[#CBC4BC] hover:text-white hover:bg-[#651C32]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-10 md:pt-12 relative flex items-center">
          <div className="absolute inset-0 bg-[url('/canada-flag.jpg')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#651C32]/70 via-[#651C32]/75 to-[#651C32]/90" />
          <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-24 flex items-center justify-between">
            <div className="max-w-2xl space-y-4 md:space-y-6 flex flex-col items-center text-left mt-0 md:-mt-20">
              {/* Quick Access Buttons - Mobile Only */}
              <div className="md:hidden w-full flex gap-2">
                <button
                  onClick={() => {
                    const debateCard = document.querySelector('#debate-card');
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = debateCard.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm py-2.5 px-4 rounded-full transition-colors shadow-lg"
                >
                  Debate Info
                </button>
                <button
                  onClick={() => {
                    const pollsCard = document.querySelector('#polls-card');
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = pollsCard.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }}
                  className="flex-1 bg-white hover:bg-gray-50 text-red-600 font-bold text-sm py-2.5 px-4 rounded-full transition-colors border border-red-600 shadow-lg"
                >
                  Advance Polls
                </button>
              </div>

              <div className="w-48 h-48 md:w-80 md:h-80 mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-xl self-center">
                <img 
                  src="/jagbir-headshot.jpg" 
                  alt="Jagbir Dosanjh"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                  {hero.title.prefix}
                  <br />
                  <span className="bg-gradient-to-r from-[#AB2328] to-[#971B2F] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    {hero.title.highlight}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#CBC4BC] font-light leading-relaxed italic mb-8">
                  {hero.quote}
                </p>

                {/* Desktop Buttons */}
                <div className="hidden md:flex flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('platform')}
                    className="bg-[#971B2F] hover:bg-[#AB2328] text-white rounded-full px-8 shadow-lg shadow-[#971B2F]/20 transition-all duration-200 hover:shadow-[#971B2F]/30 hover:scale-105"
                  >
                    View Platform
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => scrollToSection('contact')}
                    className="text-[#CBC4BC] border-[#CBC4BC]/20 hover:bg-[#651C32] hover:border-[#651C32] rounded-full px-8 transition-all duration-200 hover:scale-105"
                  >
                    Get Involved →
                  </Button>
                </div>

                {/* Mobile Key Topics */}
                <div className="md:hidden space-y-3 mt-8 mb-16">
                  {/* Debate Card */}
                  <div id="debate-card" className="w-full group flex flex-col p-4 rounded-xl bg-yellow-400 border border-yellow-500 shadow-lg">
                    <h4 className="text-black font-bold text-lg mb-4">LIBERAL vs CONSERVATIVE DEBATE</h4>
                    <p className="text-black font-medium mb-1 line-through">TUESDAY FEB 25, 2025 - 6-8PM</p>
                    <p className="text-black mb-1 line-through">ANGUS GLEN LIBRARY</p>
                    <p className="text-black mb-4 line-through">ROOM G&H</p>
                    <p className="text-red-600 font-bold text-base">UPDATE: Billy Pang has refused to meet with us.</p>
                    <p className="text-black font-bold text-sm mt-4">HOW WILL THEY ADVOCATE FOR YOU, IF THEY WON'T EVEN ADVOCATE FOR THEMSELVES?</p>
                  </div>

                  {/* Mobile Advance Polling Card */}
                  <a 
                    href="https://voterinformationservice.elections.on.ca/en/election/10/58?tab=beforeElectionInPerson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div id="polls-card" className="w-full group flex flex-col p-4 rounded-xl bg-white border border-red-600 shadow-lg text-center">
                      <h4 className="text-red-600 font-bold text-xl mb-2">ADVANCE POLLING NOW OPEN</h4>
                      <p className="text-red-600 font-bold mb-4">VOTE FEB 20 - 22</p>
                      <div className="space-y-2 inline-block">
                        <div className="flex items-center gap-2">
                          <span className="text-red-600 text-xl">📍</span>
                          <div className="text-left">
                            <p className="text-red-600 font-bold">Angus Glen</p>
                            <p className="text-red-600">Community Centre</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-600 text-xl">📍</span>
                          <div className="text-left">
                            <p className="text-red-600 font-bold">Centennial</p>
                            <p className="text-red-600">Community Centre</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Key Topics Panel */}
            <div className="hidden lg:block w-[40rem] space-y-4">
              {/* Debate Card */}
              <div className="w-full bg-yellow-400 rounded-2xl p-8 border border-yellow-500 shadow-xl text-center">
                <h4 className="text-black font-bold text-3xl mb-6 whitespace-nowrap">LIBERAL vs CONSERVATIVE DEBATE</h4>
                <p className="text-black font-medium text-xl mb-1 line-through">TUESDAY FEB 25, 2025 - 6-8PM</p>
                <p className="text-black text-lg mb-1 line-through">ANGUS GLEN LIBRARY</p>
                <p className="text-black text-lg mb-6 line-through">ROOM G&H</p>
                <p className="text-red-600 font-bold text-2xl mb-6">UPDATE: Billy Pang has refused to meet with us.</p>
                <p className="text-black font-bold text-lg">HOW WILL THEY ADVOCATE FOR YOU, IF THEY WON'T EVEN ADVOCATE FOR THEMSELVES?</p>
              </div>

              {/* Advance Polling Card */}
              <a 
                href="https://voterinformationservice.elections.on.ca/en/election/10/58?tab=beforeElectionInPerson"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="w-full bg-white rounded-2xl p-8 border border-red-600 shadow-xl text-center">
                  <h4 className="text-red-600 font-bold text-3xl mb-2">ADVANCE POLLING NOW OPEN</h4>
                  <p className="text-red-600 font-bold text-2xl mb-4">VOTE FEB 20 - 22</p>
                  <div className="space-y-4 inline-block">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-red-600 text-3xl">📍</span>
                      <div>
                        <p className="text-red-600 font-bold text-xl">Angus Glen</p>
                        <p className="text-red-600 text-xl">Community Centre</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-red-600 text-3xl">📍</span>
                      <div>
                        <p className="text-red-600 font-bold text-xl">Centennial</p>
                        <p className="text-red-600 text-xl">Community Centre</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16 md:py-32 bg-[#CBC4BC]">
          <div className="container mx-auto px-4 md:px-8 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#382F2D] text-center">
                {about.title}
              </h2>
              <div className="prose prose-lg mx-auto text-left">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[#382F2D]/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
                
                {/* Quotes Section */}
                <div className="mt-12 space-y-8">
                  <h3 className="text-2xl font-bold text-[#382F2D] mb-6">In His Own Words</h3>
                  {about.quotes.map((quote, index) => (
                    <blockquote key={index} className="border-l-4 border-[#971B2F] pl-6 py-2">
                      <p className="text-[#382F2D]/90 italic">
                        {quote}
                      </p>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="min-h-screen py-16 md:py-32 bg-[#CBC4BC]/30">
          <div className="container mx-auto px-4 md:px-8 lg:px-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 tracking-tight text-[#CBC4BC]">
              {platform.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {platform.items.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-2xl font-bold text-[#651C32]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#382F2D]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 md:py-32 bg-[#CBC4BC]/30">
          <div className="container mx-auto px-4 md:px-8 lg:px-24">
            <div className="max-w-xl mx-auto text-center space-y-6 md:space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#CBC4BC]">
                {contact.title}
              </h2>
              <Card className="border-0 shadow-xl bg-white/90 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="bg-gradient-to-r from-[#971B2F] to-[#651C32] p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                    <p className="text-white/80">{contact.description}</p>
                  </div>

                  {/* Contact Info Section */}
                  <div className="p-8 space-y-6">
                    {/* Email */}
                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#971B2F]/10 flex items-center justify-center group-hover:bg-[#971B2F]/20 transition-colors">
                        <span className="text-xl">📧</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-[#382F2D]/60 font-medium">Email</p>
                        <a 
                          href={`mailto:${contact.info.email}`}
                          className="text-[#971B2F] hover:text-[#651C32] transition-colors"
                        >
                          {contact.info.email}
                        </a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#971B2F]/10 flex items-center justify-center group-hover:bg-[#971B2F]/20 transition-colors">
                        <span className="text-xl">📍</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-[#382F2D]/60 font-medium">Office</p>
                        <p className="text-[#971B2F]">
                          {contact.info.office}
                        </p>
                      </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="pt-4">
                      <Separator className="mb-6" />
                      <div className="grid grid-cols-2 gap-4">
                        {/* Instagram */}
                        <div className="flex items-center space-x-3 group">
                          <div className="w-8 h-8 rounded-full bg-[#971B2F]/10 flex items-center justify-center group-hover:bg-[#971B2F]/20 transition-colors">
                            <svg className="w-4 h-4 text-[#382F2D]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <a 
                              href={`https://instagram.com/${contact.info.social.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#971B2F] hover:text-[#651C32] transition-colors"
                            >
                              {contact.info.social.instagram}
                            </a>
                          </div>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center space-x-3 group">
                          <div className="w-8 h-8 rounded-full bg-[#971B2F]/10 flex items-center justify-center group-hover:bg-[#971B2F]/20 transition-colors">
                            <svg className="w-4 h-4 text-[#382F2D]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <a 
                              href={`https://facebook.com/${contact.info.social.facebook}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#971B2F] hover:text-[#651C32] transition-colors"
                            >
                              {contact.info.social.facebook}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App