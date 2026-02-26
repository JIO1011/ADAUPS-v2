import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CreditCard, HeartHandshake, FileText, Phone, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Finanzas en Línea',
    description: 'Gestiona tus cuentas y certificados desde cualquier lugar.',
    icon: CreditCard,
    link: '/servicios',
  },
  {
    title: 'Préstamos',
    description: 'Ordinarios y emergentes con tasas preferenciales.',
    icon: FileText,
    link: '/servicios',
  },
  {
    title: 'Ayudas Económicas',
    description: 'Apoyo solidario para nuestros socios en momentos clave.',
    icon: HeartHandshake,
    link: '/servicios',
  },
  {
    title: 'Ahorros',
    description: 'Programados y voluntarios para tu futuro.',
    icon: ShieldCheck,
    link: '/servicios',
  },
];

const promotions = [
  {
    id: 1,
    image: 'https://www.adaups.org/wp-content/uploads/2025/01/Banner_662x253.png',
    alt: 'Promoción de inicio de año',
    title: 'Beneficios 2026',
  },
  {
    id: 2,
    image: 'https://www.adaups.org/wp-content/uploads/2025/01/Banner_662x274.png',
    alt: 'Campaña de ahorro',
    title: 'Ahorro Programado',
  },
  {
    id: 3,
    image: 'https://www.adaups.org/wp-content/uploads/2025/01/image-13.jpg',
    alt: 'Evento para socios',
    title: 'Día del Socio',
  },
  {
    id: 4,
    image: 'https://www.adaups.org/wp-content/uploads/2024/11/P2.png',
    alt: 'Promoción especial',
    title: 'Convenio Especial',
  },
];

const news = [
  {
    id: 1,
    title: 'Nuevos beneficios para socios 2026',
    date: '15 Enero 2026',
    category: 'Beneficios',
    image: 'https://www.adaups.org/wp-content/uploads/2025/01/Banner_662x253.png',
    excerpt: 'Conoce las nuevas alianzas estratégicas que hemos firmado para brindarte mejores descuentos en salud y educación.',
  },
  {
    id: 2,
    title: 'Campaña de Ahorro Programado',
    date: '10 Enero 2026',
    category: 'Finanzas',
    image: 'https://www.adaups.org/wp-content/uploads/2025/01/Banner_662x274.png',
    excerpt: 'Inicia el año con metas claras. Únete a nuestra campaña de ahorro programado y obtén una tasa preferencial.',
  },
  {
    id: 3,
    title: 'Celebración del Día del Socio',
    date: '05 Diciembre 2025',
    category: 'Eventos',
    image: 'https://www.adaups.org/wp-content/uploads/2025/01/image-13.jpg',
    excerpt: 'Revive los mejores momentos de nuestra celebración anual. Gracias a todos por su participación y compromiso.',
  },
  {
    id: 4,
    title: 'Convenio Especial de Fin de Año',
    date: '20 Noviembre 2025',
    category: 'Convenios',
    image: 'https://www.adaups.org/wp-content/uploads/2024/11/P2.png',
    excerpt: 'Aprovecha las promociones exclusivas que nuestros aliados tienen para ti en esta temporada navideña.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/adaups-campus/1920/1080"
            alt="Campus UPS"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink-900/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-100 border border-brand-500/30 text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
              Bienvenido a ADAUPS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tu bienestar y el de tu familia, <span className="text-brand-400">nuestra prioridad.</span>
            </h1>
            <p className="text-lg text-surface-200 mb-10 leading-relaxed">
              Somos la Asociación de Docentes y Administrativos de la Universidad Politécnica Salesiana. Brindamos servicios financieros, convenios y apoyo solidario a nuestros socios.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
              >
                Conoce nuestros servicios
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors shadow-sm"
              >
                Sobre ADAUPS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">Servicios para Socios</h2>
            <p className="text-lg text-ink-500">
              Soluciones financieras y de apoyo diseñadas específicamente para las necesidades de nuestra comunidad docente y administrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index} 
                  to={service.link}
                  className="group block p-8 bg-surface-50 rounded-2xl border border-surface-100 hover:border-brand-200 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-brand-600 mb-6 shadow-sm border border-surface-100 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotions Gallery Section */}
      <section className="py-20 bg-surface-50 border-t border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-ink-900 mb-4">Destacados y Promociones</h2>
              <p className="text-lg text-ink-500">
                Mantente al día con las últimas campañas, beneficios temporales y eventos especiales para nuestros socios.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promotions.map((promo) => (
              <div key={promo.id} className="group relative rounded-xl overflow-hidden bg-white shadow-sm border border-surface-200 hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] md:aspect-auto md:h-48 overflow-hidden bg-surface-100">
                  <img 
                    src={promo.image} 
                    alt={promo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 border-t border-surface-100">
                  <h3 className="font-medium text-ink-900 text-sm">{promo.title}</h3>
                  <p className="text-xs text-ink-500 mt-1">Ver detalles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white border-t border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">Noticias y Eventos</h2>
            <p className="text-lg text-ink-500">
              Mantente informado sobre las últimas novedades, convenios y actividades de la asociación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-surface-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-semibold text-ink-700 uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-ink-500 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.excerpt}
                  </p>
                  <div className="inline-flex items-center text-brand-600 text-sm font-medium group-hover:text-brand-700 transition-colors mt-auto">
                    Leer más
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-6">
            ¿Aún no eres socio de ADAUPS?
          </h2>
          <p className="text-lg text-ink-500 mb-10 max-w-2xl mx-auto">
            Únete a nuestra asociación y comienza a disfrutar de todos los beneficios, convenios y servicios financieros diseñados para ti.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/sobre-nosotros"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-ink-900 hover:bg-ink-800 transition-colors shadow-sm"
            >
              Requisitos de afiliación
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-surface-200 text-base font-medium rounded-lg text-ink-900 bg-white hover:bg-surface-50 transition-colors shadow-sm"
            >
              <Phone className="mr-2 h-5 w-5 text-ink-500" />
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
