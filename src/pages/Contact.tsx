import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-surface-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
            Contacto y Soporte
          </h1>
          <p className="text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para resolver tus dudas sobre afiliación, servicios o convenios.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-surface-50 py-16 md:py-24 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-ink-900 mb-8">Información de Contacto</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900 mb-1">Dirección</h3>
                      <p className="text-ink-500 leading-relaxed">
                        Campus Universidad Politécnica Salesiana<br />
                        Oficina ADAUPS, Edificio Principal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900 mb-1">Teléfonos</h3>
                      <p className="text-ink-500 leading-relaxed">
                        (02) 3962 800 ext. 2234<br />
                        099 123 4567 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900 mb-1">Correo Electrónico</h3>
                      <p className="text-ink-500 leading-relaxed">
                        info@adaups.org<br />
                        soporte@adaups.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600 flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900 mb-1">Horario de Atención</h3>
                      <p className="text-ink-500 leading-relaxed">
                        Lunes a Viernes<br />
                        08:00 - 13:00 y 14:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Support */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-surface-200 bg-surface-100 aspect-video relative">
                <img
                  src="https://picsum.photos/seed/adaups-support/800/600"
                  alt="Atención al socio ADAUPS"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-surface-200 shadow-sm">
                <h2 className="text-2xl font-bold text-ink-900 mb-8">Envíanos un mensaje</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-ink-700 mb-2">
                        Nombres
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-surface-50"
                        placeholder="Ej. Juan"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-ink-700 mb-2">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-surface-50"
                        placeholder="Ej. Pérez"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-2">
                      Correo Electrónico Institucional
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-surface-50"
                      placeholder="jperez@ups.edu.ec"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink-700 mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-surface-50 text-ink-700"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="afiliacion">Información de Afiliación</option>
                      <option value="prestamos">Consulta sobre Préstamos</option>
                      <option value="convenios">Información de Convenios</option>
                      <option value="soporte">Soporte Técnico (Finanzas en Línea)</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-surface-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-surface-50 resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-lg text-ink-500">
              Encuéntranos en el campus de la Universidad Politécnica Salesiana.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm border border-surface-200 bg-surface-100 aspect-video md:aspect-[21/9] relative">
            {/* Placeholder for a real map iframe */}
            <div className="absolute inset-0 flex items-center justify-center bg-surface-100 text-ink-400">
              <MapPin className="h-12 w-12 opacity-50 mb-4" />
              <span className="block text-lg font-medium">Mapa Interactivo (Google Maps)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
