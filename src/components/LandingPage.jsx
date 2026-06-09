import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Truck,
  Package,
  Ship,
  Home,
  Boxes,
  Utensils,
  Armchair,
  MapPin,
  Clock3,
  ShieldCheck,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const whatsapp =
  "https://wa.me/16468844333?text=Hola%20Embarque%20Santo%20Domingo%2C%20quiero%20cotizar%20un%20env%C3%ADo.";

const brandImages = {
  navLogo: "/images/Nav-Bar-Logo.png",
  fullLogo: "/images/Logo-EmbarqueSantoDomingo (2).png",
  shipLogo: "/images/Barco-Logo-Embarque-Santo-Domingo.png",
  siteLogo: "/images/Site-Embarque-Santo-Domingo.png",
};

const services = [
  {
    icon: Package,
    title: "Cajas",
    text: "Ropa, regalos, artículos personales y productos familiares.",
    image: "/images/cajas.png",
  },
  {
    icon: Boxes,
    title: "Tanques",
    text: "Tanques para comida, ropa y artículos del hogar.",
    image: "/images/tanques.png",
  },
  {
    icon: Home,
    title: "Mudanzas",
    text: "Coordinación para mudanzas desde USA hacia República Dominicana.",
    image: "/images/mudanzas.png",
  },
  {
    icon: Truck,
    title: "Puerta a puerta",
    text: "Recogida en USA y entrega directa en República Dominicana.",
    image: "/images/camion.png",
  },
  {
    icon: Armchair,
    title: "Muebles",
    text: "Muebles, electrodomésticos y artículos grandes del hogar.",
    image: "/images/electrodomesticos.png",
  },
  {
    icon: Utensils,
    title: "Comida y hogar",
    text: "Productos secos, artículos familiares y mercancía personal.",
    image: "/images/hero-embarque.png",
  },
];

const steps = [
  { title: "Escríbenos", text: "Nos dices qué quieres enviar y desde dónde." },
  {
    title: "Coordinamos",
    text: "Agendamos la recogida de cajas, tanques o mercancía.",
  },
  {
    title: "Embarcamos",
    text: "Preparamos tu envío para República Dominicana.",
  },
  { title: "Entregamos", text: "Tu carga llega puerta a puerta en RD." },
];

const benefits = [
  "Más de 10,000 clientes satisfechos",
  "Atención directa por WhatsApp",
  "Recogida y entrega puerta a puerta",
  "Envíos desde USA hacia RD",
];

export default function LandingPage() {
  const heroVideoRef = useRef(null);
  const rootRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });

      gsap.from(".timeline-card", {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 75%",
        },
      });

      gsap.from(".gallery-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 80%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-wrapper" ref={rootRef}>
      {/* HEADER */}
      <header className="site-header">
        <a className="brand-logo" href="/" onClick={() => setMenuOpen(false)}>
          <img src={brandImages.navLogo} alt="Embarque Santo Domingo" />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="header-actions">
          <a className="btn-header-cta" href={whatsapp} target="_blank">
            Cotizar
          </a>
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu-panel"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="drag-handle" />
              <nav className="mobile-links">
                <a href="#servicios" onClick={() => setMenuOpen(false)}>
                  Servicios
                </a>
                <a href="#proceso" onClick={() => setMenuOpen(false)}>
                  Proceso
                </a>
                <a href="#galeria" onClick={() => setMenuOpen(false)}>
                  Galería
                </a>
                <a href="#contacto" onClick={() => setMenuOpen(false)}>
                  Contacto
                </a>
              </nav>
              <a
                className="mobile-cta-btn"
                href={whatsapp}
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={20} /> Cotizar por WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <motion.div
            className="hero-textContent"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge">
              <Ship size={15} />
              <span>USA → República Dominicana</span>
            </div>

            <h1 className="hero-title">
              Envíos seguros, rápidos y <span>puerta a puerta</span> para tu
              familia.
            </h1>

            <p className="hero-description">
              Mandamos cajas, tanques, mudanzas, mercancía, muebles,
              electrodomésticos y comida con atención directa y personalizada
              desde el primer mensaje.
            </p>

            <div className="hero-cta-group">
              <a className="btn-hero-primary" href={whatsapp} target="_blank">
                Cotizar por WhatsApp <ArrowRight size={18} />
              </a>
              <a className="btn-hero-secondary" href="tel:+16468844333">
                <Phone size={18} /> Llamar ahora
              </a>
            </div>

            <div className="hero-proof-list">
              {benefits.map((item) => (
                <div className="proof-tag" key={item}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visualCard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="video-container">
              <video
                ref={heroVideoRef}
                className="embedded-video"
                playsInline
                controls
                controlsList="nodownload noremoteplayback"
                preload="metadata"
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
                onEnded={() => setVideoPlaying(false)}
              >
                <source src="/videos/1.mp4" type="video/mp4" />
              </video>
              {!videoPlaying && (
                <button
                  className="video-play-overlay"
                  onClick={async () => {
                    heroVideoRef.current.muted = false;
                    await heroVideoRef.current.play();
                    setVideoPlaying(true);
                  }}
                  aria-label="Reproducir video"
                >
                  <div className="play-icon-pulse">▶</div>
                </button>
              )}
            </div>

            {/* LIVE TRACKING PREVIEW */}
            <div className="live-tracking-widget">
              <div className="widget-header">
                <span className="live-indicator">
                  <span className="pulse-dot" /> EN TRÁNSITO
                </span>
                <span className="widget-title">ESTADO ACTUAL</span>
              </div>

              <div className="route-map-visual">
                <div className="hub">
                  <MapPin size={16} />
                  <strong>USA</strong>
                </div>
                <div className="progress-bar">
                  <div className="animated-ship">
                    <Ship size={18} />
                  </div>
                </div>
                <div className="hub">
                  <MapPin size={16} />
                  <strong>RD</strong>
                </div>
              </div>

              <div className="widget-perks">
                <span>
                  <Truck size={14} /> Recogida Lista
                </span>
                <span>
                  <Clock3 size={14} /> Entrega Segura
                </span>
                <span>
                  <ShieldCheck size={14} /> Garantizado
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* STRIP STATS */}
        <section className="stats-strip">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat-item">
            <h3>USA → RD</h3>
            <p>Ruta Principal Directa</p>
          </div>
          <div className="stat-item">
            <h3>Puerta a puerta</h3>
            <p>Recogida y Entrega Total</p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="main-container" id="servicios">
          <div className="section-heading">
            <span className="eyebrow-label">Portafolio</span>
            <h2>Todo lo que necesitas enviar, en un solo lugar.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="card-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-info-content">
                    <div className="card-icon-badge">
                      <Icon size={22} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROCESS FLOW */}
        <section className="process-wrapper" id="proceso">
          <div className="main-container">
            <div className="section-heading alignment-center">
              <span className="eyebrow-label color-light">Paso a paso</span>
              <h2 className="color-white">
                Enviar a República Dominicana nunca fue tan simple.
              </h2>
            </div>

            <div className="timeline-flow-layout">
              {steps.map((step, index) => (
                <article className="timeline-card" key={step.title}>
                  <div className="step-counter">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="main-container gallery-section-layout" id="galeria">
          <div className="gallery-sticky-intro">
            <span className="eyebrow-label">Evidencia</span>
            <h2>Servicios reales.</h2>
            <p>
              Visualiza el manejo de nuestras operaciones diarias: recogidas de
              cajas, llenado de tanques, logística en contenedores y mudanzas
              internacionales.
            </p>
            <div className="gallery-live-badge">
              <span className="pulse-dot" /> Actualizado en tiempo real
            </div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="video-overlay-gradient" />
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/videos/1.mp4" type="video/mp4" />
              </video>
              <div className="gallery-card-tag">Logística de Contenedores</div>
            </div>

            <div className="gallery-card">
              <div className="video-overlay-gradient" />
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/videos/2.mp4" type="video/mp4" />
              </video>
              <div className="gallery-card-tag">Llenado Seguro de Tanques</div>
            </div>

            <div className="gallery-card">
              <div className="video-overlay-gradient" />
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/videos/3.mp4" type="video/mp4" />
              </video>
              <div className="gallery-card-tag">Recogidas Puerta a Puerta</div>
            </div>

            <div className="gallery-card">
              <div className="video-overlay-gradient" />
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/videos/4.mp4" type="video/mp4" />
              </video>
              <div className="gallery-card-tag">Mudanzas Internacionales</div>
            </div>
          </div>
        </section>

        {/* TRUST ACCORDION/CARD */}
        <section
          className="main-container"
          style={{ paddingBottom: "var(--section-spacing)" }}
        >
          <div className="trust-hero-card">
            <div className="trust-branding">
              <h2>Un servicio pensado para tu necesidad.</h2>
              <img
                src={brandImages.shipLogo}
                alt="Garantía"
                className="trust-floating-img"
              />
            </div>
            <div className="trust-points-list">
              {[
                "Cajas, tanques, mudanzas y mercancía general.",
                "Electrodomésticos, muebles y artículos delicados.",
                "Logística completa con distribución puerta a puerta.",
                "Soporte inmediato vía WhatsApp y llamadas telefónicas.",
              ].map((item) => (
                <div className="trust-bullet" key={item}>
                  <CheckCircle2 size={18} className="icon-green" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTON */}
        <section className="main-container" id="contacto">
          <div className="action-cta-card">
            <img
              src={brandImages.siteLogo}
              alt="Embarque Santo Domingo"
              className="cta-brand-img"
            />
            <span className="eyebrow-label color-light">Cotiza Hoy</span>
            <h2>¿Qué necesitas enviar hoy mismo?</h2>
            <p>
              Escríbenos ahora mismo y agenda la recogida de tu carga sin
              complicaciones.
            </p>

            <div className="cta-buttons-cluster">
              <a href={whatsapp} className="cta-btn-whatsapp">
                <MessageCircle size={20} /> WhatsApp: 646-884-4333
              </a>
              <a href="tel:+12123901171" className="cta-btn-phone">
                <Phone size={18} /> Oficina USA: 212-390-1171
              </a>
              <a href="tel:+18099211365" className="cta-btn-phone">
                <Phone size={18} /> Oficina RD: 809-921-1365
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <img src={brandImages.navLogo} alt="Logo" />
        <p>
          © {currentYear} Embarque Santo Domingo. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
