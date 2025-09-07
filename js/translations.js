// Sistema de traducciones multilenguaje
const translations = {
    es: {
        // Meta
        title: "TechBlog - Tu fuente de tecnología",
        logo: "TechBlog",
        
        // Navegación
        "nav.home": "Inicio",
        "nav.articles": "Artículos",
        "nav.categories": "Categorías",
        "nav.about": "Sobre Nosotros",
        "nav.contact": "Contacto",
        
        // Hero Section
        "hero.title": "Descubre el Futuro de la Tecnología",
        "hero.subtitle": "Mantente al día con las últimas tendencias, innovaciones y análisis profundos del mundo tecnológico. Tu fuente confiable de conocimiento digital.",
        "hero.cta": "Explorar Artículos",
        
        // Features Section
        "features.title": "¿Por qué elegir TechBlog?",
        "features.updated.title": "Contenido Actualizado",
        "features.updated.description": "Publicamos artículos diarios sobre las últimas tendencias tecnológicas, desde inteligencia artificial hasta desarrollo web.",
        "features.community.title": "Comunidad Activa",
        "features.community.description": "Únete a una comunidad de entusiastas de la tecnología que comparten conocimientos y experiencias.",
        "features.educational.title": "Contenido Educativo",
        "features.educational.description": "Tutoriales paso a paso, guías detalladas y análisis técnicos para todos los niveles de experiencia.",
        
        // Articles Section
        "articles.title": "Artículos Destacados",
        "articles.read-more": "Leer más →",
        "articles.ai.date": "15 de Diciembre, 2024 • Inteligencia Artificial",
        "articles.ai.title": "El Futuro de la IA: Tendencias para 2025",
        "articles.ai.excerpt": "Exploramos las principales tendencias en inteligencia artificial que definirán el próximo año, desde GPT-5 hasta la computación cuántica.",
        "articles.react.date": "12 de Diciembre, 2024 • Desarrollo Web",
        "articles.react.title": "React 19: Las Nuevas Características",
        "articles.react.excerpt": "Una guía completa sobre las nuevas características de React 19, incluyendo Server Components y mejoras en el rendimiento.",
        "articles.security.date": "10 de Diciembre, 2024 • Ciberseguridad",
        "articles.security.title": "Ciberseguridad en 2024: Amenazas y Soluciones",
        "articles.security.excerpt": "Análisis de las principales amenazas cibernéticas del año y las mejores prácticas para proteger tu información.",
        
        // Newsletter Section
        "newsletter.title": "Mantente Actualizado",
        "newsletter.subtitle": "Suscríbete a nuestro boletín y recibe los artículos más destacados directamente en tu correo.",
        "newsletter.placeholder": "Tu dirección de correo electrónico",
        "newsletter.button": "Suscribirse",
        
        // Footer
        "footer.copyright": "© 2024 TechBlog. Todos los derechos reservados."
    },
    
    en: {
        // Meta
        title: "TechBlog - Your Technology Source",
        logo: "TechBlog",
        
        // Navigation
        "nav.home": "Home",
        "nav.articles": "Articles",
        "nav.categories": "Categories",
        "nav.about": "About Us",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.title": "Discover the Future of Technology",
        "hero.subtitle": "Stay up to date with the latest trends, innovations and in-depth analysis of the technological world. Your reliable source of digital knowledge.",
        "hero.cta": "Explore Articles",
        
        // Features Section
        "features.title": "Why Choose TechBlog?",
        "features.updated.title": "Updated Content",
        "features.updated.description": "We publish daily articles on the latest technology trends, from artificial intelligence to web development.",
        "features.community.title": "Active Community",
        "features.community.description": "Join a community of technology enthusiasts who share knowledge and experiences.",
        "features.educational.title": "Educational Content",
        "features.educational.description": "Step-by-step tutorials, detailed guides and technical analysis for all experience levels.",
        
        // Articles Section
        "articles.title": "Featured Articles",
        "articles.read-more": "Read more →",
        "articles.ai.date": "December 15, 2024 • Artificial Intelligence",
        "articles.ai.title": "The Future of AI: Trends for 2025",
        "articles.ai.excerpt": "We explore the main trends in artificial intelligence that will define next year, from GPT-5 to quantum computing.",
        "articles.react.date": "December 12, 2024 • Web Development",
        "articles.react.title": "React 19: New Features",
        "articles.react.excerpt": "A complete guide to React 19's new features, including Server Components and performance improvements.",
        "articles.security.date": "December 10, 2024 • Cybersecurity",
        "articles.security.title": "Cybersecurity in 2024: Threats and Solutions",
        "articles.security.excerpt": "Analysis of the main cyber threats of the year and best practices to protect your information.",
        
        // Newsletter Section
        "newsletter.title": "Stay Updated",
        "newsletter.subtitle": "Subscribe to our newsletter and receive the most outstanding articles directly in your email.",
        "newsletter.placeholder": "Your email address",
        "newsletter.button": "Subscribe",
        
        // Footer
        "footer.copyright": "© 2024 TechBlog. All rights reserved."
    },
    
    fr: {
        // Meta
        title: "TechBlog - Votre source technologique",
        logo: "TechBlog",
        
        // Navigation
        "nav.home": "Accueil",
        "nav.articles": "Articles",
        "nav.categories": "Catégories",
        "nav.about": "À propos",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.title": "Découvrez l'Avenir de la Technologie",
        "hero.subtitle": "Restez à jour avec les dernières tendances, innovations et analyses approfondies du monde technologique. Votre source fiable de connaissances numériques.",
        "hero.cta": "Explorer les Articles",
        
        // Features Section
        "features.title": "Pourquoi choisir TechBlog?",
        "features.updated.title": "Contenu Mis à Jour",
        "features.updated.description": "Nous publions des articles quotidiens sur les dernières tendances technologiques, de l'intelligence artificielle au développement web.",
        "features.community.title": "Communauté Active",
        "features.community.description": "Rejoignez une communauté d'enthousiastes de la technologie qui partagent connaissances et expériences.",
        "features.educational.title": "Contenu Éducatif",
        "features.educational.description": "Tutoriels étape par étape, guides détaillés et analyses techniques pour tous les niveaux d'expérience.",
        
        // Articles Section
        "articles.title": "Articles en Vedette",
        "articles.read-more": "Lire plus →",
        "articles.ai.date": "15 Décembre, 2024 • Intelligence Artificielle",
        "articles.ai.title": "L'Avenir de l'IA: Tendances pour 2025",
        "articles.ai.excerpt": "Nous explorons les principales tendances en intelligence artificielle qui définiront l'année prochaine, de GPT-5 au calcul quantique.",
        "articles.react.date": "12 Décembre, 2024 • Développement Web",
        "articles.react.title": "React 19: Nouvelles Fonctionnalités",
        "articles.react.excerpt": "Un guide complet sur les nouvelles fonctionnalités de React 19, incluant les Server Components et les améliorations de performance.",
        "articles.security.date": "10 Décembre, 2024 • Cybersécurité",
        "articles.security.title": "Cybersécurité en 2024: Menaces et Solutions",
        "articles.security.excerpt": "Analyse des principales menaces cybernétiques de l'année et meilleures pratiques pour protéger vos informations.",
        
        // Newsletter Section
        "newsletter.title": "Restez Informé",
        "newsletter.subtitle": "Abonnez-vous à notre newsletter et recevez les articles les plus remarquables directement dans votre email.",
        "newsletter.placeholder": "Votre adresse email",
        "newsletter.button": "S'abonner",
        
        // Footer
        "footer.copyright": "© 2024 TechBlog. Tous droits réservés."
    }
};

// Función para cambiar idioma
function changeLanguage(language) {
    const htmlRoot = document.getElementById('html-root');
    const currentTranslations = translations[language];
    
    if (!currentTranslations) {
        console.error('Idioma no soportado:', language);
        return;
    }
    
    // Cambiar el atributo lang del HTML
    htmlRoot.setAttribute('lang', language);
    
    // Traducir todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });
    
    // Traducir placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
    
    // Guardar preferencia de idioma
    localStorage.setItem('preferred-language', language);
    
    // Actualizar selector de idioma
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = language;
    }
}

// Función para obtener idioma preferido
function getPreferredLanguage() {
    // Primero verificar localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }
    
    // Luego verificar el idioma del navegador
    const browserLanguage = navigator.language.split('-')[0];
    if (translations[browserLanguage]) {
        return browserLanguage;
    }
    
    // Por defecto español
    return 'es';
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = getPreferredLanguage();
    changeLanguage(preferredLanguage);
    
    // Configurar event listener para el selector de idioma
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
});
