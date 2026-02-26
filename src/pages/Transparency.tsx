import { FileText, Download, Calendar, Users, BarChart3 } from 'lucide-react';

const reports = [
  {
    year: '2025',
    items: [
      { title: 'Informe de Gestión Anual', type: 'PDF', size: '2.4 MB', date: 'Enero 2026' },
      { title: 'Estados Financieros Auditados', type: 'PDF', size: '1.8 MB', date: 'Febrero 2026' },
      { title: 'Acta de Asamblea General', type: 'PDF', size: '0.9 MB', date: 'Marzo 2026' },
    ]
  },
  {
    year: '2024',
    items: [
      { title: 'Informe de Gestión Anual', type: 'PDF', size: '2.1 MB', date: 'Enero 2025' },
      { title: 'Estados Financieros Auditados', type: 'PDF', size: '1.5 MB', date: 'Febrero 2025' },
      { title: 'Acta de Asamblea General', type: 'PDF', size: '0.8 MB', date: 'Marzo 2025' },
    ]
  }
];

export default function Transparency() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-surface-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
            Transparencia
          </h1>
          <p className="text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Accede a los informes de gestión, auditorías y actas de asambleas. Tu confianza es nuestro mayor activo.
          </p>
        </div>
      </section>

      {/* Reports Section */}
      <section className="bg-surface-50 py-16 md:py-24 border-b border-surface-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {reports.map((report) => (
            <div key={report.year}>
              <h2 className="text-2xl font-bold text-ink-900 mb-8 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-brand-600" />
                Gestión {report.year}
              </h2>
              <div className="bg-white rounded-2xl border border-surface-200 shadow-sm overflow-hidden">
                <ul className="divide-y divide-surface-100">
                  {report.items.map((item, idx) => (
                    <li key={idx} className="p-6 hover:bg-surface-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-50 p-3 rounded-xl text-brand-600 flex-shrink-0">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-ink-900 mb-1">{item.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-ink-500">
                            <span className="font-medium bg-surface-100 px-2 py-0.5 rounded text-ink-700">{item.type}</span>
                            <span>{item.size}</span>
                            <span>•</span>
                            <span>Publicado: {item.date}</span>
                          </div>
                        </div>
                      </div>
                      <button className="inline-flex items-center justify-center px-4 py-2 border border-surface-200 text-sm font-medium rounded-lg text-ink-900 bg-white hover:bg-surface-100 hover:border-surface-300 transition-colors sm:w-auto w-full">
                        <Download className="mr-2 h-4 w-4 text-ink-500" />
                        Descargar
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Asambleas */}
            <div className="bg-brand-50 p-10 rounded-3xl border border-brand-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Users className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900">Asambleas Generales</h3>
              </div>
              <p className="text-brand-800 text-lg leading-relaxed mb-8">
                La Asamblea General es el máximo organismo de decisión de ADAUPS. Todos los socios activos tienen derecho a participar con voz y voto.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-brand-200 shadow-sm">
                <p className="text-sm font-bold text-ink-900 mb-2 uppercase tracking-widest">Próxima Asamblea:</p>
                <p className="text-base text-ink-500">Por definir</p>
              </div>
            </div>

            {/* Auditorías */}
            <div className="bg-surface-50 p-10 rounded-3xl border border-surface-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <BarChart3 className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-ink-900">Auditorías Externas</h3>
              </div>
              <p className="text-ink-700 text-lg leading-relaxed mb-8">
                Nuestros estados financieros son auditados anualmente por firmas externas independientes para garantizar el manejo transparente de los recursos.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-surface-200 text-base font-medium rounded-xl text-ink-900 bg-white hover:bg-surface-100 hover:border-surface-300 transition-colors w-full sm:w-auto shadow-sm">
                Ver firmas auditoras
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
