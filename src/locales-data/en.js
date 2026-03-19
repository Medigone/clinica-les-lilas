import { ROUTES } from '../routes';

export default {
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
};
