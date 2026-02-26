import { Shield, Pill, Laptop, BookOpen, Smartphone, Tag } from 'lucide-react';

const categories = [
  { id: 'seguros', name: 'Seguros', icon: Shield },
  { id: 'farmacias', name: 'Farmacias', icon: Pill },
  { id: 'tecnologia', name: 'Tecnología', icon: Laptop },
  { id: 'papeleria', name: 'Papelería', icon: BookOpen },
  { id: 'telefonia', name: 'Telefonía', icon: Smartphone },
  { id: 'promociones', name: 'Promociones', icon: Tag },
];

const convenios = [
  {
    id: 1,
    name: 'Mecánica Automotriz',
    category: 'promociones',
    image: 'https://www.adaups.org/wp-content/uploads/2024/05/publicidadserviciomecanicaautomotriz2023-576x1024.jpg',
    description: 'Descuentos especiales en servicios de mantenimiento y reparación.',
  },
  {
    id: 2,
    name: 'Claro',
    category: 'telefonia',
    image: 'https://www.adaups.org/wp-content/uploads/2024/05/claro.png',
    description: 'Planes corporativos con tarifas preferenciales para socios.',
  },
  {
    id: 3,
    name: 'Difare',
    category: 'farmacias',
    image: 'https://www.adaups.org/wp-content/uploads/2024/05/difare.png',
    description: 'Beneficios en la red de farmacias a nivel nacional.',
  },
  {
    id: 4,
    name: 'Fybeca',
    category: 'farmacias',
    image: 'https://www.adaups.org/wp-content/uploads/2024/05/clubfybecca.png',
    description: 'Descuentos en medicinas y productos de consumo.',
  },
  {
    id: 5,
    name: 'Grupo GPF',
    category: 'farmacias',
    image: 'https://www.adaups.org/wp-content/uploads/2024/05/unnamed.jpg',
    description: 'Acceso a red de farmacias SanaSana y Fybeca.',
  },
  {
    id: 6,
    name: 'Tecnomega',
    category: 'tecnologia',
    image: 'https://www.adaups.org/wp-content/uploads/2024/05/beneficioTECNOMEGA-1024x444.png',
    description: 'Equipos tecnológicos con financiamiento directo.',
  },
];

export default function Benefits() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-surface-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
            Beneficios y Convenios
          </h1>
          <p className="text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Disfruta de descuentos y condiciones exclusivas en una amplia red de establecimientos aliados.
          </p>
        </div>
      </section>

      {/* Convenios Grid */}
      <section className="bg-surface-50 py-16 md:py-24 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-surface-200 bg-white text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-colors shadow-sm"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Convenios Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {convenios.map((convenio) => (
              <div key={convenio.id} className="bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 bg-surface-100 flex items-center justify-center p-6 border-b border-surface-100 relative">
                  <img
                    src={convenio.image}
                    alt={`Logo de ${convenio.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-ink-500 uppercase tracking-wider shadow-sm">
                    {categories.find(c => c.id === convenio.category)?.name}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-ink-900 mb-2">{convenio.name}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6 flex-grow">
                    {convenio.description}
                  </p>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-surface-200 text-sm font-medium rounded-lg text-ink-900 bg-white hover:bg-surface-50 hover:border-surface-300 transition-colors w-full">
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos Tecnomega Banner */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50 rounded-3xl border border-brand-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-900 mb-4">Financiamiento Tecnológico</h2>
              <p className="text-brand-700 text-lg mb-8 leading-relaxed">
                Renueva tu equipo con el convenio Tecnomega. Conoce los requisitos para acceder a crédito directo con tasas preferenciales.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm">
                Descargar Requisitos
              </button>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-surface-200 bg-white">
                <img
                  src="https://www.adaups.org/wp-content/uploads/2024/05/Requisitos.jpg"
                  alt="Requisitos para crédito Tecnomega"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
