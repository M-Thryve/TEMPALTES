import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Facilities from './pages/Facilities'
import Industries from './pages/Industries'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App() {
  const [page, setPage] = useState('home')

  const setPageAndScroll = (p: string) => {
    setPage(p)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home setPage={setPageAndScroll} />
      case 'about': return <About setPage={setPageAndScroll} />
      case 'services': return <Services setPage={setPageAndScroll} />
      case 'facilities': return <Facilities setPage={setPageAndScroll} />
      case 'industries': return <Industries setPage={setPageAndScroll} />
      case 'faq': return <FAQ setPage={setPageAndScroll} />
      case 'contact': return <Contact setPage={setPageAndScroll} />
      case 'quote': return <Quote />
      case 'careers': return <Careers setPage={setPageAndScroll} />
      case 'privacy': return <Privacy />
      case 'terms': return <Terms />
      default: return <Home setPage={setPageAndScroll} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      <Nav activePage={page} setPage={setPageAndScroll} />
      <main className="flex-1 pt-16">
        {renderPage()}
      </main>
      <Footer setPage={setPageAndScroll} />
    </div>
  )
}
