import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  // Comprehensive portfolio database populated cleanly from content.pdf mapping
  // Updated portfolio database with consolidated projects and verified keys
  // Updated portfolio database with all achievements fully integrated
  const portfolioData = {
    hero: {
      title: "Chanya Shenoy",
      subtitle: "Building AI solutions that solve daily monotony",
      summary: "I'm a passionate problem solver with a persistent curiosity on the 'hows' and 'whys' behind AI with a goal to become a founder one day.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h1>Chanya Shenoy</h1>
          <p className="modal-institution">VIT, Vellore • B.Tech Information Technology (2025-2029)</p>
          <div className="modal-stat-pill">Current Academic Standing: 8.62 CGPA</div>
          <div className="decor-divider"></div>
          <h3>Core Vision & Driven Focus</h3>
          <p>I focus heavily on building technological systems where the processing power of AI connects naturally with the niche of human creativity. I enjoy solving those mundane, hidden problems that people discuss casually over evening chai.</p>
        </div>
      )
    },
    about: {
      title: "Positions I hold",
      summary: "Driving ecosystem innovation as an IIC Startup Ambassador and IEEE-WIE Projects Lead.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Organizational Leadership</h2>
          <div className="decor-divider"></div>
          <div className="experience-block">
            <div className="exp-header">
              <h4>STARTUP AMBASSADOR</h4>
              <span>Dec 2025 - Present</span>
            </div>
            <h5>Institutions Innovation Council (IIC), VIT</h5>
            <p>Helping initial-stage startups scale through funding and grants. Organized multiple events hosting various founders and leaders of the industry.</p>
          </div>
          <div className="experience-block">
            <div className="exp-header">
              <h4>PROJECTS & MANAGEMENT MEMBER</h4>
              <span>Jan 2025 - Present</span>
            </div>
            <h5>IEEE-WIE</h5>
            <p>Directly involved in the projects and management domain for engineering initiatives.</p>
          </div>
        </div>
      )
    },
    skills: {
      title: "Technical Toolkit",
      summary: "Languages, web stacks, and foundational engineering toolchains.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Technical Skills & Assets</h2>
          <div className="decor-divider"></div>
          <h3>Programming</h3>
          <div className="badge-list">
            <span className="badge">Python</span>
            <span className="badge">C</span>
            <span className="badge">C++</span>
            <span className="badge">SQL</span>
          </div>
          <h3>Web & AI</h3>
          <div className="badge-list">
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge text-highlight">Prompt Engineering</span>
          </div>
        </div>
      )
    },
    interests: {
      title: "Exploring these!",
      summary: "Currently mapping multi-agent systems, and system design pipelines.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Ecosystem Horizons</h2>
          <div className="decor-divider"></div>
          <ul className="bullet-list">
            <li><strong>Multi-agent AI systems</strong></li>
            <li><strong>Product management</strong></li>
            <li><strong>LLM applications</strong></li>
            <li><strong>System design</strong></li>
          </ul>
        </div>
      )
    },
    projects: {
      title: "Engineering Portfolio",
      summary: "Featured builds: DronesForMeds, Svastha Prize-Winner, and Arduino Hardware systems.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Technical Implementations</h2>
          <div className="decor-divider"></div>
          
          <div className="experience-block">
            <div className="project-badge-tag">Full-Stack Build</div>
            <h4>DronesForMeds</h4>
            <p>Project lead of a team of 4. Aiming to solve the scarcity of medical supplies in remote regions through a dashboard used to monitor drone systems.</p>
            <div className="modal-links">
              <a href="https://github.com/chanyashenoy/dronesformeds.git" target="_blank" rel="noreferrer" className="action-link-btn">GitHub Repo ↗</a>
            </div>
          </div>

          <div className="experience-block">
            <div className="project-badge-tag prize-tag">🏆 Award Winner</div>
            <h4>Svastha - Idea Prototype</h4>
            <p>Won The Most Innovative Idea award at the All Girls Ideathon. Involved problem identification, brainstorming, and solution design.</p>
          </div>

          <div className="experience-block">
            <div className="project-badge-tag">Hardware Segment</div>
            <h4>Arduino Project</h4>
            <p>Created a voice-based Bluetooth connected system.</p>
          </div>
        </div>
      )
    },
    achievements: {
      title: "Achievements",
      summary: "Honeywell Scholar at US Space Camp, Outstanding Student of the Year, and SheFi Scholar.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Distinctions & Fellowships</h2>
          <div className="decor-divider"></div>
          
          <div className="experience-block">
            <div className="project-badge-tag prize-tag">🏆 Apex School Honor</div>
            <h4>Outstanding Student of the Year</h4>
            <p>Conferred high school's absolute top honor, recognizing comprehensive leadership capacity, absolute academic consistency, and public forum representation.</p>
          </div>

          <div className="experience-block">
            <div className="project-badge-tag">Global Selection</div>
            <h4>Honeywell Leadership Challenge Academy</h4>
            <h5>Space Camp at Huntsville, Alabama, USA</h5>
            <p>Selected as 1 of 250 students globally out of 1,000+ competitive international applications. Developed practical skills in crisis management, heat-shield prototyping, and structural innovation workshops.</p>
          </div>

          <div className="experience-block">
            <div className="project-badge-tag">Web3 Fellowship</div>
            <h4>SheFi Scholar</h4>
            <p>Selected for a fully funded, highly technical track focusing on Web3 ecosystems, smart contracts, and blockchain architectures.</p>
          </div>
        </div>
      )
    },
    contact: {
      title: "Initiate Connection",
      summary: "Let's co-engineer tools or discuss startup strategy. Get in touch.",
      fullDetail: (
        <div className="modal-inner-layout text-center">
          <h2>Let's build something meaningful.</h2>
          <div className="decor-divider margin-center"></div>
          <div className="contact-grid-box">
            <div className="contact-line"><strong>Email:</strong> chanyashenoy@gmail.com</div>
            <div className="contact-line"><strong>LinkedIn:</strong> Chanya Shenoy</div>
            <div className="contact-line"><strong>GitHub:</strong> @chanyashenoy</div>
          </div>
          <div className="modal-links">
            <a href="https://www.linkedin.com/in/chanya-shenoy-a6b233376" target="_blank" rel="noreferrer" className="action-link-btn" style={{marginRight: '10px'}}>LinkedIn ↗</a>
            <a href="https://github.com/chanyashenoy" target="_blank" rel="noreferrer" className="action-link-btn">GitHub ↗</a>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="portfolio-container">
      {/* 1. Global Page Background Track - Styled to match your organic design */}
      <div className="page-background-decor">
        {/* Top Left Floating Pastel Dots */}
        <svg className="bg-shape top-left-blobs" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="32" fill="#b4b6ea" opacity="0.6" />
          <circle cx="130" cy="40" r="22" fill="#b4b6ea" opacity="0.4" />
          <circle cx="30" cy="130" r="12" fill="#b4b6ea" opacity="0.3" />
        </svg>

        {/* Top Right Organic Pink Blob with Inward Flowing Wave Lines */}
        <svg className="bg-shape top-right-organic" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M120,0 C220,0 400,60 400,220 C400,320 300,400 180,400 C80,400 0,300 0,200 C0,80 40,0 120,0 Z" fill="#f7dcd0" opacity="0.75" />
          <path d="M160,20 C240,40 370,90 360,210 C350,310 270,370 190,360 C110,350 40,280 50,180 C60,90 100,10 160,20" stroke="#1e1b4b" strokeWidth="2" fill="none" opacity="0.25" />
        </svg>

        {/* Bottom Left Soft Pink Blob with Flowing Wave Lines */}
        <svg className="bg-shape bottom-left-organic" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M200,80 C300,80 400,160 400,260 C400,360 280,400 160,400 C40,400 0,320 0,220 C0,120 80,80 200,80 Z" fill="#f7dcd0" opacity="0.75" />
          <path d="M180,110 C260,120 360,180 350,260 C340,330 250,370 150,360 C60,350 30,270 40,190 C50,120 110,100 180,110" stroke="#1e1b4b" strokeWidth="2" fill="none" opacity="0.25" />
        </svg>

        {/* Bottom Right Floating Pastel Dots */}
        <svg className="bg-shape bottom-right-blobs" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="35" fill="#b4b6ea" opacity="0.6" />
          <circle cx="80" cy="160" r="18" fill="#b4b6ea" opacity="0.4" />
          <circle cx="170" cy="80" r="10" fill="#b4b6ea" opacity="0.3" />
        </svg>
      </div>

      <div className="bento-grid">
        {/* Splash Header */}
        <div className="splash-header-card">
          <svg className="splash-curve" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50,120 C100,120 120,20 220,20 C320,20 280,180 380,180 C480,180 500,40 600,40 C700,40 720,150 850,150" 
                  stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" opacity="0.15" />
          </svg>
          <svg className="deco-shape top-left-sparkle" viewBox="0 0 100 100"><path d="M50,10 Q50,50 90,50 Q50,50 50,90 Q50,50 10,50 Q50,50 50,10 Z" fill="#1e1b4b" opacity="0.15" /></svg>
          <svg className="deco-shape top-right-asterisk" viewBox="0 0 100 100"><g stroke="#1e1b4b" strokeWidth="12" strokeLinecap="round" opacity="0.12"><line x1="50" y1="10" x2="50" y2="90" /><line x1="10" y1="50" x2="90" y2="50" /></g></svg>
          <svg className="deco-shape bottom-left-asterisk" viewBox="0 0 100 100"><g stroke="#1e1b4b" strokeWidth="12" strokeLinecap="round" opacity="0.12"><line x1="22" y1="22" x2="78" y2="78" /><line x1="22" y1="78" x2="78" y2="22" /></g></svg>
          <svg className="deco-shape bottom-right-sparkle" viewBox="0 0 100 100"><path d="M60,30 Q60,60 90,60 Q60,60 60,90 Q60,60 30,60 Q60,60 60,30 Z" fill="#1e1b4b" opacity="0.15" /></svg>
          <div className="splash-badge">Engineering & Venture Presentation</div>
          <h1 className="splash-title">Portfolio</h1>
        </div>

        {/* 1. Identity Slide Block */}
        <div className="bento-card hero-card grid-col-2" onClick={() => setActiveSection('hero')}>
          <div>
            <h2>{portfolioData.hero.title}</h2>
            <p>{portfolioData.hero.subtitle}</p>
          </div>
          <div className="card-footer">Let's Explore →</div>
        </div>

        {/* 2. Positions I Hold Slide Block */}
        <div className="bento-card about-card grid-col-2" onClick={() => setActiveSection('about')}>
          <h2>{portfolioData.about.title}</h2>
          <p>{portfolioData.about.summary}</p>
          <div className="card-footer">Introduction →</div>
        </div>

        {/* 3. Consolidated Engineering Projects Block */}
        <div className="bento-card drone-card grid-col-4" onClick={() => setActiveSection('projects')}>
          <h2>{portfolioData.projects.title}</h2>
          <p>{portfolioData.projects.summary}</p>
          <div className="card-footer">Launch Gallery →</div>
        </div>

        {/* 4. Technical Skills Block */}
        <div className="bento-card skills-card grid-col-1" onClick={() => setActiveSection('skills')}>
          <h2>{portfolioData.skills.title}</h2>
          <p>{portfolioData.skills.summary}</p>
          <div className="card-footer">Inspect Stack →</div>
        </div>

        {/* 5. Active Exploration Block */}
        <div className="bento-card interests-card grid-col-1" onClick={() => setActiveSection('interests')}>
          <h2>{portfolioData.interests.title}</h2>
          <p>{portfolioData.interests.summary}</p>
          <div className="card-footer">View Spheres →</div>
        </div>

        {/* 6. Achievements Block */}
        <div className="bento-card achievements-card grid-col-2" onClick={() => setActiveSection('achievements')}>
          <h2>{portfolioData.achievements.title}</h2>
          <p>{portfolioData.achievements.summary}</p>
          <div className="card-footer">View Honors →</div>
        </div>

        {/* 7. Contact Card Block */}
        <div className="bento-card contact-card grid-col-4" onClick={() => setActiveSection('contact')}>
          <h2>Let's work together!</h2>
          <p>{portfolioData.contact.summary}</p>
          <div className="card-footer">Ping Terminal →</div>
        </div>
      </div>

      {/* 4. Full-Screen Overlay Layer - Keeping your popup graphics exactly as requested */}
      <div className={`fullscreen-overlay ${activeSection ? 'active' : ''}`}>
        {activeSection && (
          <div className="overlay-content">
            <svg className="popup-decor top-left-star" viewBox="0 0 100 100"><path d="M50,10 Q50,50 90,50 Q50,50 50,90 Q50,50 10,50 Q50,50 50,10 Z" fill="#b4b6ea" opacity="0.2" /></svg>
            <svg className="popup-decor bottom-right-star" viewBox="0 0 100 100"><g stroke="#f7dcd0" strokeWidth="10" opacity="0.15"><line x1="50" y1="10" x2="50" y2="90"/><line x1="10" y1="50" x2="90" y2="50"/></g></svg>
            <button className="close-btn" onClick={() => setActiveSection(null)}>×</button>
            {portfolioData[activeSection].fullDetail}
          </div>
        )}
      </div>
    </div>
  );
}