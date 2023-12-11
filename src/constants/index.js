import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos ",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeuse Web",
      icon: web,
    },
    {
      title: "React Native Développeuse",
      icon: mobile,
    },
    {
      title: "Backend Développeuse",
      icon: backend,
    },
    {
      title: "Créatrice de contenu",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "mongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Next.js Site Web",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Mars 2020 - Avril 2021",
      points: [
        "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
        "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
        "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
        "Participer aux examens de code et fournir des commentaires constructifs aux autres développeurs."
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Janvier 2021 - Février 2022",
      points: [
        "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.", "Collaborer avec des équipes interfonctionnelles, y compris des concepteurs, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.", "Mettre en œuvre un design réactif et assurer une compatibilité inter-navigateurs.", "Participer à des examens de code et fournir des commentaires constructifs aux autres développeurs."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Janvier 2022 - Janvier 2023",
      points: [
        "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.", "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.", "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.", "Participer aux examens de code et fournir des commentaires constructifs aux autres développeurs."
      ],
    },
    {
      title: "Full stack Deve",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Janvier 2023 - Présent",
      points: [
        "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.", "Collaborer avec des équipes pluridisciplinaires, notamment des designers, des chefs de produits et d'autres développeurs, pour créer des produits de haute qualité.", "Mettre en place un design réactif et assurer une compatibilité avec tous les navigateurs.", "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Il semblait impossible de créer un site web aussi beau que notre produit, mais Nesrine m'a prouvé le contraire.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Je n'ai jamais rencontré de développeur web aussi soucieuse de la réussite de ses clients que Nesrine.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Après l'optimisation de notre site web par Nesrine, notre trafic a augmenté de 50 %. Nous ne pouvons pas leur exprimer assez notre gratitude !",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Site De Voiture",
      description:
      'Plateforme basée sur le web qui permet aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de différents fournisseurs, offrant une solution pratique et efficace pour les besoins de transport.',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ness1992",
    },
    {
      name: "Job IT",
      description:
      'Application web qui permet aux utilisateurs de rechercher des offres demploi, de consulter des fourchettes de salaires estimées pour les postes et de localiser les emplois disponibles en fonction de leur emplacement actuel.',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Ness1992",
    },
    {
      name: "Guide de voyage",
      description:
      'Une plateforme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et propose des recommandations personnalisées pour des destinations populaires.',
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "prismadb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Ness1992",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };