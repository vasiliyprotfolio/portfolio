import './globals.css'
import type {Metadata, Viewport} from 'next'
import Script from 'next/script'
import {faqs} from '../lib/faq'

// Separate viewport configuration (Next.js 14+ best practice)
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
}

export const metadata: Metadata = {
    // Basic SEO
    title: {
        default: 'Фізор Василь Дмитрович — Ортопед-травматолог (Одеса) | Дитяча ортопедія, ендопротезування, спортивні травми',
        template: '%s | Фізор Василь Дмитрович'
    },
    description: 'Лікар ортопед-травматолог Василь Фізор (Одеса). Ендопротезування коліна та кульшового суглоба, остеосинтез переломів, дитяча ортопедія, спортивні травми. Запис за тел. 050-262-66-66.',

    // Keywords for better discoverability
    keywords: [
        'ортопед травматолог Одеса',
        'Василь Фізор',
        'ендопротезування коліна',
        'ендопротезування кульшового суглоба',
        'дитяча ортопедія',
        'спортивні травми',
        'остеосинтез переломів',
        'ортопед Одеса',
        'травматолог Одеса'
    ],

    // Authors and creators
    authors: [{name: 'Фізор Василь Дмитрович'}],
    creator: 'Фізор Василь Дмитрович',

    // URL configuration
    metadataBase: new URL('https://example.com'), // Update with actual domain
    alternates: {
        canonical: '/',
        languages: {
            'uk-UA': '/',
        }
    },

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        type: 'website',
        locale: 'uk_UA',
        url: 'https://example.com/',
        siteName: 'Фізор Василь Дмитрович — Ортопед-травматолог',
        title: 'Фізор Василь Дмитрович — Ортопед-травматолог (Одеса)',
        description: 'Сучасне лікування травм та захворювань суглобів. Дитяча ортопедія, ендопротезування, спортивні травми.',
        images: [
            {
                url: '/og.png',
                width: 1200,
                height: 630,
                alt: 'Фізор Василь — ортопед-травматолог Одеса',
                type: 'image/png'
            }
        ]
    },

    // Twitter/X Cards
    twitter: {
        card: 'summary_large_image',
        site: '@fizor_vasyl',
        creator: '@fizor_vasyl',
        title: 'Фізор Василь Дмитрович — Ортопед-травматолог',
        description: 'Ендопротезування, дитяча ортопедія, спортивні травми.',
        images: ['/og.png']
    },

    // Robots and indexing
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },

    // App-specific metadata
    applicationName: 'Фізор Василь Дмитрович',
    referrer: 'origin-when-cross-origin',

    // Additional metadata for better SEO
    category: 'Healthcare',
    classification: 'Medical Services',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    // Enhanced FAQ structured data
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
            }
        }))
    }

    // Enhanced medical professional structured data
    const physicianJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        '@id': 'https://example.com/#physician',
        name: 'Фізор Василь Дмитрович',
        alternateName: ['Василь Фізор', 'Dr. Vasyl Fizor'],
        jobTitle: 'Ортопед-травматолог, хірург, дитячий ортопед-травматолог',
        description: 'Досвідчений лікар ортопед-травматолог, що спеціалізується на ендопротезуванні, дитячій ортопедії та лікуванні спортивних травм.',

        // Contact information
        telephone: '+380502626666',
        url: 'https://example.com/',

        // Address information
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Одеса',
            addressRegion: 'Одеська область',
            addressCountry: 'UA',
            postalCode: '65000'
        },

        // Medical specialties with proper Schema.org types
        medicalSpecialty: [
            {
                '@type': 'MedicalSpecialty',
                name: 'Orthopedic Surgery'
            },
            {
                '@type': 'MedicalSpecialty',
                name: 'Traumatology'
            },
            {
                '@type': 'MedicalSpecialty',
                name: 'Pediatric Orthopedics'
            }
        ],

        // Services offered
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Медичні послуги',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'MedicalProcedure',
                        name: 'Ендопротезування коліна'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'MedicalProcedure',
                        name: 'Ендопротезування кульшового суглоба'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'MedicalProcedure',
                        name: 'Лікування спортивних травм'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'MedicalProcedure',
                        name: 'Дитяча ортопедія'
                    }
                }
            ]
        },

        // Professional credentials
        hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Medical License',
            recognizedBy: {
                '@type': 'Organization',
                name: 'Міністерство охорони здоров\'я України'
            }
        },

        // Social media profiles
        sameAs: [
            'https://www.facebook.com/vasilii.vetochkoff',
            'https://www.instagram.com/fizor_vasyl/'
        ],

        // Professional membership
        memberOf: {
            '@type': 'MedicalOrganization',
            name: 'Медичний дім Odrex'
        },

        // Languages spoken
        knowsLanguage: ['uk', 'ru'],

        // Operating hours (add if available)
        openingHours: [
            'Mo-Fr 09:00-18:00',
            'Sa 09:00-15:00'
        ]
    }

    // Website structured data
    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://example.com/#website',
        name: 'Фізор Василь Дмитрович — Ортопед-травматолог',
        alternateName: 'Василь Фізор',
        url: 'https://example.com/',
        description: 'Професійні послуги ортопеда-травматолога в Одесі',
        inLanguage: 'uk-UA',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://example.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        },
        publisher: {
            '@type': 'Person',
            name: 'Фізор Василь Дмитрович'
        }
    }

    return (
        <html lang="uk" className="scroll-smooth">
        <head>
            {/* Security headers */}
            <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
            <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>

            {/* Preconnect to external domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

            {/* Favicon and app icons */}
            <link rel="icon" href="/favicon.ico" sizes="48x48"/>
            <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
            <link rel="icon" href="/icon.png" type="image/png"/>
            <link rel="apple-touch-icon" href="/apple-icon.png"/>

            {/* DNS prefetch for better performance */}
            <link rel="dns-prefetch" href="//www.google-analytics.com"/>
            <link rel="dns-prefetch" href="//www.googletagmanager.com"/>

            {/*Color scheme*/}
            <meta name="theme-color" content="#ffffff"/>
        </head>

        <body className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
        {children}

        {/* Structured Data Scripts */}
        <Script
            id="jsonld-website"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
        />
        <Script
            id="jsonld-physician"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{__html: JSON.stringify(physicianJsonLd)}}
        />
        <Script
            id="jsonld-faq"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
        />
        </body>
        </html>
    )
}