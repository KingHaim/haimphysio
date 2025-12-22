export type TranslationKeys = {
    nav: {
        about: string;
        services: string;
        blog: string;
        experience: string;
        contact: string;
        bookNow: string;
    };
    hero: {
        badge: string;
        titlePart1: string;
        titlePart2: string;
        subtitle: string;
        cta: string;
        bookingLink: string;
    };
    experience: {
        title: string;
        wta: {
            title: string;
            description: string;
        };
        care: {
            title: string;
            description: string;
        };
    };
    services: {
        title: string;
        rehab: {
            title: string;
            description: string;
        };
        manual: {
            title: string;
            description: string;
        };
        performance: {
            title: string;
            description: string;
        };
    };
    contact: {
        title: string;
        location: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
        weekdays: string;
        saturday: string;
        whatsapp: string;
        preferSpeak: string;
        form: {
            title: string;
            description: string;
            button: string;
            bookingLink: string;
        };
    };
    blog: {
        title: string;
        subtitle: string;
        description: string;
        readMore: string;
        back: string;
        loading: string;
        insights: string;
        readTime: string;
        ready: string;
        cta: string;
    };
    footer: {
        rights: string;
    };
};

export type Translations = {
    en: TranslationKeys;
    es: TranslationKeys;
};

export type Language = keyof Translations;
