import { useEffect } from 'react';
import { CityData, FAQItem } from '../types';

interface SchemaMarkupProps {
  pageType: 'home' | 'city' | 'service' | 'faq' | 'blog' | 'why-choose-us' | 'nadca' | 'iaq';
  cityData?: CityData;
  stateName?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  faqItems?: FAQItem[];
}

export default function SchemaMarkup({
  pageType,
  cityData,
  stateName,
  serviceTitle,
  serviceDescription,
  faqItems,
}: SchemaMarkupProps) {
  useEffect(() => {
    // Remove existing schemas before rendering
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => script.remove());

    const schemas: Record<string, any>[] = [];

    // 1. Corporate/Business Entity Schema (Constant for all pages)
    const businessSchema = {
      '@context': 'https://schema.org',
      '@type': 'HVACBusiness',
      'name': 'AL Air Duct Cleaning Service',
      'image': 'https://alairductcleaning.com/assets/logo.png', // Fallback URL
      'logo': 'https://alairductcleaning.com/assets/logo.png',
      'telephone': cityData ? cityData.phone : '1-800-247-3828', // 1-800-AIR-DUCT equivalent
      'url': 'https://alairductcleaning.com',
      'priceRange': '$$',
      'foundingDate': '2019',
      'knowsAbout': [
        'Air Duct Cleaning',
        'HVAC Hygiene',
        'Mold Remediation',
        'Dryer Vent Cleaning',
        'Indoor Air Quality',
        'Post-Construction Cleaning'
      ],
      'areaServed': cityData ? {
        '@type': 'AdministrativeArea',
        'name': `${cityData.name}, ${stateName}`
      } : {
        '@type': 'Country',
        'name': 'United States'
      },
      'certification': 'NADCA Certified (National Air Duct Cleaners Association)',
      'brand': {
        '@type': 'Brand',
        'name': 'AL Air Duct Cleaning'
      }
    };
    schemas.push(businessSchema);

    // 2. Page-Specific Schema Output
    if (pageType === 'city' && cityData && stateName) {
      // Localized Business landing page schema
      const localizedServiceSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'parentOrganization': {
          '@type': 'Organization',
          'name': 'AL Air Duct Cleaning',
          'url': 'https://alairductcleaning.com'
        },
        'name': `AL Air Duct Cleaning - ${cityData.name}`,
        'id': `https://alairductcleaning.com/#/${stateName.toLowerCase()}/${cityData.slug}`,
        'telephone': cityData.phone,
        'url': `https://alairductcleaning.com/#/${stateName.toLowerCase()}/${cityData.slug}`,
        'image': 'https://alairductcleaning.com/assets/logo.png',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': cityData.name,
          'addressRegion': stateName,
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCircle',
          'geoRadius': '40000', // ~25 miles metric
          'description': `Serving ${cityData.name} and surrounding neighborhoods up to ${cityData.serviceRadius}`
        },
        'description': `Locally trusted NADCA certified air duct cleaning, mold remediation, and HVAC restoration services for home or office in ${cityData.name}, ${stateName}. EPA-aligned indoor air quality solutions.`
      };
      schemas.push(localizedServiceSchema);

      // Breadcrumbs for Local City Page
      const cityBreadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://alairductcleaning.com/#/home'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Service Area',
            'item': 'https://alairductcleaning.com/#/service-area'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': stateName,
            'item': `https://alairductcleaning.com/#/service-area`
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': cityData.name,
            'item': `https://alairductcleaning.com/#/${stateName.toLowerCase()}/${cityData.slug}`
          }
        ]
      };
      schemas.push(cityBreadcrumb);

      // Local FAQ Schema (AEO/GEO optimization)
      const localFAQ = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': `Is AL Air Duct Cleaning NADCA certified in ${cityData.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `Yes, AL Air Duct Cleaning holds premier National Air Duct Cleaners Association (NADCA) certifications nationwide. All our technicians in ${cityData.name} follow strict ACR procedures to guarantee absolute source removal of molds, allergens, and duct contaminants.`
            }
          },
          {
            '@type': 'Question',
            'name': `What are the indoor air quality concerns in ${cityData.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `${cityData.epaStat} In addition, local triggers such as ${cityData.healthTrigger} severely compound indoor asthma and sinus risks, making physical mechanical extraction essential.`
            }
          },
          {
            '@type': 'Question',
            'name': `What is your service coverage radius around ${cityData.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `We provide comprehensive residential and commercial cleanings across a service radius of ${cityData.serviceRadius}, covering neighborhoods including: ${cityData.neighborhoods.join(', ')}.`
            }
          }
        ]
      };
      schemas.push(localFAQ);

    } else if (pageType === 'service' && serviceTitle) {
      // Service descriptive page schema
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': serviceTitle,
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'AL Air Duct Cleaning',
          'url': 'https://alairductcleaning.com'
        },
        'description': serviceDescription || 'Professional high-static containment vacuuming, duct sanitization, and compliance cleaning services.',
        'areaServed': {
          '@type': 'Country',
          'name': 'United States'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Ventilation Hygiene Catalog',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Ventilation Physical Assessment'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Mechanical Sweeping and HEPA Negative Vacuuming'
              }
            }
          ]
        }
      };
      schemas.push(serviceSchema);
    }

    if (faqItems && faqItems.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map((item) => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };
      schemas.push(faqSchema);
    }

    // Append all schemas to head
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup when component unmounts or routes change
    return () => {
      const ScriptsToCleanup = document.querySelectorAll('script[type="application/ld+json"]');
      ScriptsToCleanup.forEach((script) => script.remove());
    };
  }, [pageType, cityData, stateName, serviceTitle, serviceDescription, faqItems]);

  return null; // Side effect only
}
