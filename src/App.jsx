import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  // Comprehensive portfolio database populated cleanly from content.pdf mapping
  // Updated portfolio database with consolidated projects and verified keys
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
          <p>I focus heavily on building technological systems where the processing power of AI connects naturally with the niche of human creativity.   I enjoy solving those mundane, hidden problems that people discuss casually over evening chai.  </p>
        </div>
      )
    },
    about: {
      title: "Positions I hold ",
      summary: "Driving ecosystem innovation as an IIC Startup Ambassador and IEEE-WIE Projects Lead.",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Organizational Leadership</h2>
          <div className="decor-divider"></div>
          <div className="experience-block">
            <div className="exp-header">
              <h4>STARTUP AMBASSADOR</h4>
              <span>Dec 2025 - Present  </span>
            </div>
            <h5>Institutions Innovation Council (IIC), VIT  </h5>
            <p>Helping initial-stage startups scale through funding and grants.   Organized multiple events hosting various founders and leaders of the industry.  </p>
          </div>
          <div className="experience-block">
            <div className="exp-header">
              <h4>PROJECTS & MANAGEMENT MEMBER</h4>
              <span>Jan 2025 - Present  </span>
            </div>
            <h5>IEEE-WIE  </h5>
            <p>Directly involved in the projects and management domain for engineering initiatives.  </p>
          </div>
        </div>
      )
    },
    skills: {
      title: "Technical Toolkit",
      summary: "Languages, web stacks, and foundational engineering toolchains.  ",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Technical Skills & Assets</h2>
          <div className="decor-divider"></div>
          <h3>Programming</h3>
          <div className="badge-list">
            <span className="badge">Python  </span>
            <span className="badge">C  </span>
            <span className="badge">C++  </span>
            <span className="badge">SQL  </span>
          </div>
          <h3>Web & AI</h3>
          <div className="badge-list">
            <span className="badge">HTML  </span>
            <span className="badge">CSS  </span>
            <span className="badge text-highlight">Prompt Engineering  </span>
          </div>
        </div>
      )
    },
    // FIXED KEY: Changed from 'explore' to 'interests' to match the click handler
    interests: {
      title: "Exploring these!",
      summary: "Currently mapping multi-agent systems, and system design pipelines.  ",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Ecosystem Horizons</h2>
          <div className="decor-divider"></div>
          <ul className="bullet-list">
            <li><strong>Multi-agent AI systems  </strong></li>
            <li><strong>Product management  </strong></li>
            <li><strong>LLM applications  </strong></li>
            <li><strong>System design  </strong></li>
          </ul>
        </div>
      )
    },
    projects: {
      title: "Engineering Portfolio",
      summary: "Featured builds: DronesForMeds, Svastha Prize-Winner, and Arduino Hardware systems.  ",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Technical Implementations</h2>
          <div className="decor-divider"></div>
          
          <div className="experience-block">
            <div className="project-badge-tag">Full-Stack Build</div>
            <h4>DronesForMeds</h4>
            <p>Project lead of a team of 4.   Aiming to solve the scarcity of medical supplies in remote regions through a dashboard used to monitor drone systems.  </p>
            <div className="modal-links">
              <a href="https://github.com/chanyashenoy/dronesformeds.git" target="_blank" rel="noreferrer" className="action-link-btn">GitHub Repo ↗</a>
            </div>
          </div>

          <div className="experience-block">
            <div className="project-badge-tag prize-tag">🏆 Award Winner</div>
            <h4>Svastha - Idea Prototype</h4>
            <p>Won The Most Innovative Idea award at the All Girls Ideathon.   Involved problem identification, brainstorming, and solution design.  </p>
          </div>

          <div className="experience-block">
            <div className="project-badge-tag">Hardware Segment</div>
            <h4>Arduino Project</h4>
            <p>Created a voice-based Bluetooth connected system.  </p>
          </div>
        </div>
      )
    },
    achievements: {
      title: "Achievements",
      summary: "Honeywell Leadership Scholar at US Space Camp and Outstanding Student of the Year.  ",
      fullDetail: (
        <div className="modal-inner-layout">
          <h2>Distinctions & Fellowships</h2>
          <div className="decor-divider"></div>
          <div className="experience-block">
            <h4>Honeywell Leadership Challenge Academy  </h4>
            <h5>Space Camp at Huntsville, Alabama, USA  </h5>
            <p>Selected as 1 of 250 students globally.   Learned teamwork, innovation, and presentation through crisis management and heat-shield prototyping.  </p>
          </div>
          <div className="experience-block">
            <h4>SheFi Scholar  </h4>
            <p>Fully funded Web3 and Blockchain based course.  </p>
          </div>
        </div>
      )
    },
    contact: {
      title: "Initiate Connection",
      summary: "Let's co-engineer tools or discuss startup strategy. Get in touch.  ",
      fullDetail: (
        <div className="modal-inner-layout text-center">
          <h2>Let's build something meaningful.  </h2>
          <div className="decor-divider margin-center"></div>
          <div className="contact-grid-box">
            <div className="contact-line"><strong>Email:</strong> chanyashenoy@gmail.com  </div>
            <div className="contact-line"><strong>LinkedIn:</strong> Chanya Shenoy  </div>
            <div className="contact-line"><strong>GitHub:</strong> @chanyashenoy  </div>
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
      {/* Background decor omitted for brevity - keep your current SVG background layer here */}
      
      <div className="bento-grid">
        <div className="splash-header-card">
          <div className="splash-badge">Engineering & Venture Presentation</div>
          <h1 className="splash-title">Portfolio</h1>
        </div>

        {/* 1. Identity */}
        <div className="bento-card hero-card grid-col-2" onClick={() => setActiveSection('hero')}>
          <div><h2>{portfolioData.hero.title}</h2><p>{portfolioData.hero.subtitle}</p></div>
          <div className="card-footer">Let's Explore →</div>
        </div>

        {/* 2. Leadership */}
        <div className="bento-card about-card grid-col-2" onClick={() => setActiveSection('about')}>
          <h2>{portfolioData.about.title}</h2><p>{portfolioData.about.summary}</p>
          <div className="card-footer">Introduction →</div>
        </div>

        {/* 3. Consolidated Projects - NOW LONG SPANNING */}
        <div className="bento-card drone-card grid-col-4" onClick={() => setActiveSection('projects')}>
          <h2>{portfolioData.projects.title}</h2><p>{portfolioData.projects.summary}</p>
          <div className="card-footer">Launch Gallery →</div>
        </div>

        {/* 4. Technical Skills */}
        <div className="bento-card skills-card grid-col-1" onClick={() => setActiveSection('skills')}>
          <h2>{portfolioData.skills.title}</h2><p>{portfolioData.skills.summary}</p>
          <div className="card-footer">Inspect Stack →</div>
        </div>

        {/* 5. Active Exploration - POP-UP FIXED */}
        <div className="bento-card interests-card grid-col-1" onClick={() => setActiveSection('interests')}>
          <h2>{portfolioData.interests.title}</h2><p>{portfolioData.interests.summary}</p>
          <div className="card-footer">View Spheres →</div>
        </div>

        {/* 6. Achievements */}
        <div className="bento-card achievements-card grid-col-2" onClick={() => setActiveSection('achievements')}>
          <h2>{portfolioData.achievements.title}</h2><p>{portfolioData.achievements.summary}</p>
          <div className="card-footer">View Honors →</div>
        </div>

        {/* 7. Contact Card */}
        <div className="bento-card contact-card grid-col-4" onClick={() => setActiveSection('contact')}>
          <h2>Let's work together!</h2><p>{portfolioData.contact.summary}</p>
          <div className="card-footer">Ping Terminal →</div>
        </div>
      </div>

      {/* Overlay logic remains the same - ensure it uses activeSection as key */}
      <div className={`fullscreen-overlay ${activeSection ? 'active' : ''}`}>
        {activeSection && (
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setActiveSection(null)}>×</button>
            {portfolioData[activeSection].fullDetail}
          </div>
        )}
      </div>
    </div>
  );
}