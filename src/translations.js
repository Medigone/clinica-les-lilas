import { ROUTES } from './routes';

// Centralized translations for Clínica Les Lilas
// Structure: { fr: {...}, en: {...}, es: {...} }

export const translations = {
  fr: {
    brand: { name: 'Clínica Les Lilas', subtitle: 'Otra forma de luchar' },
    navigation: {
      home: 'Accueil',
      notreApproche: 'Notre approche',
      traitements: 'Traitements',
      hyperthermie: 'Hyperthermie oncologique',
      oncologia: 'Oncologie intégrative',
      bienestar: 'Bien-être & Prévention',
      aPropos: 'À propos',
      contact: 'Contact',
      blog: 'Blog',
      mentionsLegales: 'Mentions légales',
      politiqueConfidentialite: 'Politique de confidentialité',
    },
    common: {
      close: 'Fermer',
    },
    cta: {
      requestConsultation: 'Demander une première consultation',
      bookAppointment: 'Prendre rendez-vous',
      bookAppointmentShort: 'RDV',
      bookConsultationInitial: 'Prendre un premier rendez-vous',
      contactTeam: 'Parler à notre équipe',
      contactClinic: 'Contacter la clinique',
      discoverApproach: 'Découvrir notre approche',
      learnMore: 'En savoir plus',
      seeTreatments: 'Voir les traitements',
      seePage: 'Voir la page',
      discover: 'Découvrir',
      submit: 'Envoyer ma demande',
      call: 'Appeler',
    },
    whatsapp: {
      button: 'Écrire sur WhatsApp',
      buttonShort: 'WhatsApp',
      defaultMessage: 'Bonjour, je souhaite demander une consultation.',
      ariaLabel: 'Contacter par WhatsApp',
    },
    footer: {
      tagline: 'Clinique privée de médecine intégrative',
      subtitle: 'Évaluation approfondie – Supervision médicale – Accompagnement humain',
      navigation: 'Navigation',
      rights: 'Tous droits réservés.',
    },
    contact: {
      title: 'Contactez-nous',
      address: { title: 'Adresse', full: "Avinguda de la Diagonal, 4\n03550 Sant Joan d'Alacant\nAlicante, Espagne" },
      hours: { title: 'Horaires', text: 'Lundi – Vendredi : 9h00 – 18h00' },
    },
    meta: {
      home: {
        title: 'Clínica Les Lilas | Médecine intégrative à Alicante',
        description: 'Clinique privée de médecine intégrative à Alicante. Hyperthermie oncologique, sueroterapia, médecine régénérative. Consultation personnalisée et accompagnement médical.',
      },
      notreApproche: {
        title: 'Notre approche en médecine intégrative | Clínica Les Lilas',
        description: 'Une approche médicale intégrative centrée sur le patient. Évaluation approfondie, plan de soin individualisé et suivi continu dans un cadre clinique premium.',
      },
      traitements: {
        title: 'Nos traitements | Clínica Les Lilas',
        description: 'Hyperthermie oncologique et sueroterapia. Traitements médicaux intégratifs dans un cadre clinique rigoureux.',
      },
      hyperthermie: {
        title: 'Hyperthermie oncologique | Clínica Les Lilas Alicante',
        description: "L'hyperthermie oncologique au sein d'une prise en charge intégrative. Chaleur localisée en complément des traitements conventionnels. Évaluation préalable indispensable.",
      },
      oncologia: {
        title: 'Accompagnement oncologique intégratif | Clínica Les Lilas Alicante',
        description: 'Protocoles IV de soutien oncologique : immunité, neuroprotection, antioxydants. Accompagnement intégratif personnalisé en complément des traitements conventionnels.',
        keywords: 'oncologie intégrative, sueroterapia oncologique, vitamine C haute dose, accompagnement cancer, Alicante',
      },
      bienestar: {
        title: 'Bien-être, prévention et longévité | Clínica Les Lilas Alicante',
        description: 'Sueroterapia IV pour le bien-être, la prévention et la longévité : immunité, détox, anti-âge, performance sportive. Protocoles personnalisés à Alicante.',
        keywords: 'bien-être, prévention, longévité, NAD+, anti-âge, détox, performance sportive, Alicante',
      },
      aPropos: {
        title: 'À propos | Clínica Les Lilas',
        description: 'Clínica Les Lilas : clinique privée de médecine intégrative. Notre philosophie, nos engagements et notre vision du soin centré sur le patient.',
      },
      contact: {
        title: 'Contact et rendez-vous | Clínica Les Lilas Alicante',
        description: 'Contactez Clínica Les Lilas à Alicante. Demandez une première consultation par téléphone, WhatsApp ou formulaire. Réponse rapide.',
      },
      politiqueConfidentialite: {
        title: 'Mentions légales et politique de confidentialité | Clínica Les Lilas',
        description: 'Mentions légales, politique de confidentialité et protection des données personnelles. Clínica Les Lilas - Alicante.',
      },
      notFound: {
        title: 'Page non trouvée | Clínica Les Lilas',
        description: 'La page que vous recherchez n\'existe pas. Retournez à l\'accueil ou contactez-nous.',
      },
      blog: {
        title: 'Blog | Clínica Les Lilas — Médecine intégrative',
        description: 'Articles sur la médecine intégrative, l\'hyperthermie oncologique et la sueroterapia. Informations médicales fiables par Clínica Les Lilas.',
        keywords: 'blog médecine intégrative, hyperthermie oncologique, sueroterapia, médecine régénérative, clinique Alicante',
      },
    },
    blog: {
      heroTitle: 'Notre blog',
      heroSubtitle: 'Articles et ressources en médecine intégrative',
      heroText: 'Retrouvez nos articles sur les traitements, les avancées médicales et les conseils en médecine intégrative. Des contenus rédigés par notre équipe médicale.',
      readArticle: "Lire l'article",
      backToBlog: 'Retour au blog',
      tableOfContents: 'Sommaire',
      faqTitle: 'Questions fréquentes',
      relatedArticles: 'Articles similaires',
      publishedOn: 'Publié le',
      allCategories: 'Tous',
      categoryTraitements: 'Traitements',
      categoryMedecineIntegrative: 'Médecine intégrative',
      noArticles: 'Aucun article dans cette catégorie.',
    },
    home: {
      hero: {
        h1: 'Médecine intégrative et traitements personnalisés',
        subtitle: 'Clinique privée dédiée à votre santé globale',
        text: "Clínica Les Lilas associe expertise médicale, technologies innovantes et attention humaine pour vous accompagner dans un parcours de soin adapté à votre situation. Chaque prise en charge débute par une évaluation approfondie.",
        ctaNote: "La consultation initiale est le point de départ de tout parcours thérapeutique dans notre clinique.",
      },
      valueProposition: {
        title: 'Un cadre médical exigeant au service du patient',
        text: "Notre clinique repose sur un principe clair : comprendre avant d'agir. Chaque patient bénéficie d'un bilan individualisé, d'un plan de prise en charge cohérent et d'un suivi attentif tout au long de son parcours.",
        blocks: [
          { title: 'Évaluation approfondie', description: 'Bilan médical complet avant toute orientation thérapeutique.' },
          { title: 'Vision intégrative', description: 'Une prise en charge qui considère le patient dans sa globalité.' },
          { title: 'Supervision médicale rigoureuse', description: 'Chaque protocole est défini et supervisé par notre équipe médicale.' },
          { title: 'Suivi continu', description: 'Un accompagnement qui ne s\'arrête pas au traitement.' },
        ],
      },
      careAxes: {
        title: 'Nos axes de prise en charge',
        text: "Nous proposons plusieurs axes thérapeutiques, chacun intégré dans une logique de soin globale. La consultation initiale permet d'orienter vers le parcours le plus adapté.",
        cards: [
          { title: 'Hyperthermie oncologique', text: "Chaleur localisée utilisée en complément des traitements conventionnels, dans un cadre clinique rigoureux et après évaluation individuelle.", path: ROUTES.HIPERTERMIA, cta: 'Découvrir' },
          { title: 'Bien-être & Prévention', text: "Sueroterapia IV pour le bien-être, la prévention et la longévité : immunité, détox, anti-âge, performance sportive et récupération.", path: ROUTES.BIENESTAR, cta: 'Découvrir' },
        ],
      },
      whyUs: {
        title: 'Pourquoi choisir Clínica Les Lilas',
        items: [
          'Évaluation médicale complète avant toute proposition de traitement',
          'Protocoles individualisés, jamais standardisés',
          'Équipe médicale multilingue (français, espagnol, anglais)',
          'Environnement clinique privé, calme et rassurant',
          'La consultation comme véritable point de départ du parcours de soin',
        ],
      },
      ctaConsultation: {
        title: 'Tout commence par une consultation',
        text: "La première consultation est une étape essentielle. Elle permet de comprendre votre situation, de réaliser un premier bilan et de définir ensemble les orientations possibles. Aucune prise en charge n'est engagée sans cette évaluation préalable. Vous avez des questions ? Notre équipe est disponible pour vous répondre.",
      },
    },
    notreApproche: {
      hero: {
        h1: 'Notre approche en médecine intégrative',
        subtitle: 'Comprendre, évaluer, accompagner',
        text: "La médecine intégrative ne se résume pas à proposer des traitements complémentaires. Chez Clínica Les Lilas, elle repose sur une démarche clinique rigoureuse : écouter le patient, analyser sa situation dans sa globalité et construire un plan de soin cohérent avec ses besoins et son contexte.",
      },
      patientCentered: {
        title: 'Le patient au centre de chaque décision',
        text: "Nous ne proposons pas de protocole standard. Chaque prise en charge est le résultat d'un échange approfondi, d'une évaluation médicale et d'une réflexion clinique adaptée à votre histoire, vos objectifs et vos attentes.",
      },
      howWeAccompany: {
        title: 'Votre parcours en quatre étapes',
        stepTitles: [
          'Première consultation :',
          'Évaluation et bilan :',
          'Plan de prise en charge :',
          'Suivi et ajustement :',
        ],
        blocks: [
          'Échange approfondi et recueil de votre histoire médicale',
          'Examens complémentaires si nécessaire, analyse globale',
          'Proposition d\'un parcours thérapeutique adapté',
          'Accompagnement continu, réévaluation régulière',
        ],
      },
      personalization: {
        title: 'Chaque situation mérite une réponse sur mesure',
        text: "Le même symptôme peut avoir des causes et des contextes très différents. C'est pourquoi nous prenons le temps d'écouter, d'analyser et de construire une réponse qui a du sens pour vous, pas une solution toute faite.",
      },
      firstConsultation: {
        title: 'La consultation : point de départ de tout parcours',
        text: "Aucune orientation thérapeutique n'est proposée sans évaluation préalable. La première consultation permet de poser les bases d'une relation de confiance et d'un accompagnement adapté. C'est le premier pas vers un parcours clair et cohérent.",
      },
    },
    traitements: {
      hero: {
        h1: 'Nos traitements',
        subtitle: 'Des axes thérapeutiques intégrés dans une démarche globale',
        text: "Chaque axe thérapeutique proposé par Clínica Les Lilas s'inscrit dans une démarche médicale globale. Le choix d'un traitement découle toujours d'une évaluation préalable et d'un échange avec notre équipe.",
      },
      cards: [
        { title: 'Hyperthermie oncologique', text: "Chaleur localisée utilisée en complément des traitements conventionnels, intégrée dans un parcours oncologique individualisé.", path: ROUTES.HIPERTERMIA },
        { title: 'Oncologie intégrative', text: "Protocoles IV de soutien oncologique : immunité, neuroprotection, antioxydants haute dose. Accompagnement personnalisé en complément des traitements conventionnels.", path: ROUTES.ONCOLOGIA },
        { title: 'Bien-être & Prévention', text: "Sueroterapia IV pour le bien-être, la prévention et la longévité : immunité, détox, anti-âge, performance sportive et récupération.", path: ROUTES.BIENESTAR },
      ],
    },
    hyperthermie: {
      hero: {
        h1: 'Hyperthermie oncologique',
        subtitle: 'Traitement complémentaire en médecine intégrative oncologique',
        text: "L'hyperthermie oncologique est une technique médicale qui élève de façon contrôlée la température dans la zone tumorale. Chez Clínica Les Lilas, elle est utilisée comme approche complémentaire dans un parcours intégratif individualisé, toujours précédée d'une évaluation médicale approfondie. Cette page a pour objectif de vous aider à comprendre, avec des mots simples, en quoi consiste ce traitement, dans quels contextes il peut être envisagé et comment se déroule la prise en charge au sein de notre clinique.",
      },
      whatIs: {
        title: "Qu'est-ce que l'hyperthermie oncologique ?",
        text: "L'hyperthermie oncologique consiste à élever de façon contrôlée la température de la zone tumorale, généralement entre 39 et 43\u00A0°C. Cette élévation thermique peut modifier le microenvironnement tumoral et augmenter la sensibilité des cellules tumorales à certains traitements conventionnels, comme la radiothérapie ou la chimiothérapie. Documentée dans la littérature médicale internationale, cette technique n'est pas envisagée comme un acte isolé, mais comme une option complémentaire au sein d'une prise en charge intégrative. Son indication dépend toujours du contexte clinique, du dossier médical du patient et des objectifs thérapeutiques définis avec l'équipe soignante.",
      },
      ourApproach: {
        title: 'Notre approche intégrative',
        text: "Chez Clínica Les Lilas, l'hyperthermie n'est pas proposée comme un acte isolé. Elle s'intègre dans un parcours clinique plus large, en coordination avec les traitements en cours du patient et en lien avec l'équipe oncologique lorsque cela est pertinent. Notre rôle est d'évaluer si cette approche peut avoir une place cohérente dans la prise en charge globale, sans perturber le traitement principal. Chaque indication repose sur une analyse médicale rigoureuse, une information claire et un cadre de décision prudent. Aucune séance n'est réalisée sans évaluation préalable individualisée.",
      },
      forWho: {
        title: 'Dans quels cas peut-elle être utilisée ?',
        text: "L'hyperthermie oncologique peut être envisagée comme approche complémentaire dans certains contextes oncologiques, toujours sous évaluation médicale individuelle.",
        items: [
          'Patients en traitement oncologique actif souhaitant un soutien complémentaire',
          'Patients souhaitant explorer une approche de médecine intégrative coordonnée',
          'Profils avec historique médical évalué individuellement lors d\'une consultation préalable',
          'Situations dans lesquelles la coordination avec le parcours en cours est possible',
          'Patients ayant besoin d\'une information claire sur les bénéfices potentiels et les limites',
          'Toujours en complément des traitements conventionnels, jamais en substitut',
        ],
      },
      consultationEssential: {
        title: 'Pourquoi la consultation préalable est indispensable',
        text: "L'hyperthermie ne convient pas à toutes les situations. La première consultation permet d'analyser votre dossier médical, de comprendre votre parcours thérapeutique et de déterminer si cette approche peut s'intégrer de façon pertinente dans votre prise en charge. Aucune séance n'est réalisée sans cette évaluation préalable.",
      },
      session: {
        title: 'Comment se déroule une séance d\'hyperthermie ?',
        text: "Chaque séance se déroule dans un environnement clinique calme et confortable, sous supervision médicale. Le processus est non invasif et conçu pour garantir le confort du patient. Avant de commencer, nous vérifions les informations utiles du jour, les éventuels symptômes récents et le ressenti général du patient. L'objectif est de proposer une expérience rassurante, structurée et adaptée au contexte clinique de chacun.",
        steps: [
          'Durée approximative de 60 à 90 minutes par séance',
          'Le patient reste en position confortable pendant toute la séance',
          'Sensation de chaleur progressive et contrôlée dans la zone traitée',
          'Supervision médicale continue tout au long de la séance',
          'Environnement clinique privé, calme et climatisé',
          'Suivi personnalisé après chaque séance',
          'Explications données avant, pendant et après la séance pour répondre aux questions',
          'Adaptation du déroulement en fonction de la tolérance clinique et du confort ressenti',
        ],
      },
      benefits: {
        title: 'Bénéfices potentiels en médecine intégrative',
        text: "Les observations suivantes concernent des bénéfices potentiels observés dans le cadre de la médecine intégrative. Ils ne constituent pas des résultats garantis et doivent toujours être interprétés en fonction de la situation médicale individuelle. L'intérêt de l'hyperthermie s'évalue dans un raisonnement clinique global, et non à partir d'une promesse générale applicable à tous les patients.",
        items: [
          'Peut contribuer au bien-être général du patient durant le traitement',
          'Peut s\'inscrire dans une approche thérapeutique intégrative personnalisée',
          'Peut soutenir la qualité de vie durant le parcours oncologique',
          'Peut améliorer la tolérance à certains traitements, selon évaluation médicale',
          'Peut participer à un accompagnement plus global, centré sur le patient et son confort',
          'Peut être intégrée à un plan de soins construit de façon progressive et réévaluée dans le temps',
        ],
      },
      evidence: {
        title: 'Données scientifiques',
        text: "L'hyperthermie oncologique a fait l'objet d'études cliniques publiées dans des revues scientifiques internationales. Les recherches ont exploré son utilisation comme traitement complémentaire dans différents types de tumeurs, en combinaison avec la radiothérapie et la chimiothérapie. Les résultats disponibles ne permettent pas de tirer la même conclusion pour tous les patients ni pour toutes les situations, mais ils contribuent à mieux définir les contextes dans lesquels cette approche peut être étudiée. Dans notre pratique, la littérature scientifique sert de base d'orientation, toujours complétée par l'analyse médicale individuelle et par la prudence clinique nécessaire.",
        disclaimer: "Les informations contenues sur cette page ont un caractère informatif. Elles ne constituent pas un conseil médical personnalisé. Toute décision thérapeutique nécessite une évaluation médicale individuelle.",
      },
      beforeTreatment: {
        title: 'Que prendre en compte avant de commencer',
        text: "Avant d'envisager l'hyperthermie oncologique, il est essentiel d'analyser le diagnostic, le stade de la maladie, les traitements déjà reçus, les traitements en cours, l'état général du patient et ses objectifs. Cette étape permet d'identifier si l'approche peut être envisagée dans de bonnes conditions cliniques.",
        items: [
          'Analyse du dossier médical et des comptes rendus disponibles',
          'Prise en compte des traitements déjà réalisés ou actuellement en cours',
          'Évaluation de l\'état général, de la fatigue et de la tolérance globale',
          'Clarification des objectifs du patient et des attentes réalistes',
          'Vérification de l\'absence de contre-indications ou de situations nécessitant une prudence particulière',
        ],
      },
      followUp: {
        title: 'Accompagnement et suivi pendant le parcours',
        text: "Le suivi ne se limite pas à la séance elle-même. Nous attachons une grande importance à l'écoute du patient, au recueil de ses sensations et à l'ajustement du parcours si nécessaire. Dans une logique de médecine intégrative, le traitement complémentaire doit rester cohérent avec l'évolution clinique, le confort du patient et les autres décisions thérapeutiques.",
        items: [
          'Réévaluation régulière de la tolérance et du ressenti du patient',
          'Dialogue clinique continu sur les symptômes, la fatigue et la qualité de vie',
          'Coordination du parcours lorsque d\'autres traitements sont en cours',
          'Ajustement de la fréquence ou de l\'indication selon l\'évolution clinique',
          'Information claire pour aider le patient à prendre des décisions éclairées',
        ],
      },
      seriousFramework: {
        title: 'Demander une évaluation médicale personnalisée',
        text: "Si vous souhaitez savoir si l'hyperthermie oncologique peut être adaptée à votre situation, la première étape est une consultation médicale individualisée. Notre équipe analysera votre historique, vos traitements actuels, votre état général et vos objectifs pour vous orienter de la façon la plus adaptée. Cette consultation permet aussi de répondre à vos questions, d'expliquer les limites de l'approche et de construire, si cela est pertinent, un parcours complémentaire cohérent et prudent.",
      },
      faq: {
        title: 'Questions fréquentes sur l\'hyperthermie oncologique',
        items: [
          {
            q: 'L\'hyperthermie remplace-t-elle la chimiothérapie ou la radiothérapie ?',
            a: 'Non. L\'hyperthermie oncologique est un traitement complémentaire, pas un substitut aux traitements conventionnels. Elle est toujours envisagée en coordination avec l\'équipe oncologique et dans le cadre d\'une approche de médecine intégrative.',
          },
          {
            q: 'L\'hyperthermie est-elle douloureuse ?',
            a: 'Les séances sont conçues pour être confortables. Le patient ressent une chaleur progressive et contrôlée dans la zone traitée, sous supervision médicale continue. Il ne s\'agit pas d\'un geste douloureux.',
          },
          {
            q: 'Combien de séances sont généralement recommandées ?',
            a: 'Il n\'existe pas de protocole unique. Le nombre de séances est déterminé lors de la consultation médicale préalable, en fonction du profil du patient, de sa situation clinique et de ses objectifs thérapeutiques.',
          },
          {
            q: 'Comment savoir si ce traitement est adapté à mon cas ?',
            a: 'La seule façon de le déterminer est une consultation médicale individualisée. Notre équipe évaluera votre historique, vos traitements actuels et vos objectifs pour vous orienter de façon adaptée.',
          },
          {
            q: 'Peut-elle être associée à d\'autres traitements ?',
            a: 'Oui, dans certains contextes, l\'hyperthermie peut être envisagée en complément d\'autres traitements conventionnels. Cette association dépend toujours d\'une analyse médicale individualisée et de la cohérence du parcours thérapeutique.',
          },
          {
            q: 'Faut-il préparer quelque chose avant la séance ?',
            a: 'Les consignes peuvent varier selon la situation clinique. Lors de la consultation ou de la prise de rendez-vous, notre équipe vous indique les recommandations utiles pour venir dans de bonnes conditions et avec les documents nécessaires.',
          },
          {
            q: 'Quand ce traitement est-il généralement envisagé ?',
            a: 'Il peut être étudié dans certains contextes oncologiques comme approche complémentaire, notamment lorsqu\'une évaluation médicale conclut qu\'il peut s\'intégrer de manière cohérente au parcours en cours. Il n\'existe pas d\'indication automatique.',
          },
        ],
      },
    },
    oncologia: {
      hero: {
        h1: 'Accompagnement oncologique intégratif',
        subtitle: 'Protocoles IV personnalisés en complément des traitements conventionnels',
        text: "Nos protocoles de sueroterapia oncologique sont conçus pour accompagner les patients en parcours oncologique actif. Chaque perfusion est définie après évaluation médicale, en coordination avec l'équipe oncologique lorsque pertinent.",
      },
      labels: {
        duration: 'Durée',
        cta: 'Demander une consultation',
        benefits: 'Bénéfices',
        keyActives: 'Actifs clés',
        medicalNote: 'Note médicale',
      },
      tiers: {
        support: {
          badge: 'Support',
          title: 'Soutien de base',
          description: 'Premier niveau du parcours intégratif oncologique. Soutien immunitaire, antioxydant et accompagnement de fond.',
        },
        protocolo: {
          badge: 'Protocolo',
          title: 'Accompagnement intégratif',
          description: 'Protocoles combinés pour un accompagnement plus ciblé pendant le traitement oncologique actif.',
        },
        avanzado: {
          badge: 'Avanzado',
          title: 'Protocoles avancés',
          description: 'Protocoles haute dose et combinaisons avancées pour les parcours longs et intensifs.',
        },
      },
      therapies: {
        soporteInmune: {
          name: 'Terapia Soporte Inmune',
          subtitle: 'Inmunidad y antioxidante de primer nivel',
          tags: ['Vitamina C 7.5g', 'Selenio 900mcg'],
          benefits: [
            'Soutien immunitaire de base et antioxydant',
            'Synergie Vit C + Sélénium thyroïde / immunité',
            'Premier niveau du parcours intégratif oncologique',
          ],
          duration: '45–55 min',
        },
        soporteNeurologico: {
          name: 'Terapia Soporte Neurológico',
          subtitle: 'Equilibrio neurológico y soporte hematológico',
          tags: ['Metilcobalamina B12', 'Complejo Vitamina B'],
          benefits: [
            'Soutien neurologique et hématologique de fond',
            'Réduction fatigue et soutien métabolisme nerveux',
            'Confort général pendant le parcours oncologique',
          ],
          duration: '40–50 min',
        },
        vitaminaCOnco: {
          name: 'Vitamina C Alta Dosis Onco',
          subtitle: 'Inmunomodulación y soporte oncológico intensivo',
          tags: ['Vitamina C 50g IV'],
          benefits: [
            'Action pro-oxydante sélective sur cellules tumorales',
            'Renforcement immunitaire intensif haute dose',
            'Soutien pendant et entre les cycles de chimiothérapie',
          ],
          duration: '90–120 min',
          note: 'Biodisponibilité IV de 100% vs <20% per os. À intégrer dans un protocole médical validé.',
        },
        neuroSupportOnco: {
          name: 'Terapia Neuro Support Onco',
          subtitle: 'Neuropatía periférica inducida por quimioterapia',
          tags: ['MSM 15%', 'Metilcobalamina B12'],
          benefits: [
            'Neuropathies périphériques chimio-induites : fourmillements, perte sensibilité',
            'Conduction nerveuse et régénération axonale',
            'Anti-inflammatoire articulaire complémentaire',
          ],
          duration: '50–60 min',
          note: 'Indiqué en neuropathie induite par oxaliplatine, paclitaxel ou vincristine.',
        },
        antioxidanteOnco: {
          name: 'Terapia Antioxidante Onco',
          subtitle: 'Antioxidante combinado potente durante tratamiento',
          tags: ['Vitamina C 7.5g', 'Glutatión'],
          benefits: [
            'Soutien antioxydant combiné puissant',
            'Détox hépatique + protection cellulaire',
            'Complémentaire chimiothérapie et immunothérapie',
          ],
          duration: '55–65 min',
        },
        inmunidadIntensivaOnco: {
          name: 'Terapia Inmunidad Intensiva Onco',
          subtitle: 'Inmunidad alta dosis y modulación del selenio',
          tags: ['Vitamina C 50g', 'Selenio 900mcg'],
          benefits: [
            'Immunité haute dose + modulation Sélénium',
            'Action pro-oxydante sélective à haute dose',
            'Soutien en phase active de traitement oncologique',
          ],
          duration: '90–120 min',
          note: 'Protocole adapté à la phase du traitement oncologique.',
        },
        curcuminaOnco: {
          name: 'Terapia Curcumina Onco',
          subtitle: 'Antiinflamatorio oncológico de precisión',
          tags: ['Curcumina IV 150mg', 'Vitamina C 7.5g'],
          benefits: [
            'Anti-inflammatoire oncologique de précision — biodisponibilité totale',
            'Synergie antioxydante Curcumina + Vit C',
            'Soutien des parcours longs — confort et résilience',
          ],
          duration: '60–75 min',
        },
        equilibrioEmocionalOnco: {
          name: 'Terapia Equilibrio Emocional Onco',
          subtitle: 'Equilibrio emocional y soporte nervioso en oncología',
          tags: ['Psych Stabil Infusion', 'Glutatión'],
          benefits: [
            'Équilibre émotionnel en parcours oncologique',
            'Stress oxydatif neuronal réduit — confort mental',
            'Soutien burnout, anxiété et épuisement onco',
          ],
          duration: '55–65 min',
          note: 'À intégrer dans un suivi psycho-oncologique global.',
        },
        antioxidanteOncoPremium: {
          name: 'Terapia Antioxidante Onco Premium',
          subtitle: 'Antioxidante premium de doble acción alta dosis',
          tags: ['Vitamina C 50g', 'Glutatión'],
          benefits: [
            'Double antioxydant haute dose + détox hépatique profonde',
            'Soutien immunitaire intensif et protection cellulaire',
            'Protocole premium pour les parcours longs',
          ],
          duration: '90–120 min',
        },
        cardioProtectOnco: {
          name: 'Terapia Cardio Protect Onco',
          subtitle: 'Cardioprotección y antiinflamatorio oncológico',
          tags: ['CoQ10 150mg', 'Curcumina IV 150mg'],
          benefits: [
            'Cardioprotection myocardique (protocoles anthracyclines)',
            'Anti-inflammatoire oncologique précis — synergie prouvée',
            'Soutien mitochondrial en cours de traitement',
          ],
          duration: '70–80 min',
          note: 'Recommandé pour patients sous anthracyclines ou trastuzumab.',
        },
        mitoSupportOnco: {
          name: 'Terapia Mito Support Onco',
          subtitle: 'Soporte mitocondrial avanzado y recuperación profunda',
          tags: ['CoQ10 150mg', 'Vitamina C 7.5g', 'Complejo Vitamina B'],
          benefits: [
            'Soutien mitochondrial avancé + énergie cellulaire',
            'Protection antioxydante complète Vit C + CoQ10',
            'Récupération profonde dans les parcours intensifs',
          ],
          duration: '70–85 min',
        },
        inmunomodulacionOnco: {
          name: 'Terapia Inmunomodulación Onco',
          subtitle: 'Soporte inmuno-oncológico — EGCepigalocatequina + Curcumina',
          tags: ['EGCG', 'Curcumina IV 150mg'],
          benefits: [
            'Synergie pro-apoptotique et immunomodulatrice documentée',
            'Action antitumorale complémentaire — polyphénol + curcuminoïde',
            'Soutien pendant chimiothérapie et immunothérapie',
          ],
          duration: '90–110 min',
        },
        cardioDefenseOnco: {
          name: 'Terapia Cardio Defense Onco',
          subtitle: 'Cardioprotección oncológica — EGCepigalocatequina + CoQ10',
          tags: ['EGCG', 'CoQ10 150mg'],
          benefits: [
            'Cardioprotection myocardique — anthracyclines / trastuzumab',
            'Soutien mitochondrial + activité antitumorale EGCG',
            'Protection cardiovasculaire et performance cellulaire combinées',
          ],
          duration: '90–110 min',
        },
      },
      ctaSection: {
        title: 'Commencer par une consultation oncologique',
        text: "La première consultation permet d'évaluer votre situation, de comprendre votre parcours oncologique et de définir le protocole IV le plus adapté. Aucune perfusion n'est réalisée sans évaluation médicale préalable.",
      },
    },
    bienestar: {
      hero: {
        h1: 'Bien-être, prévention et longévité',
        subtitle: 'Sueroterapia IV pour votre vitalité et votre santé globale',
        text: "Nos protocoles de bien-être sont conçus pour accompagner votre santé au quotidien : immunité, énergie, détox, anti-âge et performance sportive. Chaque perfusion est définie après évaluation médicale personnalisée.",
      },
      labels: {
        duration: 'Durée',
        cta: 'Demander une consultation',
        benefits: 'Bénéfices',
        keyActives: 'Actifs clés',
      },
      tiers: {
        essentiel: {
          badge: 'Essentiel',
          title: 'Soins essentiels',
          description: 'Protocoles de base pour le soutien immunitaire et la détoxification cellulaire.',
        },
        advanced: {
          badge: 'Advanced',
          title: 'Soins avancés',
          description: 'Combinaisons avancées pour l\'énergie, la récupération, l\'équilibre nerveux et l\'inflammation.',
        },
        prestige: {
          badge: 'Prestige',
          title: 'Protocoles premium',
          description: 'Protocoles premium NAD+, longévité, performance sportive et anti-âge haute dose.',
        },
      },
      therapies: {
        defensaInmune: {
          name: 'Defensa Inmune',
          subtitle: 'Respuesta alérgica y soporte inmune',
          tags: ['Vitamina C 7.5g', 'Complejo Vitamina B'],
          benefits: [
            'Réduction de la réponse inflammatoire et allergique',
            'Soutien immunitaire et recharge en Vit C',
            'Cofacteurs B pour l\'énergie cellulaire',
          ],
          duration: '40–50 min',
        },
        detoxCelular: {
          name: 'Detox Celular Premium',
          subtitle: 'Antioxidante profundo y bienestar hepático',
          tags: ['Glutatión'],
          benefits: [
            'Détoxification hépatique en profondeur',
            'Réduction du stress oxydatif cellulaire',
            'Légèreté, éclat cutané et récupération',
          ],
          duration: '45–55 min',
        },
        energiaTotal: {
          name: 'Terapia Energía Total IV',
          subtitle: 'Energía celular, vitalidad y antioxidante',
          tags: ['Vitamina C 7.5g', 'Complejo Vitamina B', 'Glutatión'],
          benefits: [
            'Triple synergie énergie + antioxydant + détox',
            'Vitalité rapidement restaurée',
            'Idéal période de fatigue intense ou surmenage',
          ],
          duration: '55–65 min',
        },
        neuroRecovery: {
          name: 'Terapia Neuro Recovery',
          subtitle: 'Alivio del dolor neuropático e inflamación articular',
          tags: ['MSM 15%', 'Metilcobalamina B12'],
          benefits: [
            'Soulagement des douleurs neuropathiques',
            'Conduction nerveuse et anti-inflammatoire articulaire',
            'Arthroses, fibromyalgie, douleurs chroniques',
          ],
          duration: '50–60 min',
        },
        equilibrioMental: {
          name: 'Terapia Equilibrio Mental',
          subtitle: 'Equilibrio emocional y sistema nervioso',
          tags: ['Psych Stabil Infusion', 'Glutatión'],
          benefits: [
            'Équilibre émotionnel et confort nerveux',
            'Réduction du stress oxydatif neuronal',
            'Soutien en cas de burnout, anxiété ou épuisement',
          ],
          duration: '55–65 min',
        },
        vitalidadCelular: {
          name: 'Terapia Vitalidad Celular',
          subtitle: 'Energía mitocondrial y neuroprotección',
          tags: ['CoQ10 150mg', 'Metilcobalamina B12'],
          benefits: [
            'Tonus mitochondrial et récupération cellulaire',
            'Neuroprotection et soutien nerveux',
            'Idéal actifs, professionnels et patients sous statines',
          ],
          duration: '55–65 min',
        },
        inmunidadPlus: {
          name: 'Terapia Inmunidad Plus',
          subtitle: 'Inmunidad y energía mitocondrial combinadas',
          tags: ['Vitamina C 7.5g', 'CoQ10 150mg'],
          benefits: [
            'Synergie antioxydant + énergie mitochondriale',
            'Protection cellulaire et immunité ciblée',
            'Récupération active et recharge globale',
          ],
          duration: '55–65 min',
        },
        antiInflam: {
          name: 'Terapia Anti-Inflam IV',
          subtitle: 'Antiinflamatorio de precisión y antioxidante avanzado',
          tags: ['Curcumina IV 150mg', 'Vitamina C 7.5g'],
          benefits: [
            'Anti-inflammatoire de précision (100× supérieur à la capsule)',
            'Synergie antioxydante renforcée',
            'Confort articulaire, métabolique et digestif',
          ],
          duration: '60–75 min',
        },
        nadLongevity: {
          name: 'NAD+ Longevity',
          subtitle: 'Longevidad, claridad mental y cofactores B',
          tags: ['NAD+ 125mg', 'Complejo Vitamina B'],
          benefits: [
            'Réparation de l\'ADN et clarté mentale',
            'Cofacteurs B pour l\'énergie mitochondriale optimale',
            'Protocole anti-âge et récupération profonde',
          ],
          duration: '90–120 min',
        },
        nadVitalBoost: {
          name: 'NAD+ Vital Boost',
          subtitle: 'Longevidad y protección antioxidante activa',
          tags: ['NAD+ 125mg', 'Vitamina C 7.5g'],
          benefits: [
            'Énergie NAD+ + protection antioxydante cellulaire',
            'Vit C potentialise la biodisponibilité du NAD+',
            'Clarté mentale, longévité et récupération',
          ],
          duration: '90–110 min',
        },
        performanceSport: {
          name: 'Performance Sport IV',
          subtitle: 'Rendimiento, recuperación y movilidad deportiva premium',
          tags: ['NAD+ 125mg', 'Glutatión', 'MSM 15%'],
          benefits: [
            'Énergie et récupération sportive haute performance',
            'Protection articulaire et anti-inflammatoire MSM',
            'Antioxydant premium post-effort + réparation ADN',
          ],
          duration: '100–130 min',
        },
        longevityElite: {
          name: 'Longevity Elite',
          subtitle: 'Longevidad, glow y energía celular — el combo definitivo',
          tags: ['NAD+ 125mg', 'CoQ10 150mg', 'Glutatión'],
          benefits: [
            'Triplet premium anti-âge : énergie + mitochondrie + détox',
            'Réparation ADN, tonus cellulaire et éclat cutané',
            'Offre haut de gamme pour la longévité',
          ],
          duration: '100–130 min',
        },
        polyphenolLongevity: {
          name: 'Polyphenol Longevity',
          subtitle: 'Poliphenol premium — longevidad, inmunidad y antioxidante celular',
          tags: ['EGCG', 'Vitamina C 7.5g'],
          benefits: [
            'Puissant polyphénol anti-âge et immunomodulateur',
            'Synergie antioxydante EGCG + Vitamina C haute biodisponibilité',
            'Longévité cellulaire, cardioprotection et soutien métabolique',
          ],
          duration: '90–120 min',
        },
      },
      personalized: {
        title: 'Un protocole adapté à chaque patient',
        text: "Nous ne proposons pas de menu de perfusions. Le choix d'un protocole IV repose sur un échange clinique, une évaluation de vos besoins et, si nécessaire, des examens complémentaires. Cette rigueur garantit la pertinence et la sécurité de chaque séance.",
      },
      indications: {
        title: 'Indications fréquentes',
        text: "La thérapie IV peut s'inscrire dans différentes démarches de soin, selon l'évaluation médicale initiale :",
        items: [
          'Fatigue persistante ou récupération après une période difficile',
          'Soutien du système immunitaire',
          'Accompagnement dans le cadre d\'un parcours médical global',
          'Bien-être médicalisé et prévention active',
          'Préparation ou récupération physique encadrée',
        ],
      },
      process: {
        title: 'Comment se déroule une séance',
        text: "Chaque séance est réalisée dans un espace clinique dédié, calme et confortable. La perfusion est administrée sous supervision médicale. La durée varie selon le protocole, généralement entre 30 minutes et une heure. Un suivi est assuré après chaque séance.",
      },
      editorialWhyUs: {
        title: 'Ce qui nous distingue',
        items: [
          'Évaluation médicale systématique avant toute perfusion',
          'Protocoles définis par notre équipe médicale, jamais standardisés',
          'Environnement clinique privé et confortable',
          'Supervision médicale pendant chaque séance',
          'Suivi et ajustement du protocole dans la durée',
        ],
      },
      ctaSection: {
        title: 'Commencer par une consultation',
        text: "La première consultation permet de comprendre vos objectifs, d'évaluer votre état de santé et de déterminer le protocole le plus adapté à votre situation. Aucune perfusion n'est réalisée sans cette évaluation préalable.",
      },
    },
    aPropos: {
      hero: {
        h1: 'À propos de Clínica Les Lilas',
        subtitle: 'Une clinique construite autour du patient',
        text: "Clínica Les Lilas est née d'une conviction : la médecine intégrative mérite un cadre clinique sérieux, humain et exigeant. Nous avons créé un lieu où l'écoute, la rigueur médicale et l'attention au parcours patient ne sont pas des promesses, mais des pratiques quotidiennes.",
      },
      history: {
        title: 'Pourquoi Clínica Les Lilas existe',
        paragraphs: [
          "Une expérience personnelle a fait naître une conviction. En accompagnant notre mère dans son combat contre le cancer, nous avons compris l'importance d'une médecine qui soigne à la fois la maladie et la personne. C'est ainsi qu'est née notre clinique d'hyperthermie et de thérapies complémentaires, en collaboration avec des oncologues. Un lieu où science et humanité s'unissent pour offrir aux patients :",
          "Notre mission est simple : renforcer les traitements, améliorer la qualité de vie et faire en sorte que l'espoir soit plus fort que la peur.",
        ],
        items: [
          'Assistance complète.',
          'Thérapies complémentaires validées.',
          'Un soutien à chaque étape du parcours.',
        ],
      },
      philosophy: {
        title: 'Notre philosophie',
        text: "Nous croyons à une médecine qui prend le temps. Le temps de comprendre, d'expliquer, de construire ensemble. Notre ambition n'est pas de proposer le plus grand nombre de traitements, mais d'offrir le parcours le plus juste pour chaque patient.",
      },
      commitment: {
        title: 'Nos engagements',
        items: [
          'Écoute attentive de chaque patient',
          'Transparence sur les possibilités et les limites',
          'Rigueur dans chaque décision clinique',
          'Supervision médicale de chaque prise en charge',
          'Respect du rythme et des choix du patient',
          'Suivi continu et réévaluation régulière',
        ],
      },
      reassuring: {
        title: 'Un lieu pensé pour le soin',
        text: "L'environnement de Clínica Les Lilas a été conçu pour que chaque patient se sente accueilli, écouté et en confiance. Du premier échange téléphonique à la fin du parcours, nous veillons à la qualité de chaque interaction.",
      },
    },
    contactPage: {
      hero: {
        h1: 'Une première étape simple',
        subtitle: 'Contactez-nous pour organiser votre première consultation',
        text: "Appelez-nous, écrivez-nous ou remplissez le formulaire. Nous vous répondons rapidement.",
      },
      form: {
        title: 'Demander une première consultation',
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        phone: 'Téléphone',
        phonePlaceholder: '+34 614 067 537',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        reason: 'Motif de la demande',
        reasonPlaceholder: 'Sélectionnez un motif',
        language: 'Langue préférée',
        languagePlaceholder: 'Sélectionnez une langue',
        message: 'Message',
        messagePlaceholder: 'Décrivez brièvement votre situation ou posez vos questions...',
        submit: 'Envoyer ma demande',
        submitLoading: 'Envoi en cours...',
        submitError: "Une erreur s'est produite. Veuillez réessayer.",
        privacy: "Notre équipe vous répond dans les meilleurs délais pour organiser votre première prise de contact.",
        rgpd: "En soumettant ce formulaire, vous acceptez d'être contacté par la clinique conformément à notre politique de confidentialité.",
      },
      reasons: [
        { value: 'consultation', label: 'Demande de première consultation' },
        { value: 'information', label: "Demande d'information" },
        { value: 'hyperthermie', label: 'Hyperthermie oncologique' },
        { value: 'sueroterapia', label: 'Sueroterapia / IV Therapy' },
        { value: 'medecine-regenerative', label: 'Médecine régénérative' },
        { value: 'soutien-immunitaire', label: 'Soutien immunitaire' },
        { value: 'other', label: 'Autre' },
      ],
      languages: [
        { value: 'fr', label: 'Français' },
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ],
      bottomSection: {
        title: 'Une première étape simple',
        text: "Appelez-nous, écrivez-nous ou remplissez le formulaire. Nous vous répondons rapidement pour organiser votre première consultation.",
      },
    },
    mentionsLegales: {
      h1: 'Mentions légales',
      lastUpdate: 'Dernière mise à jour : mars 2026',
      content: {
        informationsGenerales: {
          title: '1. Informations générales',
          text: "En application de l'article 10 de la Loi espagnole 34/2002 du 11 juillet relative aux services de la société de l'information et au commerce électronique (LSSI-CE), les informations légales suivantes sont portées à la connaissance des utilisateurs :",
          items: [
            'Dénomination sociale : Clínica Les Lilas [S.L.]',
            'CIF : [B-XXXXXXXX]',
            'Siège social : Avinguda de la Diagonal, 4, 03550 Sant Joan d\'Alacant, Alicante, Espagne',
            'Téléphone : +34 614 067 537',
            'Email : info@clinicaleslilas.com',
            'Registro Mercantil : [Inscrit au Registro Mercantil d\'Alicante, Tomo XX, Folio XX, Hoja A-XXXXX]',
            'Autorisation sanitaire : [N° XXXXXXX] – Conselleria de Sanitat Valenciana',
            'Délégué à la Protection des Données (DPD) : info@clinicaleslilas.com',
          ],
        },
        hebergeur: {
          title: '2. Hébergeur',
          text: "Le site est hébergé par [Nom de l'hébergeur], dont le siège est situé à [Adresse de l'hébergeur]. Pour toute question relative à l'hébergement, vous pouvez contacter l'hébergeur directement à l'adresse ci-dessus.",
        },
        conditionsUtilisation: {
          title: "3. Conditions générales d'utilisation",
          text: "L'accès au site est libre et gratuit, à l'exception des coûts de connexion incombant à l'utilisateur. L'utilisation du site implique l'acceptation pleine et entière des présentes conditions. Clínica Les Lilas se réserve le droit de modifier à tout moment et sans préavis le contenu, la présentation et la configuration du site. L'utilisateur reconnaît être majeur et disposer de la capacité juridique nécessaire pour être lié par ces conditions. L'utilisateur s'engage à faire un usage licite du site et à ne pas entreprendre d'actions susceptibles d'endommager les systèmes informatiques ou les droits de tiers. L'accès au site ne crée aucune relation commerciale ou médicale automatique entre l'utilisateur et Clínica Les Lilas.",
        },
        propriete: {
          title: '4. Propriété intellectuelle et industrielle',
          text: "L'ensemble des contenus du site (textes, images, logos, vidéos, graphismes, code source, structure, design, marques et noms commerciaux) est la propriété exclusive de Clínica Les Lilas ou de leurs auteurs respectifs, et est protégé par la législation espagnole et internationale en matière de propriété intellectuelle et industrielle. Toute reproduction, distribution, communication publique ou transformation, totale ou partielle, à des fins commerciales, est strictement interdite sans autorisation écrite préalable. L'utilisateur peut consulter, imprimer et télécharger les contenus pour un usage strictement personnel et non commercial.",
        },
        politiqueLiens: {
          title: '5. Politique de liens',
          text: "Le site peut contenir des liens vers des sites tiers. Clínica Les Lilas n'assume aucune responsabilité quant au contenu, à la qualité ou à la disponibilité de ces sites et ne saurait être assimilée à leur éditeur. Tout établissement d'un lien hypertexte vers ce site est soumis à autorisation écrite préalable de Clínica Les Lilas. Tout lien ne doit pas induire en erreur sur l'identité ou l'origine des contenus, ni permettre une reproduction partielle des pages par cadre (framing).",
        },
        responsabilite: {
          title: '6. Exclusion de garanties et de responsabilité',
          text: "Clínica Les Lilas ne garantit pas la disponibilité continue, l'exactitude ou l'exhaustivité des informations publiées sur ce site. Les informations médicales sont fournies à titre informatif uniquement et ne constituent pas un avis médical personnalisé. La clinique décline toute responsabilité pour tout dommage résultant de l'utilisation ou de l'impossibilité d'utiliser le site, de la présence de virus informatiques, ou de décisions prises sur la base des informations publiées.",
        },
        donnees: {
          title: '7. Protection des données personnelles',
          text: "Conformément au RGPD (UE 2016/679) et à la Loi Organique Espagnole 3/2018 (LOPDGDD), Clínica Les Lilas, en tant que responsable du traitement, collecte et traite vos données personnelles afin de répondre à vos demandes et de vous fournir ses services. Les données de santé font l'objet d'un traitement renforcé conformément à l'article 9 du RGPD. Vous disposez des droits suivants, exerceables à info@clinicaleslilas.com :",
          items: [
            "Droit d'accès à vos données personnelles",
            'Droit de rectification des données inexactes',
            "Droit à l'effacement (droit à l'oubli)",
            'Droit à la limitation du traitement',
            'Droit à la portabilité des données',
            "Droit d'opposition au traitement",
            'Droit de déposer une réclamation auprès de l\'AEPD (www.aepd.es)',
          ],
        },
        cookies: {
          title: '8. Cookies',
          text: "Ce site utilise des cookies techniques nécessaires à son fonctionnement, et peut utiliser des cookies analytiques afin d'améliorer l'expérience utilisateur. Lors de votre première visite, votre consentement vous est demandé pour les cookies non essentiels. Vous pouvez à tout moment modifier vos préférences via les paramètres de votre navigateur. Pour plus de détails, consultez notre Politique de cookies.",
        },
        activitesIllicites: {
          title: '9. Signalement de contenus illicites',
          text: "Si vous constatez que des contenus accessibles via ce site portent atteinte à des droits de tiers, sont illicites ou contraires aux bonnes mœurs, vous pouvez nous en informer à info@clinicaleslilas.com en précisant l'URL concernée, la nature de l'atteinte et vos coordonnées. La réception de ce signalement ne vaut pas connaissance effective au sens de la LSSI-CE et n'entraîne pas automatiquement l'obligation de retirer le contenu signalé.",
        },
        modifications: {
          title: '10. Modifications',
          text: "Clínica Les Lilas se réserve le droit de modifier à tout moment les présentes mentions légales ainsi que le contenu et la structure du site, sans préavis. Les modifications entrent en vigueur dès leur publication. Il est conseillé à l'utilisateur de consulter régulièrement cette page.",
        },
        loi: {
          title: '11. Loi applicable et juridiction compétente',
          text: "Le présent site est régi par la législation espagnole, notamment la Loi 34/2002 (LSSI-CE), la Loi Organique 3/2018 (LOPDGDD) et le RGPD (UE 2016/679). En cas de litige, les parties se soumettent à la juridiction des tribunaux d'Alicante (Espagne), sauf disposition légale contraire.",
        },
      },
    },
    politiqueConfidentialite: {
      h1: 'Politique de confidentialité',
      content: {
        intro: {
          title: 'Protection des données',
          text: "Clínica Les Lilas s'engage à protéger la confidentialité des données personnelles collectées via ce site. Les informations que vous nous transmettez sont utilisées uniquement pour répondre à vos demandes et organiser votre prise en charge.",
        },
        usage: {
          title: 'Utilisation des données',
          text: "Les données collectées (nom, email, téléphone, message) sont traitées de manière confidentielle et ne sont pas transmises à des tiers. Elles permettent à notre équipe de vous recontacter et d'organiser votre première consultation.",
        },
        rights: {
          title: 'Vos droits',
          text: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous via le formulaire ou par email.",
        },
      },
    },
    appointment: {
      fullName: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Message',
    },
    contactMerci: {
      meta: {
        title: 'Message envoyé | Clínica Les Lilas',
        description: 'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.',
      },
      hero: {
        h1: 'Message envoyé',
        subtitle: 'Merci pour votre demande',
        text: '',
      },
      body: "Votre message a bien été reçu. Notre équipe vous répondra dans les plus brefs délais pour organiser votre première consultation.",
      cta: "Retour à l'accueil",
    },
    notFound: {
      title: 'Page non trouvée',
      message: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
      backHome: "Retour à l'accueil",
      contactUs: 'Nous contacter',
    },
  },

  en: {
    brand: { name: 'Clínica Les Lilas', subtitle: 'Otra forma de luchar' },
    navigation: {
      home: 'Home',
      notreApproche: 'Our approach',
      traitements: 'Treatments',
      hyperthermie: 'Oncological hyperthermia',
      oncologia: 'Integrative Oncology',
      bienestar: 'Wellness & Prevention',
      aPropos: 'About',
      contact: 'Contact',
      blog: 'Blog',
      mentionsLegales: 'Legal notice',
      politiqueConfidentialite: 'Privacy policy',
    },
    common: {
      close: 'Close',
    },
    cta: {
      requestConsultation: 'Request a first consultation',
      bookAppointment: 'Book an appointment',
      bookAppointmentShort: 'Book',
      bookConsultationInitial: 'Book initial consultation',
      contactTeam: 'Speak with our team',
      contactClinic: 'Contact the clinic',
      discoverApproach: 'Discover our approach',
      learnMore: 'Learn more',
      seeTreatments: 'View treatments',
      seePage: 'View page',
      discover: 'Discover',
      submit: 'Submit my request',
      call: 'Call',
    },
    whatsapp: {
      button: 'Message on WhatsApp',
      buttonShort: 'WhatsApp',
      defaultMessage: 'Hello, I would like to request a consultation.',
      ariaLabel: 'Contact via WhatsApp',
    },
    footer: {
      tagline: 'Private integrative medicine clinic',
      subtitle: 'Thorough evaluation – Medical supervision – Human care',
      navigation: 'Navigation',
      rights: 'All rights reserved.',
    },
    contact: {
      title: 'Contact us',
      address: { title: 'Address', full: "Avinguda de la Diagonal, 4\n03550 Sant Joan d'Alacant\nAlicante, Spain" },
      hours: { title: 'Hours', text: 'Monday – Friday: 9:00 AM – 6:00 PM' },
    },
    meta: {
      home: {
        title: 'Clínica Les Lilas | Integrative Medicine in Alicante',
        description: 'Private integrative medicine clinic in Alicante. Oncological hyperthermia, IV therapy, regenerative medicine. Personalized consultation and medical care.',
      },
      notreApproche: {
        title: 'Our Approach to Integrative Medicine | Clínica Les Lilas',
        description: 'A patient-centered integrative medical approach. Thorough evaluation, individualized care plan and continuous follow-up in a premium clinical setting.',
      },
      traitements: {
        title: 'Our Treatments | Clínica Les Lilas',
        description: 'Oncological hyperthermia and IV therapy. Integrative medical treatments in a rigorous clinical setting.',
      },
      hyperthermie: {
        title: 'Oncological Hyperthermia | Clínica Les Lilas Alicante',
        description: 'Oncological hyperthermia as part of an integrative care approach. Localized heat complementing conventional treatments. Prior evaluation required.',
      },
      oncologia: {
        title: 'Integrative Oncology Support | Clínica Les Lilas Alicante',
        description: 'IV oncology support protocols: immunity, neuroprotection, high-dose antioxidants. Personalized integrative support complementing conventional treatments.',
        keywords: 'integrative oncology, oncological IV therapy, high-dose vitamin C, cancer support, Alicante',
      },
      bienestar: {
        title: 'Wellness, Prevention & Longevity | Clínica Les Lilas Alicante',
        description: 'IV therapy for wellness, prevention and longevity: immunity, detox, anti-aging, sports performance. Personalized protocols in Alicante.',
        keywords: 'wellness, prevention, longevity, NAD+, anti-aging, detox, sports performance, Alicante',
      },
      aPropos: {
        title: 'About | Clínica Les Lilas',
        description: 'Clínica Les Lilas: private integrative medicine clinic. Our philosophy, commitments and vision of patient-centered care.',
      },
      contact: {
        title: 'Contact & Appointments | Clínica Les Lilas Alicante',
        description: 'Contact Clínica Les Lilas in Alicante. Request a first consultation by phone, WhatsApp or form. Quick response.',
      },
      politiqueConfidentialite: {
        title: 'Legal notice and privacy policy | Clínica Les Lilas',
        description: 'Legal notice, privacy policy and personal data protection. Clínica Les Lilas - Alicante.',
      },
      notFound: {
        title: 'Page not found | Clínica Les Lilas',
        description: 'The page you are looking for does not exist. Return to home or contact us.',
      },
      blog: {
        title: 'Blog | Clínica Les Lilas — Integrative Medicine',
        description: 'Articles on integrative medicine, oncological hyperthermia and sueroterapia. Reliable medical information by Clínica Les Lilas.',
        keywords: 'integrative medicine blog, oncological hyperthermia, sueroterapia, Alicante clinic',
      },
    },
    blog: {
      heroTitle: 'Our blog',
      heroSubtitle: 'Articles and resources on integrative medicine',
      heroText: 'Explore our articles on treatments, medical advances and integrative medicine insights. Content written by our medical team.',
      readArticle: 'Read the article',
      backToBlog: 'Back to blog',
      tableOfContents: 'Table of contents',
      faqTitle: 'Frequently asked questions',
      relatedArticles: 'Related articles',
      publishedOn: 'Published on',
      allCategories: 'All',
      categoryTraitements: 'Treatments',
      categoryMedecineIntegrative: 'Integrative medicine',
      noArticles: 'No articles in this category.',
    },
    home: {
      hero: {
        h1: 'Integrative medicine and personalized treatments',
        subtitle: 'A private clinic dedicated to your overall health',
        text: "Clínica Les Lilas combines medical expertise, innovative technologies and human attention to guide you through a care pathway tailored to your situation. Every treatment plan begins with a thorough evaluation.",
        ctaNote: "The initial consultation is the starting point of every therapeutic journey at our clinic.",
      },
      valueProposition: {
        title: 'A demanding medical framework at the service of the patient',
        text: "Our clinic is built on a clear principle: understand before acting. Each patient receives an individualized assessment, a coherent care plan and attentive follow-up throughout their journey.",
        blocks: [
          { title: 'Thorough evaluation', description: 'Complete medical assessment before any therapeutic direction.' },
          { title: 'Integrative vision', description: 'Care that considers the patient as a whole.' },
          { title: 'Rigorous medical supervision', description: 'Every protocol is defined and supervised by our medical team.' },
          { title: 'Continuous follow-up', description: "Support that doesn't end with the treatment." },
        ],
      },
      careAxes: {
        title: 'Our areas of care',
        text: "We offer several therapeutic areas, each integrated into a global care approach. The initial consultation helps direct you to the most suitable pathway.",
        cards: [
          { title: 'Oncological hyperthermia', text: "Localized heat used to complement conventional treatments, in a rigorous clinical setting and after individual evaluation.", path: ROUTES.HIPERTERMIA, cta: 'Discover' },
          { title: 'Wellness & Prevention', text: "IV therapy for wellness, prevention and longevity: immunity, detox, anti-aging, sports performance and recovery.", path: ROUTES.BIENESTAR, cta: 'Discover' },
        ],
      },
      whyUs: {
        title: 'Why choose Clínica Les Lilas',
        items: [
          'Complete medical evaluation before any treatment proposal',
          'Individualized protocols, never standardized',
          'Multilingual medical team (French, Spanish, English)',
          'Private, calm and reassuring clinical environment',
          'The consultation as the true starting point of the care journey',
        ],
      },
      ctaConsultation: {
        title: 'It all starts with a consultation',
        text: "The first consultation is an essential step. It allows us to understand your situation, carry out an initial assessment and define possible directions together. No treatment is initiated without this prior evaluation. Have questions? Our team is available to help.",
      },
    },
    notreApproche: {
      hero: {
        h1: 'Our approach to integrative medicine',
        subtitle: 'Understand, evaluate, support',
        text: "Integrative medicine is not just about offering complementary treatments. At Clínica Les Lilas, it is based on a rigorous clinical process: listening to the patient, analyzing their situation holistically and building a care plan that is coherent with their needs and context.",
      },
      patientCentered: {
        title: 'The patient at the center of every decision',
        text: "We don't offer standard protocols. Every care plan results from an in-depth discussion, a medical evaluation and clinical reasoning adapted to your history, goals and expectations.",
      },
      howWeAccompany: {
        title: 'Your journey in four steps',
        stepTitles: [
          'First consultation:',
          'Evaluation and assessment:',
          'Care plan:',
          'Follow-up and adjustment:',
        ],
        blocks: [
          'In-depth discussion and review of your medical history',
          'Additional examinations if needed, comprehensive analysis',
          'Proposal of an adapted therapeutic pathway',
          'Continuous support, regular reassessment',
        ],
      },
      personalization: {
        title: 'Every situation deserves a tailored response',
        text: "The same symptom can have very different causes and contexts. That is why we take the time to listen, analyze and build a response that makes sense for you, not a one-size-fits-all solution.",
      },
      firstConsultation: {
        title: 'The consultation: starting point of every pathway',
        text: "No therapeutic direction is proposed without prior evaluation. The first consultation lays the foundation for a relationship of trust and adapted care. It is the first step toward a clear and coherent journey.",
      },
    },
    traitements: {
      hero: {
        h1: 'Our treatments',
        subtitle: 'Therapeutic areas integrated into a comprehensive approach',
        text: "Each therapeutic area offered by Clínica Les Lilas is part of a comprehensive medical approach. Treatment choices always stem from a prior evaluation and a discussion with our team.",
      },
      cards: [
        { title: 'Oncological hyperthermia', text: "Localized heat used to complement conventional treatments, integrated into an individualized oncological pathway.", path: ROUTES.HIPERTERMIA },
        { title: 'Integrative Oncology', text: "IV oncology support protocols: immunity, neuroprotection, high-dose antioxidants. Personalized support complementing conventional treatments.", path: ROUTES.ONCOLOGIA },
        { title: 'Wellness & Prevention', text: "IV therapy for wellness, prevention and longevity: immunity, detox, anti-aging, sports performance and recovery.", path: ROUTES.BIENESTAR },
      ],
    },
    hyperthermie: {
      hero: {
        h1: 'Oncological hyperthermia',
        subtitle: 'Complementary treatment in integrative oncology',
        text: "Oncological hyperthermia is a medical technique that raises temperature in a controlled manner within the tumour area. At Clínica Les Lilas, it is used as a complementary approach within an individualised integrative pathway, always preceded by a thorough medical assessment. This page is designed to help patients understand, in clear terms, what this treatment involves, in which contexts it may be considered and how care is organised in our clinic.",
      },
      whatIs: {
        title: 'What is oncological hyperthermia?',
        text: "Oncological hyperthermia involves raising the temperature of the tumour area in a controlled manner, usually between 39 and 43\u00A0°C. This thermal increase may modify the tumour microenvironment and increase the sensitivity of tumour cells to certain conventional treatments, such as radiotherapy or chemotherapy. Documented in international medical literature, this technique is not considered a standalone intervention but a complementary option within an integrative care pathway. Its indication always depends on the patient's clinical context, medical history and therapeutic goals.",
      },
      ourApproach: {
        title: 'Our integrative approach',
        text: "At Clínica Les Lilas, hyperthermia is not offered as a standalone procedure. It is integrated into a broader clinical pathway, in coordination with the patient's ongoing treatments and oncology team whenever appropriate. Our role is to assess whether this approach may have a coherent place within the overall care plan, without interfering with the main treatment strategy. Each indication is based on thorough medical analysis, clear information and cautious decision-making. No session takes place without a prior individualised evaluation.",
      },
      forWho: {
        title: 'In which cases can it be used?',
        text: "Oncological hyperthermia may be considered as a complementary approach in certain oncological contexts, always subject to individual medical assessment.",
        items: [
          'Patients in active oncological treatment seeking complementary support',
          'Patients wishing to explore a coordinated integrative medicine approach',
          'Profiles with medical history individually assessed during a prior consultation',
          'Situations in which coordination with the current treatment pathway is possible',
          'Patients who need clear information on potential benefits and limitations',
          'Always complementary to conventional treatments, never as a substitute',
        ],
      },
      consultationEssential: {
        title: 'Why the initial consultation is essential',
        text: "Hyperthermia is not suitable for every situation. The first consultation allows us to review your medical history, understand your treatment pathway and determine whether this approach can be meaningfully integrated into your care. No session takes place without this prior evaluation.",
      },
      session: {
        title: 'What does a hyperthermia session involve?',
        text: "Each session takes place in a calm and comfortable clinical environment, under medical supervision. The process is non-invasive and designed to ensure patient comfort throughout. Before starting, we review the relevant information for the day, any recent symptoms and the patient's general condition. The objective is to provide a reassuring, structured experience adapted to each clinical situation.",
        steps: [
          'Approximate duration of 60 to 90 minutes per session',
          'The patient remains in a comfortable position throughout the process',
          'Sensation of progressive, controlled warmth in the treated area',
          'Continuous medical supervision throughout the entire session',
          'Private, calm and air-conditioned clinical environment',
          'Personalised follow-up after each session',
          'Explanations are given before, during and after the session to answer questions',
          'The course of the session can be adjusted according to tolerance and comfort',
        ],
      },
      benefits: {
        title: 'Potential benefits within integrative medicine',
        text: "The following observations refer to potential benefits observed within an integrative medicine framework. They do not constitute guaranteed outcomes and must always be interpreted in light of the individual medical situation. The value of hyperthermia should be assessed within an overall clinical reasoning process rather than through general promises applicable to every patient.",
        items: [
          'May contribute to the patient\'s general wellbeing during treatment',
          'May form part of a personalised, integrated therapeutic approach',
          'May support quality of life throughout the oncological journey',
          'May improve tolerance to certain treatments, subject to medical assessment',
          'May contribute to a more global support strategy focused on the patient and comfort',
          'May be integrated into a care plan that is progressively reassessed over time',
        ],
      },
      evidence: {
        title: 'Scientific evidence',
        text: "Oncological hyperthermia has been the subject of clinical studies published in international scientific journals. Research has explored its use as a complementary treatment in various tumour types, in combination with radiotherapy and chemotherapy. The available results do not lead to the same conclusion for every patient or every situation, but they help define the contexts in which this approach may be considered. In our practice, the scientific literature serves as a basis for orientation and is always complemented by individual medical analysis and the caution required in clinical decision-making.",
        disclaimer: "The information on this page is for informational purposes only. It does not constitute personalised medical advice. Any therapeutic decision requires an individual medical assessment.",
      },
      beforeTreatment: {
        title: 'What to consider before starting',
        text: "Before considering oncological hyperthermia, it is essential to review the diagnosis, the stage of disease, previous treatments, ongoing treatments, the patient's general condition and their expectations. This step helps determine whether the approach may be considered under appropriate clinical conditions.",
        items: [
          'Review of the medical file and available reports',
          'Consideration of treatments already completed or currently ongoing',
          'Assessment of general condition, fatigue and overall tolerance',
          'Clarification of the patient\'s goals and realistic expectations',
          'Verification that there are no contraindications or situations requiring particular caution',
        ],
      },
      followUp: {
        title: 'Support and follow-up throughout the process',
        text: "Follow-up is not limited to the session itself. We place strong emphasis on listening to the patient, collecting feedback on sensations and adjusting the pathway when necessary. Within an integrative medicine framework, a complementary treatment should remain coherent with the clinical evolution, patient comfort and the other therapeutic decisions already in place.",
        items: [
          'Regular reassessment of tolerance and patient experience',
          'Ongoing clinical dialogue about symptoms, fatigue and quality of life',
          'Coordination of the pathway when other treatments are ongoing',
          'Adjustment of frequency or indication according to clinical evolution',
          'Clear information to help the patient make informed decisions',
        ],
      },
      seriousFramework: {
        title: 'Request a personalised medical assessment',
        text: "If you would like to know whether oncological hyperthermia may be suitable for your situation, the first step is an individualised medical consultation. Our team will review your history, current treatments, general condition and objectives in order to advise you in the most appropriate way. This consultation is also the right moment to discuss questions, understand the limits of the approach and, if relevant, define a complementary pathway that is coherent and medically cautious.",
      },
      faq: {
        title: 'Frequently asked questions about oncological hyperthermia',
        items: [
          {
            q: 'Does hyperthermia replace chemotherapy or radiotherapy?',
            a: 'No. Oncological hyperthermia is a complementary treatment, not a substitute for conventional treatments. It is always considered in coordination with the oncology team and within an integrative medicine approach.',
          },
          {
            q: 'Is hyperthermia painful?',
            a: 'Sessions are designed to be comfortable. The patient feels a progressive, controlled warmth in the treated area, under continuous medical supervision. It is not a painful procedure.',
          },
          {
            q: 'How many sessions are typically recommended?',
            a: 'There is no single protocol. The number of sessions is determined at the prior medical consultation, based on the patient\'s profile, clinical situation and therapeutic objectives.',
          },
          {
            q: 'How do I know if this treatment is right for my case?',
            a: 'The only way to determine this is through an individualised medical consultation. Our team will review your history, current treatments and objectives to advise you accordingly.',
          },
          {
            q: 'Can it be combined with other treatments?',
            a: 'Yes, in some contexts hyperthermia may be considered alongside conventional treatments. This possibility always depends on an individual medical review and on whether the overall treatment pathway remains coherent.',
          },
          {
            q: 'Do I need to prepare anything before the session?',
            a: 'Instructions may vary according to the clinical situation. During the consultation or booking process, our team will explain the practical recommendations and the documents that may be useful to bring.',
          },
          {
            q: 'When is this treatment usually considered?',
            a: 'It may be reviewed in some oncological contexts as a complementary approach when a medical assessment concludes that it can be integrated coherently into the current care pathway. There is no automatic indication.',
          },
        ],
      },
    },
    oncologia: {
      hero: {
        h1: 'Integrative oncology support',
        subtitle: 'Personalized IV protocols complementing conventional treatments',
        text: "Our oncological IV protocols are designed to support patients in active oncological treatment. Each infusion is defined after medical evaluation, in coordination with the oncology team when relevant.",
      },
      labels: {
        duration: 'Duration',
        cta: 'Request a consultation',
        benefits: 'Benefits',
        keyActives: 'Key actives',
        medicalNote: 'Medical note',
      },
      tiers: {
        support: {
          badge: 'Support',
          title: 'Basic support',
          description: 'First level of the integrative oncological pathway. Immune support, antioxidant and background care.',
        },
        protocolo: {
          badge: 'Protocolo',
          title: 'Integrative support',
          description: 'Combined protocols for more targeted support during active oncological treatment.',
        },
        avanzado: {
          badge: 'Avanzado',
          title: 'Advanced protocols',
          description: 'High-dose protocols and advanced combinations for long and intensive pathways.',
        },
      },
      therapies: {
        soporteInmune: {
          name: 'Terapia Soporte Inmune',
          subtitle: 'Inmunidad y antioxidante de primer nivel',
          tags: ['Vitamina C 7.5g', 'Selenio 900mcg'],
          benefits: [
            'Basic immune and antioxidant support',
            'Vit C + Selenium synergy for thyroid / immunity',
            'First level of the integrative oncological pathway',
          ],
          duration: '45–55 min',
        },
        soporteNeurologico: {
          name: 'Terapia Soporte Neurológico',
          subtitle: 'Equilibrio neurológico y soporte hematológico',
          tags: ['Metilcobalamina B12', 'Complejo Vitamina B'],
          benefits: [
            'Background neurological and hematological support',
            'Fatigue reduction and nervous metabolism support',
            'General comfort during the oncological pathway',
          ],
          duration: '40–50 min',
        },
        vitaminaCOnco: {
          name: 'Vitamina C Alta Dosis Onco',
          subtitle: 'Inmunomodulación y soporte oncológico intensivo',
          tags: ['Vitamina C 50g IV'],
          benefits: [
            'Selective pro-oxidant action on tumor cells',
            'High-dose intensive immune reinforcement',
            'Support during and between chemotherapy cycles',
          ],
          duration: '90–120 min',
          note: 'IV bioavailability is 100% vs <20% oral. To be integrated into a validated medical protocol.',
        },
        neuroSupportOnco: {
          name: 'Terapia Neuro Support Onco',
          subtitle: 'Neuropatía periférica inducida por quimioterapia',
          tags: ['MSM 15%', 'Metilcobalamina B12'],
          benefits: [
            'Chemo-induced peripheral neuropathies: tingling, loss of sensitivity',
            'Nerve conduction and axonal regeneration',
            'Complementary joint anti-inflammatory',
          ],
          duration: '50–60 min',
          note: 'Indicated for neuropathy induced by oxaliplatin, paclitaxel or vincristine.',
        },
        antioxidanteOnco: {
          name: 'Terapia Antioxidante Onco',
          subtitle: 'Antioxidante combinado potente durante tratamiento',
          tags: ['Vitamina C 7.5g', 'Glutatión'],
          benefits: [
            'Powerful combined antioxidant support',
            'Hepatic detox + cellular protection',
            'Complementary to chemotherapy and immunotherapy',
          ],
          duration: '55–65 min',
        },
        inmunidadIntensivaOnco: {
          name: 'Terapia Inmunidad Intensiva Onco',
          subtitle: 'Inmunidad alta dosis y modulación del selenio',
          tags: ['Vitamina C 50g', 'Selenio 900mcg'],
          benefits: [
            'High-dose immunity + Selenium modulation',
            'Selective pro-oxidant action at high dose',
            'Support during active oncological treatment phase',
          ],
          duration: '90–120 min',
          note: 'Protocol adapted to the phase of oncological treatment.',
        },
        curcuminaOnco: {
          name: 'Terapia Curcumina Onco',
          subtitle: 'Antiinflamatorio oncológico de precisión',
          tags: ['Curcumina IV 150mg', 'Vitamina C 7.5g'],
          benefits: [
            'Precision oncological anti-inflammatory — total bioavailability',
            'Curcumin + Vit C antioxidant synergy',
            'Support for long pathways — comfort and resilience',
          ],
          duration: '60–75 min',
        },
        equilibrioEmocionalOnco: {
          name: 'Terapia Equilibrio Emocional Onco',
          subtitle: 'Equilibrio emocional y soporte nervioso en oncología',
          tags: ['Psych Stabil Infusion', 'Glutatión'],
          benefits: [
            'Emotional balance in the oncological pathway',
            'Reduced neuronal oxidative stress — mental comfort',
            'Support for burnout, anxiety and oncological exhaustion',
          ],
          duration: '55–65 min',
          note: 'To be integrated into a global psycho-oncological follow-up.',
        },
        antioxidanteOncoPremium: {
          name: 'Terapia Antioxidante Onco Premium',
          subtitle: 'Antioxidante premium de doble acción alta dosis',
          tags: ['Vitamina C 50g', 'Glutatión'],
          benefits: [
            'Double high-dose antioxidant + deep hepatic detox',
            'Intensive immune support and cellular protection',
            'Premium protocol for long pathways',
          ],
          duration: '90–120 min',
        },
        cardioProtectOnco: {
          name: 'Terapia Cardio Protect Onco',
          subtitle: 'Cardioprotección y antiinflamatorio oncológico',
          tags: ['CoQ10 150mg', 'Curcumina IV 150mg'],
          benefits: [
            'Myocardial cardioprotection (anthracycline protocols)',
            'Precise oncological anti-inflammatory — proven synergy',
            'Mitochondrial support during treatment',
          ],
          duration: '70–80 min',
          note: 'Recommended for patients on anthracyclines or trastuzumab.',
        },
        mitoSupportOnco: {
          name: 'Terapia Mito Support Onco',
          subtitle: 'Soporte mitocondrial avanzado y recuperación profunda',
          tags: ['CoQ10 150mg', 'Vitamina C 7.5g', 'Complejo Vitamina B'],
          benefits: [
            'Advanced mitochondrial support + cellular energy',
            'Complete antioxidant protection Vit C + CoQ10',
            'Deep recovery in intensive pathways',
          ],
          duration: '70–85 min',
        },
        inmunomodulacionOnco: {
          name: 'Terapia Inmunomodulación Onco',
          subtitle: 'Soporte inmuno-oncológico — EGCepigalocatequina + Curcumina',
          tags: ['EGCG', 'Curcumina IV 150mg'],
          benefits: [
            'Documented pro-apoptotic and immunomodulatory synergy',
            'Complementary antitumoral action — polyphenol + curcuminoid',
            'Support during chemotherapy and immunotherapy',
          ],
          duration: '90–110 min',
        },
        cardioDefenseOnco: {
          name: 'Terapia Cardio Defense Onco',
          subtitle: 'Cardioprotección oncológica — EGCepigalocatequina + CoQ10',
          tags: ['EGCG', 'CoQ10 150mg'],
          benefits: [
            'Myocardial cardioprotection — anthracyclines / trastuzumab',
            'Mitochondrial support + EGCG antitumoral activity',
            'Combined cardiovascular protection and cellular performance',
          ],
          duration: '90–110 min',
        },
      },
      ctaSection: {
        title: 'Start with an oncological consultation',
        text: "The first consultation allows us to evaluate your situation, understand your oncological pathway and determine the most suitable IV protocol. No infusion is administered without prior medical evaluation.",
      },
    },
    bienestar: {
      hero: {
        h1: 'Wellness, prevention & longevity',
        subtitle: 'IV therapy for your vitality and overall health',
        text: "Our wellness protocols are designed to support your daily health: immunity, energy, detox, anti-aging and sports performance. Each infusion is defined after personalized medical evaluation.",
      },
      labels: {
        duration: 'Duration',
        cta: 'Request a consultation',
        benefits: 'Benefits',
        keyActives: 'Key actives',
      },
      tiers: {
        essentiel: {
          badge: 'Essentiel',
          title: 'Essential care',
          description: 'Foundational protocols for immune support and cellular detoxification.',
        },
        advanced: {
          badge: 'Advanced',
          title: 'Advanced care',
          description: 'Advanced combinations for energy, recovery, nervous balance and inflammation.',
        },
        prestige: {
          badge: 'Prestige',
          title: 'Premium protocols',
          description: 'Premium NAD+ protocols, longevity, sports performance and high-dose anti-aging.',
        },
      },
      therapies: {
        defensaInmune: {
          name: 'Defensa Inmune',
          subtitle: 'Respuesta alérgica y soporte inmune',
          tags: ['Vitamina C 7.5g', 'Complejo Vitamina B'],
          benefits: [
            'Reduction of inflammatory and allergic response',
            'Immune support and Vit C recharge',
            'B cofactors for cellular energy',
          ],
          duration: '40–50 min',
        },
        detoxCelular: {
          name: 'Detox Celular Premium',
          subtitle: 'Antioxidante profundo y bienestar hepático',
          tags: ['Glutatión'],
          benefits: [
            'Deep hepatic detoxification',
            'Cellular oxidative stress reduction',
            'Lightness, skin radiance and recovery',
          ],
          duration: '45–55 min',
        },
        energiaTotal: {
          name: 'Terapia Energía Total IV',
          subtitle: 'Energía celular, vitalidad y antioxidante',
          tags: ['Vitamina C 7.5g', 'Complejo Vitamina B', 'Glutatión'],
          benefits: [
            'Triple synergy: energy + antioxidant + detox',
            'Rapidly restored vitality',
            'Ideal for intense fatigue or overwork periods',
          ],
          duration: '55–65 min',
        },
        neuroRecovery: {
          name: 'Terapia Neuro Recovery',
          subtitle: 'Alivio del dolor neuropático e inflamación articular',
          tags: ['MSM 15%', 'Metilcobalamina B12'],
          benefits: [
            'Neuropathic pain relief',
            'Nerve conduction and joint anti-inflammatory',
            'Arthritis, fibromyalgia, chronic pain',
          ],
          duration: '50–60 min',
        },
        equilibrioMental: {
          name: 'Terapia Equilibrio Mental',
          subtitle: 'Equilibrio emocional y sistema nervioso',
          tags: ['Psych Stabil Infusion', 'Glutatión'],
          benefits: [
            'Emotional balance and nervous comfort',
            'Neuronal oxidative stress reduction',
            'Support for burnout, anxiety or exhaustion',
          ],
          duration: '55–65 min',
        },
        vitalidadCelular: {
          name: 'Terapia Vitalidad Celular',
          subtitle: 'Energía mitocondrial y neuroprotección',
          tags: ['CoQ10 150mg', 'Metilcobalamina B12'],
          benefits: [
            'Mitochondrial tone and cellular recovery',
            'Neuroprotection and nervous support',
            'Ideal for active people, professionals and statin patients',
          ],
          duration: '55–65 min',
        },
        inmunidadPlus: {
          name: 'Terapia Inmunidad Plus',
          subtitle: 'Inmunidad y energía mitocondrial combinadas',
          tags: ['Vitamina C 7.5g', 'CoQ10 150mg'],
          benefits: [
            'Antioxidant + mitochondrial energy synergy',
            'Targeted cellular protection and immunity',
            'Active recovery and global recharge',
          ],
          duration: '55–65 min',
        },
        antiInflam: {
          name: 'Terapia Anti-Inflam IV',
          subtitle: 'Antiinflamatorio de precisión y antioxidante avanzado',
          tags: ['Curcumina IV 150mg', 'Vitamina C 7.5g'],
          benefits: [
            'Precision anti-inflammatory (100× superior to capsule)',
            'Enhanced antioxidant synergy',
            'Joint, metabolic and digestive comfort',
          ],
          duration: '60–75 min',
        },
        nadLongevity: {
          name: 'NAD+ Longevity',
          subtitle: 'Longevidad, claridad mental y cofactores B',
          tags: ['NAD+ 125mg', 'Complejo Vitamina B'],
          benefits: [
            'DNA repair and mental clarity',
            'B cofactors for optimal mitochondrial energy',
            'Anti-aging protocol and deep recovery',
          ],
          duration: '90–120 min',
        },
        nadVitalBoost: {
          name: 'NAD+ Vital Boost',
          subtitle: 'Longevidad y protección antioxidante activa',
          tags: ['NAD+ 125mg', 'Vitamina C 7.5g'],
          benefits: [
            'NAD+ energy + cellular antioxidant protection',
            'Vit C enhances NAD+ bioavailability',
            'Mental clarity, longevity and recovery',
          ],
          duration: '90–110 min',
        },
        performanceSport: {
          name: 'Performance Sport IV',
          subtitle: 'Rendimiento, recuperación y movilidad deportiva premium',
          tags: ['NAD+ 125mg', 'Glutatión', 'MSM 15%'],
          benefits: [
            'High-performance sports energy and recovery',
            'Joint protection and MSM anti-inflammatory',
            'Premium post-effort antioxidant + DNA repair',
          ],
          duration: '100–130 min',
        },
        longevityElite: {
          name: 'Longevity Elite',
          subtitle: 'Longevidad, glow y energía celular — el combo definitivo',
          tags: ['NAD+ 125mg', 'CoQ10 150mg', 'Glutatión'],
          benefits: [
            'Premium anti-aging triplet: energy + mitochondria + detox',
            'DNA repair, cellular tone and skin radiance',
            'Top-tier longevity offering',
          ],
          duration: '100–130 min',
        },
        polyphenolLongevity: {
          name: 'Polyphenol Longevity',
          subtitle: 'Poliphenol premium — longevidad, inmunidad y antioxidante celular',
          tags: ['EGCG', 'Vitamina C 7.5g'],
          benefits: [
            'Powerful anti-aging polyphenol and immunomodulator',
            'EGCG + Vitamina C antioxidant synergy with high bioavailability',
            'Cellular longevity, cardioprotection and metabolic support',
          ],
          duration: '90–120 min',
        },
      },
      personalized: {
        title: 'A protocol tailored to each patient',
        text: "We don't offer an infusion menu. The choice of an IV protocol is based on a clinical discussion, an evaluation of your needs and, if necessary, additional tests. This rigor ensures the relevance and safety of each session.",
      },
      indications: {
        title: 'Common indications',
        text: "IV therapy can be part of different care approaches, depending on the initial medical evaluation:",
        items: [
          'Persistent fatigue or recovery after a difficult period',
          'Immune system support',
          'Support within a comprehensive medical pathway',
          'Medicalized wellness and active prevention',
          'Supervised physical preparation or recovery',
        ],
      },
      process: {
        title: 'How a session works',
        text: "Each session takes place in a dedicated, calm and comfortable clinical space. The infusion is administered under medical supervision. Duration varies by protocol, generally between 30 minutes and one hour. Follow-up is provided after each session.",
      },
      editorialWhyUs: {
        title: 'What sets us apart',
        items: [
          'Systematic medical evaluation before any infusion',
          'Protocols defined by our medical team, never standardized',
          'Private and comfortable clinical environment',
          'Medical supervision during each session',
          'Protocol follow-up and adjustment over time',
        ],
      },
      ctaSection: {
        title: 'Start with a consultation',
        text: "The first consultation allows us to understand your goals, evaluate your health status and determine the most suitable protocol for your situation. No infusion is administered without this prior evaluation.",
      },
    },
    aPropos: {
      hero: {
        h1: 'About Clínica Les Lilas',
        subtitle: 'A clinic built around the patient',
        text: "Clínica Les Lilas was born from a conviction: integrative medicine deserves a serious, human and demanding clinical setting. We created a place where listening, medical rigor and attention to the patient journey are not promises, but daily practices.",
      },
      history: {
        title: 'Why Clínica Les Lilas exists',
        paragraphs: [
          "A personal experience gave birth to a conviction. While accompanying our mother in her fight against cancer, we understood the importance of medicine that heals both the disease and the person. This is how our hyperthermia and complementary therapies clinic was born, in collaboration with oncologists. A place where science and humanity unite to offer patients:",
          "Our mission is simple: strengthen treatments, improve quality of life, and make hope stronger than fear.",
        ],
        items: [
          'Complete assistance.',
          'Validated complementary therapies.',
          'Support at every step of the journey.',
        ],
      },
      philosophy: {
        title: 'Our philosophy',
        text: "We believe in medicine that takes its time. Time to understand, to explain, to build together. Our ambition is not to offer the greatest number of treatments, but to provide the most appropriate pathway for each patient.",
      },
      commitment: {
        title: 'Our commitments',
        items: [
          'Attentive listening to each patient',
          'Transparency about possibilities and limitations',
          'Rigor in every clinical decision',
          'Medical supervision of every treatment',
          "Respect for the patient's pace and choices",
          'Continuous follow-up and regular reassessment',
        ],
      },
      reassuring: {
        title: 'A place designed for care',
        text: "The environment at Clínica Les Lilas has been designed so that every patient feels welcomed, heard and confident. From the first phone call to the end of the journey, we ensure the quality of every interaction.",
      },
    },
    contactPage: {
      hero: {
        h1: 'A simple first step',
        subtitle: 'Contact us to organize your first consultation',
        text: "Call us, write to us or fill out the form. We will respond quickly.",
      },
      form: {
        title: 'Request a first consultation',
        name: 'Name',
        namePlaceholder: 'Your name',
        phone: 'Phone',
        phonePlaceholder: '+34 614 067 537',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        reason: 'Reason for request',
        reasonPlaceholder: 'Select a reason',
        language: 'Preferred language',
        languagePlaceholder: 'Select a language',
        message: 'Message',
        messagePlaceholder: 'Briefly describe your situation or ask your questions...',
        submit: 'Submit my request',
        submitLoading: 'Sending...',
        submitError: 'An error occurred. Please try again.',
        privacy: "Our team will respond promptly to organize your first contact.",
        rgpd: "By submitting this form, you agree to be contacted by the clinic in accordance with our privacy policy.",
      },
      reasons: [
        { value: 'consultation', label: 'First consultation request' },
        { value: 'information', label: 'Information request' },
        { value: 'hyperthermie', label: 'Oncological hyperthermia' },
        { value: 'sueroterapia', label: 'Sueroterapia / IV Therapy' },
        { value: 'medecine-regenerative', label: 'Regenerative medicine' },
        { value: 'soutien-immunitaire', label: 'Immune support' },
        { value: 'other', label: 'Other' },
      ],
      languages: [
        { value: 'fr', label: 'Français' },
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ],
      bottomSection: {
        title: 'A simple first step',
        text: "Call us, write to us or fill in the form. We will respond quickly to arrange your first consultation.",
      },
    },
    mentionsLegales: {
      h1: 'Legal notice',
      lastUpdate: 'Last updated: March 2026',
      content: {
        informationsGenerales: {
          title: '1. General Information',
          text: 'In compliance with Article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), the following identifying information about the owner of this website is provided:',
          items: [
            'Company name: Clínica Les Lilas [S.L.]',
            'Tax ID (CIF): [B-XXXXXXXX]',
            'Registered office: Avinguda de la Diagonal, 4, 03550 Sant Joan d\'Alacant, Alicante, Spain',
            'Phone: +34 614 067 537',
            'Email: info@clinicaleslilas.com',
            'Company register: [Registered at the Mercantile Registry of Alicante, Volume XX, Folio XX, Sheet A-XXXXX]',
            'Healthcare authorisation: [No. XXXXXXX] – Conselleria de Sanitat Valenciana',
            'Data Protection Officer (DPO): info@clinicaleslilas.com',
          ],
        },
        hebergeur: {
          title: '2. Web Hosting',
          text: 'This website is hosted by [Hosting Provider Name], located at [Hosting Provider Address]. For any hosting-related inquiries, please contact the provider directly at the address above.',
        },
        conditionsUtilisation: {
          title: '3. General Terms of Use',
          text: "Access to this website is free of charge, except for the cost of the user's internet connection. Use of the website implies full acceptance of these terms and conditions. Clínica Les Lilas reserves the right to modify the content, presentation and configuration of the website at any time and without prior notice. The user declares they are of legal age and have the legal capacity to be bound by these terms. The user agrees to use the website lawfully and not to carry out any actions that may damage computer systems or the rights of third parties. Accessing this website does not create any automatic commercial or medical relationship between the user and Clínica Les Lilas.",
        },
        propriete: {
          title: '4. Intellectual and Industrial Property',
          text: "All content on this website (texts, images, logos, videos, graphics, source code, structure, design, trademarks and trade names) is the exclusive property of Clínica Les Lilas or their respective authors, and is protected by Spanish and international intellectual and industrial property law. Any reproduction, distribution, public communication or transformation, in whole or in part, for commercial purposes, is strictly prohibited without prior written authorisation. Users may view, print and download content for strictly personal and non-commercial use only.",
        },
        politiqueLiens: {
          title: '5. Links Policy',
          text: 'This website may contain links to third-party websites. Clínica Les Lilas assumes no responsibility for the content, quality or availability of such sites. Any establishment of a hyperlink to this website is subject to prior written authorisation from Clínica Les Lilas. Links must not mislead users as to the identity or origin of the content, nor allow partial reproduction of pages through framing.',
        },
        responsabilite: {
          title: '6. Disclaimer and Limitation of Liability',
          text: 'Clínica Les Lilas does not guarantee the continuous availability, accuracy or completeness of the information published on this website. Medical information is provided for informational purposes only and does not constitute personalised medical advice. The clinic disclaims any liability for damages arising from the use or inability to use the website, the presence of computer viruses, or decisions made based on the information published.',
        },
        donnees: {
          title: '7. Personal Data Protection',
          text: 'In accordance with the GDPR (EU 2016/679) and Spanish Organic Law 3/2018 (LOPDGDD), Clínica Les Lilas, as data controller, collects and processes your personal data to respond to your requests and provide its services. Health data is subject to enhanced processing in accordance with Article 9 of the GDPR. You may exercise the following rights by contacting info@clinicaleslilas.com:',
          items: [
            'Right of access to your personal data',
            'Right to rectification of inaccurate data',
            'Right to erasure (right to be forgotten)',
            'Right to restriction of processing',
            'Right to data portability',
            'Right to object to processing',
            'Right to lodge a complaint with the AEPD (www.aepd.es)',
          ],
        },
        cookies: {
          title: '8. Cookies',
          text: 'This website uses technical cookies necessary for its operation, and may use analytical cookies to improve the user experience. On your first visit, your consent will be requested for non-essential cookies. You may change your preferences at any time through your browser settings. For more details, please consult our Cookie Policy.',
        },
        activitesIllicites: {
          title: '9. Reporting Unlawful Content',
          text: 'If you find that any content accessible through this website infringes the rights of third parties, is unlawful or contrary to public morals, please notify us at info@clinicaleslilas.com indicating the URL concerned, the nature of the infringement and your contact details. Receipt of such notification does not constitute effective knowledge under the LSSI-CE, nor does it automatically entail an obligation to remove the reported content.',
        },
        modifications: {
          title: '10. Amendments',
          text: 'Clínica Les Lilas reserves the right to amend this legal notice as well as the content and structure of the website at any time and without prior notice. Amendments take effect upon publication. Users are advised to check this page regularly.',
        },
        loi: {
          title: '11. Applicable Law and Jurisdiction',
          text: 'This website is governed by Spanish law, in particular Law 34/2002 (LSSI-CE), Organic Law 3/2018 (LOPDGDD) and the GDPR (EU 2016/679). Any dispute arising from the use of this website shall be subject to the jurisdiction of the courts of Alicante (Spain), unless otherwise required by law.',
        },
      },
    },
    politiqueConfidentialite: {
      h1: 'Privacy policy',
      content: {
        intro: { title: 'Data protection', text: "Clínica Les Lilas is committed to protecting the confidentiality of personal data collected through this site. The information you provide is used only to respond to your requests and organize your care." },
        usage: { title: 'Data usage', text: "The data collected (name, email, phone, message) is processed confidentially and is not transmitted to third parties. It allows our team to contact you and organize your first consultation." },
        rights: { title: 'Your rights', text: "In accordance with GDPR, you have the right to access, rectify and delete your personal data. To exercise these rights, contact us via the form or by email." },
      },
    },
    appointment: { fullName: 'Name', email: 'Email', phone: 'Phone', message: 'Message' },
    contactMerci: {
      meta: { title: 'Message sent | Clínica Les Lilas', description: 'Your message has been sent. We will respond as soon as possible.' },
      hero: { h1: 'Message sent', subtitle: 'Thank you for your request', text: '' },
      body: "Your message has been received. Our team will respond as soon as possible to arrange your first consultation.",
      cta: 'Back to home',
    },
    notFound: {
      title: 'Page not found',
      message: 'The page you are looking for does not exist or has been moved.',
      backHome: 'Back to home',
      contactUs: 'Contact us',
    },
  },

  es: {
    brand: { name: 'Clínica Les Lilas', subtitle: 'Otra forma de luchar' },
    navigation: {
      home: 'Inicio',
      notreApproche: 'Nuestro enfoque',
      traitements: 'Tratamientos',
      hyperthermie: 'Hipertermia oncológica',
      oncologia: 'Oncología integrativa',
      bienestar: 'Bienestar y prevención',
      aPropos: 'Sobre nosotros',
      contact: 'Contacto',
      blog: 'Blog',
      mentionsLegales: 'Aviso legal',
      politiqueConfidentialite: 'Política de privacidad',
    },
    common: {
      close: 'Cerrar',
    },
    cta: {
      requestConsultation: 'Solicitar primera consulta',
      bookAppointment: 'Pedir cita',
      bookAppointmentShort: 'Cita',
      bookConsultationInitial: 'Pedir consulta inicial',
      contactTeam: 'Hablar con nuestro equipo',
      contactClinic: 'Contactar la clínica',
      discoverApproach: 'Descubrir nuestro enfoque',
      learnMore: 'Saber más',
      seeTreatments: 'Ver tratamientos',
      seePage: 'Ver página',
      discover: 'Descubrir',
      submit: 'Enviar mi solicitud',
      call: 'Llamar',
    },
    whatsapp: {
      button: 'Escribir por WhatsApp',
      buttonShort: 'WhatsApp',
      defaultMessage: 'Hola, me gustaría solicitar una consulta.',
      ariaLabel: 'Contactar por WhatsApp',
    },
    footer: {
      tagline: 'Clínica privada de medicina integrativa',
      subtitle: 'Evaluación exhaustiva – Supervisión médica – Atención humana',
      navigation: 'Navegación',
      rights: 'Todos los derechos reservados.',
    },
    contact: {
      title: 'Contacto',
      address: { title: 'Dirección', full: "Avinguda de la Diagonal, 4\n03550 Sant Joan d'Alacant\nAlicante, España" },
      hours: { title: 'Horarios', text: 'Lunes – Viernes: 9:00 – 18:00' },
    },
    meta: {
      home: {
        title: 'Clínica Les Lilas | Medicina Integrativa y Hipertermia Oncológica en Alicante',
        description: 'Clínica privada de medicina integrativa en San Juan de Alicante. Especializados en hipertermia oncológica, sueroterapia intravenosa y protocolos personalizados. Evaluación médica exhaustiva antes de cualquier tratamiento.',
        keywords: 'medicina integrativa Alicante, clínica medicina integrativa San Juan de Alicante, hipertermia oncológica Alicante, sueroterapia intravenosa Alicante, tratamientos complementarios cáncer Alicante',
      },
      notreApproche: {
        title: 'Nuestro enfoque en medicina integrativa | Clínica Les Lilas',
        description: 'Un enfoque médico integrativo centrado en el paciente. Evaluación exhaustiva, plan de atención individualizado y seguimiento continuo en un marco clínico premium.',
      },
      traitements: {
        title: 'Nuestros tratamientos | Clínica Les Lilas',
        description: 'Hipertermia oncológica y sueroterapia. Tratamientos médicos integrativos en un marco clínico riguroso.',
      },
      hyperthermie: {
        title: 'Hipertermia oncológica en Alicante | Clínica Les Lilas',
        description: 'Hipertermia oncológica en Alicante: tratamiento complementario en medicina integrativa oncológica. Enfoque individualizado, supervisión médica, sin compromiso. Clínica Les Lilas, Costa Blanca.',
        keywords: 'hipertermia oncológica, hipertermia cáncer, medicina integrativa oncología, tratamiento hipertermia, hipertermia oncológica España, Alicante',
      },
      oncologia: {
        title: 'Acompañamiento oncológico integrativo | Clínica Les Lilas Alicante',
        description: 'Protocolos IV de soporte oncológico: inmunidad, neuroprotección, antioxidantes alta dosis. Acompañamiento integrativo personalizado complementario a los tratamientos convencionales.',
        keywords: 'oncología integrativa, sueroterapia oncológica, vitamina C alta dosis, acompañamiento cáncer, Alicante',
      },
      bienestar: {
        title: 'Bienestar, prevención y longevidad | Clínica Les Lilas Alicante',
        description: 'Sueroterapia IV para el bienestar, la prevención y la longevidad: inmunidad, detox, antiedad, rendimiento deportivo. Protocolos personalizados en Alicante.',
        keywords: 'bienestar, prevención, longevidad, NAD+, antiedad, detox, rendimiento deportivo, Alicante',
      },
      aPropos: {
        title: 'Sobre nosotros | Clínica Les Lilas',
        description: 'Clínica Les Lilas: clínica privada de medicina integrativa. Nuestra filosofía, compromisos y visión de la atención centrada en el paciente.',
      },
      contact: {
        title: 'Contacto y citas | Clínica Les Lilas Alicante',
        description: 'Contacte con Clínica Les Lilas en Alicante. Solicite una primera consulta por teléfono, WhatsApp o formulario. Respuesta rápida.',
      },
      politiqueConfidentialite: {
        title: 'Aviso legal y política de privacidad | Clínica Les Lilas',
        description: 'Aviso legal, política de privacidad y protección de datos personales. Clínica Les Lilas - Alicante.',
      },
      notFound: {
        title: 'Página no encontrada | Clínica Les Lilas',
        description: 'La página que buscas no existe. Vuelve al inicio o contáctanos.',
      },
      blog: {
        title: 'Blog | Clínica Les Lilas — Medicina integrativa',
        description: 'Artículos sobre medicina integrativa, hipertermia oncológica y sueroterapia. Información médica fiable por Clínica Les Lilas.',
        keywords: 'blog medicina integrativa, hipertermia oncológica, sueroterapia, clínica Alicante',
      },
    },
    blog: {
      heroTitle: 'Nuestro blog',
      heroSubtitle: 'Artículos y recursos sobre medicina integrativa',
      heroText: 'Descubra nuestros artículos sobre tratamientos, avances médicos y consejos en medicina integrativa. Contenidos redactados por nuestro equipo médico.',
      readArticle: 'Leer el artículo',
      backToBlog: 'Volver al blog',
      tableOfContents: 'Índice',
      faqTitle: 'Preguntas frecuentes',
      relatedArticles: 'Artículos similares',
      publishedOn: 'Publicado el',
      allCategories: 'Todos',
      categoryTraitements: 'Tratamientos',
      categoryMedecineIntegrative: 'Medicina integrativa',
      noArticles: 'No hay artículos en esta categoría.',
    },
    home: {
      hero: {
        h1: 'Medicina integrativa y tratamientos personalizados en Alicante',
        subtitle: 'Clínica privada dedicada a su salud global',
        text: "Clínica Les Lilas combina experiencia médica, tecnologías innovadoras y atención humana para acompañarle en un recorrido de cuidados adaptado a su situación. Cada plan de atención comienza con una evaluación exhaustiva. Nuestra clínica está ubicada en San Juan de Alicante y atiende pacientes de toda la provincia.",
        ctaNote: "La consulta inicial es el punto de partida de todo recorrido terapéutico en nuestra clínica.",
      },
      valueProposition: {
        title: 'Un marco médico exigente al servicio del paciente',
        text: "Nuestra clínica se basa en un principio claro: comprender antes de actuar. Cada paciente recibe una valoración individualizada, un plan de atención coherente y un seguimiento atento a lo largo de todo su recorrido.",
        blocks: [
          { title: 'Evaluación exhaustiva', description: 'Valoración médica completa antes de cualquier orientación terapéutica.' },
          { title: 'Visión integrativa', description: 'Una atención que considera al paciente en su globalidad.' },
          { title: 'Supervisión médica rigurosa', description: 'Cada protocolo es definido y supervisado por nuestro equipo médico.' },
          { title: 'Seguimiento continuo', description: 'Un acompañamiento que no termina con el tratamiento.' },
        ],
      },
      careAxes: {
        title: 'Nuestros ejes de atención',
        text: "Ofrecemos varios ejes terapéuticos, cada uno integrado en una lógica de atención global. La consulta inicial permite orientar hacia el recorrido más adecuado.",
        cards: [
          { title: 'Hipertermia oncológica', subtitle: 'Único centro especializado en hipertermia oncológica en la provincia de Alicante.', text: "La hipertermia oncológica se aplica en un marco clínico riguroso como complemento a los tratamientos convencionales, tras evaluación médica individual.", path: ROUTES.HIPERTERMIA, cta: 'Descubrir' },
          { title: 'Bienestar y prevención', text: "Sueroterapia IV para el bienestar, la prevención y la longevidad: inmunidad, detox, antiedad, rendimiento deportivo y recuperación.", path: ROUTES.BIENESTAR, cta: 'Descubrir' },
        ],
      },
      whyUs: {
        title: 'Por qué elegir Clínica Les Lilas',
        items: [
          ['Un enfoque de ', { text: 'medicina integrativa', href: ROUTES.NOTRE_APPROCHE }, ' con evaluación médica completa antes de cualquier tratamiento'],
          ['Protocolos individualizados en ', { text: 'hipertermia oncológica', href: ROUTES.HIPERTERMIA }, ', ', { text: 'sueroterapia intravenosa', href: ROUTES.BIENESTAR }, ' y otros tratamientos'],
          'Especialistas en medicina integrativa oncológica y acompañamiento del paciente con cáncer',
          'Equipo médico multilingüe (francés, español, inglés)',
          'Entorno clínico privado, tranquilo y acogedor',
          'La consulta como verdadero punto de partida del recorrido de cuidados',
        ],
      },
      ctaConsultation: {
        title: 'Todo comienza con una consulta',
        text: "La primera consulta es un paso esencial. Permite comprender su situación, realizar una primera valoración y definir juntos las orientaciones posibles. Ningún tratamiento se inicia sin esta evaluación previa. ¿Tiene preguntas? Nuestro equipo está disponible para atenderle.",
      },
    },
    notreApproche: {
      hero: {
        h1: 'Nuestro enfoque en medicina integrativa',
        subtitle: 'Comprender, evaluar, acompañar',
        text: "La medicina integrativa no se reduce a ofrecer tratamientos complementarios. En Clínica Les Lilas, se basa en un proceso clínico riguroso: escuchar al paciente, analizar su situación de forma global y construir un plan de atención coherente con sus necesidades y su contexto.",
      },
      patientCentered: {
        title: 'El paciente en el centro de cada decisión',
        text: "No ofrecemos protocolos estándar. Cada plan de atención es el resultado de un intercambio profundo, una evaluación médica y un razonamiento clínico adaptado a su historia, objetivos y expectativas.",
      },
      howWeAccompany: {
        title: 'Su recorrido en cuatro etapas',
        stepTitles: [
          'Primera consulta:',
          'Evaluación y balance:',
          'Plan de atención:',
          'Seguimiento y ajuste:',
        ],
        blocks: [
          'Intercambio profundo y revisión de su historia médica',
          'Exámenes complementarios si es necesario, análisis global',
          'Propuesta de un recorrido terapéutico adaptado',
          'Acompañamiento continuo, reevaluación regular',
        ],
      },
      personalization: {
        title: 'Cada situación merece una respuesta a medida',
        text: "Un mismo síntoma puede tener causas y contextos muy diferentes. Por eso nos tomamos el tiempo de escuchar, analizar y construir una respuesta que tenga sentido para usted, no una solución prefabricada.",
      },
      firstConsultation: {
        title: 'La consulta: punto de partida de todo recorrido',
        text: "Ninguna orientación terapéutica se propone sin evaluación previa. La primera consulta permite establecer las bases de una relación de confianza y de un acompañamiento adaptado. Es el primer paso hacia un recorrido claro y coherente.",
      },
    },
    traitements: {
      hero: {
        h1: 'Nuestros tratamientos',
        subtitle: 'Ejes terapéuticos integrados en un enfoque global',
        text: "Cada eje terapéutico propuesto por Clínica Les Lilas forma parte de un enfoque médico global. La elección de un tratamiento siempre parte de una evaluación previa y un diálogo con nuestro equipo.",
      },
      cards: [
        { title: 'Hipertermia oncológica', text: "Calor localizado como complemento a los tratamientos convencionales, integrado en un recorrido oncológico individualizado.", path: ROUTES.HIPERTERMIA },
        { title: 'Oncología integrativa', text: "Protocolos IV de soporte oncológico: inmunidad, neuroprotección, antioxidantes alta dosis. Acompañamiento personalizado complementario a los tratamientos convencionales.", path: ROUTES.ONCOLOGIA },
        { title: 'Bienestar y prevención', text: "Sueroterapia IV para el bienestar, la prevención y la longevidad: inmunidad, detox, antiedad, rendimiento deportivo y recuperación.", path: ROUTES.BIENESTAR },
      ],
    },
    hyperthermie: {
      hero: {
        h1: 'Hipertermia oncológica',
        subtitle: 'Tratamiento complementario en medicina integrativa oncológica',
        text: "La hipertermia oncológica es una técnica médica que eleva de forma controlada la temperatura en la zona tumoral. En Clínica Les Lilas, se utiliza como enfoque complementario dentro de un recorrido integrativo individualizado, siempre precedida de una valoración médica exhaustiva. Esta página está pensada para ayudarle a comprender de forma clara en qué consiste el tratamiento, en qué contextos puede valorarse y cómo se organiza la atención dentro de nuestra clínica.",
      },
      whatIs: {
        title: '¿Qué es la hipertermia oncológica?',
        text: "La hipertermia oncológica consiste en elevar de forma controlada la temperatura de la zona tumoral, habitualmente entre 39 y 43\u00A0°C. Este aumento térmico puede modificar el microentorno tumoral y aumentar la sensibilidad de las células tumorales a determinados tratamientos convencionales, como la radioterapia o la quimioterapia. Documentada en la literatura médica internacional, esta técnica no se plantea como un acto aislado, sino como una opción complementaria dentro de un recorrido asistencial integrativo. Su indicación depende siempre del contexto clínico, del historial del paciente y de los objetivos terapéuticos definidos junto al equipo médico.",
      },
      ourApproach: {
        title: 'Nuestro enfoque integrativo',
        text: "En Clínica Les Lilas, la hipertermia no se propone como un acto aislado. Se integra en un recorrido clínico más amplio, en coordinación con los tratamientos en curso del paciente y, cuando procede, en comunicación con el equipo oncológico. En nuestra clínica en San Juan de Alicante, único centro en la zona en ofrecer este tratamiento, nuestro papel consiste en valorar si este enfoque puede tener un lugar coherente dentro del plan terapéutico global, sin interferir con el tratamiento principal. Cada indicación se basa en un análisis médico riguroso, una información clara y una toma de decisiones prudente. Ninguna sesión se realiza sin una evaluación previa individualizada.",
      },
      forWho: {
        title: '¿En qué casos puede utilizarse?',
        text: "La hipertermia oncológica puede valorarse como enfoque complementario en determinados contextos oncológicos, siempre bajo evaluación médica individual.",
        items: [
          'Pacientes en tratamiento oncológico activo que buscan un soporte complementario',
          'Pacientes que desean explorar un enfoque de medicina integrativa coordinado',
          'Perfiles con historial médico evaluado individualmente en consulta previa',
          'Situaciones en las que es posible coordinar el enfoque con el recorrido terapéutico en curso',
          'Pacientes que necesitan información clara sobre beneficios potenciales y limitaciones',
          'Siempre en complemento a los tratamientos convencionales, nunca como sustituto',
        ],
      },
      consultationEssential: {
        title: 'Por qué la consulta previa es indispensable',
        text: "La hipertermia no es adecuada para todas las situaciones. La primera consulta permite analizar su historial médico, comprender su recorrido terapéutico y determinar si este enfoque puede integrarse de forma pertinente en su atención. Ninguna sesión se realiza sin esta evaluación previa.",
      },
      session: {
        title: '¿Cómo es una sesión de hipertermia?',
        text: "Cada sesión se desarrolla en un entorno clínico tranquilo y confortable, bajo supervisión médica. El proceso es no invasivo y está diseñado para garantizar la comodidad del paciente. Antes de comenzar, revisamos la información clínica útil del día, los síntomas recientes y el estado general del paciente. El objetivo es ofrecer una experiencia estructurada, comprensible y tranquilizadora, adaptada a cada situación clínica.",
        steps: [
          'Duración aproximada de 60 a 90 minutos por sesión',
          'El paciente permanece en posición cómoda durante todo el proceso',
          'Sensación de calor progresivo y controlado en la zona tratada',
          'Supervisión médica continua durante toda la sesión',
          'Entorno clínico privado, tranquilo y climatizado',
          'Seguimiento personalizado tras cada sesión',
          'Información clara antes, durante y después de la sesión para resolver dudas',
          'Ajuste del desarrollo según la tolerancia clínica y la comodidad del paciente',
        ],
      },
      benefits: {
        title: 'Beneficios potenciales en medicina integrativa',
        text: "Las siguientes observaciones se refieren a posibles beneficios observados en el marco de la medicina integrativa. No constituyen resultados garantizados y siempre deben interpretarse en función de la situación médica individual. El interés de la hipertermia se valora dentro de un razonamiento clínico global, y no a partir de promesas generales aplicables a todos los pacientes.",
        items: [
          'Puede contribuir al bienestar general del paciente durante el tratamiento',
          'Puede formar parte de un enfoque terapéutico integral personalizado',
          'Puede apoyar la calidad de vida durante el recorrido oncológico',
          'Puede mejorar la tolerancia a ciertos tratamientos, según valoración médica',
          'Puede participar en una estrategia de acompañamiento más global centrada en la persona',
          'Puede integrarse en un plan de atención que se reevalúa progresivamente con el tiempo',
        ],
      },
      evidence: {
        title: 'Evidencia científica',
        text: "La hipertermia oncológica ha sido objeto de estudios clínicos publicados en revistas científicas internacionales. Las investigaciones han explorado su uso como tratamiento complementario en diferentes tipos de tumores, en combinación con radioterapia y quimioterapia. Los resultados disponibles no permiten extraer la misma conclusión para todos los pacientes ni para todas las situaciones, pero sí ayudan a definir mejor los contextos en los que este enfoque puede ser valorado. En nuestra práctica, la literatura científica sirve como base de orientación y siempre se complementa con el análisis médico individual y con la prudencia clínica necesaria.",
        seorText: "La Sociedad Española de Oncología Radioterápica (SEOR) dispone de un grupo de trabajo específico sobre hipertermia oncológica y ha publicado guías de consenso que orientan su uso clínico en combinación con radioterapia y quimioterapia.",
        eortcText: "Entre los estudios más relevantes, el ensayo clínico EORTC 62961 demostró que la combinación de hipertermia y quimioterapia mejoró la supervivencia a 5 años en sarcomas de tejido blando (62,7% frente al 51,3% del grupo control).",
        disclaimer: "La información contenida en esta página tiene carácter informativo. No constituye asesoramiento médico personalizado. Toda decisión terapéutica requiere una valoración médica individual.",
      },
      beforeTreatment: {
        title: 'Qué tener en cuenta antes de iniciar el tratamiento',
        text: "Antes de valorar la hipertermia oncológica, es fundamental revisar el diagnóstico, el estadio de la enfermedad, los tratamientos ya realizados, los tratamientos en curso, el estado general del paciente y sus expectativas. Esta fase permite determinar si el enfoque puede contemplarse en condiciones clínicas adecuadas.",
        items: [
          'Revisión del historial médico y de los informes disponibles',
          'Análisis de los tratamientos ya realizados o actualmente en curso',
          'Valoración del estado general, la fatiga y la tolerancia global',
          'Clarificación de los objetivos del paciente y de las expectativas realistas',
          'Comprobación de que no existan contraindicaciones o situaciones que requieran especial prudencia',
        ],
      },
      followUp: {
        title: 'Acompañamiento y seguimiento durante el proceso',
        text: "El seguimiento no se limita a la sesión en sí. Damos mucha importancia a la escucha del paciente, a la recogida de sensaciones y a la adaptación del recorrido cuando es necesario. Dentro de una lógica de medicina integrativa, el tratamiento complementario debe mantenerse coherente con la evolución clínica, el confort del paciente y el resto de decisiones terapéuticas ya establecidas.",
        items: [
          'Reevaluación periódica de la tolerancia y de la experiencia del paciente',
          'Diálogo clínico continuado sobre síntomas, fatiga y calidad de vida',
          'Coordinación del recorrido cuando existen otros tratamientos en marcha',
          'Ajuste de la frecuencia o de la indicación según la evolución clínica',
          'Información clara para ayudar al paciente a tomar decisiones informadas',
        ],
      },
      seriousFramework: {
        title: 'Solicitar una valoración médica personalizada',
        text: "Si desea saber si la hipertermia oncológica puede ser adecuada para su situación, el primer paso es una consulta médica individualizada. Nuestro equipo analizará su historial, sus tratamientos actuales, su estado general y sus objetivos para orientarle de la forma más adecuada. Esta consulta también permite resolver dudas, comprender los límites del enfoque y definir, si procede, un recorrido complementario coherente y médicamente prudente.",
      },
      faq: {
        title: 'Preguntas frecuentes sobre la hipertermia oncológica',
        items: [
          {
            q: '¿La hipertermia sustituye a la quimioterapia o la radioterapia?',
            a: 'No. La hipertermia oncológica es un tratamiento complementario, no un sustituto de los tratamientos convencionales. Se contempla siempre en coordinación con el equipo oncológico y dentro de un enfoque de medicina integrativa.',
          },
          {
            q: '¿La hipertermia duele?',
            a: 'Las sesiones están diseñadas para ser cómodas. El paciente siente un calor progresivo y controlado en la zona tratada, bajo supervisión médica continua. No se trata de un procedimiento doloroso.',
          },
          {
            q: '¿Cuántas sesiones suelen recomendarse?',
            a: 'No existe un protocolo único. El número de sesiones se determina en la consulta médica previa, en función del perfil del paciente, su situación clínica y sus objetivos terapéuticos.',
          },
          {
            q: '¿Cómo saber si este tratamiento es adecuado para mi caso?',
            a: 'La única forma de determinarlo es mediante una consulta médica individualizada. Nuestro equipo evaluará su historial, sus tratamientos actuales y sus objetivos para orientarle de la forma más adecuada.',
          },
          {
            q: '¿Puede combinarse con otros tratamientos?',
            a: 'Sí, en algunos contextos la hipertermia puede valorarse junto a tratamientos convencionales. Esta posibilidad depende siempre de una revisión médica individualizada y de que el recorrido terapéutico mantenga una coherencia clínica.',
          },
          {
            q: '¿Debo preparar algo antes de la sesión?',
            a: 'Las indicaciones pueden variar según la situación clínica. Durante la consulta o al organizar la cita, nuestro equipo le explicará las recomendaciones prácticas y la documentación que puede ser útil aportar.',
          },
          {
            q: '¿Cuándo suele valorarse este tratamiento?',
            a: 'Puede estudiarse en algunos contextos oncológicos como enfoque complementario cuando una valoración médica concluye que puede integrarse de forma coherente en el recorrido asistencial en curso. No existe una indicación automática.',
          },
        ],
      },
    },
    oncologia: {
      hero: {
        h1: 'Acompañamiento oncológico integrativo',
        subtitle: 'Protocolos IV personalizados complementarios a los tratamientos convencionales',
        text: "Nuestros protocolos de sueroterapia oncológica están diseñados para acompañar a los pacientes en tratamiento oncológico activo. Cada perfusión se define tras evaluación médica, en coordinación con el equipo oncológico cuando proceda.",
      },
      labels: {
        duration: 'Duración',
        cta: 'Solicitar consulta',
        benefits: 'Beneficios',
        keyActives: 'Activos clave',
        medicalNote: 'Nota médica',
      },
      tiers: {
        support: {
          badge: 'Support',
          title: 'Soporte básico',
          description: 'Primer nivel del recorrido integrativo oncológico. Soporte inmune, antioxidante y acompañamiento de fondo.',
        },
        protocolo: {
          badge: 'Protocolo',
          title: 'Acompañamiento integrativo',
          description: 'Protocolos combinados para un acompañamiento más dirigido durante el tratamiento oncológico activo.',
        },
        avanzado: {
          badge: 'Avanzado',
          title: 'Protocolos avanzados',
          description: 'Protocolos de alta dosis y combinaciones avanzadas para recorridos largos e intensivos.',
        },
      },
      therapies: {
        soporteInmune: {
          name: 'Terapia Soporte Inmune',
          subtitle: 'Inmunidad y antioxidante de primer nivel',
          tags: ['Vitamina C 7.5g', 'Selenio 900mcg'],
          benefits: [
            'Soporte inmunitario de base y antioxidante',
            'Sinergia Vit C + Selenio tiroides / inmunidad',
            'Primer nivel del recorrido integrativo oncológico',
          ],
          duration: '45–55 min',
        },
        soporteNeurologico: {
          name: 'Terapia Soporte Neurológico',
          subtitle: 'Equilibrio neurológico y soporte hematológico',
          tags: ['Metilcobalamina B12', 'Complejo Vitamina B'],
          benefits: [
            'Soporte neurológico y hematológico de fondo',
            'Reducción de fatiga y soporte del metabolismo nervioso',
            'Confort general durante el recorrido oncológico',
          ],
          duration: '40–50 min',
        },
        vitaminaCOnco: {
          name: 'Vitamina C Alta Dosis Onco',
          subtitle: 'Inmunomodulación y soporte oncológico intensivo',
          tags: ['Vitamina C 50g IV'],
          benefits: [
            'Acción pro-oxidante selectiva sobre células tumorales',
            'Refuerzo inmunitario intensivo alta dosis',
            'Soporte durante y entre los ciclos de quimioterapia',
          ],
          duration: '90–120 min',
          note: 'Biodisponibilidad IV del 100% vs <20% oral. A integrar en un protocolo médico validado.',
        },
        neuroSupportOnco: {
          name: 'Terapia Neuro Support Onco',
          subtitle: 'Neuropatía periférica inducida por quimioterapia',
          tags: ['MSM 15%', 'Metilcobalamina B12'],
          benefits: [
            'Neuropatías periféricas inducidas por quimioterapia: hormigueos, pérdida de sensibilidad',
            'Conducción nerviosa y regeneración axonal',
            'Antiinflamatorio articular complementario',
          ],
          duration: '50–60 min',
          note: 'Indicado en neuropatía inducida por oxaliplatino, paclitaxel o vincristina.',
        },
        antioxidanteOnco: {
          name: 'Terapia Antioxidante Onco',
          subtitle: 'Antioxidante combinado potente durante tratamiento',
          tags: ['Vitamina C 7.5g', 'Glutatión'],
          benefits: [
            'Soporte antioxidante combinado potente',
            'Detox hepática + protección celular',
            'Complementario a quimioterapia e inmunoterapia',
          ],
          duration: '55–65 min',
        },
        inmunidadIntensivaOnco: {
          name: 'Terapia Inmunidad Intensiva Onco',
          subtitle: 'Inmunidad alta dosis y modulación del selenio',
          tags: ['Vitamina C 50g', 'Selenio 900mcg'],
          benefits: [
            'Inmunidad alta dosis + modulación Selenio',
            'Acción pro-oxidante selectiva a alta dosis',
            'Soporte en fase activa de tratamiento oncológico',
          ],
          duration: '90–120 min',
          note: 'Protocolo adaptado a la fase del tratamiento oncológico.',
        },
        curcuminaOnco: {
          name: 'Terapia Curcumina Onco',
          subtitle: 'Antiinflamatorio oncológico de precisión',
          tags: ['Curcumina IV 150mg', 'Vitamina C 7.5g'],
          benefits: [
            'Antiinflamatorio oncológico de precisión — biodisponibilidad total',
            'Sinergia antioxidante Curcumina + Vit C',
            'Soporte de recorridos largos — confort y resiliencia',
          ],
          duration: '60–75 min',
        },
        equilibrioEmocionalOnco: {
          name: 'Terapia Equilibrio Emocional Onco',
          subtitle: 'Equilibrio emocional y soporte nervioso en oncología',
          tags: ['Psych Stabil Infusion', 'Glutatión'],
          benefits: [
            'Equilibrio emocional en el recorrido oncológico',
            'Estrés oxidativo neuronal reducido — confort mental',
            'Soporte burnout, ansiedad y agotamiento onco',
          ],
          duration: '55–65 min',
          note: 'A integrar en un seguimiento psicooncológico global.',
        },
        antioxidanteOncoPremium: {
          name: 'Terapia Antioxidante Onco Premium',
          subtitle: 'Antioxidante premium de doble acción alta dosis',
          tags: ['Vitamina C 50g', 'Glutatión'],
          benefits: [
            'Doble antioxidante alta dosis + detox hepática profunda',
            'Soporte inmunitario intensivo y protección celular',
            'Protocolo premium para recorridos largos',
          ],
          duration: '90–120 min',
        },
        cardioProtectOnco: {
          name: 'Terapia Cardio Protect Onco',
          subtitle: 'Cardioprotección y antiinflamatorio oncológico',
          tags: ['CoQ10 150mg', 'Curcumina IV 150mg'],
          benefits: [
            'Cardioprotección miocárdica (protocolos antraciclinas)',
            'Antiinflamatorio oncológico preciso — sinergia demostrada',
            'Soporte mitocondrial durante el tratamiento',
          ],
          duration: '70–80 min',
          note: 'Recomendado para pacientes bajo antraciclinas o trastuzumab.',
        },
        mitoSupportOnco: {
          name: 'Terapia Mito Support Onco',
          subtitle: 'Soporte mitocondrial avanzado y recuperación profunda',
          tags: ['CoQ10 150mg', 'Vitamina C 7.5g', 'Complejo Vitamina B'],
          benefits: [
            'Soporte mitocondrial avanzado + energía celular',
            'Protección antioxidante completa Vit C + CoQ10',
            'Recuperación profunda en recorridos intensivos',
          ],
          duration: '70–85 min',
        },
        inmunomodulacionOnco: {
          name: 'Terapia Inmunomodulación Onco',
          subtitle: 'Soporte inmuno-oncológico — EGCepigalocatequina + Curcumina',
          tags: ['EGCG', 'Curcumina IV 150mg'],
          benefits: [
            'Sinergia pro-apoptótica e inmunomoduladora documentada',
            'Acción antitumoral complementaria — polifenol + curcuminoide',
            'Soporte durante quimioterapia e inmunoterapia',
          ],
          duration: '90–110 min',
        },
        cardioDefenseOnco: {
          name: 'Terapia Cardio Defense Onco',
          subtitle: 'Cardioprotección oncológica — EGCepigalocatequina + CoQ10',
          tags: ['EGCG', 'CoQ10 150mg'],
          benefits: [
            'Cardioprotección miocárdica — antraciclinas / trastuzumab',
            'Soporte mitocondrial + actividad antitumoral EGCG',
            'Protección cardiovascular y rendimiento celular combinados',
          ],
          duration: '90–110 min',
        },
      },
      ctaSection: {
        title: 'Comenzar con una consulta oncológica',
        text: "La primera consulta permite evaluar tu situación, comprender tu recorrido oncológico y definir el protocolo IV más adecuado. Ninguna perfusión se realiza sin evaluación médica previa.",
      },
    },
    bienestar: {
      hero: {
        h1: 'Bienestar, prevención y longevidad',
        subtitle: 'Sueroterapia IV para tu vitalidad y salud global',
        text: "Nuestros protocolos de bienestar están diseñados para acompañar tu salud en el día a día: inmunidad, energía, detox, antiedad y rendimiento deportivo. Cada perfusión se define tras evaluación médica personalizada.",
      },
      labels: {
        duration: 'Duración',
        cta: 'Solicitar consulta',
        benefits: 'Beneficios',
        keyActives: 'Activos clave',
      },
      tiers: {
        essentiel: {
          badge: 'Essentiel',
          title: 'Cuidados esenciales',
          description: 'Protocolos de base para el soporte inmunitario y la detoxificación celular.',
        },
        advanced: {
          badge: 'Advanced',
          title: 'Cuidados avanzados',
          description: 'Combinaciones avanzadas para energía, recuperación, equilibrio nervioso e inflamación.',
        },
        prestige: {
          badge: 'Prestige',
          title: 'Protocolos premium',
          description: 'Protocolos premium NAD+, longevidad, rendimiento deportivo y antiedad alta dosis.',
        },
      },
      therapies: {
        defensaInmune: {
          name: 'Defensa Inmune',
          subtitle: 'Respuesta alérgica y soporte inmune',
          tags: ['Vitamina C 7.5g', 'Complejo Vitamina B'],
          benefits: [
            'Reducción de la respuesta inflamatoria y alérgica',
            'Soporte inmunitario y recarga en Vit C',
            'Cofactores B para la energía celular',
          ],
          duration: '40–50 min',
        },
        detoxCelular: {
          name: 'Detox Celular Premium',
          subtitle: 'Antioxidante profundo y bienestar hepático',
          tags: ['Glutatión'],
          benefits: [
            'Detoxificación hepática en profundidad',
            'Reducción del estrés oxidativo celular',
            'Ligereza, luminosidad cutánea y recuperación',
          ],
          duration: '45–55 min',
        },
        energiaTotal: {
          name: 'Terapia Energía Total IV',
          subtitle: 'Energía celular, vitalidad y antioxidante',
          tags: ['Vitamina C 7.5g', 'Complejo Vitamina B', 'Glutatión'],
          benefits: [
            'Triple sinergia energía + antioxidante + detox',
            'Vitalidad rápidamente restaurada',
            'Ideal periodos de fatiga intensa o sobrecarga',
          ],
          duration: '55–65 min',
        },
        neuroRecovery: {
          name: 'Terapia Neuro Recovery',
          subtitle: 'Alivio del dolor neuropático e inflamación articular',
          tags: ['MSM 15%', 'Metilcobalamina B12'],
          benefits: [
            'Alivio de dolores neuropáticos',
            'Conducción nerviosa y antiinflamatorio articular',
            'Artrosis, fibromialgia, dolores crónicos',
          ],
          duration: '50–60 min',
        },
        equilibrioMental: {
          name: 'Terapia Equilibrio Mental',
          subtitle: 'Equilibrio emocional y sistema nervioso',
          tags: ['Psych Stabil Infusion', 'Glutatión'],
          benefits: [
            'Equilibrio emocional y confort nervioso',
            'Reducción del estrés oxidativo neuronal',
            'Soporte en caso de burnout, ansiedad o agotamiento',
          ],
          duration: '55–65 min',
        },
        vitalidadCelular: {
          name: 'Terapia Vitalidad Celular',
          subtitle: 'Energía mitocondrial y neuroprotección',
          tags: ['CoQ10 150mg', 'Metilcobalamina B12'],
          benefits: [
            'Tono mitocondrial y recuperación celular',
            'Neuroprotección y soporte nervioso',
            'Ideal activos, profesionales y pacientes bajo estatinas',
          ],
          duration: '55–65 min',
        },
        inmunidadPlus: {
          name: 'Terapia Inmunidad Plus',
          subtitle: 'Inmunidad y energía mitocondrial combinadas',
          tags: ['Vitamina C 7.5g', 'CoQ10 150mg'],
          benefits: [
            'Sinergia antioxidante + energía mitocondrial',
            'Protección celular e inmunidad dirigida',
            'Recuperación activa y recarga global',
          ],
          duration: '55–65 min',
        },
        antiInflam: {
          name: 'Terapia Anti-Inflam IV',
          subtitle: 'Antiinflamatorio de precisión y antioxidante avanzado',
          tags: ['Curcumina IV 150mg', 'Vitamina C 7.5g'],
          benefits: [
            'Antiinflamatorio de precisión (100× superior a la cápsula)',
            'Sinergia antioxidante reforzada',
            'Confort articular, metabólico y digestivo',
          ],
          duration: '60–75 min',
        },
        nadLongevity: {
          name: 'NAD+ Longevity',
          subtitle: 'Longevidad, claridad mental y cofactores B',
          tags: ['NAD+ 125mg', 'Complejo Vitamina B'],
          benefits: [
            'Reparación del ADN y claridad mental',
            'Cofactores B para energía mitocondrial óptima',
            'Protocolo antiedad y recuperación profunda',
          ],
          duration: '90–120 min',
        },
        nadVitalBoost: {
          name: 'NAD+ Vital Boost',
          subtitle: 'Longevidad y protección antioxidante activa',
          tags: ['NAD+ 125mg', 'Vitamina C 7.5g'],
          benefits: [
            'Energía NAD+ + protección antioxidante celular',
            'Vit C potencia la biodisponibilidad del NAD+',
            'Claridad mental, longevidad y recuperación',
          ],
          duration: '90–110 min',
        },
        performanceSport: {
          name: 'Performance Sport IV',
          subtitle: 'Rendimiento, recuperación y movilidad deportiva premium',
          tags: ['NAD+ 125mg', 'Glutatión', 'MSM 15%'],
          benefits: [
            'Energía y recuperación deportiva de alto rendimiento',
            'Protección articular y antiinflamatorio MSM',
            'Antioxidante premium post-esfuerzo + reparación ADN',
          ],
          duration: '100–130 min',
        },
        longevityElite: {
          name: 'Longevity Elite',
          subtitle: 'Longevidad, glow y energía celular — el combo definitivo',
          tags: ['NAD+ 125mg', 'CoQ10 150mg', 'Glutatión'],
          benefits: [
            'Triplete premium antiedad: energía + mitocondria + detox',
            'Reparación ADN, tono celular y luminosidad cutánea',
            'Oferta de alta gama para la longevidad',
          ],
          duration: '100–130 min',
        },
        polyphenolLongevity: {
          name: 'Polyphenol Longevity',
          subtitle: 'Poliphenol premium — longevidad, inmunidad y antioxidante celular',
          tags: ['EGCG', 'Vitamina C 7.5g'],
          benefits: [
            'Potente polifenol antiedad e inmunomodulador',
            'Sinergia antioxidante EGCG + Vitamina C alta biodisponibilidad',
            'Longevidad celular, cardioprotección y soporte metabólico',
          ],
          duration: '90–120 min',
        },
      },
      personalized: {
        title: 'Un protocolo adaptado a cada paciente',
        text: "No ofrecemos un menú de perfusiones. La elección de un protocolo IV se basa en un diálogo clínico, una evaluación de sus necesidades y, si es necesario, exámenes complementarios. Este rigor garantiza la pertinencia y seguridad de cada sesión.",
      },
      indications: {
        title: 'Indicaciones frecuentes',
        text: "La terapia IV puede inscribirse en diferentes enfoques de cuidado, según la evaluación médica inicial:",
        items: [
          'Fatiga persistente o recuperación tras un periodo difícil',
          'Soporte del sistema inmunológico',
          'Acompañamiento en el marco de un recorrido médico global',
          'Bienestar medicalizado y prevención activa',
          'Preparación o recuperación física supervisada',
        ],
      },
      process: {
        title: 'Cómo se desarrolla una sesión',
        text: "Cada sesión se realiza en un espacio clínico dedicado, tranquilo y confortable. La perfusión se administra bajo supervisión médica. La duración varía según el protocolo, generalmente entre 30 minutos y una hora. Se asegura un seguimiento tras cada sesión.",
      },
      editorialWhyUs: {
        title: 'Lo que nos diferencia',
        items: [
          'Evaluación médica sistemática antes de cualquier perfusión',
          'Protocolos definidos por nuestro equipo médico, nunca estandarizados',
          'Entorno clínico privado y confortable',
          'Supervisión médica durante cada sesión',
          'Seguimiento y ajuste del protocolo en el tiempo',
        ],
      },
      ctaSection: {
        title: 'Comenzar con una consulta',
        text: "La primera consulta permite comprender tus objetivos, evaluar tu estado de salud y determinar el protocolo más adecuado a tu situación. Ninguna perfusión se realiza sin esta evaluación previa.",
      },
    },
    aPropos: {
      hero: {
        h1: 'Sobre Clínica Les Lilas',
        subtitle: 'Una clínica construida en torno al paciente',
        text: "Clínica Les Lilas nació de una convicción: la medicina integrativa merece un marco clínico serio, humano y exigente. Creamos un lugar donde la escucha, el rigor médico y la atención al recorrido del paciente no son promesas, sino prácticas diarias.",
      },
      history: {
        title: 'Por qué existe Clínica Les Lilas',
        paragraphs: [
          "Una experiencia personal dio origen a una convicción. Acompañando a nuestra madre en su lucha contra el cáncer, comprendimos la importancia de una medicina que cura tanto la enfermedad como a la persona. Así nació nuestra clínica de hipertermia y terapias complementarias, en colaboración con oncólogos. Un lugar donde ciencia y humanidad se unen para ofrecer a los pacientes:",
          "Nuestra misión es sencilla: reforzar los tratamientos, mejorar la calidad de vida y hacer que la esperanza sea más fuerte que el miedo.",
        ],
        items: [
          'Asistencia completa.',
          'Terapias complementarias validadas.',
          'Un apoyo en cada etapa del recorrido.',
        ],
      },
      philosophy: {
        title: 'Nuestra filosofía',
        text: "Creemos en una medicina que se toma su tiempo. Tiempo para comprender, para explicar, para construir juntos. Nuestra ambición no es ofrecer el mayor número de tratamientos, sino proporcionar el recorrido más adecuado para cada paciente.",
      },
      commitment: {
        title: 'Nuestros compromisos',
        items: [
          'Escucha atenta a cada paciente',
          'Transparencia sobre posibilidades y limitaciones',
          'Rigor en cada decisión clínica',
          'Supervisión médica de cada atención',
          'Respeto del ritmo y las decisiones del paciente',
          'Seguimiento continuo y reevaluación regular',
        ],
      },
      reassuring: {
        title: 'Un lugar pensado para el cuidado',
        text: "El entorno de Clínica Les Lilas ha sido diseñado para que cada paciente se sienta acogido, escuchado y en confianza. Desde la primera llamada telefónica hasta el final del recorrido, velamos por la calidad de cada interacción.",
      },
    },
    contactPage: {
      hero: {
        h1: 'Un primer paso sencillo',
        subtitle: 'Contáctenos para organizar su primera consulta',
        text: "Llámennos, escríbannos o rellenen el formulario. Le responderemos rápidamente.",
      },
      form: {
        title: 'Solicitar primera consulta',
        name: 'Nombre',
        namePlaceholder: 'Su nombre',
        phone: 'Teléfono',
        phonePlaceholder: '+34 614 067 537',
        email: 'Email',
        emailPlaceholder: 'su@email.com',
        reason: 'Motivo de la solicitud',
        reasonPlaceholder: 'Seleccione un motivo',
        language: 'Idioma preferido',
        languagePlaceholder: 'Seleccione un idioma',
        message: 'Mensaje',
        messagePlaceholder: 'Describa brevemente su situación o plantee sus preguntas...',
        submit: 'Enviar mi solicitud',
        submitLoading: 'Enviando...',
        submitError: 'Se ha producido un error. Por favor, inténtelo de nuevo.',
        privacy: "Nuestro equipo le responde con la mayor brevedad para organizar su primera toma de contacto.",
        rgpd: "Al enviar este formulario, acepta ser contactado por la clínica conforme a nuestra política de privacidad.",
      },
      reasons: [
        { value: 'consultation', label: 'Solicitud de primera consulta' },
        { value: 'information', label: 'Solicitud de información' },
        { value: 'hyperthermie', label: 'Hipertermia oncológica' },
        { value: 'sueroterapia', label: 'Sueroterapia / IV Therapy' },
        { value: 'medecine-regenerative', label: 'Medicina regenerativa' },
        { value: 'soutien-immunitaire', label: 'Soporte inmunológico' },
        { value: 'other', label: 'Otro' },
      ],
      languages: [
        { value: 'fr', label: 'Français' },
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ],
      bottomSection: {
        title: 'Un primer paso sencillo',
        text: "Llámenos, escríbanos o rellene el formulario. Le respondemos rápidamente para organizar su primera consulta.",
      },
    },
    mentionsLegales: {
      h1: 'Aviso Legal',
      lastUpdate: 'Última actualización: marzo 2026',
      content: {
        informationsGenerales: {
          title: '1. Información general',
          text: 'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular de este sitio web:',
          items: [
            'Denominación social: Clínica Les Lilas [S.L.]',
            'CIF: [B-XXXXXXXX]',
            'Domicilio social: Avinguda de la Diagonal, 4, 03550 Sant Joan d\'Alacant, Alicante, España',
            'Teléfono: +34 614 067 537',
            'Correo electrónico: info@clinicaleslilas.com',
            'Datos registrales: [Inscrita en el Registro Mercantil de Alicante, Tomo XX, Folio XX, Hoja A-XXXXX]',
            'Autorización sanitaria: [N.º XXXXXXX] – Conselleria de Sanitat Valenciana',
            'Delegado de Protección de Datos (DPD): info@clinicaleslilas.com',
          ],
        },
        hebergeur: {
          title: '2. Proveedor de alojamiento',
          text: 'El sitio web está alojado por [Nombre del proveedor], con domicilio en [Dirección del proveedor]. Para cualquier consulta relativa al alojamiento, puede contactar directamente con el proveedor en la dirección indicada.',
        },
        conditionsUtilisation: {
          title: '3. Condiciones generales de uso',
          text: 'El acceso al sitio web es libre y gratuito, salvo el coste de conexión a Internet a cargo del usuario. La utilización del sitio implica la aceptación plena de las presentes condiciones. Clínica Les Lilas se reserva el derecho de modificar en cualquier momento y sin previo aviso el contenido, la presentación y la configuración del sitio. El usuario declara ser mayor de edad y disponer de capacidad jurídica suficiente para quedar vinculado por estas condiciones. El usuario se compromete a hacer un uso lícito del sitio y a no llevar a cabo acciones que puedan dañar los sistemas informáticos o los derechos de terceros. El acceso al sitio no supone el establecimiento de ninguna relación comercial ni médica automática entre el usuario y Clínica Les Lilas.',
        },
        propriete: {
          title: '4. Propiedad intelectual e industrial',
          text: 'Todos los contenidos del sitio web (textos, imágenes, logotipos, vídeos, gráficos, código fuente, estructura, diseño, marcas y nombres comerciales) son propiedad exclusiva de Clínica Les Lilas o de sus respectivos autores, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial. Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, con fines comerciales, sin autorización escrita previa. El usuario podrá consultar, imprimir y descargar los contenidos para uso estrictamente personal y no comercial.',
        },
        politiqueLiens: {
          title: '5. Política de enlaces',
          text: 'El sitio puede contener enlaces a sitios web de terceros. Clínica Les Lilas no asume responsabilidad alguna sobre el contenido, la calidad o la disponibilidad de dichos sitios. El establecimiento de un hipervínculo hacia este sitio web está sujeto a autorización previa y escrita de Clínica Les Lilas. Todo enlace no debe inducir a error sobre la identidad o el origen de los contenidos, ni permitir la reproducción parcial de páginas mediante marcos (framing).',
        },
        responsabilite: {
          title: '6. Exclusión de garantías y responsabilidad',
          text: 'Clínica Les Lilas no garantiza la disponibilidad continua, la exactitud ni la exhaustividad de la información publicada en este sitio. La información médica se facilita únicamente con carácter informativo y no constituye asesoramiento médico personalizado. La clínica declina toda responsabilidad por los daños derivados del uso o de la imposibilidad de uso del sitio, de la presencia de virus informáticos, o de decisiones tomadas sobre la base de la información publicada.',
        },
        donnees: {
          title: '7. Protección de datos personales',
          text: 'De conformidad con el RGPD (UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), Clínica Les Lilas, como responsable del tratamiento, recoge y trata sus datos personales con el fin de responder a sus solicitudes y prestarle sus servicios. Los datos de salud son objeto de un tratamiento reforzado conforme al artículo 9 del RGPD. Puede ejercer los siguientes derechos contactando en info@clinicaleslilas.com:',
          items: [
            'Derecho de acceso a sus datos personales',
            'Derecho de rectificación de datos inexactos',
            'Derecho de supresión (derecho al olvido)',
            'Derecho a la limitación del tratamiento',
            'Derecho a la portabilidad de los datos',
            'Derecho de oposición al tratamiento',
            'Derecho a presentar una reclamación ante la AEPD (www.aepd.es)',
          ],
        },
        cookies: {
          title: '8. Cookies',
          text: 'Este sitio utiliza cookies técnicas necesarias para su funcionamiento, y puede utilizar cookies analíticas para mejorar la experiencia del usuario. En su primera visita, se le solicitará su consentimiento para las cookies no esenciales. Puede modificar sus preferencias en cualquier momento a través de la configuración de su navegador. Para más información, consulte nuestra Política de cookies.',
        },
        activitesIllicites: {
          title: '9. Notificación de contenidos ilícitos',
          text: 'Si detecta que algún contenido accesible a través de este sitio vulnera derechos de terceros, es ilícito o contrario a las buenas costumbres, puede comunicárnoslo en info@clinicaleslilas.com indicando la URL afectada, la naturaleza de la infracción y sus datos de contacto. La recepción de dicha comunicación no implica el conocimiento efectivo previsto en la LSSI-CE ni conlleva automáticamente la obligación de retirar el contenido denunciado.',
        },
        modifications: {
          title: '10. Modificaciones',
          text: 'Clínica Les Lilas se reserva el derecho de modificar en cualquier momento el presente aviso legal, así como el contenido y la estructura del sitio, sin previo aviso. Las modificaciones entrarán en vigor desde el momento de su publicación. Se recomienda al usuario consultar esta página periódicamente.',
        },
        loi: {
          title: '11. Ley aplicable y jurisdicción competente',
          text: 'El presente sitio web se rige por la legislación española, en particular la Ley 34/2002 (LSSI-CE), la Ley Orgánica 3/2018 (LOPDGDD) y el RGPD (UE 2016/679). Para cualquier controversia derivada del uso de este sitio, las partes se someten a la jurisdicción de los tribunales de Alicante (España), salvo disposición legal en contrario.',
        },
      },
    },
    politiqueConfidentialite: {
      h1: 'Política de privacidad',
      content: {
        intro: { title: 'Protección de datos', text: "Clínica Les Lilas se compromete a proteger la confidencialidad de los datos personales recogidos a través de este sitio. La información que nos transmite se utiliza únicamente para responder a sus solicitudes y organizar su atención." },
        usage: { title: 'Uso de los datos', text: "Los datos recogidos (nombre, email, teléfono, mensaje) se tratan de forma confidencial y no se transmiten a terceros. Permiten a nuestro equipo contactarle y organizar su primera consulta." },
        rights: { title: 'Sus derechos', text: "De conformidad con el RGPD, dispone de un derecho de acceso, rectificación y supresión de sus datos personales. Para ejercer estos derechos, contacte con nosotros a través del formulario o por email." },
      },
    },
    appointment: { fullName: 'Nombre', email: 'Email', phone: 'Teléfono', message: 'Mensaje' },
    contactMerci: {
      meta: { title: 'Mensaje enviado | Clínica Les Lilas', description: 'Su mensaje ha sido enviado. Le responderemos lo antes posible.' },
      hero: { h1: 'Mensaje enviado', subtitle: 'Gracias por su solicitud', text: '' },
      body: "Su mensaje ha sido recibido. Nuestro equipo le responderá lo antes posible para organizar su primera consulta.",
      cta: 'Volver al inicio',
    },
    notFound: {
      title: 'Página no encontrada',
      message: 'La página que buscas no existe o ha sido movida.',
      backHome: 'Volver al inicio',
      contactUs: 'Contactarnos',
    },
  },
};
