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
                { id: 'book', label: '📅 Book Now', action: 'trigger-booking' },
                { id: 'services', label: '🏆 Services' },
                { id: 'urgent', label: '🚑 Urgent / Pain' },
            ]
        },
        pricing: {
            id: 'pricing',
            text: [
                "Here are my rates:",
                "🏠 **Home Visits**: 120€ (Comfort of your home).",
                "🏥 **Clinic (CostaSpine)**: 90€ (First Session), 80€ (Follow-ups).",
                "🎁 **Clinic Pack**: 5 Sessions for 350€ (70€/session).",
                "To book at the clinic, contact via **WhatsApp: +34 669 933 534**."
            ],
            options: [
                { id: 'book', label: 'Book Home Visit', action: 'trigger-booking' },
                { id: 'whatsapp', label: '💬 WhatsApp Clinic', action: 'link', value: 'https://wa.me/34669933534' },
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
                { id: 'book', label: 'Schedule Evaluation', action: 'trigger-booking' },
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
                { id: 'book', label: 'Book Session', action: 'trigger-booking' },
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
                { id: 'book', label: 'Start Training', action: 'trigger-booking' },
                { id: 'back', label: '🔙 Back' },
            ]
        },
        location: {
            id: 'location',
            text: [
                "**Clinic**: Centro Comercial Guadalmina 4, Local 90, San Pedro (Marbella).",
                "**Home Service**: Available in Marbella - Estepona area.",
                "Open Mon-Fri 12:00 - 20:00."
            ],
            options: [
                { id: 'map', label: '🗺️ Clinic Map', action: 'link', value: 'https://maps.google.com/?q=Centro+Comercial+Guadalmina+4,+Marbella' },
                { id: 'whatsapp', label: '💬 WhatsApp Us', action: 'link', value: 'https://wa.me/34669933534' },
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
                { id: 'whatsapp', label: '💬 WhatsApp Priority', action: 'link', value: 'https://wa.me/34669933534' },
                { id: 'book', label: 'Book Next Slot', action: 'trigger-booking' },
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
                { id: 'book', label: '📅 Agendar Cita', action: 'trigger-booking' },
                { id: 'services', label: '🏆 Servicios' },
                { id: 'urgent', label: '🚑 Lesión Aguda' },
            ]
        },
        pricing: {
            id: 'pricing',
            text: [
                "Aquí tienes mis tarifas:",
                "🏠 **Domicilio**: 120€.",
                "🏥 **Clínica (CostaSpine)**: 90€ (1ª Sesión), 80€ (Seguimientos).",
                "🎁 **Bono Clínica**: 5 Sesiones por 350€ (70€/sesión).",
                "Para cita en clínica, contacta por **WhatsApp: +34 669 933 534**."
            ],
            options: [
                { id: 'book', label: 'Reservar Domicilio', action: 'trigger-booking' },
                { id: 'whatsapp', label: '💬 WhatsApp Clínica', action: 'link', value: 'https://wa.me/34669933534' },
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
                { id: 'book', label: 'Reservar Evaluación', action: 'trigger-booking' },
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
                { id: 'book', label: 'Reservar Sesión', action: 'trigger-booking' },
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
                { id: 'book', label: 'Empezar Entrenamiento', action: 'trigger-booking' },
                { id: 'back', label: '🔙 Volver' },
            ]
        },
        location: {
            id: 'location',
            text: [
                "**Clínica**: Centro Comercial Guadalmina 4, Local 90, San Pedro (Marbella).",
                "**Domicilio**: Zona Marbella - Estepona.",
                "Abierto Lun-Vie 12:00 - 20:00."
            ],
            options: [
                { id: 'map', label: '🗺️ Mapa Clínica', action: 'link', value: 'https://maps.google.com/?q=Centro+Comercial+Guadalmina+4,+Marbella' },
                { id: 'whatsapp', label: '💬 Contactar WhatsApp', action: 'link', value: 'https://wa.me/34669933534' },
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
                { id: 'whatsapp', label: '💬 WhatsApp Prioritario', action: 'link', value: 'https://wa.me/34669933534' },
                { id: 'book', label: 'Reservar Turno', action: 'trigger-booking' },
            ]
        },
        back: {
            id: 'back',
            text: [],
            options: []
        }
    }
};
