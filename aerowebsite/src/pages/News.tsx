import { useState } from 'react'
import StarsBackground from '../components/StarsBackground'
import { Link } from 'react-router-dom'
import enetreveal from '../img/enetreveal.jpg'
import ambassadors from '../img/ambassadors.jfif'
import cahierdechargeplanneur from '../img/cahierdechargeplanneur.png'
import planneurregest from '../img/planneurregest.jpg' // <-- Ajout de l'import
import cahierdechargepoly from '../img/cahierdechargepoly.jpg' // <-- Polyclub image
import rcc from '../img/rcc.png' // <-- PolyClub rulebook image
import dronereg from '../img/dronereg.jpg' // <-- Drone registration image
import dronecr from '../img/dronecr.png' // <-- Drone rulebook image
import coupe from '../img/coupe01.png' // <-- ENET Cup announcement image

interface NewsItem {
  id: number
  title: string
  date: string
  category: 'announcement' | 'technicalspecifications' | 'registration'
  excerpt: string
  image: string
  link?: string
}

export default function News() {
  const [filter, setFilter] = useState<'all' | 'announcement' | 'technicalspecifications' | 'registration'>('all')

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Theme Reveal',
      date: 'January 14, 2026',
      category: 'announcement',
      excerpt: 'A world of strategy, smart decisions, risk, and rewards. Just like Monopoly, every move counts, every choice matters, and one decision can change the entire game.',
      image: enetreveal,
      link: 'https://www.facebook.com/share/p/1BuDeBmbhy/'
    },
    {
      id: 2,
      title: 'Call for Ambassadors',
      date: 'January 14, 2026',
      category: 'registration',
      excerpt: 'Do you want to be part of an extraordinary adventure and contribute to the success of ENET AERO CUP 5.0? 🚀✈️ Join our team of ambassadors and help us make this unique event shine!',
      image: ambassadors,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfxKNWrZ-REV7dnan3nPFR8jCtdHPAJ42x1-_dR7-RSO8p2pg/viewform?fbclid=IwY2xjawPUz19leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR5w9z3VIznouSkkoH8wEqv0So1PS6OpOLZ7Hgt8UFrlI-VT5D-wVSSWlIxeWQ_aem_JbGth97oDNKGporb09LdYQ&pli=1'
    },
    {
      id: 3,
      title: 'Glider Specifications',
      date: 'January 20, 2026',
      category: 'technicalspecifications',
      excerpt: `Take control of the skies in Monopoly City at ENET AERO CUP 5.0.
Every flight is a calculated move.
Strategy, precision, and control will determine who dominates the board.
Plan smart. Fly smarter.
Do you have what it takes to become the Sky Tycoon?`,
      image: cahierdechargeplanneur,
      link: 'https://drive.google.com/file/d/1_Iwlr3lxJkRSm67crJqnEU6o3nKO41sB/view?usp=sharing&fbclid=IwY2xjawPcc3xleHRuA2FlbQIxMABicmlkETFPamNUZnppZVR0Q1NQNkdrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnRCVjl9gy-Jdk58g-sJBqv6vrryDZTfxLKwHcQRYPFEmRb3Ia3fJzSRZJRw_aem_l15myoVWxoLqHz74U1y1VQ'
    },
    {
      id: 4,
      title: 'Glider Competition Registration Form v5.0',
      date: 'January 21, 2026',
      category: 'registration',
      excerpt: 'Register your team for the ENET Aero Cup Glider Competition v5.0 and take your chance to become the next Sky Tycoon!',
      image: planneurregest,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfq_ikHRck8OwnQnXiUaWe77KeUcCKJS08E7jFG8b1mmgN_pQ/viewform'
    },
    {
      id: 5,
      title: 'Polyclub Precision Challenge',
      date: 'February 1, 2026',
      category: 'registration',
      excerpt: `The Polyclub competition at ENET AERO CUP 5.0 focuses on precision, stability, and control rather than speed.

Pilots must manage constraints, execute accurate trajectories, and make strategic decisions to maximize their performance.`,
      image: cahierdechargepoly,
      link: 'https://forms.gle/kSWrEwtZysYMXULx8'
    },
    {
      id: 6,
      title: 'Competition Rulebook',
      date: 'February 1, 2026',
      category: 'technicalspecifications',
      excerpt: `Rule the airspace at PolyClub Aero Challenge.
Every glide is a decision. Every turn can change the game.
Master strategy, precision, and control to outfly your rivals.
Think ahead. Plan every move.
Only the sharpest minds will claim victory in the skies.
Are you ready to become the ultimate Air Strategist?`,
      image: rcc,
      link: 'https://drive.google.com/file/d/1A3Nvg7v126YoxPvOIkvEC7fd2YAXSq7T/view?fbclid=IwY2xjawPsqI1leHRuA2FlbQIxMABicmlkETFUUkhrQ3pSQWhGNzhlUG9Tc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuN244yXKwADe0ipf8hq7WEDT20iosPTfSdbXpNbhv9hXQ_NmkWhpkf2d1Rg_aem_wkWQN9kX65_W05qPKiRK3Q'
    },
    {
      id: 7,
      title: 'Drone Registration',
      date: 'February 1, 2026',
      category: 'registration',
      excerpt: `La compétition Drone à ENET AERO CUP 5.0 est conçue comme un défi de pilotage de précision et de maîtrise totale. Les participants devront franchir des obstacles techniques, respecter des trajectoires contrôlées et adapter leur stratégie à chaque situation, où la stabilité et le sang-froid priment sur la vitesse.`,
      image: dronereg,
      link: 'https://forms.gle/hfMvcYPfYNjM47Lg8'
    },
    {
      id: 8,
      title: 'Drone Rulebook',
      date: 'February 1, 2026',
      category: 'technicalspecifications',
      excerpt: `Take control of the airspace at PolyClub Drone Challenge.
Every flight path is a decision. Every second counts.
Strategy, precision, and control will separate the pilots from the champions.
Plan smart. Fly precise. Adapt fast.
Do you have what it takes to dominate the skies?`,
      image: dronecr,
      link: dronecr
    },

    {
      id: 9,
      title: 'ENET AERO CUP 5.0 — Cup Announcement',
      date: 'February 1, 2026',
      category: 'announcement',
      excerpt: `🚀 ENET AERO CUP 5.0 is on its way! ✈️🏆

The cup competition rulebook has been released. Discover the guidelines, master the challenges, and fine-tune your approach for a high-level aeromodelling showdown driven by strategy and precision.

📅 February 15, 2026 marks the day when skill and innovation collide, and the most prepared teams rise above the rest.`,
      image: coupe,
      link: 'https://drive.google.com/file/d/1nRQh-hdltR7-7QvuXHLIvdjBbts0r5TJ/view?fbclid=IwY2xjawPsqY1leHRuA2FlbQIxMABicmlkETFUUkhrQ3pSQWhGNzhlUG9Tc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvDbIr2_OttxQ7-cRwiaOhF20qqXCDXC1SyuOMMNtyNNJ3_YI4WAmvlnZ1cj_aem_eF6eFLsIMaouj1yaboU5xA'
    }
  ]

  // ...le reste du code inchangé...

  const filteredNews = filter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter)

  const categoryColors = {
    announcement: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    technicalspecifications: 'bg-green-500/20 text-green-400 border-green-500/30',
    registration: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  }

  return (
    <div className="relative min-h-screen">
      {/* Fond dynamique étoiles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground />
      </div>
      {/* Le contenu principal doit être au-dessus */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-orange-600/10 to-dark">
        {/* Dark overlay to match Home/About */}
        <div className="absolute inset-0 bg-[#1a1718]" />
        {/* Stars (on top of dark overlay) */}
        <StarsBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
              Latest <span className="text-orange-400">News</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay tuned for all the latest announcements, official updates, and important information regarding ENET AERO CUP. This section will serve as the main communication channel for participants, teams, and partners, providing timely news about competition schedules, technical updates, registration details, and event highlights. Make sure to check this space regularly to stay informed and not miss any key updates related to the organization and progress of ENET AERO CUP.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & News Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-orange-500 text-dark'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('announcement')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'announcement'
                  ? 'bg-orange-500 text-dark'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Announcements
            </button>
            <button
              onClick={() => setFilter('technicalspecifications')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'technicalspecifications'
                  ? 'bg-orange-500 text-dark'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setFilter('registration')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'registration'
                  ? 'bg-orange-500 text-dark'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Registration
            </button>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all group"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center overflow-hidden">
                  {typeof item.image === 'string' && item.image.includes('/') ? (
                    <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl">{item.image}</span>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                    <span className="text-white/40 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                  <button 
                    onClick={() => item.link && window.open(item.link, '_blank')}
                    className="mt-4 text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors"
                  >
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-xl font-bold mb-2">No news found</h3>
              <p className="text-white/60">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      <section className="py-16 bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-orange-600/20 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                🗓️ Mark Your Calendar
              </h2>
              <p className="text-white/70">
                ENET AERO CUP 5.0 main event: <span className="text-orange-400 font-semibold">February 15, 2026</span>
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-gradient text-dark px-8 py-4 rounded-xl font-bold shadow-lg transition-transform whitespace-nowrap"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}