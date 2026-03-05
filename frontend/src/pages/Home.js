import { useEffect, useState } from 'react';
import { getServices, getTeam, getReviews, MEDIA_URL } from '../api';
import './Home.css';

import heroBg from '../assets/hero_bg.jpg';
import cardDigital from '../assets/card_digital_marketing.jpg';
import cardPrinting from '../assets/card_printing.jpg';
import cardWebsite from '../assets/card_website_design.png';
import cardCreativeAd from '../assets/card_creative_ad.jpg';
import portBranding from '../assets/port_branding.jpg';
import portPackage from '../assets/port_package.jpg';
import portWebsite from '../assets/port_website.png';
import portPrint from '../assets/port_print.jpg';
import portMotion from '../assets/port_motion.jpg';
import portVideo from '../assets/port_video.jpg';
import creative1 from '../assets/creative_1.jpg';
import creative2 from '../assets/creative_2.png';
import creative3 from '../assets/creative_3.jpg';
import creative4 from '../assets/creative_4.jpg';
import cooPhoto from '../assets/coo_photo.jpg';

import reviewAvatar from '../assets/review_avatar.jpg';
import svcPrinting from '../assets/svc_printing.jpg';
import svcBranding from '../assets/svc_branding.jpg';
import svcWeb from '../assets/svc_webdesign.jpg';
import svcVideo from '../assets/svc_video.jpg';
import svcUiux from '../assets/svc_uiux.jpg';


import deliverimg1 from '../assets/deliverimg1.jpg';
import deliverimg2 from '../assets/deliverimg2.jpg';
import deliverimg3 from '../assets/deliverimg3.jpg';
import deliverimg4 from '../assets/deliverimg4.jpg';

import portfolioimg1 from '../assets/portfolioimg1.jpg';
import portfolioimg2 from '../assets/portfolioimg2.jpg';
import portfolioimg3 from '../assets/portfolioimg3.jpg';
import portfolioimg4 from '../assets/portfolioimg4.jpg';
import portfolioimg5 from '../assets/portfolioimg5.jpg';
import portfolioimg6 from '../assets/portfolioimg6.jpg';

import serviceimg1 from '../assets/serviceimg1.jpg';
import serviceimg2 from '../assets/serviceimg2.jpg';
import serviceimg3 from '../assets/serviceimg3.jpg';
import serviceimg4 from '../assets/serviceimg4.jpg';
import serviceimg5 from '../assets/serviceimg5.jpg';

import coo from '../assets/coo.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

import hendrive from '../assets/hendrive.jpg';
import wedomagic from '../assets/wedomagic.jpg';
import ostrich from '../assets/ostrich.jpg';
import catleaf from '../assets/catleaf.jpg';

import roundpic1 from '../assets/roundpic1.jpg';

import drantonjohn1 from '../assets/drantonjohn1.jpg';
import drantonjohn2 from '../assets/drantonjohn2.jpg';
import drantonjohn3 from '../assets/drantonjohn3.jpg';
import drantonjohn4 from '../assets/drantonjohn4.jpg';
import drantonjohn5 from '../assets/drantonjohn5.jpg';


function Home() {
  const [apiTeam, setApiTeam] = useState([]);
  const [apiReviews, setApiReviews] = useState([]);

  useEffect(() => {
    getTeam().then(r => setApiTeam(r.data)).catch(() => {});
    getReviews().then(r => setApiReviews(r.data)).catch(() => {});
  }, []);

  const deliverCards = [
    { id: 1, title: 'DIGITAL MARKETING', sub: 'REACH YOUR TARGET AUDIENCE', img: deliverimg1 },
    { id: 2, title: 'WEBSITE DESIGNING', sub: 'CONVERT VISITORS INTO CUSTOMERS', img: deliverimg2 },
    { id: 3, title: 'PRINTING SOLUTIONS', sub: 'PRINT YOUR CUSTOMERS PRINTS', img: deliverimg3 },
    { id: 4, title: 'CREATIVE AD SOLUTIONS', sub: 'BUILD A BRAND THAT STANDS OUT', img: deliverimg4 },
  ];

  const servicesList = [
    { num: '001', title: 'ALL PRINTING WORKS', desc: 'libero, porta gravida dui sollicitudin. nisl. Sed lacus orci sapien ac at sit in lobortis, orci Lorem ex. urna. vitae nec Nunc malesuada felis, nibh nisl. Nam adipiscing convallis. Donec amet, laoreet lacus, ipsum nisl. placerat elit Ut', img: serviceimg1 },
    { num: '002', title: 'BRANDING', desc: 'Sed tincidunt non, vel enim. faucibus laoreet eu dignissim, amet, non Sed placerat non nec ex efficitur. orci lacus, ex Cras dignissim. Donec fringilla Sed tincidunt eget urna nulla, commodo vitae laoreet massa sollicitudin. vitae sed ex', img: serviceimg2 },
    { num: '003', title: 'WEBSITE DESIGNING', desc: 'Morbi Cras at, consectetur lorem. sapien Ut viverra ex fringilla lorem. tincidunt faucibus Sed adipiscing ex non. sit placerat massa Lorem lobortis, elementum Nunc Donec faucibus tempor urna. hendrerit viverra sodales. adipiscing Lorem ex', img: serviceimg3 },
    { num: '004', title: 'VIDEO/MOTION GRAPHICS', desc: 'placerat eget ex tincidunt placerat quam viverra viverra In Donec non non arci libero, nulla, nisi sed maximus vitae lorem. Praesent elit viverra dui. viverra lacus, luctus quis Vestibulum placerat. maximus nibh efficitur. id scelerisque', img: serviceimg4 },
    { num: '005', title: 'UI UX/DESIGN', desc: 'dui tincidunt Nam vehicula. Nullam venenatis libero, fringilla Morbi Nam sed eget nisi ac nisl elit fringilla eu cursus ullamcorper quis sed est. hendrerit odio maximus dui leo. Nullam ex placerat viverra leo. Nullam urna nec quis in at,', img: serviceimg5 },
  ];

  const portfolioItems = [
    { title: 'PRINT & PRODUCTION', sub: 'REACH YOUR TARGET AUDIENCE', img: portfolioimg1 },
    { title: 'BRANDING', sub: 'REACH YOUR TARGET AUDIENCE', img: portfolioimg2 },
    { title: 'MOTION GRAPHICS', sub: 'REACH YOUR TARGET AUDIENCE', img: portfolioimg3 },
    { title: 'PACKAGE DESIGNING', sub: 'REACH YOUR TARGET AUDIENCE', img: portfolioimg4 },
    { title: 'WEBSITE DESIGNING', sub: 'REACH YOUR TARGET AUDIENCE', img: portfolioimg5 },
    { title: 'VIDEO PRODUCTION', sub: 'REACH YOUR TARGET AUDIENCE', img: portfolioimg6 },
  ];

  const staticTeam = [
    { name: 'demo', role: 'Designer', img: team1 },
    { name: 'demo', role: 'Sales Executive', img: team2 },
    { name: 'demo', role: 'Sales Executive', img: team3 },
    { name: 'demo', role: 'Sales Executive', img: team4 },
  ];

  const staticReviews = [
    { id: 1, name: 'Digital Marketing', rating: 3, text: 'Proven experience in digital marketing or related field Strong knowledge of SEO/SEM, Google Ads, Facebook Ads, and Google Analytics Proficiency in tools like Canva, WordPress, Mailchimp, etc.', avatar: roundpic1 },
    { id: 2, name: 'Digital Marketing', rating: 4, text: 'Proven experience in digital marketing or related field Strong knowledge of SEO/SEM, Google Ads, Facebook Ads, and Google Analytics Proficiency in tools like Canva, WordPress, Mailchimp, etc.', avatar: reviewAvatar },
  ];

  const displayTeam = apiTeam.length > 0 ? apiTeam : staticTeam;
  const displayReviews = apiReviews.length > 0 ? apiReviews : staticReviews;

  return (
    <div className="home">

      {/* ═══ HERO ═══ */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-sub">PRINTING &amp; BRANDING SOLUTION</p>
          <h1 className="hero-title">IN UAE</h1>
          <p className="hero-desc">We craft impactful Printing works, advertising, branding &amp; digital marketing strategies<br />to grow your brand and achieve measurable success!</p>
        </div>
      </section>

      {/* ═══ DELIVER SOLUTION ═══ */}
      <section className="section">
        <div className="container">
          <p className="deliver-tag">Deliver Solution</p>
          <p className="deliver-sub">We craft custom solutions to help you achieve your specific marketing goals and objectives.</p>
          <div className="deliver-grid">
            {deliverCards.map(c => (
              <div className="deliver-card" key={c.id}>
                <img src={c.img} alt={c.title} />
                <div className="deliver-card-info">
                  <h3>{c.title}</h3>
                  <p className="card-sub-text">{c.sub}</p>
                  <span className="learn-more">LEARN MORE →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT US ═══ */}
      <section className="section about-section">
        <div className="container about-grid">
          <div>
            <p className="about-tag">ABOUT US</p>
            <h2 className="about-heading">CREATIVE<br />AGENCY</h2>
          </div>
          <div>
            <p className="about-text">Nunc lorem. turpis convallis. Praesent elit vitae Morbi risus id Lorem Vestibulum placerat ipsum facilisis facilisis massa nibh dignissim. faucibus laoreet In at non eget Donec elit maximus consectetur nulla, sodales. vehicula, amet, dui.</p>
            <a href="#services" className="read-more-link">Read More</a>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="section">
        <div className="container">
          <p className="about-text" style={{ marginBottom: 12 }}>From strategy to stunning visuals, discover the services that empower our clients' success. Explore our portfolio of successful Projects.</p>
          <button className="portfolio-btn">PORTFOLIOS →</button>
          <div className="portfolio-grid">
            {portfolioItems.map((p, i) => (
              <div className={`portfolio-item port-${i}`} key={i}>
                <img src={p.img} alt={p.title} />
                <div className="portfolio-info">
                  <h4>{p.title}</h4>
                  <span className="port-sub">{p.sub}</span><br />
                  <span className="learn-more" style={{ fontSize: 11 }}>LEARN MORE →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOW ═══ */}
      <section className="section workflow-section">
        <div className="container">
          <div className="workflow-top">
            <h2 className="workflow-title">OUR WORK<br />FLOW</h2>
            <p className="about-text">tincidunt Cras adipiscing nec quam ipsum id enim. nibh lorem. urna. sollicitudin. massa tincidunt at, quam nibh ex ex ullamcorper vehicula, ipsum Donec elit non sit sodales. felis, gravida quis sodales. quam ullamcorper massa Ut Sed non.</p>
          </div>
          <div className="workflow-steps">
            {[
              { icon: '📋', label: 'Collect Details' },
              { icon: '✏️', label: 'Design' },
              { icon: '✅', label: 'Approve & Print' },
              { icon: '🚚', label: 'Fast Delivery' },
            ].map(s => (
              <div className="workflow-step" key={s.label}>
                <span className="workflow-icon">{s.icon}</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CORE SERVICES ═══ */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="core-title">OUR CORE SERVICES</h2>
          <div className="core-grid">
            {[
              { icon: '🖨️', name: 'Digital Printing', desc: 'Creative designs that build strong brand identity and visual impact.' },
              { icon: '📰', name: 'Offset Printing', desc: 'High-quality printing solutions with precise colors and premium finishing.' },
              { icon: '🚩', name: 'Promotional Flags', desc: 'Eye-catching promotional flags designed to attract and engage.' },
              { icon: '🎁', name: 'Corporate Gifts', desc: 'Customized gifts that enhance brand recall and customer relationships.' },
              { icon: '🪧', name: 'Signages', desc: 'Durable and attractive signage solutions for effective brand communication.' },
              { icon: '📐', name: 'Large Format Printing', desc: 'Transform your vehicles into moving advertisements for your brand.' },
              { icon: '🏢', name: 'Wall & Glass Branding', desc: 'Transform walls and glass into powerful brand touchpoints.' },
              { icon: '👕', name: 'T Shirts & Jersey', desc: 'Original custom designs that make your apparel stand out.', highlight: true },
              { icon: '✨', name: 'Acrylic Products', desc: 'Premium acrylic fabrication with precision laser cutting and engraving.' },
            ].map(s => (
              <div className={`core-item ${s.highlight ? 'highlight' : ''}`} key={s.name}>
                <div className={`core-icon-wrap ${s.highlight ? 'orange-circle' : ''}`}>
                  <span className="core-icon">{s.icon}</span>
                </div>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES WE PROVIDE ═══ */}
      <section className="section services-provide-section">
        <div className="container">
          <div className="services-provide-header">
            <h2 className="services-provide-title">SERVICES<br />WE PROVIDE</h2>
            <p className="about-text">enim. libero, amet, Ut quis enim. libero, non tincidunt In vitae id tincidunt ex. Praesent Nunc dui diam non. adipiscing ultrices Vestibulum laoreet massa id varius varius Lorem eu placerat. nec consectetur in elit fringilla cursus non commodo eu elementum consectetur fringilla dolor tempor sit tincidunt lobortis,</p>
          </div>
          <div className="services-list">
            {servicesList.map(s => (
              <div className="service-row" key={s.num}>
                <span className="svc-num">({s.num})</span>
                <div className="svc-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <img src={s.img} alt={s.title} className="svc-img" />
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ═══ COO MESSAGE ═══ */}
      <section className="section" id="team">
        <div className="container">
          <h2 className="section-h2">Our COO's Message</h2>
          <div className="coo-grid">
            <img src={coo} alt="COO" className="coo-photo" />
            <div>
              <p className="about-text">ex Nunc Vestibulum urna. orci Vestibulum nisl. amet, placerat Quisque odio tincidunt elit elit diam elit nec nulla, leo. id quis tortor. lorem. efficitur. Ipsum Morbi at, convallis. sodales. amet, id maximus tincidunt Cras non. malesuada</p>
              <p className="about-text" style={{ marginTop: 16 }}>nisl. lorem. venenatis nisl Lorem dolor Praesent dui. tincidunt non, dolor dolor tincidunt id vitae Morbi quis placerat ultrices porta non, ipsum Praesent non Nam massa scelerisque vitae viverra vel ullamcorper Sed risus placerat eu ex.</p>
              <p className="about-text" style={{ marginTop: 16 }}>malesuada tempor gravida elit dignissim, non Vestibulum libero, malesuada tincidunt elit. in tincidunt convallis. Ipsum nisl est. vehicula, vitae tincidunt ex luctus vel ultrices leo. volutpat risus malesuada sollicitudin. nec in ex vitae</p>
              <p className="about-text" style={{ marginTop: 16 }}>adipiscing odio eget Nullam Morbi sapien ipsum vitae viverra sodales. viverra porta elit ac nulla, nec enim. scelerisque urna. vehicula, vitae quam nisl. Ut dui quis elit Morbi venenatis odio ullamcorper Lorem nec placerat turpis amet, ex</p>
              <a href="#" className="read-more-link" style={{ marginTop: 20, display: 'block' }}>demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MEET OUR TEAM ═══ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-h2">Meet Our Team</h2>
          <div className="team-grid">
            {displayTeam.map((m, i) => (
              <div className="team-card" key={m.id || i}>
                <img
                  src={m.image ? `${MEDIA_URL}${m.image}` : [team1, team2, team3, team4][i % 4]}
                  alt={m.name}
                />
                <h4 className="team-name">{m.name}</h4>
                <p className="team-role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>      

      {/* ═══ STATS + CREATIVE ═══ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-row">
            {[['5000+', 'PROJECTS'], ['500+', 'CLIENTS'], ['2+', 'COUNTRIES'], ['10K', 'CREATIVES']].map(([n, l]) => (
              <div className="stat" key={l}>
                <h2 className="stat-num">{n}</h2>
                <p className="stat-label">{l}</p>
              </div>
            ))}
          </div>
          <div className="creative-section">
            <div className="creative-big-text">CREATIVE</div>
            <div className="creative-images">
              <img src={hendrive} alt="creative" className="cimg" />
              <img src={wedomagic} alt="creative" className="cimg center-cimg" />
              <img src={ostrich} alt="creative" className="cimg" />
              <img src={catleaf} alt="creative" className="cimg last-cimg" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ REVIEWS ═══ */}
      <section className="section">
        <div className="container">
          <p className="review-label">Client</p>
          <h2 className="review-title">Reviews</h2>
          <div className="reviews-grid">
            {displayReviews.map((r, i) => (
              <div className="review-card" key={r.id || i}>
                <div className="review-header">
                  <img
                    src={r.image ? `${MEDIA_URL}${r.image}` : (r.avatar || reviewAvatar)}
                    alt={r.name}
                    className="review-avatar"
                  />
                  <div>
                    <h4 className="review-name">{r.name || r.category}</h4>
                    <div className="stars">{'★'.repeat(r.rating || 3)}{'☆'.repeat(5 - (r.rating || 3))}</div>
                  </div>
                </div>
                <p className="review-text">{r.text || r.review}</p>
              </div>
            ))}
          </div>
          <div className="review-strip">
            {[drantonjohn1, drantonjohn2, drantonjohn3, drantonjohn4, drantonjohn5].map((img, i) => (
              <div className="strip-item" key={i}>
                <img src={img} alt={`work ${i + 1}`} />
                <div className="strip-info">
                  <span>▶ Dr Anton Jhon</span>
                  <small>Founder Medventure</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-logo">logo</h3>
              <p className="footer-tagline">We Deliver The Best</p>
              <p className="footer-desc">faucibus in ultrices Nunc laoreet non nec tincidunt tortor. est, risus felis. tincidunt lorem, sodales. Ut ex in quis faucibus ut. Donec adipiscing ex ut.</p>
              <div className="footer-socials">
                <span>📷</span><span>📘</span><span>𝕏</span><span>▶</span>
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">Company Info</h4>
              <p className="fp">About Us</p><p className="fp">We are hiring</p><p className="fp">Blog</p>
              <h4 className="footer-col-title" style={{ marginTop: 20 }}>Legal</h4>
              <p className="fp">Terms &amp; Conditions</p><p className="fp">Privacy Policy</p>
            </div>
            <div>
              <h4 className="footer-col-title">Features</h4>
              <p className="fp">Business Marketing</p><p className="fp">User Analytic</p><p className="fp">Live Chat</p><p className="fp">Unlimited Support</p>
            </div>
            <div>
              <h4 className="footer-col-title">Get In Touch</h4>
              <p className="fp">📞 +971 00 000 000 || +971 00 000 0000</p>
              <p className="fp">✉ info@tested.ae || test@printzed.ae</p>
              <p className="fp">🏪 Shop No: 13, xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxDubai - U.A.E.</p>
              <div style={{ marginTop: 20 }}>
                <h4 className="footer-col-title">Report</h4>
                <div className="footer-input-row">
                  <input type="text" placeholder="Note" className="footer-input" />
                  <span className="footer-send">✈</span>
                </div>
              </div>
            </div>
          </div>
          <p className="footer-copy">© 2024 All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
