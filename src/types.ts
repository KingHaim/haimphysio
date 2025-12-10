export type TranslationKeys = {
    nav: {
        about: string;
        services: string;
        blog: string;
        experience: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
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
        form: {
            title: string;
            description: string;
            button: string;
        };
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
