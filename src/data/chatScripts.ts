export type ChatOption = {
    id: string;
    label: string;
    action?: 'link' | 'scroll' | 'trigger-booking';
    value?: string;
    nextDelay?: number; // Delay before the bot responds after this selection
};

export type ChatMessage = {
    id: string;
    text: string[]; // Array of messages to send sequentially
    options?: ChatOption[];
};

export type ChatScript = {
    [key: string]: ChatMessage; // Key is the 'node' ID (e.g., 'welcome', 'services')
};

export const chatData: { en: ChatScript; es: ChatScript } = {
    en: {
        welcome: {
            id: 'welcome',
            text: [
                "Welcome to Haim Ganancia Physiotherapy. 👋",
                "I treat all musculoskeletal pathologies, from elite athletes to daily pain relief. How can I assist you today?"
            ],
            options: [
                { id: 'pricing', label: '💰 Pricing & Location' },
                { id: 'booking_choice', label: '📅 Book Now' },
                { id: 'services', label: '🏆 Services' },
                { id: 'urgent', label: '🚑 Urgent / Pain' },
            ]
        },
        pricing: {
            id: 'pricing',
            text: [
                "Here are my summer home-visit rates:",
                "🏠 **Single Home Visit**: 150€.",
                "🎁 **5-Session Package**: 600€ (120€/session).",
                "🎁 **10-Session Package**: 1,000€ (100€/session).",
                "Home visits are available in the Marbella–Estepona area."
            ],
            options: [
                { id: 'booking_choice', label: 'Book Home Visit' },
                { id: 'whatsapp', label: '💬 WhatsApp', action: 'link', value: 'https://wa.me/34669933534?text=Hi,%20I%20would%20like%20to%20book%20a%20home%20visit%20with%20Haim' },
                { id: 'back', label: '🔙 Main Menu' },
            ]
        },
        services: {
            id: 'services',
            text: [
                "We treat a wide range of conditions: back pain, sports injuries, post-surgery, and more.",
                "What are you interested in?"
            ],
            options: [
                { id: 'rehab', label: 'Rehabilitation' },
                { id: 'manual', label: 'Manual Therapy' },
                { id: 'perf', label: 'Performance' },
                { id: 'back', label: '🔙 Main Menu' },
            ]
        },
        rehab: {
            id: 'rehab',
            text: [
                "Don't just recover—evolve.",
                "My rehabilitation programs are data-driven and designed to return you to play stronger than before."
            ],
            options: [
                { id: 'booking_choice', label: 'Schedule Evaluation' },
                { id: 'back', label: '🔙 Back' },
            ]
        },
        manual: {
            id: 'manual',
            text: [
                "Advanced hands-on techniques to unlock fluid movement.",
                "I release tension and restore standard biomechanics for immediate relief."
            ],
            options: [
                { id: 'booking_choice', label: 'Book Session' },
                { id: 'back', label: '🔙 Back' },
            ]
        },
        perf: {
            id: 'perf',
            text: [
                "The difference between good and great is preparation.",
                "Train like our WTA and elite football clients to prevent injury and optimize output."
            ],
            options: [
                { id: 'booking_choice', label: 'Start Training' },
                { id: 'back', label: '🔙 Back' },
            ]
        },
        booking_choice: {
            id: 'booking_choice',
            text: [
                "Excellent choice. All sessions are provided as home visits in the Marbella–Estepona area."
            ],
            options: [
                { id: 'at_home', label: '🏠 Book Home Visit', action: 'trigger-booking' },
                { id: 'back', label: '🔙 Back' },
            ]
        },
        location: {
            id: 'location',
            text: [
                "**Home Service Area**: Marbella–Estepona.",
                "Open Mon-Fri 12:00 - 20:00."
            ],
            options: [
                { id: 'booking_choice', label: '🏠 Book Home Visit' },
                { id: 'whatsapp', label: '💬 WhatsApp', action: 'link', value: 'https://wa.me/34669933534?text=Hi,%20I%20would%20like%20to%20book%20a%20home%20visit%20with%20Haim' },
                { id: 'back', label: '🔙 Main Menu' },
            ]
        },
        urgent: {
            id: 'urgent',
            text: [
                "Pain is a signal. Let's address it immediately.",
                "I prioritize acute injuries."
            ],
            options: [
                { id: 'whatsapp', label: '💬 WhatsApp Priority', action: 'link', value: 'https://wa.me/34669933534?text=Hi,%20I%20need%20an%20urgent%20home%20visit%20with%20Haim' },
                { id: 'booking_choice', label: 'Book Next Slot' },
            ]
        },
        back: {
            id: 'back',
            text: [],
            options: []
        }
    },
    es: {
        welcome: {
            id: 'welcome',
            text: [
                "Bienvenido a Haim Ganancia Fisioterapia. 👋",
                "Trato todo tipo de patologías musculoesqueléticas, no solo deporte de élite. ¿Cómo puedo ayudarte hoy?"
            ],
            options: [
                { id: 'pricing', label: '💰 Precios y Ubicación' },
                { id: 'booking_choice', label: '📅 Agendar Cita' },
                { id: 'services', label: '🏆 Servicios' },
                { id: 'urgent', label: '🚑 Lesión Aguda' },
            ]
        },
        pricing: {
            id: 'pricing',
            text: [
                "Estas son mis tarifas de verano a domicilio:",
                "🏠 **Sesión individual a domicilio**: 150€.",
                "🎁 **Bono de 5 sesiones**: 600€ (120€/sesión).",
                "🎁 **Bono de 10 sesiones**: 1.000€ (100€/sesión).",
                "Las visitas a domicilio están disponibles en la zona Marbella–Estepona."
            ],
            options: [
                { id: 'booking_choice', label: 'Reservar a Domicilio' },
                { id: 'whatsapp', label: '💬 WhatsApp', action: 'link', value: 'https://wa.me/34669933534?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20visita%20a%20domicilio%20con%20Haim' },
                { id: 'back', label: '🔙 Menú Principal' },
            ]
        },
        services: {
            id: 'services',
            text: [
                "Trato una amplia gama de condiciones: dolor de espalda, lesiones deportivas, post-cirugía, etc.",
                "¿En qué estás interesado?"
            ],
            options: [
                { id: 'rehab', label: 'Rehabilitación' },
                { id: 'manual', label: 'Terapia Manual' },
                { id: 'perf', label: 'Alto Rendimiento' },
                { id: 'back', label: '🔙 Menú Principal' },
            ]
        },
        rehab: {
            id: 'rehab',
            text: [
                "No solo te recuperes—evoluciona.",
                "Mis programas están diseñados con datos para que vuelvas al juego más fuerte que antes."
            ],
            options: [
                { id: 'booking_choice', label: 'Reservar Evaluación' },
                { id: 'back', label: '🔙 Volver' },
            ]
        },
        manual: {
            id: 'manual',
            text: [
                "Técnicas manuales avanzadas para desbloquear tu movimiento.",
                "Libero la tensión y restauro la biomecánica natural para un alivio inmediato."
            ],
            options: [
                { id: 'booking_choice', label: 'Reservar Sesión' },
                { id: 'back', label: '🔙 Volver' },
            ]
        },
        perf: {
            id: 'perf',
            text: [
                "La diferencia entre bueno y extraordinario es la preparación.",
                "Entrena como mis clientes profesionales para prevenir lesiones."
            ],
            options: [
                { id: 'booking_choice', label: 'Empezar Entrenamiento' },
                { id: 'back', label: '🔙 Volver' },
            ]
        },
        booking_choice: {
            id: 'booking_choice',
            text: [
                "Excelente elección. Todas las sesiones se realizan a domicilio en la zona Marbella–Estepona."
            ],
            options: [
                { id: 'at_home', label: '🏠 Reservar a Domicilio', action: 'trigger-booking' },
                { id: 'back', label: '🔙 Volver' },
            ]
        },
        location: {
            id: 'location',
            text: [
                "**Zona de servicio a domicilio**: Marbella–Estepona.",
                "Abierto Lun-Vie 12:00 - 20:00."
            ],
            options: [
                { id: 'booking_choice', label: '🏠 Reservar a Domicilio' },
                { id: 'whatsapp', label: '💬 Contactar por WhatsApp', action: 'link', value: 'https://wa.me/34669933534?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20visita%20a%20domicilio%20con%20Haim' },
                { id: 'back', label: '🔙 Menú Principal' },
            ]
        },
        urgent: {
            id: 'urgent',
            text: [
                "El dolor es una señal. Atendámoslo de inmediato.",
                "Doy prioridad a las lesiones agudas."
            ],
            options: [
                { id: 'whatsapp', label: '💬 WhatsApp Prioritario', action: 'link', value: 'https://wa.me/34669933534?text=Hola,%20necesito%20una%20visita%20urgente%20a%20domicilio%20con%20Haim' },
                { id: 'booking_choice', label: 'Reservar Turno' },
            ]
        },
        back: {
            id: 'back',
            text: [],
            options: []
        }
    }
};
