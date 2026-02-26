import { CreditCard, FileText, HeartHandshake, ShieldCheck, Download, ExternalLink } from 'lucide-react';

const servicesList = [
  {
    id: 'finanzas',
    title: 'Finanzas en Línea',
    description: 'Accede a tu estado de cuenta, simula préstamos y descarga certificados desde nuestra plataforma segura.',
    icon: CreditCard,
    features: ['Consulta de saldos', 'Simulador de crédito', 'Descarga de certificados', 'Historial de movimientos'],
    action: 'Ingresar al sistema',
    link: '#',
  },
  {
    id: 'prestamos',
    title: 'Préstamos',
    description: 'Ofrecemos diferentes líneas de crédito con tasas de interés preferenciales para nuestros socios.',
    icon: FileText,
    features: ['Préstamos Ordinarios', 'Préstamos Emergentes', 'Crédito Educativo', 'Refinanciamiento'],
    action: 'Descargar formulario',
    link: '#',
  },
  {
    id: 'ayudas',
    title: 'Ayudas Económicas',
    description: 'Fondo solidario destinado a apoyar a los socios en situaciones de calamidad doméstica o salud.',
    icon: HeartHandshake,
    features: ['Calamidad doméstica', 'Gastos médicos mayores', 'Fallecimiento de familiares', 'Apoyo solidario'],
    action: 'Ver reglamento',
    link: '#',
  },
  {
    id: 'ahorros',
    title: 'Ahorros',
    description: 'Fomenta el hábito del ahorro con nuestras diferentes modalidades y obtén rendimientos competitivos.',
    icon: ShieldCheck,
    features: ['Ahorro Programado', 'Ahorro Voluntario', 'Ahorro Navideño', 'Depósitos a plazo'],
    action: 'Más información',
    link: '#',
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-surface-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Soluciones financieras y beneficios diseñados exclusivamente para el bienestar de los socios de ADAUPS.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-surface-50 py-16 md:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group bg-white p-8 rounded-3xl border border-surface-200 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-brand-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 relative z-10">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-ink-900 mb-3 group-hover:text-brand-700 transition-colors">{service.title}</h2>
                      <p className="text-ink-500 leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-surface-100 relative z-10">
                    <h3 className="text-xs font-bold text-ink-900 uppercase tracking-widest mb-5">Beneficios incluidos</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-ink-700">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 shadow-sm" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="inline-flex items-center justify-center px-6 py-3.5 border border-surface-200 text-sm font-semibold rounded-xl text-ink-900 bg-white hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-all duration-300 w-full sm:w-auto shadow-sm group-hover:shadow">
                      {service.id === 'finanzas' ? (
                        <ExternalLink className="mr-2 h-4 w-4" />
                      ) : (
                        <Download className="mr-2 h-4 w-4" />
                      )}
                      {service.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
