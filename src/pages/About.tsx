import { Users, Target, Eye, Shield, CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: 'Solidaridad',
    description: 'Apoyo mutuo entre socios para el bienestar común.',
    icon: Users,
  },
  {
    title: 'Transparencia',
    description: 'Gestión clara y responsable de los recursos de la asociación.',
    icon: Shield,
  },
  {
    title: 'Compromiso',
    description: 'Dedicación constante a la mejora de servicios y beneficios.',
    icon: CheckCircle2,
  },
];

const requirements = [
  'Ser docente o administrativo de la Universidad Politécnica Salesiana.',
  'Presentar copia de cédula de identidad y papeleta de votación.',
  'Llenar el formulario de afiliación.',
  'Autorizar el descuento por rol de pagos.',
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-surface-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
            Sobre ADAUPS
          </h1>
          <p className="text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Conoce nuestra historia, misión y los valores que nos impulsan a trabajar por el bienestar de la comunidad UPS.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-surface-50 py-16 md:py-24 border-b border-surface-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink-900 mb-8 text-center">Nuestra Historia</h2>
          <div className="prose prose-lg text-ink-700 mx-auto text-center">
            <p className="mb-6">
              La Asociación de Docentes y Administrativos de la Universidad Politécnica Salesiana (ADAUPS) nació con el firme propósito de fomentar la unión, la solidaridad y el bienestar económico y social de sus miembros.
            </p>
            <p>
              A lo largo de los años, hemos crecido y evolucionado, adaptándonos a las necesidades de nuestros socios y ampliando nuestra cartera de servicios financieros y convenios institucionales, siempre manteniendo nuestros principios fundacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-white py-16 md:py-24 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface-50 p-10 rounded-3xl border border-surface-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Misión</h3>
              <p className="text-ink-700 leading-relaxed text-lg">
                Brindar servicios financieros, beneficios y apoyo solidario de excelencia a los docentes y administrativos de la UPS, promoviendo el ahorro, facilitando el crédito y mejorando su calidad de vida y la de sus familias.
              </p>
            </div>
            <div className="bg-surface-50 p-10 rounded-3xl border border-surface-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Visión</h3>
              <p className="text-ink-700 leading-relaxed text-lg">
                Ser la asociación líder y referente a nivel institucional por su solidez financiera, transparencia en la gestión y la constante innovación en servicios que generen valor real para nuestros socios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-surface-50 py-16 md:py-24 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink-900 mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-surface-200 shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-ink-900 mb-3">{value.title}</h4>
                  <p className="text-base text-ink-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Directiva y Afiliación */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Directiva */}
            <div className="bg-surface-50 p-10 rounded-3xl border border-surface-200 shadow-sm">
              <h3 className="text-2xl font-bold text-ink-900 mb-8 border-b border-surface-200 pb-4">Directiva Actual</h3>
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="text-lg font-bold text-ink-900">Presidente</span>
                  <span className="text-base text-ink-500">Representante ADAUPS</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg font-bold text-ink-900">Vicepresidente</span>
                  <span className="text-base text-ink-500">Representante ADAUPS</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg font-bold text-ink-900">Tesorero</span>
                  <span className="text-base text-ink-500">Representante ADAUPS</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg font-bold text-ink-900">Secretario</span>
                  <span className="text-base text-ink-500">Representante ADAUPS</span>
                </li>
              </ul>
            </div>

            {/* Afiliación */}
            <div className="bg-brand-50 p-10 rounded-3xl border border-brand-100 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-900 mb-6">¿Quién puede ser socio?</h3>
              <p className="text-base text-brand-800 mb-8 leading-relaxed">
                Todo el personal docente y administrativo con relación de dependencia en la Universidad Politécnica Salesiana.
              </p>
              <h4 className="text-sm font-bold text-brand-900 mb-4 uppercase tracking-widest">Requisitos:</h4>
              <ul className="space-y-4">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-brand-800">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
