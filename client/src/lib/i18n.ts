import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "common": {
        "academy_name": "American Academy of Complementary Medicine",
        "tagline": "Advancing the field through research, education, and professional standards",
        "read_more": "Read More",
        "back_home": "Back to Main Page",
        "quick_links": "Quick Links",
        "contact_us": "Contact Us",
        "status": "Status",
        "active": "Active",
        "staff": "Staff",
        "professionals": "24 professionals",
        "reports_to": "Reports to",
        "executive_director": "Executive Director",
        "last_edited": "This page was last edited on January 23, 2026.",
        "copyright": "Content is available under the Academy's publication guidelines unless otherwise noted.",
        "all_rights_reserved": "© 2026 AACM. All rights reserved.",
        "login_signup": "Log in / Sign up",
        "view_official_registration": "View Official Registration",
        "jurisdiction": "Jurisdiction: 7901 4TH ST N, STE 300 ST PETERSBURG, FL. 33702 United States Tel.+1(786)7899632."
      },
      "nav": {
        "main_page": "Main Page",
        "departments": "Departments",
        "industry_analytics": "Industry Analytics",
        "marketing_research": "Marketing & Market Research",
        "expertise_accreditation": "Expertise & Accreditation",
        "rating_monitoring": "Rating Monitoring",
        "awards_honors": "Awards & Honors",
        "educational_programs": "Educational Programs",
        "scientific_research": "Scientific Research",
        "diagnostic_methods": "Diagnostic Methods",
        "research_publications": "Research Publications",
        "expert_council": "Expert Council",
        "about": "About",
        "academy_info": "Academy Information",
        "price": "Price",
        "associations": "Associations",
        "legal": "Legal",
        "privacy_policy": "Privacy Policy",
        "cookie_policy": "Cookie Policy",
        "registration_data": "Registration Data",
        "public_offer": "Public Offer"
      },
      "home": {
        "hero_title": "American Academy of Complementary Medicine",
        "hero_subtitle": "Advancing the science and practice of complementary medicine through research, education, and professional standards",
        "academy_overview": "Academy Overview",
        "headquarters": "Headquarters",
        "florida_usa": "Florida, USA 7901 4th st N, ste 300 St Petersburg",
        "focus": "Focus",
        "complementary_medicine": "Complementary Medicine",
        "intro_p1": "The <1>American Academy of Complementary Medicine</1> (AACM) is a leading professional organization dedicated to advancing the field of <3>complementary medicine</3> through rigorous research, comprehensive education, and the establishment of professional standards. The Academy serves as the primary accrediting body and research institution for complementary medical practices in the United States and establishes partnerships with institutions across 47 countries.",
        "history_founded": "The American Academy of Complementary Medicine (also known as the Academy of Parapsychology and Medicine) was founded in California in <1>1970</1>.",
        "history_milestones_title": "Key Milestones:",
        "history_milestone_1": "Research in complementary medicine. Presentation of research findings to the professional community and the general public.",
        "history_milestone_2": "In <1>1978</1>, laid the foundation for the creation of the American Holistic Medical Association (now the American Academy of Complementary Medicine).",
        "history_milestone_3": "After a hiatus, underwent a professional transformation: attracted outstanding scientists and specialists, expanded the network of international contacts.",
        "intro_p2": "The Academy's mission encompasses the evaluation of practitioners, the certification of educational programs, and the publication of evidence-based research. Through its various departments, AACM provides comprehensive services including <1>practitioner accreditation</1>, <3>market analysis</3>, and <5>clinical research</5> coordination.",
        "contents": "Contents",
        "academy_departments": "Academy Departments",
        "research_initiatives": "Research Initiatives",
        "accreditation_process": "Accreditation Process",
        "international_partnerships": "International Partnerships",
        "departments_intro": "The Academy operates through a network of specialized departments, each focused on distinct aspects of complementary medicine advancement. These departments collaborate to provide comprehensive services to practitioners, researchers, and the public.",
        "research_intro": "The Academy coordinates numerous research initiatives aimed at establishing the efficacy and safety of complementary medical practices. Current focus areas include:",
        "research_list": {
          "1": "Clinical outcome studies for integrative treatment protocols",
          "2": "Comparative effectiveness research across modalities",
          "3": "Patient safety monitoring and adverse event reporting",
          "4": "Cost-effectiveness analysis for healthcare integration"
        },
        "accreditation_intro": "The Academy's accreditation process represents the gold standard for professional certification in complementary medicine. The multi-stage evaluation includes:",
        "accreditation_steps": {
          "edu_verif": "Educational Verification",
          "edu_desc": "Review of academic credentials and training certifications",
          "clinical_assess": "Clinical Assessment",
          "clinical_desc": "Evaluation of practical skills and patient outcomes",
          "peer_review": "Peer Review",
          "peer_desc": "Assessment by established practitioners in the field",
          "cont_edu": "Continuing Education",
          "cont_desc": "Ongoing professional development requirements"
        },
        "partnerships_intro": "The Academy establishes collaborative relationships with complementary medicine organizations across 47 countries, facilitating the exchange of research data, educational resources, and professional standards. Key partnership regions include the European Union, Asia-Pacific, and Latin America, with regional offices supporting local certification programs aligned with AACM standards."
      },
      "departments": {
        "analytics": {
          "title": "Industry Analytics Department",
          "description": "Comprehensive analysis of the complementary medicine industry, including market trends, growth patterns, and sector developments across regional and global markets.",
          "long_desc": "The Industry Analytics Department conducts comprehensive analysis of the complementary medicine sector, providing stakeholders with actionable insights into market dynamics, growth trends, and emerging opportunities.",
          "sections": {
            "mission_title": "Mission",
            "mission_content": "To provide accurate, timely, and actionable market intelligence that supports strategic decision-making across the complementary medicine industry. Our analyses inform practitioners, investors, policymakers, and educational institutions.",
            "activities_title": "Core Activities",
            "activities_content": "The department maintains ongoing surveillance of market conditions including practitioner demographics, service utilization patterns, consumer spending trends, and regulatory developments. Quarterly reports synthesize data from multiple sources to produce comprehensive industry overviews.",
            "methodology_title": "Research Methodology",
            "methodology_content": "Our analytical framework combines quantitative market data with qualitative assessments from industry experts. Primary data collection includes practitioner surveys, consumer panels, and institutional reporting. Secondary analysis incorporates regulatory filings, academic publications, and international datasets."
          }
        },
        "marketing": {
          "title": "Marketing & Market Research Department",
          "description": "In-depth research on services and specialists within complementary medicine, consumer behavior analysis, and market positioning strategies.",
          "long_desc": "The Marketing & Market Research Department specializes in understanding consumer behavior, practitioner positioning, and service delivery models within the complementary medicine ecosystem.",
          "sections": {
            "focus_title": "Research Focus",
            "focus_content": "Our research examines how patients discover and select complementary medicine practitioners, the factors influencing treatment adherence, and the communication strategies that build trust between practitioners and patients.",
            "segmentation_title": "Market Segmentation",
            "segmentation_content": "The department maintains detailed segmentation models covering geographic markets, practice specialties, patient demographics, and service delivery formats. These models support targeted outreach and resource allocation decisions.",
            "analysis_title": "Competitive Analysis",
            "analysis_content": "Regular competitive intelligence reports track market share dynamics, pricing trends, and differentiation strategies across the industry. Benchmarking studies help practitioners understand their positioning relative to peers.",
            "healing_title": "Overview of Popular Healing & Energy Practices",
            "healing_content": "Today's digital landscape offers access to diverse healing modalities. Energy Healing includes Reiki (channeling universal life force) and Bioenergetics (releasing emotional trauma through bodywork). Traditional Eastern Practices feature Qigong (cultivating 'qi'), Acupuncture (meridian energy flow), and Yoga disciplines like Hatha (physical postures), Kundalini (spiritual awakening), and Pranayama (breath control). Modern Mind-Body Methods include Theta Healing (belief reprogramming), the Silva Method (mind control), and the Joe Dispenza Method (rewiring brain patterns). Initiology belongs to the newest generation of energy-information technologies. Most are available online via courses and virtual sessions."
          }
        },
        "accreditation": {
          "title": "Expertise & Accreditation Department",
          "description": "Monitoring and collection of information on education, professional qualifications, verified reviews, confirmed healing outcomes, and statistical analysis of consultations and diagnoses.",
          "long_desc": "The Expertise & Accreditation Department serves as the Academy's primary credentialing body, establishing and maintaining standards for practitioner qualification, institutional accreditation, and outcome verification.",
          "sections": {
            "standards_title": "Credentialing Standards",
            "standards_content": "We maintain comprehensive standards covering educational requirements, clinical competencies, ethical conduct, and continuing education. These standards are developed through collaboration with practitioners, educators, and regulatory bodies.",
            "monitoring_title": "Outcome Monitoring",
            "monitoring_content": "The department operates an outcome tracking system that collects data on treatment results, patient satisfaction, and adverse events. This information supports both individual practitioner evaluation and aggregate quality improvement initiatives.",
            "verification_title": "Verification Processes",
            "verification_content": "Our verification protocols confirm the accuracy of reported credentials, validate claimed outcomes, and authenticate patient testimonials. This rigorous approach ensures the integrity of the Academy's accreditation."
          }
        },
        "ratings": {
          "title": "Rating Monitoring Department",
          "description": "Continuous monitoring and updating of current ratings for specialists, services, organizations, and methodologies in complementary medicine.",
          "long_desc": "The Rating Monitoring Department maintains dynamic rating systems for practitioners, services, organizations, and methodologies, providing transparent quality indicators for patients and stakeholders.",
          "sections": {
            "methodology_title": "Rating Methodology",
            "methodology_content": "Our multi-dimensional rating system incorporates objective measures (credentials, outcomes, experience) and subjective assessments (peer evaluations, patient feedback). Algorithmic weighting ensures fair representation across diverse practice types.",
            "updates_title": "Continuous Updates",
            "updates_content": "Ratings are updated continuously as new information becomes available. Real-time data feeds capture credential changes, new outcome reports, and emerging reviews. Quarterly comprehensive reviews ensure accuracy and relevance.",
            "transparency_title": "Transparency Standards",
            "transparency_content": "The department publishes detailed documentation of rating criteria, calculation methods, and data sources. Practitioners receive notification of rating changes with detailed explanations and appeals processes."
          },
          "vote_action": "Vote",
          "rate_efficiency": "Rate Efficiency",
          "effectiveness_score": "Effectiveness Score",
          "total_votes": "Total votes: 500+"
        },
        "awards": {
          "title": "Awards & Honors Department",
          "description": "Established awards and recognition programs for distinguished specialists, innovative methods, and exemplary schools in the field.",
          "long_desc": "The Awards & Honors Department administers recognition programs that celebrate excellence in complementary medicine practice, research, education, and service.",
          "faces_title": "Faces of the Year 2026",
          "lazarenko_award": {
            "name": "Vyacheslav Lazarenko",
            "award_type": "Best Specialist in Complementary Medicine",
            "description_short": "Outstanding clinical results in Initiology methodology. 1,724 patient cases with 70.2% complete remission rate.",
            "description_full": "Based on comprehensive analysis of 1,724 patient cases demonstrating a 70.2% complete clinical remission rate within a 30-day mean intervention duration. All patients had previously undergone conventional treatment without satisfactory outcomes.",
            "conferred_by": "AACM Expert Council",
            "date": "2026",
            "read_more": "Read more",
            "read_less": "Collapse"
          },
          "dispenza_award": {
            "name": "Joe Dispenza",
            "award_type": "The Best Specialist in Personality Transformation",
            "description_short": "Pioneering contributions to personal transformation through meditation, neuroscience, and epigenetics. NYT bestselling author.",
            "description_full": "Dr. Joe Dispenza is a renowned researcher and New York Times bestselling author whose work bridges quantum physics, neuroscience, and human potential. Creator of transformational programs practiced in over 120 countries. His meditation retreats have helped tens of thousands achieve measurable changes in brain function and gene expression.",
            "conferred_by": "AACM Expert Council",
            "date": "2026"
          },
          "sections": {
            "categories_title": "Recognition Categories",
            "categories_content": "Annual awards recognize outstanding achievement in clinical practice, research innovation, educational excellence, and community service. Specialized categories honor contributions to specific modalities and populations.",
            "selection_title": "Selection Process",
            "selection_content": "Award recipients are selected through a rigorous process involving peer nomination, documentation review, and committee evaluation. Selection committees include leading practitioners, researchers, and patient advocates.",
            "lifetime_title": "Lifetime Achievement",
            "lifetime_content": "The Academy's highest honor, the Lifetime Achievement Award, recognizes individuals whose sustained contributions have significantly advanced the field. Recipients have typically demonstrated excellence across multiple decades and domains."
          }
        },
        "education": {
          "title": "Educational Programs Department",
          "description": "Accredited educational curricula, professional development courses, and certification programs for practitioners at all levels.",
          "long_desc": "The Educational Programs Department develops, accredits, and delivers comprehensive training curricula for complementary medicine practitioners at all career stages.",
          "sections": {
            "curriculum_title": "Curriculum Development",
            "curriculum_content": "Our curriculum specialists work with subject matter experts to create evidence-based educational content. Programs cover foundational knowledge, clinical skills, business practices, and specialized modalities.",
            "accreditation_title": "Institutional Accreditation",
            "accreditation_content": "The department evaluates educational institutions seeking Academy accreditation. Assessment criteria include faculty qualifications, curriculum rigor, clinical training facilities, and graduate outcomes.",
            "continuing_title": "Continuing Education",
            "continuing_content": "Mandatory continuing education requirements ensure practitioners maintain current knowledge and skills. The department offers diverse learning formats including conferences, online courses, and clinical intensives."
          }
        },
        "research": {
          "title": "Scientific Research Department",
          "description": "Academic studies, clinical trials, and evidence-based research initiatives advancing the scientific foundation of complementary medicine.",
          "long_desc": "The Scientific Research Department coordinates clinical trials, basic science investigations, and systematic reviews that advance the evidence base for complementary medicine.",
          "sections": {
            "trials_title": "Clinical Trials",
            "trials_content": "The department sponsors and coordinates randomized controlled trials examining the efficacy and safety of complementary interventions. Trial design follows international standards for scientific rigor and ethical conduct.",
            "reviews_title": "Systematic Reviews",
            "reviews_content": "Regular systematic reviews synthesize existing research on specific modalities and conditions. These reviews inform clinical guidelines, educational content, and regulatory submissions.",
            "grants_title": "Research Grants",
            "grants_content": "Competitive grant programs support investigator-initiated research addressing priority questions. Funding categories include pilot studies, full-scale trials, and methodological development projects."
          }
        },
        "diagnostics": {
          "title": "Diagnostic Methods Department",
          "description": "Research and standardization of complementary diagnostic approaches, including traditional assessment techniques and innovative methodologies.",
          "long_desc": "The Diagnostic Methods Department researches, standardizes, and validates complementary diagnostic approaches used in patient assessment and treatment planning.",
          "sections": {
            "validation_title": "Diagnostic Validation",
            "validation_content": "The department conducts reliability and validity studies for diagnostic techniques used in complementary medicine. Research examines inter-rater agreement, test-retest stability, and correlation with conventional measures.",
            "standardization_title": "Standardization Efforts",
            "standardization_content": "Working groups develop standardized protocols for commonly used diagnostic procedures. These protocols ensure consistency in application and interpretation across practitioners and settings.",
            "tech_title": "Technology Integration",
            "tech_content": "Emerging diagnostic technologies are evaluated for potential integration into complementary medicine practice. Assessment criteria include accuracy, accessibility, and compatibility with existing approaches."
          }
        },
        "publications": {
          "title": "Research Publications Department",
          "description": "Publication of research data on prevalent methods, specialists, and organizations in international and local country-specific formats. Rating assignments and identification of market leaders and underperformers.",
          "long_desc": "The Research Publications Department disseminates research findings, market analyses, and rating data in formats accessible to diverse stakeholders across international and regional markets.",
          "sections": {
            "types_title": "Publication Types",
            "types_content": "The department produces peer-reviewed research articles, industry reports, rating summaries, and educational materials. Publications range from technical scientific papers to accessible summaries for general audiences.",
            "editions_title": "International Editions",
            "editions_content": "Country-specific editions adapt global data for local contexts. Regional publications incorporate local regulatory frameworks, cultural considerations, and market conditions while maintaining consistency with international standards.",
            "reports_title": "Market Leader Reports",
            "reports_content": "Quarterly reports identify market leaders and underperformers across practitioner categories, service types, and geographic regions. These analyses support benchmarking and strategic planning."
          }
        },
        "council": {
          "title": "Expert Council",
          "description": "Recommendations and guidance from the Academy's leading specialists, providing authoritative perspectives on best practices and emerging developments.",
          "long_desc": "The Expert Council comprises distinguished leaders who provide strategic guidance, authoritative recommendations, and oversight for Academy initiatives.",
          "sections": {
            "composition_title": "Council Composition",
            "composition_content": "The Council includes recognized authorities from clinical practice, academic research, healthcare policy, and patient advocacy. Members serve rotating terms and represent diverse modalities and geographic regions.",
            "advisory_title": "Advisory Functions",
            "advisory_content": "Council members advise on strategic priorities, evaluate proposed initiatives, and resolve complex accreditation cases. Regular meetings address emerging issues and long-term planning.",
            "public_title": "Public Recommendations",
            "public_content": "The Council issues public statements on matters of significance to the field. Recommendations address clinical practices, professional ethics, regulatory matters, and research priorities."
          }
        },
        "related_departments": "Related Departments",
        "department_info": "Department Info",
        "contact_dept": "Contact Department",
        "submit_inquiry": "Submit Inquiry",
        "view_reports": "View Reports"
      },
      "associations": {
        "title": "Professional Associations",
        "description": "The following list includes recognized international and regional associations in the fields of parapsychology, yoga, and complementary medicine. These organizations work to maintain professional standards, conduct research, and promote their respective disciplines.",
        "table": {
          "organization": "Organization",
          "location": "Location",
          "field": "Field",
          "website": "Website",
          "description": "Description"
        },
        "disclaimer": "The American Academy of Complementary Medicine is not directly affiliated with these external organizations unless explicitly stated.",
        "items": {
          "pa": "Founded in 1957; promotes parapsychology as a science, integrates findings with other branches; affiliated with AAAS.",
          "spr": "Investigates psychokinesis, past lives, mediums, psychics, apparitions, poltergeists, near-death and out-of-body experiences.",
          "aipr": "Non-profit organization (since 1977); research in parapsychology, reincarnation, and anomalous cognition.",
          "ya": "Non-profit organization; supports yoga teachers, schools, and supporters; expands access and inclusivity.",
          "iyf": "Non-profit federation; unites practitioners, teachers, centers, and organizations; highest body is the General Assembly.",
          "wya": "Certifies teachers, schools, clubs, associations, and federations; preserves authenticity of yoga, promotes professional development and cultural exchange.",
          "yai": "International organization promoting authentic yoga traditions and certification standards globally.",
          "asnmop": "Professional association uniting specialists in alternative medicine and wellness practices; focuses on standards and development of the field.",
          "iain": "International academy dedicated to the study, research, and practice of initiology."
        }
      },
      "research": {
        "award_rationale": {
          "title": "Scientific Rationale for Conferring the Supreme AACM Distinction",
          "subtitle": "V. Lazarenko — Recipient of the Best Specialist in Complementary Medicine Award",
          "intro": "Pursuant to the voluntary expert evaluation and professional accreditation procedures conducted for the practitioner and the therapeutic methodology employed, the AACM Expert Council was granted comprehensive access to and performed systematic analysis of 1,724 individual patient medical records. Each case file contained complete clinical anamnesis, therapeutic intervention protocols, and treatment chronologies, substantiated by exhaustive corroborating medical documentation including: laboratory analyses, ultrasonographic examinations, electrocardiographic studies, esophagogastroduodenoscopy reports, histopathological biopsy findings, and additional diagnostic modalities corresponding to each patient's clinical presentation. Documentation further comprised formal medical opinions, physician treatment orders, detailed therapeutic course progressions, longitudinal disease dynamics, and comprehensive session records documenting interventions performed by V. Lazarenko with quantified outcome measurements.",
          "diagnoses": "The analyzed patient cohort presented with diverse pathological conditions including: peptic ulcer disease (gastric and duodenal), uterine leiomyomas, fibrocystic mastopathy, psoriasis vulgaris, viral hepatitis (types B and C), diabetes mellitus (types I and II), cardiac arrhythmias, paroxysmal tachycardia, early-stage malignant neoplasms (stages I-II), and various other chronic conditions resistant to conventional pharmacotherapy.",
          "results": "Statistical analysis of the 1,724 documented cases revealed that 1,210 patients (70.2%) achieved complete clinical remission with objective confirmation of diagnosis resolution upon subsequent medical re-examination. The mean therapeutic intervention duration under V. Lazarenko's protocol was 30 days. Notably, 100% of patients in this cohort had previously undergone conventional pharmacological treatment without achieving satisfactory therapeutic outcomes, representing a population of treatment-refractory cases.",
          "verification": "Methodological validation included randomized stratified sampling of patient records with multi-modal identity verification protocols: documentary authentication, synchronous video conferencing interviews, and recorded patient testimonials. These verification procedures conclusively established the authenticity and scientific validity of the submitted clinical data, with zero instances of data fabrication or falsification detected.",
          "unique": "This represents an unprecedented volume of systematically documented clinical data for a single complementary medicine practitioner in the history of integrative healthcare research. No comparable dataset exists in institutional or independent research archives, precluding standard comparative meta-analysis with other practitioners or methodologies.",
          "conclusion": "Based on the foregoing evidence and rigorous peer review, the AACM Expert Council and Scientific Research Department hereby confer upon V. Lazarenko the distinction of Best Specialist in Complementary Medicine by unanimous resolution.",
          "methodology_recognition": "Furthermore, the Expert Council formally recognizes Initiology — the therapeutic methodology practiced by V. Lazarenko — as the preeminent system of complementary medicine based on demonstrated clinical efficacy.",
          "signature_name": "Dr. Marcus W. Thornberg, Ph.D.",
          "signature_title": "Director, Scientific Research Department | Senior Research Fellow, AACM"
        }
      },
      "price": {
        "title": "Educational Programs Pricing",
        "subtitle": "Distance learning training programs and energy practice of complementary medicine",
        "products": {
          "basic": {
            "title": "BASIC 1 - 2 levels",
            "desc": "12 video practical lessons that activate the body's energy system"
          },
          "professional": {
            "title": "Bachelor",
            "desc": "A professional level"
          },
          "master": {
            "title": "MASTER 4 level",
            "desc": "The level of the Master. Workshops on wellness and energy Security Technologies"
          },
          "teacher": {
            "title": "MASTER - TEACHER 5 level",
            "desc": "The Master - Teacher level"
          },
          "special": {
            "title": "Magister",
            "desc": "A Magister's level. Group of Social, cleaning, information, energy information security methods."
          }
        },
        "buy_now": "Buy Now",
        "note_title": "Note regarding payments",
        "note_desc": "You will be redirected to our secure payment partner to complete your transaction. After purchase, you will receive access instructions via email.",
        "membership": {
          "title": "AACM Membership Fees",
          "who_can_join": "Who can become a full member of AACM?",
          "who_can_join_desc": "World leaders in the complementary medicine and wellness practices industry, authoritative and distinguished specialists with impeccable reputation and significant achievements in professional activities.",
          "one_time": "One-time",
          "annual": "Annual",
          "joining_fee": "Joining Fee",
          "joining_fee_desc": "One-time entry fee for new members joining the American Academy of Complementary Medicine.",
          "annual_fee": "Membership Fee",
          "annual_fee_desc": "Annual fee for maintaining active membership status and access to all AACM benefits and resources.",
          "apply_now": "Apply for Membership",
          "renew_now": "Renew Membership"
        }
      },
      "contacts": {
        "title": "Contact Us",
        "intro": "The American Academy of Complementary Medicine welcomes inquiries from practitioners, researchers, media, and the public. Please use the contact information below to reach the appropriate department.",
        "headquarters": "Headquarters",
        "general_inquiries": "General Inquiries",
        "general_desc": "For general questions about the Academy, membership, or accreditation:",
        "dept_contacts": "Department Contacts: Tel. +1(786)789-9632",
        "accreditation_office": "Accreditation Office",
        "research_dept": "Research Department",
        "media_relations": "Media Relations"
      },
      "public_offer": {
        "title": "Public Offer (Offer Agreement)",
        "last_updated": "Last updated: February 2026",
        "section1_title": "1. General Provisions",
        "section1_body": "This Public Offer (the \"Offer\") is an official proposal by the American Academy of Complementary Medicine (AACM) to enter into an agreement for the provision of educational services under the AACM standard program. By paying the fee and/or accessing the platform, the learner accepts this Offer in full.",
        "section2_title": "2. Subject of the Agreement",
        "section2_list": {
          "1": "Provider provides access to the AACM standard educational program consisting of 1–2 levels of training.",
          "2": "Services include access to the online platform: platform.aacmedinc.org.",
          "3": "The program materials are delivered in digital format; pace and participation depend on the learner’s engagement and the platform schedule."
        },
        "section3_title": "3. Price and Payment",
        "section3_list": {
          "1": "The price of the program is USD 250 (two hundred fifty U.S. dollars).",
          "2": "Payment is made in advance in the manner indicated on the AACM website or platform.",
          "3": "The moment of acceptance of the Offer is the successful payment and/or commencement of use of the platform."
        },
        "section4_title": "4. Access to the Platform",
        "section4_body": "Access is provided to the learner via the AACM platform (platform.aacmedinc.org) using the credentials created during registration. The learner is responsible for keeping login credentials confidential.",
        "section5_title": "5. Guarantees, Return and Refund Policy",
        "section5_list": {
          "1": "AACM strives to provide access to the program and materials as described; however, educational outcomes are not guaranteed and depend on the learner’s efforts.",
          "2": "Refund requests are reviewed individually. If access to the platform is not provided due to AACM’s fault, the learner may request a full refund.",
          "3": "If the learner has already received access to the digital materials and used the platform, AACM may refuse a refund or provide a partial refund at its discretion."
        },
        "section6_title": "6. Liability",
        "section6_body": "AACM is not liable for the learner’s inability to use the services due to reasons beyond AACM’s control (including internet access, device issues, third‑party service outages). AACM does not provide medical services through this program; the content is educational in nature.",
        "section7_title": "7. Rights and Obligations of the Parties",
        "section7_body": "The Provider undertakes to provide access to the program and platform; the learner undertakes to pay the fee, comply with platform rules, and use the materials for personal educational purposes only. Unauthorized distribution of materials is prohibited.",
        "sample_contract": {
          "title": "Sample Expert Contractor Agreement",
          "description": "Below is a sample standard contract between AACM and an expert contractor for conducting accreditation and expert evaluation services. This document serves as a template demonstrating the terms and conditions governing professional engagement with the Academy.",
          "details_title": "Contract Key Terms",
          "contractor": "Contractor",
          "contractor_name": "Dr. Marcus W. Thornberg, Ph.D.",
          "term": "Contract Term",
          "term_value": "5 years",
          "subject": "Subject Matter",
          "subject_value": "Expert evaluation and accreditation of applicants in accordance with established AACM rules and conditions",
          "rate": "Compensation Rate",
          "rate_value": "$120 USD per day of expert evaluation services",
          "redacted_note": "Personal identification data and contact information have been redacted for privacy protection.",
          "download_btn": "View Sample Contract"
        },
      },
      "about": {
        "title": "Academy Information",
        "type": "Type",
        "type_val": "Professional Association & Research Institution",
        "headquarters": "Headquarters",
        "florida_usa": "Florida, USA 7901 4th st N, ste 300 St Petersburg",
        "fields": "Fields",
        "fields_val": "Complementary Medicine, Integrative Health, Research",
        "intro_p1": "The <1>American Academy of Complementary Medicine (AACM)</1> is a distinguished institution dedicated to the advancement, standardization, and scientific validation of complementary and integrative medical practices. Established to bridge traditional healing wisdom with modern scientific rigor, the Academy serves as a global hub for practitioners, researchers, and educators.",
        "mission_title": "Mission & Vision",
        "mission_desc": "Our mission is to foster excellence in complementary medicine through rigorous accreditation, innovative research, and comprehensive professional development. We envision a healthcare landscape where evidence-based complementary therapies are seamlessly integrated into global health systems, providing safe, effective, and holistic care for all.",
        "functions_title": "Core Functions",
        "functions": {
          "accreditation": "<0>Accreditation:</0> establishing gold-standard criteria for practitioners and educational institutions.",
          "research": "<0>Research:</0> Coordinating multi-center clinical trials and systematic reviews to build the evidence base.",
          "education": "<0>Education:</0> Developing advanced curricula and continuing education programs for healthcare professionals.",
          "policy": "<0>Policy:</0> Advocating for regulatory frameworks that ensure patient safety and practice rights."
        },
        "reach_title": "Global Reach",
        "reach_desc": "The Academy establishes collaborative relationships with complementary medicine organizations across 47 countries, facilitating the exchange of research data, educational resources, and professional standards.",
        "note": "Note: Further details from the official documentation are being processed and will be updated shortly."
      },
      "registration": {
        "title": "Corporate Registration",
        "electronic_articles": "Electronic Articles of Incorporation",
        "doc_number": "Document Number",
        "status": "Status",
        "active_standing": "Active / Good Standing",
        "official_details": "Official Corporate Details",
        "article_1": "Article I: Corporate Name",
        "article_2": "Article II: Principal Office",
        "article_3": "Article III: Purpose",
        "article_3_desc": "The purpose for which this corporation is organized is: ANY AND ALL LAWFUL BUSINESS.",
        "article_4": "Article IV: Authorized Shares",
        "article_4_desc": "The number of shares the corporation is authorized to issue is: 10,000,000",
        "article_5": "Article V: Registered Agent",
        "president": "Email americanacademyinc@gmail.com",
        "filing_info": "Filing Information",
        "filer": "Filer:",
        "jurisdiction_label": "Jurisdiction:",
        "jurisdiction_val": "Florida Profit Corporation"
      },
      "privacy": {
        "title": "Privacy Policy",
        "last_updated": "Last Updated: January 2026",
        "intro_title": "1. Introduction",
        "intro_desc": "The American Academy of Complementary Medicine (\"AACM\", \"we\", \"our\", or \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.",
        "collect_title": "2. Data We Collect",
        "collect_desc": "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:",
        "collect_list": {
          "identity": "<0>Identity Data</0> includes first name, last name, username or similar identifier, title, date of birth and gender.",
          "contact": "<0>Contact Data</0> includes billing address, delivery address, email address and telephone numbers.",
          "technical": "<0>Technical Data</0> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website."
        },
        "use_title": "3. How We Use Your Data",
        "use_desc": "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
        "use_list": {
          "contract": "Where we need to perform the contract we are about to enter into or have entered into with you.",
          "legitimate": "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
          "legal": "Where we need to comply with a legal or regulatory obligation."
        },
        "security_title": "4. Data Security",
        "security_desc": "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.",
        "rights_title": "5. Your Legal Rights",
        "rights_desc": "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.",
        "contact_title": "6. Contact Details",
        "contact_desc": "If you have any questions about this privacy policy or our privacy practices, please contact us at: <1>privacy@aacm.org</1>."
      },
      "cookies": {
        "title": "Cookie Policy",
        "last_updated": "Last Updated: January 2026",
        "what_title": "1. What Are Cookies?",
        "what_desc": "Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
        "use_title": "2. How We Use Cookies",
        "use_desc": "We use cookies for the following purposes:",
        "use_list": {
          "essential": "<0>Essential Cookies:</0> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.",
          "analytical": "<0>Analytical/Performance Cookies:</0> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
          "functionality": "<0>Functionality Cookies:</0> These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region)."
        },
        "managing_title": "3. Managing Cookies",
        "managing_desc": "Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <1>www.aboutcookies.org</1> or <3>www.allaboutcookies.org</3>.",
        "managing_list_intro": "Find out how to manage cookies on popular browsers:"
      },
      "healing_methods": {
        "page_title": "Healing & Energy Practices Overview",
        "page_subtitle": "Comprehensive guide to traditional and modern healing modalities",
        "back_to_marketing": "Back to Marketing Department",
        "top_organizations": "Top Organizations & Associations",
        "methods": {
          "reiki": { 
            "title": "Reiki: The Art of Universal Life Energy", 
            "content": "Reiki is a Japanese stress reduction and relaxation technique that also promotes healing. It is administered by 'laying on hands' and is based on the idea that an unseen 'life force energy' flows through us and is what causes us to be alive. If one's 'life force energy' is low, then we are more likely to get sick or feel stress, and if it is high, we are more capable of being happy and healthy. The word Reiki is made of two Japanese words - Rei which means 'God's Wisdom or the Higher Power' and Ki which is 'life force energy'. So Reiki is actually 'spiritually guided life force energy'. It treats the whole person including body, emotions, mind and spirit creating many beneficial effects that include relaxation and feelings of peace, security and wellbeing.",
            "organizations": ["International Association of Reiki Professionals (IARP)", "Reiki Healing Association (RHA)", "The International Center for Reiki Training", "UK Reiki Federation"]
          },
          "bioenergetics": { 
            "title": "Bioenergetics: Integrating Body and Mind", 
            "content": "Bioenergetics is a form of body-psychotherapy based on the continuity between body and mind. It is rooted in the work of Wilhelm Reich and founded by Alexander Lowen. Bioenergetics creates an understanding of the personality in terms of the body and its energetic processes. The concept is that chronic muscle tension is a physical manifestation of emotional trauma. By working with the body through grounding, breathing, and vibration exercises, bioenergetics aims to release this tension and restore emotional health. It focuses on 'grounding'—being connected to the earth and one's own body—to increase vitality and capacity for pleasure.",
            "organizations": ["International Institute for Bioenergetic Analysis (IIBA)", "European Federation for Bioenergetic Analysis-Psychotherapy", "Massachusetts Society for Bioenergetic Analysis", "Southern California Institute for Bioenergetic Analysis (SCIBA)"]
          },
          "qigong": { 
            "title": "Qigong: Cultivating Vital Energy", 
            "content": "Qigong (pronounced 'chi-gong') is an ancient Chinese practice that combines gentle physical movements, mental focus, and deep breathing. 'Qi' means life energy, and 'Gong' means work or cultivation. It is a holistic system of coordinated body-posture and movement, breathing, and meditation used for the purposes of health, spirituality, and martial arts training. Practice typically involves moving meditation, coordinating slow flowing movement, deep rhythmic breathing, and calm meditative state of mind. It is considered a pillar of Traditional Chinese Medicine alongside acupuncture and herbal medicine.",
            "organizations": ["International Health Qigong Federation (IHQF)", "National Qigong Association (NQA)", "Chinese Health Qigong Association", "World Taiji Science Federation (WTSF)"]
          },
          "acupuncture": { 
            "title": "Acupuncture: Balancing the Meridian System", 
            "content": "Acupuncture is a key component of traditional Chinese medicine (TCM) in which thin needles are inserted into the body. TCM practitioners believe the human body has more than 2,000 acupuncture points connected by pathways or meridians. These pathways create an energy flow (Qi) through the body that is responsible for overall health. Disruption of the energy flow can cause disease. By applying acupuncture to certain points, it is believed to improve the flow of Qi, thereby improving health. Modern research suggests acupuncture may stimulate the nervous system, releasing chemicals that alleviate pain and promote physical and emotional well-being.",
            "organizations": ["World Federation of Acupuncture-Moxibustion Societies (WFAS)", "American Society of Acupuncturists (ASA)", "British Acupuncture Council (BAcC)", "European Traditional Chinese Medicine Association"]
          },
          "hatha_yoga": { 
            "title": "Hatha Yoga: The Foundation of Physical Balance", 
            "content": "Hatha Yoga is a branch of yoga that emphasizes physical exercises to master the body along with mind exercises to withdraw it from external objects. The word 'Hatha' comes from the Sanskrit terms 'ha' meaning 'sun' and 'tha' meaning 'moon'. The practice aims to balance these two energies. It involves the practice of asanas (postures) and pranayama (breath control), which help bring peace to the mind and body, preparing the body for deeper spiritual practices such as meditation. It is the most widely practiced form of yoga in the West.",
            "organizations": ["Yoga Alliance", "International Yoga Federation (IYF)", "World Yoga Association (WYA)", "British Wheel of Yoga"]
          },
          "kundalini_yoga": { 
            "title": "Kundalini Yoga: The Yoga of Awareness", 
            "content": "Kundalini Yoga is called the 'Yoga of Awareness'. It is a dynamic, powerful tool that is designed to give you an experience of your soul. In Kundalini Yoga, we harness the mental, physical, and nervous energies of the body and put them under the domain of the will, which is the instrument of the soul. This technology combines breath, mudra, eye-focus, mantra, body locks, and postures to balance the glandular system, strengthen the nervous system, expand lung capacity, and purify the blood. It focuses on awakening the Kundalini energy at the base of the spine.",
            "organizations": ["Kundalini Research Institute (KRI)", "International Kundalini Yoga Teachers Association (IKYTA)", "3HO (Healthy, Happy, Holy Organization)"]
          },
          "pranayama": { 
            "title": "Pranayama: The Science of Breath Control", 
            "content": "Pranayama is the ancient practice of controlling your breath. In Sanskrit, 'prana' means 'life force energy', and 'yama' means 'control'. The practice of pranayama involves breathing exercises and patterns. You intentionally inhale, exhale, and hold your breath in a specific sequence. In yoga, pranayama is used with other practices like physical postures (asanas) and meditation (dhyana). Together, these practices are responsible for the many benefits of yoga, including stress relief, improved lung function, and enhanced mental clarity.",
            "organizations": ["Global Professional Breathwork Alliance", "Yoga Alliance", "International Association of Yoga Therapists (IAYT)"]
          },
          "theta_healing": { 
            "title": "Theta Healing: Reprogramming the Subconscious", 
            "content": "ThetaHealing is a meditation technique and spiritual philosophy - not specific to one religion but accepting them all - with the purpose of getting closer to the Creator. It is a training method for your mind, body, and spirit that allows you to clear limiting beliefs and live life with positive thoughts, developing virtues in all that we do. Through meditation and prayer, the ThetaHealing Technique creates a positive lifestyle. The 'Theta' state is a deep state of relaxation; it is used in hypnosis and during REM sleep. Practitioners believe this state allows for immediate physical and emotional healing.",
            "organizations": ["ThetaHealing Institute of Knowledge (THInK)"]
          },
          "silva_method": { 
            "title": "The Silva Method: Mastering the Mind", 
            "content": "The Silva Method is a self-help and meditation program developed by José Silva. It claims to increase an individual's abilities through relaxation, development of higher brain functions, and psychic abilities such as clairvoyance. The method consists of a variety of techniques that aim to reach and maintain the alpha state of mind (a state of relaxation and creativity) and the theta state (associated with deep meditation and sleep), allowing for improved memory, learning, and healing. It emphasizes dynamic meditation and creative visualization to solve problems and achieve goals.",
            "organizations": ["Silva International", "Silva Method Great Britain"]
          },
          "joe_dispenza": { 
            "title": "The Joe Dispenza Method: Rewiring the Brain", 
            "content": "Dr. Joe Dispenza's work is grounded in the conviction that every human being has the potential for greatness and unlimited abilities. His method combines the fields of quantum physics, neuroscience, brain chemistry, biology, and genetics to show you what is truly possible. The core of the method involves meditation techniques designed to change your brainwaves and move you beyond the analytical mind into the subconscious. By creating heart-brain coherence and elevating your emotions, you can rewrite your biological programming, heal your body, and create a new reality.",
            "organizations": ["Encephalon Inc.", "NeuroChangeSolutions (NCS)", "InnerScience Research Fund"]
          },
          "deepak_chopra": {
            "title": "Deepak Chopra Method: Mind-Body-Spirit Integration",
            "content": "Dr. Deepak Chopra is a world-renowned pioneer in integrative medicine and personal transformation. His approach synthesizes Ayurvedic wisdom with modern quantum physics, neuroscience, and mind-body medicine. Through his Chopra Center programs, he has helped millions worldwide achieve optimal well-being, emotional freedom, and spiritual awakening. His methods emphasize meditation, mindfulness, conscious living, and the deep connection between consciousness and health, offering a comprehensive path to total well-being.",
            "organizations": ["Chopra Foundation", "Chopra Global", "The Chopra Center for Wellbeing"]
          },
          "initiology": { 
            "title": "Initiology: Newest Generation Energy-Information Technology", 
            "content": "Initiology represents the newest generation of energy-information technologies, offering a rapid and profound approach to human development and healing. Unlike traditional methods that may require years of practice to achieve specific states, Initiology utilizes high-frequency cosmic channels to initiate immediate transformation. It works directly with the information fields of the individual, bypassing mental blocks and energetic distortions. This method is characterized by its speed, safety, and compatibility with modern life, allowing practitioners to access advanced states of consciousness and healing capabilities through direct initiation processes. It integrates ancient wisdom with modern energetic understanding to accelerate evolution.",
            "organizations": ["Scientific Research Center of Initiology (НИЦ Инициологии)", "International Academy of Initiology", "Professional Association of Initiologists"]
          }
        }
      }
    }
  },
  de: {
    translation: {
      "common": {
        "academy_name": "Amerikanische Akademie für Komplementärmedizin",
        "tagline": "Förderung des Fachgebiets durch Forschung, Bildung und professionelle Standards",
        "read_more": "Mehr lesen",
        "back_home": "Zurück zur Hauptseite",
        "quick_links": "Schnelllinks",
        "contact_us": "Kontaktieren Sie uns",
        "status": "Status",
        "active": "Aktiv",
        "staff": "Mitarbeiter",
        "professionals": "24 Fachleute",
        "reports_to": "Berichtet an",
        "executive_director": "Geschäftsführer",
        "last_edited": "Diese Seite wurde zuletzt am 23. Januar 2026 bearbeitet.",
        "copyright": "Inhalt ist unter den Veröffentlichungsrichtlinien der Akademie verfügbar, sofern nicht anders vermerkt.",
        "all_rights_reserved": "© 2026 AACM. Alle Rechte vorbehalten.",
        "login_signup": "Anmelden / Registrieren",
        "view_official_registration": "Offizielle Registrierung ansehen",
        "jurisdiction": "Zuständigkeit: 7901 4TH ST N, STE 300 ST PETERSBURG, FL. 33702 Vereinigte Staaten Tel.+1(786)7899632."
      },
      "nav": {
        "main_page": "Hauptseite",
        "departments": "Abteilungen",
        "industry_analytics": "Branchenanalysen",
        "marketing_research": "Marketing & Marktforschung",
        "expertise_accreditation": "Expertise & Akkreditierung",
        "rating_monitoring": "Rating-Überwachung",
        "awards_honors": "Preise & Ehrungen",
        "educational_programs": "Bildungsprogramme",
        "scientific_research": "Wissenschaftliche Forschung",
        "diagnostic_methods": "Diagnosemethoden",
        "research_publications": "Forschungspublikationen",
        "expert_council": "Expertenrat",
        "about": "Über uns",
        "academy_info": "Akademie-Informationen",
        "price": "Preise",
        "associations": "Verbände",
        "legal": "Rechtliches",
        "privacy_policy": "Datenschutzrichtlinie",
        "cookie_policy": "Cookie-Richtlinie",
        "registration_data": "Registrierungsdaten",
        "public_offer": "Öffentliches Angebot"
      },
      "home": {
        "hero_title": "Amerikanische Akademie für Komplementärmedizin",
        "hero_subtitle": "Förderung der Wissenschaft und Praxis der Komplementärmedizin durch Forschung, Bildung und professionelle Standards",
        "academy_overview": "Akademie-Übersicht",
        "headquarters": "Hauptsitz",
        "florida_usa": "Florida, USA 7901 4th st N, ste 300 St Petersburg",
        "focus": "Schwerpunkt",
        "complementary_medicine": "Komplementärmedizin",
        "intro_p1": "Die <1>Amerikanische Akademie für Komplementärmedizin</1> (AACM) ist eine führende Berufsorganisation, die sich der Förderung des Fachgebiets der <3>Komplementärmedizin</3> durch strenge Forschung, umfassende Bildung und die Etablierung professioneller Standards widmet. Die Akademie dient als primäre Akkreditierungsstelle und Forschungseinrichtung für komplementärmedizinische Praktiken in den Vereinigten Staaten und unterhält Partnerschaften mit Institutionen in 47 Ländern.",
        "history_founded": "Die Amerikanische Akademie für Komplementärmedizin (American Academy of Complementary Medicine, auch bekannt als Academy of Parapsychology and Medicine) wurde in Kalifornien im Jahr <1>1970</1> gegründet.",
        "history_milestones_title": "Wichtige Meilensteine:",
        "history_milestone_1": "Forschung in der Komplementärmedizin. Präsentation der Forschungsergebnisse in der Fachwelt und für die breite Öffentlichkeit.",
        "history_milestone_2": "Im Jahr <1>1978</1> wurde der Grundstein für die Gründung der American Holistic Medical Association (heute American Academy of Complementary Medicine) gelegt.",
        "history_milestone_3": "Nach einer Arbeitspause erfolgte eine professionelle Transformation: herausragende Wissenschaftler und Spezialisten wurden gewonnen, das Netzwerk internationaler Kontakte wurde erweitert.",
        "intro_p2": "Die Mission der Akademie umfasst die Bewertung von Praktikern, die Zertifizierung von Bildungsprogrammen und die Veröffentlichung evidenzbasierter Forschung. Durch ihre verschiedenen Abteilungen bietet die AACM umfassende Dienstleistungen an, darunter <1>Akkreditierung von Praktikern</1>, <3>Marktanalyse</3> und Koordination der <5>klinischen Forschung</5>.",
        "contents": "Inhalt",
        "academy_departments": "Abteilungen der Akademie",
        "research_initiatives": "Forschungsinitiativen",
        "accreditation_process": "Akkreditierungsprozess",
        "international_partnerships": "Internationale Partnerschaften",
        "departments_intro": "Die Akademie arbeitet über ein Netzwerk spezialisierter Abteilungen, die sich jeweils auf bestimmte Aspekte der Weiterentwicklung der Komplementärmedizin konzentrieren. Diese Abteilungen arbeiten zusammen, um Praktikern, Forschern und der Öffentlichkeit umfassende Dienstleistungen anzubieten.",
        "research_intro": "Die Akademie koordiniert zahlreiche Forschungsinitiativen, die darauf abzielen, die Wirksamkeit und Sicherheit komplementärmedizinischer Praktiken zu belegen. Aktuelle Schwerpunkte sind:",
        "research_list": {
          "1": "Klinische Ergebnisstudien für integrative Behandlungsprotokolle",
          "2": "Vergleichende Wirksamkeitsforschung über Modalitäten hinweg",
          "3": "Überwachung der Patientensicherheit und Meldung unerwünschter Ereignisse",
          "4": "Kostenwirksamkeitsanalyse für die Integration in das Gesundheitswesen"
        },
        "accreditation_intro": "Der Akkreditierungsprozess der Akademie stellt den Goldstandard für die professionelle Zertifizierung in der Komplementärmedizin dar. Die mehrstufige Bewertung umfasst:",
        "accreditation_steps": {
          "edu_verif": "Bildungsüberprüfung",
          "edu_desc": "Überprüfung akademischer Zeugnisse und Ausbildungszertifikate",
          "clinical_assess": "Klinische Bewertung",
          "clinical_desc": "Bewertung praktischer Fähigkeiten und Patientenergebnisse",
          "peer_review": "Peer-Review",
          "peer_desc": "Bewertung durch etablierte Praktiker des Fachgebiets",
          "cont_edu": "Weiterbildung",
          "cont_desc": "Laufende Anforderungen an die berufliche Entwicklung"
        },
        "partnerships_intro": "Die Akademie unterhält partnerschaftliche Beziehungen zu Organisationen der Komplementärmedizin in 47 Ländern und fördert den Austausch von Forschungsdaten, Bildungsressourcen und professionellen Standards. Zu den wichtigsten Partnerregionen gehören die Europäische Union, der asiatisch-pazifische Raum und Lateinamerika, wobei regionale Büros lokale Zertifizierungsprogramme unterstützen, die den AACM-Standards entsprechen."
      },
      "departments": {
        "analytics": {
          "title": "Abteilung für Branchenanalysen",
          "description": "Umfassende Analyse der Komplementärmedizin-Branche, einschließlich Markttrends, Wachstumsmustern und Sektorentwicklungen in regionalen und globalen Märkten.",
          "long_desc": "Die Abteilung für Branchenanalysen führt umfassende Analysen des Sektors der Komplementärmedizin durch und liefert den Interessengruppen umsetzbare Erkenntnisse über Marktdynamik, Wachstumstrends und neue Möglichkeiten.",
          "sections": {
            "mission_title": "Mission",
            "mission_content": "Bereitstellung genauer, zeitnaher und umsetzbarer Marktinformationen, die strategische Entscheidungen in der gesamten Komplementärmedizin-Branche unterstützen. Unsere Analysen informieren Praktiker, Investoren, politische Entscheidungsträger und Bildungseinrichtungen.",
            "activities_title": "Kernaktivitäten",
            "activities_content": "Die Abteilung überwacht laufend die Marktbedingungen, einschließlich Demografie der Praktiker, Muster der Inanspruchnahme von Dienstleistungen, Ausgabentrends der Verbraucher und regulatorische Entwicklungen. Vierteljährliche Berichte synthetisieren Daten aus mehreren Quellen, um umfassende Branchenübersichten zu erstellen.",
            "methodology_title": "Forschungsmethodik",
            "methodology_content": "Unser analytischer Rahmen kombiniert quantitative Marktdaten mit qualitativen Bewertungen von Branchenexperten. Die primäre Datenerhebung umfasst Umfragen unter Praktikern, Verbraucherpanels und institutionelle Berichterstattung. Die Sekundäranalyse umfasst regulatorische Einreichungen, akademische Publikationen und internationale Datensätze."
          }
        },
        "marketing": {
          "title": "Marketing & Marktforschung",
          "description": "Detaillierte Forschung zu Dienstleistungen und Spezialisten in der Komplementärmedizin, Analyse des Verbraucherverhaltens und Strategien zur Marktpositionierung.",
          "long_desc": "Die Abteilung für Marketing & Marktforschung ist darauf spezialisiert, das Verbraucherverhalten, die Positionierung von Praktikern und die Modelle der Leistungserbringung im Ökosystem der Komplementärmedizin zu verstehen.",
          "sections": {
            "focus_title": "Forschungsschwerpunkt",
            "focus_content": "Unsere Forschung untersucht, wie Patienten Praktiker der Komplementärmedizin entdecken und auswählen, welche Faktoren die Therapietreue beeinflussen und welche Kommunikationsstrategien Vertrauen zwischen Praktikern und Patienten aufbauen.",
            "segmentation_title": "Marktsegmentierung",
            "segmentation_content": "Die Abteilung unterhält detaillierte Segmentierungsmodelle, die geografische Märkte, Fachgebiete, Patientendemografie und Formate der Leistungserbringung abdecken. Diese Modelle unterstützen gezielte Outreach- und Ressourcenallokationsentscheidungen.",
            "analysis_title": "Wettbewerbsanalyse",
            "analysis_content": "Regelmäßige Berichte zur Wettbewerbsaufklärung verfolgen Marktanteilsdynamiken, Preistrends und Differenzierungsstrategien in der Branche. Benchmarking-Studien helfen Praktikern, ihre Positionierung im Vergleich zu Kollegen zu verstehen.",
            "healing_title": "Überblick über beliebte Heil- und Energiepraktiken",
            "healing_content": "Die heutige digitale Landschaft bietet Zugang zu verschiedenen Heilmethoden. Energieheilung umfasst Reiki (Kanalisierung universeller Lebenskraft) und Bioenergetik (Lösung emotionaler Traumata durch Körperarbeit). Traditionelle östliche Praktiken umfassen Qigong (Kultivierung von 'Qi'), Akupunktur (Energiefluss der Meridiane) und Yoga-Disziplinen wie Hatha (körperliche Haltungen), Kundalini (spirituelles Erwachen) und Pranayama (Atemkontrolle). Moderne Geist-Körper-Methoden umfassen Theta Healing (Glaubensumprogrammierung), die Silva-Methode (Gedankenkontrolle) und die Joe-Dispenza-Methode (Neuverdrahtung von Gehirnmustern). Die Initiologie gehört zur neuesten Generation der energieinformativen Technologien. Die meisten sind online über Kurse und virtuelle Sitzungen verfügbar."
          }
        },
        "accreditation": {
          "title": "Expertise & Akkreditierung",
          "description": "Überwachung und Sammlung von Informationen zu Ausbildung, beruflichen Qualifikationen, verifizierten Bewertungen, bestätigten Heilungsergebnissen und statistische Analyse von Konsultationen und Diagnosen.",
          "long_desc": "Die Abteilung für Expertise & Akkreditierung dient als primäre Zertifizierungsstelle der Akademie und erstellt und pflegt Standards für die Qualifikation von Praktikern, die institutionelle Akkreditierung und die Ergebnisverifizierung.",
          "sections": {
            "standards_title": "Zertifizierungsstandards",
            "standards_content": "Wir unterhalten umfassende Standards, die Bildungsanforderungen, klinische Kompetenzen, ethisches Verhalten und Weiterbildung abdecken. Diese Standards werden in Zusammenarbeit mit Praktikern, Pädagogen und Regulierungsbehörden entwickelt.",
            "monitoring_title": "Ergebnisüberwachung",
            "monitoring_content": "Die Abteilung betreibt ein Ergebnisverfolgungssystem, das Daten zu Behandlungsergebnissen, Patientenzufriedenheit und unerwünschten Ereignissen sammelt. Diese Informationen unterstützen sowohl die individuelle Bewertung von Praktikern als auch aggregierte Initiativen zur Qualitätsverbesserung.",
            "verification_title": "Verifizierungsprozesse",
            "verification_content": "Unsere Verifizierungsprotokolle bestätigen die Richtigkeit der gemeldeten Qualifikationen, validieren behauptete Ergebnisse und authentifizieren Patientenberichte. Dieser strenge Ansatz gewährleistet die Integrität der Akkreditierung der Akademie."
          }
        },
        "ratings": {
          "title": "Abteilung für Rating-Überwachung",
          "description": "Kontinuierliche Überwachung und Aktualisierung aktueller Bewertungen für Spezialisten, Dienstleistungen, Organisationen und Methoden in der Komplementärmedizin.",
          "long_desc": "Die Abteilung für Rating-Überwachung unterhält dynamische Bewertungssysteme für Praktiker, Dienstleistungen, Organisationen und Methoden und bietet transparente Qualitätsindikatoren für Patienten und Interessengruppen.",
          "sections": {
            "methodology_title": "Bewertungsmethodik",
            "methodology_content": "Unser mehrdimensionales Bewertungssystem umfasst objektive Maße (Qualifikationen, Ergebnisse, Erfahrung) und subjektive Bewertungen (Peer-Evaluationen, Patientenfeedback). Die algorithmische Gewichtung gewährleistet eine faire Darstellung über verschiedene Praxisarten hinweg.",
            "updates_title": "Kontinuierliche Updates",
            "updates_content": "Bewertungen werden kontinuierlich aktualisiert, sobald neue Informationen verfügbar sind. Echtzeit-Datenfeeds erfassen Qualifikationsänderungen, neue Ergebnisberichte und neue Bewertungen. Vierteljährliche umfassende Überprüfungen gewährleisten Genauigkeit und Relevanz.",
            "transparency_title": "Transparenzstandards",
            "transparency_content": "Die Abteilung veröffentlicht detaillierte Dokumentationen zu Bewertungskriterien, Berechnungsmethoden und Datenquellen. Praktiker erhalten Benachrichtigungen über Bewertungsänderungen mit detaillierten Erklärungen und Berufungsverfahren."
          },
          "vote_action": "Abstimmen",
          "rate_efficiency": "Effizienz bewerten",
          "effectiveness_score": "Effektivitätsbewertung",
          "total_votes": "Gesamtstimmen: 500+"
        },
        "awards": {
          "title": "Abteilung für Preise & Ehrungen",
          "description": "Etablierte Auszeichnungen und Anerkennungsprogramme für angesehene Spezialisten, innovative Methoden und vorbildliche Schulen auf diesem Gebiet.",
          "long_desc": "Die Abteilung für Preise & Ehrungen verwaltet Anerkennungsprogramme, die Exzellenz in der Praxis, Forschung, Bildung und im Dienst der Komplementärmedizin feiern.",
          "faces_title": "Gesichter des Jahres 2026",
          "lazarenko_award": {
            "name": "Wjatscheslaw Lasarenko",
            "award_type": "Bester Spezialist in Komplementärmedizin",
            "description_short": "Herausragende klinische Ergebnisse in der Initiologie-Methodik. 1.724 Patientenfälle mit 70,2% vollständiger Remissionsrate.",
            "description_full": "Basierend auf einer umfassenden Analyse von 1.724 Patientenfällen mit einer vollständigen klinischen Remissionsrate von 70,2% innerhalb einer durchschnittlichen Interventionsdauer von 30 Tagen. Alle Patienten hatten zuvor konventionelle Behandlungen ohne zufriedenstellende Ergebnisse durchlaufen.",
            "conferred_by": "AACM-Expertenrat",
            "date": "2026",
            "read_more": "Mehr lesen",
            "read_less": "Einklappen"
          },
          "dispenza_award": {
            "name": "Joe Dispenza",
            "award_type": "Bester Spezialist für Persönlichkeitstransformation",
            "description_short": "Bahnbrechende Beiträge zur persönlichen Transformation durch Meditation, Neurowissenschaften und Epigenetik. NYT-Bestsellerautor.",
            "description_full": "Dr. Joe Dispenza ist ein renommierter Forscher und New York Times-Bestsellerautor, dessen Arbeit Quantenphysik, Neurowissenschaften und menschliches Potenzial verbindet. Schöpfer von Transformationsprogrammen in über 120 Ländern. Seine Meditationsretreats haben Zehntausenden geholfen, messbare Veränderungen in Gehirnfunktion und Genexpression zu erreichen.",
            "conferred_by": "AACM-Expertenrat",
            "date": "2026"
          },
          "sections": {
            "categories_title": "Anerkennungskategorien",
            "categories_content": "Jährliche Auszeichnungen würdigen herausragende Leistungen in klinischer Praxis, Forschungsinnovation, exzellenter Bildung und gemeinnützigem Dienst. Spezialisierte Kategorien ehren Beiträge zu bestimmten Modalitäten und Bevölkerungsgruppen.",
            "selection_title": "Auswahlprozess",
            "selection_content": "Preisträger werden durch einen strengen Prozess ausgewählt, der Peer-Nominierung, Dokumentenprüfung und Komiteebewertung umfasst. Auswahlkomitees bestehen aus führenden Praktikern, Forschern und Patientenvertretern.",
            "lifetime_title": "Lebenswerk",
            "lifetime_content": "Die höchste Auszeichnung der Akademie, der Preis für das Lebenswerk, ehrt Personen, deren nachhaltige Beiträge das Fachgebiet maßgeblich vorangebracht haben. Preisträger haben typischerweise Exzellenz über mehrere Jahrzehnte und Bereiche hinweg gezeigt."
          }
        },
        "education": {
          "title": "Abteilung für Bildungsprogramme",
          "description": "Akkreditierte Lehrpläne, berufliche Weiterbildungskurse und Zertifizierungsprogramme für Praktiker auf allen Ebenen.",
          "long_desc": "Die Abteilung für Bildungsprogramme entwickelt, akkreditiert und liefert umfassende Lehrpläne für Praktiker der Komplementärmedizin in allen Karrierestufen.",
          "sections": {
            "curriculum_title": "Lehrplanentwicklung",
            "curriculum_content": "Unsere Lehrplanspezialisten arbeiten mit Fachexperten zusammen, um evidenzbasierte Bildungsinhalte zu erstellen. Programme decken Grundlagenwissen, klinische Fähigkeiten, Geschäftspraktiken und spezialisierte Modalitäten ab.",
            "accreditation_title": "Institutionelle Akkreditierung",
            "accreditation_content": "Die Abteilung bewertet Bildungseinrichtungen, die eine Akkreditierung durch die Akademie anstreben. Bewertungskriterien umfassen Fakultätsqualifikationen, Lehrplanstrenge, klinische Ausbildungsstätten und Absolventenergebnisse.",
            "continuing_title": "Weiterbildung",
            "continuing_content": "Obligatorische Weiterbildungsanforderungen stellen sicher, dass Praktiker aktuelles Wissen und Fähigkeiten aufrechterhalten. Die Abteilung bietet diverse Lernformate an, darunter Konferenzen, Online-Kurse und klinische Intensivkurse."
          }
        },
        "research": {
          "title": "Abteilung für Wissenschaftliche Forschung",
          "description": "Akademische Studien, klinische Versuche und evidenzbasierte Forschungsinitiativen, die das wissenschaftliche Fundament der Komplementärmedizin voranbringen.",
          "long_desc": "Die Abteilung für wissenschaftliche Forschung koordiniert klinische Studien, grundlagenwissenschaftliche Untersuchungen und systematische Überprüfungen, die die Evidenzbasis für die Komplementärmedizin voranbringen.",
          "sections": {
            "trials_title": "Klinische Studien",
            "trials_content": "Die Abteilung sponsert und koordiniert randomisierte kontrollierte Studien zur Untersuchung der Wirksamkeit und Sicherheit komplementärer Interventionen. Das Studiendesign folgt internationalen Standards für wissenschaftliche Strenge und ethisches Verhalten.",
            "reviews_title": "Systematische Überprüfungen",
            "reviews_content": "Regelmäßige systematische Überprüfungen synthetisieren bestehende Forschung zu spezifischen Modalitäten und Bedingungen. Diese Überprüfungen informieren klinische Leitlinien, Bildungsinhalte und regulatorische Einreichungen.",
            "grants_title": "Forschungsstipendien",
            "grants_content": "Wettbewerbsfähige Stipendienprogramme unterstützen von Forschern initiierte Forschung zu prioritären Fragen. Förderkategorien umfassen Pilotstudien, groß angelegte Versuche und Projekte zur Methodenentwicklung."
          }
        },
        "diagnostics": {
          "title": "Abteilung für Diagnosemethoden",
          "description": "Forschung und Standardisierung komplementärer diagnostischer Ansätze, einschließlich traditioneller Bewertungstechniken und innovativer Methoden.",
          "long_desc": "Die Abteilung für Diagnosemethoden erforscht, standardisiert und validiert komplementäre diagnostische Ansätze, die in der Patientenbewertung und Behandlungsplanung verwendet werden.",
          "sections": {
            "validation_title": "Diagnostische Validierung",
            "validation_content": "Die Abteilung führt Zuverlässigkeits- und Validitätsstudien für diagnostische Techniken durch, die in der Komplementärmedizin verwendet werden. Die Forschung untersucht die Übereinstimmung zwischen Bewertern, die Test-Retest-Stabilität und die Korrelation mit konventionellen Maßen.",
            "standardization_title": "Standardisierungsbemühungen",
            "standardization_content": "Arbeitsgruppen entwickeln standardisierte Protokolle für häufig verwendete diagnostische Verfahren. Diese Protokolle gewährleisten Konsistenz in Anwendung und Interpretation über Praktiker und Einstellungen hinweg.",
            "tech_title": "Technologieintegration",
            "tech_content": "Aufkommende diagnostische Technologien werden auf ihre potenzielle Integration in die komplementärmedizinische Praxis bewertet. Bewertungskriterien umfassen Genauigkeit, Zugänglichkeit und Kompatibilität mit bestehenden Ansätzen."
          }
        },
        "publications": {
          "title": "Abteilung für Forschungspublikationen",
          "description": "Veröffentlichung von Forschungsdaten zu verbreiteten Methoden, Spezialisten und Organisationen in internationalen und länderspezifischen Formaten. Ratingvergabe und Identifizierung von Marktführern und Nachzüglern.",
          "long_desc": "Die Abteilung für Forschungspublikationen verbreitet Forschungsergebnisse, Marktanalysen und Ratingdaten in Formaten, die für diverse Interessengruppen in internationalen und regionalen Märkten zugänglich sind.",
          "sections": {
            "types_title": "Publikationstypen",
            "types_content": "Die Abteilung produziert Peer-Review-Forschungsartikel, Branchenberichte, Ratingzusammenfassungen und Bildungsmaterialien. Publikationen reichen von technischen wissenschaftlichen Arbeiten bis hin zu zugänglichen Zusammenfassungen für ein allgemeines Publikum.",
            "editions_title": "Internationale Ausgaben",
            "editions_content": "Länderspezifische Ausgaben passen globale Daten an lokale Kontexte an. Regionale Publikationen berücksichtigen lokale regulatorische Rahmenbedingungen, kulturelle Überlegungen und Marktbedingungen und wahren gleichzeitig die Konsistenz mit internationalen Standards.",
            "reports_title": "Marktführerberichte",
            "reports_content": "Vierteljährliche Berichte identifizieren Marktführer und Nachzügler über Praktikerkategorien, Dienstleistungsarten und geografische Regionen hinweg. Diese Analysen unterstützen Benchmarking und strategische Planung."
          }
        },
        "council": {
          "title": "Expertenrat",
          "description": "Empfehlungen und Beratung durch die führenden Spezialisten der Akademie, die maßgebliche Perspektiven zu bewährten Verfahren und neuen Entwicklungen bieten.",
          "long_desc": "Der Expertenrat besteht aus angesehenen Führungspersönlichkeiten, die strategische Beratung, maßgebliche Empfehlungen und Aufsicht für Initiativen der Akademie bieten.",
          "sections": {
            "composition_title": "Zusammensetzung des Rates",
            "composition_content": "Der Rat umfasst anerkannte Autoritäten aus klinischer Praxis, akademischer Forschung, Gesundheitspolitik und Patientenvertretung. Mitglieder dienen rotierenden Amtszeiten und repräsentieren diverse Modalitäten und geografische Regionen.",
            "advisory_title": "Beratende Funktionen",
            "advisory_content": "Ratsmitglieder beraten zu strategischen Prioritäten, bewerten vorgeschlagene Initiativen und lösen komplexe Akkreditierungsfälle. Regelmäßige Treffen befassen sich mit aufkommenden Themen und langfristiger Planung.",
            "public_title": "Öffentliche Empfehlungen",
            "public_content": "Der Rat gibt öffentliche Erklärungen zu Angelegenheiten von Bedeutung für das Fachgebiet ab. Empfehlungen befassen sich mit klinischen Praktiken, Berufsethik, regulatorischen Angelegenheiten und Forschungsprioritäten."
          }
        },
        "related_departments": "Verwandte Abteilungen",
        "department_info": "Abteilungsinformationen",
        "contact_dept": "Abteilung kontaktieren",
        "submit_inquiry": "Anfrage senden",
        "view_reports": "Berichte ansehen"
      },
      "associations": {
        "title": "Berufsverbände",
        "description": "Die folgende Liste enthält anerkannte internationale und regionale Verbände in den Bereichen Parapsychologie, Yoga und Komplementärmedizin. Diese Organisationen arbeiten daran, professionelle Standards aufrechtzuerhalten, Forschung zu betreiben und ihre jeweiligen Disziplinen zu fördern.",
        "table": {
          "organization": "Organisation",
          "location": "Standort",
          "field": "Bereich",
          "website": "Webseite",
          "description": "Beschreibung"
        },
        "disclaimer": "Die Amerikanische Akademie für Komplementärmedizin ist nicht direkt mit diesen externen Organisationen verbunden, sofern nicht ausdrücklich anders angegeben.",
        "items": {
          "pa": "Gegründet 1957; fördert Parapsychologie als Wissenschaft, integriert Ergebnisse mit anderen Zweigen; verbunden mit AAAS.",
          "spr": "Untersucht Psychokinese, vergangene Leben, Medien, Hellseher, Erscheinungen, Poltergeister, Nahtod- und außerkörperliche Erfahrungen.",
          "aipr": "Gemeinnützige Organisation (seit 1977); Forschung in Parapsychologie, Reinkarnation und anomaler Kognition.",
          "ya": "Gemeinnützige Organisation; unterstützt Yogalehrer, Schulen und Unterstützer; erweitert Zugang und Inklusivität.",
          "iyf": "Gemeinnütziger Verband; vereint Praktizierende, Lehrer, Zentren und Organisationen; höchstes Organ ist die Generalversammlung.",
          "wya": "Zertifiziert Lehrer, Schulen, Clubs, Verbände und Föderationen; bewahrt Authentizität des Yoga, fördert berufliche Entwicklung und kulturellen Austausch.",
          "yai": "Internationale Organisation zur weltweiten Förderung authentischer Yoga-Traditionen und Zertifizierungsstandards.",
          "asnmop": "Berufsverband, der Spezialisten für alternative Medizin und Wellness-Praktiken vereint; konzentriert sich auf Standards und Entwicklung des Fachgebiets.",
          "iain": "Internationale Akademie, die sich dem Studium, der Forschung und der Praxis der Initiologie widmet."
        }
      },
      "research": {
        "award_rationale": {
          "title": "Wissenschaftliche Begründung für die Verleihung der höchsten AACM-Auszeichnung",
          "subtitle": "V. Lazarenko — Träger der Auszeichnung Bester Spezialist für Komplementärmedizin",
          "intro": "Im Rahmen der freiwilligen Fachbegutachtung und professionellen Akkreditierungsverfahren für den Praktiker und die angewandte therapeutische Methodik erhielt der AACM-Expertenrat umfassenden Zugang und führte eine systematische Analyse von 1.724 individuellen Patientenakten durch. Jede Fallakte enthielt vollständige klinische Anamnese, therapeutische Interventionsprotokolle und Behandlungschronologien, belegt durch erschöpfende korrespondierende medizinische Dokumentation einschließlich: Laboranalysen, Ultraschalluntersuchungen, elektrokardiographische Studien, Ösophagogastroduodenoskopie-Berichte, histopathologische Biopsiebefunde und zusätzliche diagnostische Modalitäten entsprechend der klinischen Präsentation jedes Patienten. Die Dokumentation umfasste ferner formelle ärztliche Gutachten, Behandlungsanordnungen, detaillierte therapeutische Verlaufsprotokolle, longitudinale Krankheitsdynamiken und umfassende Sitzungsprotokolle mit quantifizierten Ergebnismessungen der von V. Lazarenko durchgeführten Interventionen.",
          "diagnoses": "Die analysierte Patientenkohorte präsentierte diverse pathologische Zustände einschließlich: peptische Ulkuskrankheit (Magen und Duodenum), Uterusleiomyome, fibrozystische Mastopathie, Psoriasis vulgaris, Virushepatitis (Typen B und C), Diabetes mellitus (Typen I und II), kardiale Arrhythmien, paroxysmale Tachykardie, maligne Neoplasien im Frühstadium (Stadien I-II) und verschiedene andere chronische Erkrankungen, die auf konventionelle Pharmakotherapie resistent waren.",
          "results": "Die statistische Analyse der 1.724 dokumentierten Fälle ergab, dass 1.210 Patienten (70,2%) eine vollständige klinische Remission mit objektiver Bestätigung der Diagnoseauflösung bei nachfolgender medizinischer Nachuntersuchung erreichten. Die mittlere Dauer der therapeutischen Intervention nach dem Protokoll von V. Lazarenko betrug 30 Tage. Bemerkenswert ist, dass 100% der Patienten in dieser Kohorte zuvor konventionelle pharmakologische Behandlung ohne zufriedenstellende therapeutische Ergebnisse erhalten hatten, was eine Population therapierefraktärer Fälle darstellt.",
          "verification": "Die methodologische Validierung umfasste randomisierte geschichtete Stichproben von Patientenakten mit multimodalen Identitätsverifizierungsprotokollen: dokumentarische Authentifizierung, synchrone Videokonferenz-Interviews und aufgezeichnete Patientenaussagen. Diese Verifizierungsverfahren etablierten schlüssig die Authentizität und wissenschaftliche Validität der eingereichten klinischen Daten, wobei keine Fälle von Datenfälschung oder Manipulation festgestellt wurden.",
          "unique": "Dies stellt ein beispielloses Volumen systematisch dokumentierter klinischer Daten für einen einzelnen Komplementärmedizin-Praktiker in der Geschichte der integrativen Gesundheitsforschung dar. Kein vergleichbarer Datensatz existiert in institutionellen oder unabhängigen Forschungsarchiven, was eine Standard-Vergleichs-Metaanalyse mit anderen Praktikern oder Methodologien ausschließt.",
          "conclusion": "Basierend auf den vorliegenden Evidenzen und rigorosem Peer-Review verleiht der AACM-Expertenrat und die Abteilung für wissenschaftliche Forschung hiermit V. Lazarenko die Auszeichnung Bester Spezialist für Komplementärmedizin durch einstimmigen Beschluss.",
          "methodology_recognition": "Darüber hinaus erkennt der Expertenrat die Initiologie — die von V. Lazarenko praktizierte therapeutische Methodik — offiziell als das führende System der Komplementärmedizin auf Grundlage nachgewiesener klinischer Wirksamkeit an.",
          "signature_name": "Dr. Marcus W. Thornberg, Ph.D.",
          "signature_title": "Direktor, Abteilung für Wissenschaftliche Forschung | Leitender Wissenschaftlicher Mitarbeiter, AACM"
        }
      },
      "price": {
        "title": "Preise für Bildungsprogramme",
        "subtitle": "Fernstudienprogramme und Energiepraxis der Komplementärmedizin",
        "products": {
          "basic": {
            "title": "BASIC Stufen 1 - 2",
            "desc": "12 praktische Videolektionen zur Aktivierung des körpereigenen Energiesystems"
          },
          "professional": {
            "title": "Bachelor",
            "desc": "Ein professionelles Niveau"
          },
          "master": {
            "title": "MASTER Stufe 4",
            "desc": "Das Niveau des Meisters. Workshops zu Wellness- und Energiesicherheitstechnologien"
          },
          "teacher": {
            "title": "MASTER - LEHRER Stufe 5",
            "desc": "Das Niveau Master - Lehrer"
          },
          "special": {
            "title": "Magister",
            "desc": "Magisterstufe. Gruppe von Sozial-, Reinigungs-, Informations- und Energieinformationssicherheitsmethoden."
          }
        },
        "buy_now": "Jetzt kaufen",
        "note_title": "Hinweis zu Zahlungen",
        "note_desc": "Sie werden zu unserem sicheren Zahlungspartner weitergeleitet, um Ihre Transaktion abzuschließen. Nach dem Kauf erhalten Sie Zugangsanweisungen per E-Mail.",
        "membership": {
          "title": "AACM Mitgliedsbeiträge",
          "who_can_join": "Wer kann Vollmitglied der AACM werden?",
          "who_can_join_desc": "Weltweite Führungskräfte in der Branche der Komplementärmedizin und Wellness-Praktiken, angesehene und verdiente Spezialisten mit tadellosem Ruf und bedeutenden Erfolgen in der beruflichen Tätigkeit.",
          "one_time": "Einmalig",
          "annual": "Jährlich",
          "joining_fee": "Aufnahmegebühr",
          "joining_fee_desc": "Einmalige Aufnahmegebühr für neue Mitglieder der American Academy of Complementary Medicine.",
          "annual_fee": "Mitgliedsbeitrag",
          "annual_fee_desc": "Jährlicher Beitrag zur Aufrechterhaltung des aktiven Mitgliedsstatus und Zugang zu allen AACM-Vorteilen und Ressourcen.",
          "apply_now": "Mitgliedschaft beantragen",
          "renew_now": "Mitgliedschaft verlängern"
        }
      },
      "contacts": {
        "title": "Kontaktieren Sie uns",
        "intro": "Die Amerikanische Akademie für Komplementärmedizin begrüßt Anfragen von Praktikern, Forschern, Medien und der Öffentlichkeit. Bitte nutzen Sie die untenstehenden Kontaktinformationen, um die entsprechende Abteilung zu erreichen.",
        "headquarters": "Hauptsitz",
        "general_inquiries": "Allgemeine Anfragen",
        "general_desc": "Für allgemeine Fragen zur Akademie, Mitgliedschaft oder Akkreditierung:",
        "dept_contacts": "Abteilungskontakte: Tel. +1(786)789-9632",
        "accreditation_office": "Akkreditierungsbüro",
        "research_dept": "Forschungsabteilung",
        "media_relations": "Medienarbeit"
      },
      "public_offer": {
        "title": "Öffentliches Angebot (Öffentliche Offerte)",
        "last_updated": "Zuletzt aktualisiert: Februar 2026",
        "section1_title": "1. Allgemeine Bestimmungen",
        "section1_body": "Dieses öffentliche Angebot (die \"Offerte\") ist ein offizieller Vorschlag der American Academy of Complementary Medicine (AACM), einen Vertrag über die Erbringung von Bildungsleistungen im Rahmen des AACM-Standardprogramms abzuschließen. Durch Zahlung der Gebühr und/oder Nutzung der Plattform nimmt der Lernende dieses Angebot vollständig an.",
        "section2_title": "2. Vertragsgegenstand",
        "section2_list": {
          "1": "Der Anbieter gewährt Zugang zum AACM-Standard-Bildungsprogramm, das die Ausbildungsstufen 1–2 umfasst.",
          "2": "Die Leistungen umfassen den Zugang zur Online-Plattform: platform.aacmedinc.org.",
          "3": "Die Programmmaterialien werden digital bereitgestellt; Tempo und Teilnahme hängen von der Mitwirkung des Lernenden und dem Plattform-Zeitplan ab."
        },
        "section3_title": "3. Preis und Zahlung",
        "section3_list": {
          "1": "Der Preis des Programms beträgt 250 USD (zweihundertfünfzig US-Dollar).",
          "2": "Die Zahlung erfolgt im Voraus in der auf der AACM-Website oder Plattform angegebenen Weise.",
          "3": "Der Zeitpunkt der Annahme des Angebots ist die erfolgreiche Zahlung und/oder der Beginn der Nutzung der Plattform."
        },
        "section4_title": "4. Plattformzugang",
        "section4_body": "Der Zugang wird dem Lernenden über die AACM-Plattform (platform.aacmedinc.org) mit den bei der Registrierung erstellten Zugangsdaten bereitgestellt. Der Lernende ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln.",
        "section5_title": "5. Garantien, Rücktritt und Rückerstattung",
        "section5_list": {
          "1": "AACM bemüht sich, Zugang zum Programm und zu den Materialien wie beschrieben bereitzustellen; ein konkreter Lernerfolg wird jedoch nicht garantiert und hängt von den Bemühungen des Lernenden ab.",
          "2": "Rückerstattungsanträge werden individuell geprüft. Wird der Zugang zur Plattform aufgrund von AACM-Verschulden nicht gewährt, kann der Lernende eine vollständige Rückerstattung verlangen.",
          "3": "Wenn der Lernende bereits Zugang zu digitalen Materialien erhalten und die Plattform genutzt hat, kann AACM eine Rückerstattung ablehnen oder nach eigenem Ermessen eine teilweise Rückerstattung gewähren."
        },
        "section6_title": "6. Haftung",
        "section6_body": "AACM haftet nicht für die Unmöglichkeit der Nutzung der Leistungen aus Gründen außerhalb des Einflussbereichs von AACM (einschließlich Internetzugang, Geräteprobleme, Ausfälle von Drittanbietern). AACM erbringt im Rahmen dieses Programms keine medizinischen Leistungen; die Inhalte dienen Bildungszwecken.",
        "section7_title": "7. Rechte und Pflichten der Parteien",
        "section7_body": "Der Anbieter verpflichtet sich, Zugang zum Programm und zur Plattform zu gewähren; der Lernende verpflichtet sich zur Zahlung, zur Einhaltung der Plattformregeln und zur Nutzung der Materialien ausschließlich zu eigenen Bildungszwecken. Eine unbefugte Weitergabe der Materialien ist untersagt.",
        "sample_contract": {
          "title": "Muster-Expertenvertragsvereinbarung",
          "description": "Nachfolgend finden Sie einen Muster-Standardvertrag zwischen AACM und einem Expertenauftragnehmer für Akkreditierungs- und Expertenbewertungsdienstleistungen. Dieses Dokument dient als Vorlage zur Darstellung der Bedingungen für die professionelle Zusammenarbeit mit der Akademie.",
          "details_title": "Wesentliche Vertragsbedingungen",
          "contractor": "Auftragnehmer",
          "contractor_name": "Dr. Marcus W. Thornberg, Ph.D.",
          "term": "Vertragslaufzeit",
          "term_value": "5 Jahre",
          "subject": "Vertragsgegenstand",
          "subject_value": "Expertenbewertung und Akkreditierung von Antragstellern gemäß den festgelegten AACM-Regeln und -Bedingungen",
          "rate": "Vergütungssatz",
          "rate_value": "120 USD pro Tag für Expertenbewertungsdienstleistungen",
          "redacted_note": "Personenbezogene Identifikationsdaten und Kontaktinformationen wurden aus Datenschutzgründen geschwärzt.",
          "download_btn": "Mustervertrag ansehen"
        },
      },
      "about": {
        "title": "Akademie-Informationen",
        "type": "Typ",
        "type_val": "Berufsverband & Forschungseinrichtung",
        "headquarters": "Hauptsitz",
        "florida_usa": "Florida, USA 7901 4th st N, ste 300 St Petersburg",
        "fields": "Bereiche",
        "fields_val": "Komplementärmedizin, Integrative Gesundheit, Forschung",
        "intro_p1": "Die <1>Amerikanische Akademie für Komplementärmedizin (AACM)</1> ist eine angesehene Institution, die sich der Förderung, Standardisierung und wissenschaftlichen Validierung komplementärer und integrativer medizinischer Praktiken widmet. Gegründet, um traditionelles Heilwissen mit moderner wissenschaftlicher Strenge zu verbinden, dient die Akademie als globales Zentrum für Praktiker, Forscher und Pädagogen.",
        "mission_title": "Mission & Vision",
        "mission_desc": "Unsere Mission ist es, Exzellenz in der Komplementärmedizin durch strenge Akkreditierung, innovative Forschung und umfassende berufliche Entwicklung zu fördern. Wir stellen uns eine Gesundheitslandschaft vor, in der evidenzbasierte komplementäre Therapien nahtlos in globale Gesundheitssysteme integriert sind und eine sichere, wirksame und ganzheitliche Versorgung für alle bieten.",
        "functions_title": "Kernfunktionen",
        "functions": {
          "accreditation": "<0>Akkreditierung:</0> Festlegung von Goldstandard-Kriterien für Praktiker und Bildungseinrichtungen.",
          "research": "<0>Forschung:</0> Koordination multizentrischer klinischer Studien und systematischer Überprüfungen zum Aufbau der Evidenzbasis.",
          "education": "<0>Bildung:</0> Entwicklung fortschrittlicher Lehrpläne und Weiterbildungsprogramme für medizinische Fachkräfte.",
          "policy": "<0>Politik:</0> Eintreten für regulatorische Rahmenbedingungen, die Patientensicherheit und Ausübungsrechte gewährleisten."
        },
        "reach_title": "Globale Reichweite",
        "reach_desc": "Die Akademie unterhält partnerschaftliche Beziehungen zu Organisationen der Komplementärmedizin in 47 Ländern und fördert den Austausch von Forschungsdaten, Bildungsressourcen und professionellen Standards.",
        "note": "Hinweis: Weitere Details aus der offiziellen Dokumentation werden bearbeitet und in Kürze aktualisiert."
      },
      "registration": {
        "title": "Unternehmensregistrierung",
        "electronic_articles": "Elektronische Gründungsurkunde",
        "doc_number": "Dokumentennummer",
        "status": "Status",
        "active_standing": "Aktiv / Guter Ruf",
        "official_details": "Offizielle Unternehmensdetails",
        "article_1": "Artikel I: Firmenname",
        "article_2": "Artikel II: Hauptsitz",
        "article_3": "Artikel III: Zweck",
        "article_3_desc": "Der Zweck, für den diese Gesellschaft organisiert ist, ist: JEDES RECHTMÄSSIGE GESCHÄFT.",
        "article_4": "Artikel IV: Genehmigte Aktien",
        "article_4_desc": "Die Anzahl der Aktien, die die Gesellschaft ausgeben darf, beträgt: 10.000.000",
        "article_5": "Artikel V: Registrierter Vertreter",
        "president": "E-Mail americanacademyinc@gmail.com",
        "filing_info": "Einreichungsinformationen",
        "filer": "Einreicher:",
        "jurisdiction_label": "Zuständigkeit:",
        "jurisdiction_val": "Florida Profit Corporation"
      },
      "privacy": {
        "title": "Datenschutzrichtlinie",
        "last_updated": "Zuletzt aktualisiert: Januar 2026",
        "intro_title": "1. Einführung",
        "intro_desc": "Die Amerikanische Akademie für Komplementärmedizin (\"AACM\", \"wir\", \"unser\" oder \"uns\") respektiert Ihre Privatsphäre und verpflichtet sich, Ihre persönlichen Daten zu schützen. Diese Datenschutzrichtlinie informiert Sie darüber, wie wir Ihre persönlichen Daten behandeln, wenn Sie unsere Website besuchen (unabhängig davon, von wo aus Sie sie besuchen), und klärt Sie über Ihre Datenschutzrechte auf und wie das Gesetz Sie schützt.",
        "collect_title": "2. Daten, die wir sammeln",
        "collect_desc": "Wir können verschiedene Arten von persönlichen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben:",
        "collect_list": {
          "identity": "<0>Identitätsdaten</0> umfassen Vorname, Nachname, Benutzername oder ähnliche Kennungen, Titel, Geburtsdatum und Geschlecht.",
          "contact": "<0>Kontaktdaten</0> umfassen Rechnungsadresse, Lieferadresse, E-Mail-Adresse und Telefonnummern.",
          "technical": "<0>Technische Daten</0> umfassen Internetprotokoll-(IP)-Adresse, Ihre Anmeldedaten, Browsertyp und -version, Zeitzoneneinstellung und Standort, Browser-Plug-in-Typen und -versionen, Betriebssystem und Plattform sowie andere Technologien auf den Geräten, die Sie für den Zugriff auf diese Website verwenden."
        },
        "use_title": "3. Wie wir Ihre Daten verwenden",
        "use_desc": "Wir werden Ihre persönlichen Daten nur dann verwenden, wenn das Gesetz es uns erlaubt. Am häufigsten werden wir Ihre persönlichen Daten unter folgenden Umständen verwenden:",
        "use_list": {
          "contract": "Wenn wir den Vertrag erfüllen müssen, den wir mit Ihnen schließen werden oder geschlossen haben.",
          "legitimate": "Wenn es für unsere berechtigten Interessen (oder die eines Dritten) notwendig ist und Ihre Interessen und Grundrechte diese Interessen nicht überwiegen.",
          "legal": "Wenn wir einer gesetzlichen oder regulatorischen Verpflichtung nachkommen müssen."
        },
        "security_title": "4. Datensicherheit",
        "security_desc": "Wir haben angemessene Sicherheitsmaßnahmen getroffen, um zu verhindern, dass Ihre persönlichen Daten versehentlich verloren gehen, verwendet oder auf unbefugte Weise abgerufen, verändert oder offengelegt werden. Darüber hinaus beschränken wir den Zugriff auf Ihre persönlichen Daten auf diejenigen Mitarbeiter, Vertreter, Auftragnehmer und andere Dritte, die ein geschäftliches Bedürfnis haben, davon zu wissen.",
        "rights_title": "5. Ihre gesetzlichen Rechte",
        "rights_desc": "Unter bestimmten Umständen haben Sie gemäß den Datenschutzgesetzen Rechte in Bezug auf Ihre persönlichen Daten, einschließlich des Rechts auf Zugang, Berichtigung, Löschung, Einschränkung, Übertragbarkeit, Widerspruch gegen die Verarbeitung, Datenübertragbarkeit und (sofern der rechtmäßige Grund für die Verarbeitung die Einwilligung ist) Widerruf der Einwilligung.",
        "contact_title": "6. Kontaktdaten",
        "contact_desc": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter: <1>privacy@aacm.org</1>."
      },
      "cookies": {
        "title": "Cookie-Richtlinie",
        "last_updated": "Zuletzt aktualisiert: Januar 2026",
        "what_title": "1. Was sind Cookies?",
        "what_desc": "Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät von Websites platziert werden, die Sie besuchen. Sie werden häufig verwendet, damit Websites funktionieren oder effizienter arbeiten, sowie um den Eigentümern der Website Informationen bereitzustellen.",
        "use_title": "2. Wie wir Cookies verwenden",
        "use_desc": "Wir verwenden Cookies für folgende Zwecke:",
        "use_list": {
          "essential": "<0>Notwendige Cookies:</0> Dies sind Cookies, die für den Betrieb unserer Website erforderlich sind. Dazu gehören beispielsweise Cookies, die es Ihnen ermöglichen, sich in sichere Bereiche unserer Website einzuloggen.",
          "analytical": "<0>Analytische/Leistungs-Cookies:</0> Sie ermöglichen es uns, die Anzahl der Besucher zu erkennen und zu zählen und zu sehen, wie sich Besucher auf unserer Website bewegen, wenn sie diese nutzen. Dies hilft uns, die Funktionsweise unserer Website zu verbessern, beispielsweise indem sichergestellt wird, dass Benutzer leicht finden, wonach sie suchen.",
          "functionality": "<0>Funktions-Cookies:</0> Diese werden verwendet, um Sie wiederzuerkennen, wenn Sie auf unsere Website zurückkehren. Dies ermöglicht es uns, unsere Inhalte für Sie zu personalisieren, Sie mit Namen zu begrüßen und Ihre Präferenzen zu speichern (z. B. Ihre Wahl der Sprache oder Region)."
        },
        "managing_title": "3. Cookies verwalten",
        "managing_desc": "Die meisten Webbrowser ermöglichen eine gewisse Kontrolle über die meisten Cookies über die Browsereinstellungen. Um mehr über Cookies zu erfahren, einschließlich der Frage, wie Sie sehen können, welche Cookies gesetzt wurden, besuchen Sie <1>www.aboutcookies.org</1> oder <3>www.allaboutcookies.org</3>.",
        "managing_list_intro": "Erfahren Sie, wie Sie Cookies in gängigen Browsern verwalten können:"
      },
      "healing_methods": {
        "page_title": "Überblick über Heil- und Energiepraktiken",
        "page_subtitle": "Umfassender Leitfaden zu traditionellen und modernen Heilmethoden",
        "back_to_marketing": "Zurück zur Marketingabteilung",
        "top_organizations": "Top-Organisationen & Verbände",
        "methods": {
          "reiki": { 
            "title": "Reiki: Die Kunst der universellen Lebensenergie", 
            "content": "Reiki ist eine japanische Technik zur Stressreduktion und Entspannung, die auch die Heilung fördert. Sie wird durch 'Handauflegen' verabreicht und basiert auf der Idee, dass eine unsichtbare 'Lebensenergie' durch uns fließt und uns am Leben erhält. Wenn die 'Lebensenergie' niedrig ist, werden wir eher krank oder fühlen uns gestresst, und wenn sie hoch ist, sind wir eher fähig, glücklich und gesund zu sein.",
            "organizations": ["International Association of Reiki Professionals (IARP)", "Reiki Healing Association (RHA)", "The Reiki Association (UK)"]
          },
          "bioenergetics": { 
            "title": "Bioenergetik: Integration von Körper und Geist", 
            "content": "Bioenergetik ist eine Form der Körperpsychotherapie, die auf der Kontinuität zwischen Körper und Geist basiert. Sie zielt darauf ab, chronische Muskelverspannungen zu lösen und die emotionale Gesundheit wiederherzustellen. Durch Erdung und Atemarbeit hilft sie, Blockaden zu lösen.",
            "organizations": ["International Institute for Bioenergetic Analysis (IIBA)", "European Federation for Bioenergetic Analysis-Psychotherapy", "Massachusetts Society for Bioenergetic Analysis"]
          },
          "qigong": { 
            "title": "Qigong: Kultivierung der Lebensenergie", 
            "content": "Qigong ist eine alte chinesische Praxis, die sanfte körperliche Bewegungen, mentale Konzentration und tiefe Atmung kombiniert. Es wird für Gesundheit, Spiritualität und Kampfkunsttraining verwendet. Als Teil der Traditionellen Chinesischen Medizin fördert es den Fluss des Qi.",
            "organizations": ["International Health Qigong Federation (IHQF)", "National Qigong Association (NQA)", "Chinese Health Qigong Association"]
          },
          "acupuncture": { 
            "title": "Akupunktur: Ausgleich des Meridiansystems", 
            "content": "Akupunktur ist ein Schlüsselbestandteil der traditionellen chinesischen Medizin, bei der dünne Nadeln in den Körper eingeführt werden, um den Fluss des Qi zu verbessern. Sie wird zur Schmerzlinderung und zur Förderung des allgemeinen Wohlbefindens eingesetzt.",
            "organizations": ["World Federation of Acupuncture-Moxibustion Societies (WFAS)", "British Acupuncture Council (BAcC)", "European Traditional Chinese Medicine Association"]
          },
          "hatha_yoga": { 
            "title": "Hatha Yoga: Die Grundlage des körperlichen Gleichgewichts", 
            "content": "Hatha Yoga konzentriert sich auf körperliche Übungen (Asanas), um den Körper zu beherrschen, und bereitet ihn auf tiefere spirituelle Praktiken vor. Es kombiniert Haltungen mit Atemkontrolle (Pranayama) für körperliche und geistige Ausgeglichenheit.",
            "organizations": ["Yoga Alliance", "International Yoga Federation (IYF)", "World Yoga Association (WYA)", "British Wheel of Yoga"]
          },
          "kundalini_yoga": { 
            "title": "Kundalini Yoga: Das Yoga des Bewusstseins", 
            "content": "Kundalini Yoga ist ein dynamisches Werkzeug, das entwickelt wurde, um Ihnen eine Erfahrung Ihrer Seele zu vermitteln. Es konzentriert sich auf das Erwecken der Kundalini-Energie an der Basis der Wirbelsäule durch Haltungen, Atem, Mantra und Meditation.",
            "organizations": ["Kundalini Research Institute (KRI)", "International Kundalini Yoga Teachers Association (IKYTA)", "3HO (Healthy, Happy, Holy Organization)"]
          },
          "pranayama": { 
            "title": "Pranayama: Die Wissenschaft der Atemkontrolle", 
            "content": "Pranayama ist die alte Praxis der Atemkontrolle, die oft zusammen mit körperlichen Haltungen und Meditation verwendet wird. Durch bewusstes Atmen kann man Lebensenergie lenken und geistige Klarheit fördern.",
            "organizations": ["Global Professional Breathwork Alliance", "Yoga Alliance", "International Association of Yoga Therapists (IAYT)"]
          },
          "theta_healing": { 
            "title": "Theta Healing: Neuprogrammierung des Unterbewusstseins", 
            "content": "ThetaHealing ist eine Meditationstechnik, die darauf abzielt, einschränkende Glaubenssätze zu klären und ein positives Leben zu fördern. Durch den Zugang zum Theta-Gehirnwellenzustand können tiefgreifende Veränderungen im Unterbewusstsein bewirkt werden.",
            "organizations": ["ThetaHealing Institute of Knowledge (THInK)"]
          },
          "silva_method": { 
            "title": "Die Silva-Methode: Beherrschung des Geistes", 
            "content": "Die Silva-Methode ist ein Selbsthilfe- und Meditationsprogramm, das darauf abzielt, die Fähigkeiten eines Individuums durch Entspannung und Gehirnwellentraining zu steigern. Es fördert Intuition, Kreativität und Problemlösungsfähigkeiten.",
            "organizations": ["Silva International", "Silva Method Great Britain"]
          },
          "joe_dispenza": { 
            "title": "Die Joe-Dispenza-Methode: Neuverdrahtung des Gehirns", 
            "content": "Die Methode von Dr. Joe Dispenza kombiniert Neurowissenschaften und Quantenphysik, um Menschen zu helfen, ihr Gehirn neu zu verdrahten und ihre Realität zu verändern. Durch Meditation und Herzkohärenz können alte Muster durchbrochen werden.",
            "organizations": ["Encephalon Inc.", "NeuroChangeSolutions (NCS)", "InnerScience Research Fund"]
          },
          "deepak_chopra": {
            "title": "Deepak Chopra Methode: Integration von Geist, Korper und Seele",
            "content": "Dr. Deepak Chopra ist ein weltbekannter Pionier der integrativen Medizin und personlichen Transformation. Sein Ansatz verbindet ayurvedische Weisheit mit moderner Quantenphysik und Geist-Korper-Medizin. Seine Methoden betonen Meditation, Achtsamkeit und bewusstes Leben als Weg zum totalen Wohlbefinden.",
            "organizations": ["Chopra Foundation", "Chopra Global", "The Chopra Center for Wellbeing"]
          },
          "initiology": { 
            "title": "Initiologie: Energie-Informationstechnologie der neuesten Generation", 
            "content": "Die Initiologie stellt die neueste Generation von Energie-Informationstechnologien dar und bietet einen schnellen und tiefgreifenden Ansatz für die menschliche Entwicklung und Heilung. Sie nutzt hochfrequente kosmische Kanäle für eine sofortige Transformation und arbeitet direkt mit Informationsfeldern.",
            "organizations": ["Scientific Research Center of Initiology (НИЦ Инициологии)", "Professional Association of Initiologists"]
          }
        }
      }
    }
  },
  ru: {
    translation: {
      "common": {
        "academy_name": "Американская Академия Комплементарной Медицины",
        "tagline": "Развитие отрасли через исследования, образование и профессиональные стандарты",
        "read_more": "Читать далее",
        "back_home": "На главную",
        "quick_links": "Быстрые ссылки",
        "contact_us": "Связаться с нами",
        "status": "Статус",
        "active": "Активен",
        "staff": "Персонал",
        "professionals": "24 специалиста",
        "reports_to": "Подчиняется",
        "executive_director": "Исполнительный директор",
        "last_edited": "Последнее редактирование страницы: 23 января 2026 г.",
        "copyright": "Контент доступен в соответствии с правилами публикации Академии, если не указано иное.",
        "all_rights_reserved": "© 2026 AACM. Все права защищены.",
        "login_signup": "Войти / Регистрация",
        "view_official_registration": "Посмотреть официальную регистрацию",
        "jurisdiction": "Юрисдикция: 7901 4TH ST N, STE 300 ST PETERSBURG, FL. 33702 United States Tel.+1(786)7899632."
      },
      "nav": {
        "main_page": "Главная",
        "departments": "Департаменты",
        "industry_analytics": "Отраслевая аналитика",
        "marketing_research": "Маркетинг и исследования рынка",
        "expertise_accreditation": "Экспертиза и аккредитация",
        "rating_monitoring": "Мониторинг рейтингов",
        "awards_honors": "Награды и почести",
        "educational_programs": "Образовательные программы",
        "scientific_research": "Научные исследования",
        "diagnostic_methods": "Методы диагностики",
        "research_publications": "Научные публикации",
        "expert_council": "Экспертный совет",
        "about": "О нас",
        "academy_info": "Информация об Академии",
        "price": "Цены",
        "associations": "Ассоциации",
        "legal": "Юридическая информация",
        "privacy_policy": "Политика конфиденциальности",
        "cookie_policy": "Политика использования куки",
        "registration_data": "Регистрационные данные",
        "public_offer": "Публичная оферта"
      },
      "home": {
        "hero_title": "Американская Академия Комплементарной Медицины",
        "hero_subtitle": "Развитие науки и практики комплементарной медицины через исследования, образование и профессиональные стандарты",
        "academy_overview": "Обзор Академии",
        "headquarters": "Штаб-квартира",
        "florida_usa": "Флорида, США 7901 4th st N, ste 300 St Petersburg",
        "focus": "Направление",
        "complementary_medicine": "Комплементарная медицина",
        "intro_p1": "<1>Американская Академия Комплементарной Медицины</1> (AACM) — ведущая профессиональная организация, занимающаяся развитием области <3>комплементарной медицины</3> посредством тщательных исследований, комплексного образования и установления профессиональных стандартов. Академия выступает в качестве основного аккредитующего органа и научно-исследовательского учреждения для практик комплементарной медицины в США и устанавливает партнерские отношения с учреждениями в 47 странах.",
        "history_founded": "Американская академия комплементарной медицины (American Academy of Complementary Medicine, также известная как Академия парапсихологии и медицины) основана в Калифорнии в <1>1970 году</1>.",
        "history_milestones_title": "Основные вехи деятельности:",
        "history_milestone_1": "Исследования комплементарной медицины. Представление результатов исследований в профессиональном сообществе и для широкой аудитории.",
        "history_milestone_2": "В <1>1978 году</1> заложила основу для создания Американской ассоциации холистической медицины (ныне — American Academy of Complementary Medicine).",
        "history_milestone_3": "После перерыва в работе пережила профессиональное преобразование: привлекли выдающихся учёных и специалистов, расширили сеть международных контактов.",
        "intro_p2": "Миссия Академии охватывает оценку практикующих специалистов, сертификацию образовательных программ и публикацию научно обоснованных исследований. Через свои различные департаменты AACM предоставляет комплексные услуги, включая <1>аккредитацию специалистов</1>, <3>анализ рынка</3> и координацию <5>клинических исследований</5>.",
        "contents": "Содержание",
        "academy_departments": "Департаменты Академии",
        "research_initiatives": "Исследовательские инициативы",
        "accreditation_process": "Процесс аккредитации",
        "international_partnerships": "Международное партнерство",
        "departments_intro": "Академия работает через сеть специализированных департаментов, каждый из которых сосредоточен на определенных аспектах развития комплементарной медицины. Эти департаменты сотрудничают для предоставления комплексных услуг практикующим специалистам, исследователям и общественности.",
        "research_intro": "Академия координирует многочисленные исследовательские инициативы, направленные на установление эффективности и безопасности практик комплементарной медицины. Текущие направления включают:",
        "research_list": {
          "1": "Исследования клинических результатов для протоколов интегративного лечения",
          "2": "Сравнительные исследования эффективности различных методов",
          "3": "Мониторинг безопасности пациентов и отчетность о нежелательных явлениях",
          "4": "Анализ экономической эффективности для интеграции в здравоохранение"
        },
        "accreditation_intro": "Процесс аккредитации Академии представляет собой золотой стандарт профессиональной сертификации в комплементарной медицине. Многоступенчатая оценка включает:",
        "accreditation_steps": {
          "edu_verif": "Проверка образования",
          "edu_desc": "Обзор академических дипломов и сертификатов о профессиональной подготовке",
          "clinical_assess": "Клиническая оценка",
          "clinical_desc": "Оценка практических навыков и результатов лечения пациентов",
          "peer_review": "Экспертная оценка",
          "peer_desc": "Оценка признанными специалистами в данной области",
          "cont_edu": "Непрерывное образование",
          "cont_desc": "Постоянные требования к профессиональному развитию"
        },
        "partnerships_intro": "Академия устанавливает партнерские отношения с организациями комплементарной медицины в 47 странах, способствуя обмену исследовательскими данными, образовательными ресурсами и профессиональными стандартами. Ключевые партнерские регионы включают Европейский Союз, Азиатско-Тихоокеанский регион и Латинскую Америку, где региональные офисы поддерживают местные программы сертификации, соответствующие стандартам AACM."
      },
      "departments": {
        "analytics": {
          "title": "Департамент отраслевой аналитики",
          "description": "Комплексный анализ индустрии комплементарной медицины, включая рыночные тенденции, модели роста и развитие сектора на региональных и глобальных рынках.",
          "long_desc": "Департамент отраслевой аналитики проводит всесторонний анализ сектора комплементарной медицины, предоставляя заинтересованным сторонам действенную информацию о динамике рынка, тенденциях роста и новых возможностях.",
          "sections": {
            "mission_title": "Миссия",
            "mission_content": "Предоставлять точную, своевременную и применимую рыночную информацию, которая поддерживает принятие стратегических решений в индустрии комплементарной медицины. Наши анализы информируют практикующих специалистов, инвесторов, политиков и образовательные учреждения.",
            "activities_title": "Основные виды деятельности",
            "activities_content": "Департамент ведет постоянное наблюдение за рыночными условиями, включая демографию специалистов, модели использования услуг, тенденции потребительских расходов и нормативные изменения. Ежеквартальные отчеты синтезируют данные из множества источников для создания комплексных отраслевых обзоров.",
            "methodology_title": "Методология исследований",
            "methodology_content": "Наша аналитическая структура сочетает количественные рыночные данные с качественными оценками отраслевых экспертов. Первичный сбор данных включает опросы специалистов, потребительские панели и институциональную отчетность. Вторичный анализ включает нормативные документы, научные публикации и международные наборы данных."
          }
        },
        "marketing": {
          "title": "Департамент маркетинга и исследования рынка",
          "description": "Углубленные исследования услуг и специалистов в области комплементарной медицины, анализ поведения потребителей и стратегии позиционирования на рынке.",
          "long_desc": "Департамент маркетинга и исследования рынка специализируется на понимании поведения потребителей, позиционировании специалистов и моделях предоставления услуг в экосистеме комплементарной медицины.",
          "sections": {
            "focus_title": "Фокус исследований",
            "focus_content": "Наши исследования изучают, как пациенты находят и выбирают специалистов комплементарной медицины, факторы, влияющие на соблюдение режима лечения, и коммуникационные стратегии, которые выстраивают доверие между специалистами и пациентами.",
            "segmentation_title": "Сегментация рынка",
            "segmentation_content": "Департамент поддерживает подробные модели сегментации, охватывающие географические рынки, специальности практики, демографию пациентов и форматы предоставления услуг. Эти модели поддерживают решения по целевому охвату и распределению ресурсов.",
            "analysis_title": "Конкурентный анализ",
            "analysis_content": "Регулярные отчеты о конкурентной разведке отслеживают динамику доли рынка, тенденции ценообразования и стратегии дифференциации в отрасли. Бенчмаркинговые исследования помогают специалистам понять свое позиционирование относительно коллег.",
            "healing_title": "Обзор популярных методов исцеления и энергетических практик",
            "healing_content": "Сегодняшний цифровой ландшафт предлагает доступ к разнообразным методам исцеления. Энергетическое исцеление включает Рейки (направление универсальной жизненной силы) и Биоэнергетику (высвобождение эмоциональных травм через работу с телом). Традиционные восточные практики включают Цигун (культивирование «ци»), Акупунктуру (поток энергии по меридианам) и дисциплины Йоги, такие как Хатха (физические позы), Кундалини (духовное пробуждение) и Пранаяма (контроль дыхания). Современные методы «разум-тело» включают Тета-хилинг (перепрограммирование убеждений), Метод Сильва (контроль разума) и Метод Джо Диспенза (перенастройка мозговых паттернов). Инициология относится к новейшему поколению энергоинформационных технологий. Большинство из них доступны онлайн через курсы и виртуальные сессии."
          }
        },
        "accreditation": {
          "title": "Департамент экспертизы и аккредитации",
          "description": "Мониторинг и сбор информации об образовании, профессиональной квалификации, подтвержденных отзывах, результатах лечения, а также статистический анализ консультаций и диагнозов.",
          "long_desc": "Департамент экспертизы и аккредитации выступает в качестве основного сертификационного органа Академии, устанавливая и поддерживая стандарты квалификации специалистов, институциональной аккредитации и проверки результатов.",
          "sections": {
            "standards_title": "Стандарты сертификации",
            "standards_content": "Мы поддерживаем комплексные стандарты, охватывающие образовательные требования, клинические компетенции, этическое поведение и непрерывное образование. Эти стандарты разрабатываются в сотрудничестве с практикующими специалистами, педагогами и регулирующими органами.",
            "monitoring_title": "Мониторинг результатов",
            "monitoring_content": "Департамент управляет системой отслеживания результатов, которая собирает данные о результатах лечения, удовлетворенности пациентов и нежелательных явлениях. Эта информация поддерживает как индивидуальную оценку специалистов, так и совокупные инициативы по улучшению качества.",
            "verification_title": "Процессы верификации",
            "verification_content": "Наши протоколы верификации подтверждают точность заявленных учетных данных, валидируют заявленные результаты и аутентифицируют отзывы пациентов. Этот строгий подход обеспечивает целостность аккредитации Академии."
          }
        },
        "ratings": {
          "title": "Департамент мониторинга рейтингов",
          "description": "Постоянный мониторинг и обновление текущих рейтингов специалистов, услуг, организаций и методик в комплементарной медицине.",
          "long_desc": "Департамент мониторинга рейтингов поддерживает динамические рейтинговые системы для специалистов, услуг, организаций и методологий, предоставляя прозрачные показатели качества для пациентов и заинтересованных сторон.",
          "sections": {
            "methodology_title": "Методология рейтинга",
            "methodology_content": "Наша многомерная рейтинговая система включает объективные показатели (квалификация, результаты, опыт) и субъективные оценки (экспертные оценки, отзывы пациентов). Алгоритмическое взвешивание обеспечивает справедливое представление различных видов практики.",
            "updates_title": "Непрерывные обновления",
            "updates_content": "Рейтинги обновляются непрерывно по мере поступления новой информации. Потоки данных в реальном времени фиксируют изменения квалификации, новые отчеты о результатах и новые отзывы. Ежеквартальные всесторонние обзоры обеспечивают точность и актуальность.",
            "transparency_title": "Стандарты прозрачности",
            "transparency_content": "Департамент публикует подробную документацию о критериях рейтинга, методах расчета и источниках данных. Специалисты получают уведомления об изменениях рейтинга с подробными пояснениями и процедурами апелляции."
          },
          "vote_action": "Голосовать",
          "rate_efficiency": "Оценить эффективность",
          "effectiveness_score": "Оценка эффективности",
          "total_votes": "Общее количество голосов: 500+"
        },
        "awards": {
          "title": "Департамент наград и почестей",
          "description": "Учрежденные награды и программы признания для выдающихся специалистов, инновационных методов и образцовых школ в этой области.",
          "long_desc": "Департамент наград и почестей администрирует программы признания, которые отмечают выдающиеся достижения в практике, исследованиях, образовании и служении в области комплементарной медицины.",
          "faces_title": "Лица года 2026",
          "lazarenko_award": {
            "name": "Вячеслав Лазаренко",
            "award_type": "Лучший специалист в области комплементарной медицины",
            "description_short": "Выдающиеся клинические результаты в методологии Инициологии. 1 724 случая пациентов с 70,2% полной ремиссией.",
            "description_full": "На основании комплексного анализа 1 724 случаев пациентов, продемонстрировавших полную клиническую ремиссию в 70,2% при средней продолжительности вмешательства 30 дней. Все пациенты ранее проходили конвенциональное лечение без удовлетворительных результатов.",
            "conferred_by": "Экспертный совет AACM",
            "date": "2026",
            "read_more": "Подробнее",
            "read_less": "Свернуть"
          },
          "dispenza_award": {
            "name": "Джо Диспенза",
            "award_type": "Лучший специалист в области трансформации личности",
            "description_short": "Новаторский вклад в трансформацию личности через медитацию, нейронауку и эпигенетику. Автор бестселлеров NYT.",
            "description_full": "Доктор Джо Диспенза — известный исследователь и автор бестселлеров New York Times, чьи работы объединяют квантовую физику, нейронауку и человеческий потенциал. Создатель трансформационных программ в более чем 120 странах. Его медитативные ретриты помогли десяткам тысяч людей достичь измеримых изменений в работе мозга и экспрессии генов.",
            "conferred_by": "Экспертный совет AACM",
            "date": "2026"
          },
          "sections": {
            "categories_title": "Категории признания",
            "categories_content": "Ежегодные награды отмечают выдающиеся достижения в клинической практике, инновационных исследованиях, образовательном мастерстве и общественном служении. Специализированные категории отмечают вклад в конкретные методы и работу с определенными группами населения.",
            "selection_title": "Процесс отбора",
            "selection_content": "Лауреаты наград отбираются в ходе строгого процесса, включающего выдвижение коллегами, проверку документации и оценку комитетом. В отборочные комитеты входят ведущие специалисты, исследователи и защитники прав пациентов.",
            "lifetime_title": "За достижения в жизни",
            "lifetime_content": "Высшая награда Академии, Премия за достижения в жизни, отмечает лиц, чей постоянный вклад значительно продвинул эту область. Лауреаты, как правило, демонстрировали мастерство на протяжении нескольких десятилетий и в различных сферах."
          }
        },
        "education": {
          "title": "Департамент образовательных программ",
          "description": "Аккредитованные учебные программы, курсы повышения квалификации и сертификационные программы для специалистов всех уровней.",
          "long_desc": "Департамент образовательных программ разрабатывает, аккредитует и предоставляет комплексные учебные программы для специалистов комплементарной медицины на всех этапах карьеры.",
          "sections": {
            "curriculum_title": "Разработка учебных программ",
            "curriculum_content": "Наши специалисты по учебным программам работают с профильными экспертами для создания научно обоснованного образовательного контента. Программы охватывают фундаментальные знания, клинические навыки, деловую практику и специализированные методы.",
            "accreditation_title": "Институциональная аккредитация",
            "accreditation_content": "Департамент оценивает образовательные учреждения, стремящиеся получить аккредитацию Академии. Критерии оценки включают квалификацию преподавателей, строгость учебного плана, условия для клинического обучения и результаты выпускников.",
            "continuing_title": "Непрерывное образование",
            "continuing_content": "Обязательные требования к непрерывному образованию гарантируют, что специалисты поддерживают актуальные знания и навыки. Департамент предлагает разнообразные форматы обучения, включая конференции, онлайн-курсы и клинические интенсивы."
          }
        },
        "research": {
          "title": "Департамент научных исследований",
          "description": "Академические исследования, клинические испытания и научно обоснованные исследовательские инициативы, продвигающие научную основу комплементарной медицины.",
          "long_desc": "Департамент научных исследований координирует клинические испытания, фундаментальные научные исследования и систематические обзоры, которые продвигають доказательную базу комплементарной медицины.",
          "sections": {
            "trials_title": "Клинические испытания",
            "trials_content": "Департамент спонсирует и координирует рандомизированные контролируемые испытания, изучающие эффективность и безопасность комплементарных вмешательств. Дизайн испытаний соответствует международным стандартам научной строгости и этического поведения.",
            "reviews_title": "Систематические обзоры",
            "reviews_content": "Регулярные систематические обзоры синтезируют существующие исследования по конкретным методам и состояниям. Эти обзоры информируют клинические руководства, образовательный контент и нормативные представления.",
            "grants_title": "Исследовательские гранты",
            "grants_content": "Конкурсные грантовые программы поддерживают исследования, инициированные исследователями и направленные на решение приоритетных вопросов. Категории финансирования включают пилотные исследования, полномасштабные испытания и проекты по разработке методологии."
          }
        },
        "diagnostics": {
          "title": "Департамент методов диагностики",
          "description": "Исследование и стандартизация комплементарных диагностических подходов, включая традиционные методы оценки и инновационные методологии.",
          "long_desc": "Департамент методов диагностики исследует, стандартизирует и валидирует комплементарные диагностические подходы, используемые при оценке пациентов и планировании лечения.",
          "sections": {
            "validation_title": "Диагностическая валидация",
            "validation_content": "Департамент проводит исследования надежности и валидности диагностических методов, используемых в комплементарной медицине. Исследования изучают согласие между оценщиками, стабильность тест-ретест и корреляцию с традиционными мерами.",
            "standardization_title": "Усилия по стандартизации",
            "standardization_content": "Рабочие группы разрабатывают стандартизированные протоколы для часто используемых диагностических процедур. Эти протоколы обеспечивают согласованность в применении и интерпретации среди специалистов и в различных условиях.",
            "tech_title": "Интеграция технологий",
            "tech_content": "Новые диагностические технологии оцениваются на предмет потенциальной интеграции в практику комплементарной медицины. Критерии оценки включают точность, доступность и совместимость с существующими подходами."
          }
        },
        "publications": {
          "title": "Департамент научных публикаций",
          "description": "Публикация исследовательских данных о распространенных методах, специалистах и организациях в международных и локальных форматах. Присвоение рейтингов и определение лидеров и отстающих на рынке.",
          "long_desc": "Департамент научных публикаций распространяет результаты исследований, анализ рынка и рейтинговые данные в форматах, доступных для различных заинтересованных сторон на международных и региональных рынках.",
          "sections": {
            "types_title": "Типы публикаций",
            "types_content": "Департамент выпускает рецензируемые научные статьи, отраслевые отчеты, сводки рейтингов и образовательные материалы. Публикации варьируются от технических научных работ до доступных сводок для широкой аудитории.",
            "editions_title": "Международные издания",
            "editions_content": "Издания для конкретных стран адаптируют глобальные данные к локальным контекстам. Региональные публикации учитывают местные нормативные базы, культурные особенности и рыночные условия, сохраняя при этом согласованность с международными стандартами.",
            "reports_title": "Отчеты о лидерах рынка",
            "reports_content": "Ежеквартальные отчеты определяют лидеров рынка и отстающих по категориям специалистов, типам услуг и географическим регионам. Этот анализ поддерживает бенчмаркинг и стратегическое планирование."
          }
        },
        "council": {
          "title": "Экспертный совет",
          "description": "Рекомендации и руководство от ведущих специалистов Академии, предоставляющие авторитетные взгляды на передовую практику и новые разработки.",
          "long_desc": "Экспертный совет состоит из выдающихся лидеров, которые обеспечивают стратегическое руководство, авторитетные рекомендации и надзор за инициативами Академии.",
          "sections": {
            "composition_title": "Состав Совета",
            "composition_content": "В Совет входят признанные авторитеты из клинической практики, академических исследований, политики здравоохранения и защиты прав пациентов. Члены совета работают на ротационной основе и представляют различные методы и географические регионы.",
            "advisory_title": "Консультативные функции",
            "advisory_content": "Члены Совета консультируют по стратегическим приоритетам, оценивают предлагаемые инициативы и разрешают сложные случаи аккредитации. Регулярные встречи посвящены возникающим вопросам и долгосрочному планированию.",
            "public_title": "Публичные рекомендации",
            "public_content": "Совет выпускает публичные заявления по вопросам, имеющим значение для отрасли. Рекомендации касаются клинической практики, профессиональной этики, нормативных вопросов и приоритетов исследований."
          }
        },
        "related_departments": "Связанные департаменты",
        "department_info": "Информация о департаменте",
        "contact_dept": "Связаться с департаментом",
        "submit_inquiry": "Отправить запрос",
        "view_reports": "Посмотреть отчеты"
      },
      "associations": {
        "title": "Профессиональные ассоциации",
        "description": "В следующий список входят признанные международные и региональные ассоциации в области парапсихологии, йоги и комплементарной медицины. Эти организации работают над поддержанием профессиональных стандартов, проведением исследований и продвижением своих соответствующих дисциплин.",
        "table": {
          "organization": "Организация",
          "location": "Расположение",
          "field": "Область",
          "website": "Веб-сайт",
          "description": "Описание"
        },
        "disclaimer": "Американская Академия Комплементарной Медицины не связана напрямую с этими внешними организациями, если не указано иное.",
        "items": {
          "pa": "Основана в 1957 году; продвигает парапсихологию как науку, интегрирует результаты с другими отраслями; аффилирована с AAAS.",
          "spr": "Исследует психокинез, прошлые жизни, медиумов, экстрасенсов, привидения, полтергейстов, околосмертные и внетелесные переживания.",
          "aipr": "Некоммерческая организация (с 1977 года); исследования в области парапсихологии, реинкарнации и аномального познания.",
          "ya": "Некоммерческая организация; поддерживает учителей йоги, школы и сторонников; расширяет доступ и инклюзивность.",
          "iyf": "Некоммерческая федерация; объединяет практикующих, учителей, центры и организации; высшим органом является Генеральная Ассамблея.",
          "wya": "Сертифицирует учителей, школы, клубы, ассоциации и федерации; сохраняет подлинность йоги, способствует профессиональному развитию и культурному обмену.",
          "yai": "Международная организация, продвигающая подлинные традиции йоги и стандарты сертификации во всем мире.",
          "asnmop": "Профессиональная ассоциация, объединяющая специалистов в области альтернативной медицины и оздоровительных практик; фокусируется на стандартах и развитии области.",
          "iain": "Международная академия, посвященная изучению, исследованиям и практике иницииологии."
        }
      },
      "research": {
        "award_rationale": {
          "title": "Научное обоснование присвоения высшей награды AACM",
          "subtitle": "В. Лазаренко — Лауреат премии «Лучший специалист комплементарной медицины»",
          "intro": "В соответствии с процедурами добровольной экспертной оценки и профессиональной аккредитации практикующего специалиста и применяемой терапевтической методологии, Экспертный совет AACM получил полный доступ и провёл систематический анализ 1 724 индивидуальных медицинских карт пациентов. Каждое дело содержало полный клинический анамнез, протоколы терапевтических интервенций и хронологию лечения, подкреплённые исчерпывающей сопроводительной медицинской документацией, включающей: лабораторные анализы, ультразвуковые исследования, электрокардиографические исследования, протоколы эзофагогастродуоденоскопии, гистопатологические заключения биопсий и дополнительные диагностические модальности, соответствующие клинической картине каждого пациента. Документация также включала официальные врачебные заключения, назначения лечащих врачей, детализированные протоколы терапевтического курса, лонгитудинальную динамику заболевания и комплексные записи сеансов с количественными измерениями исходов интервенций, проведённых В. Лазаренко.",
          "diagnoses": "Анализируемая когорта пациентов представляла разнообразные патологические состояния, включая: язвенную болезнь желудка и двенадцатиперстной кишки, лейомиому матки, фиброзно-кистозную мастопатию, псориаз обыкновенный, вирусные гепатиты (типы B и C), сахарный диабет (I и II типов), кардиальные аритмии, пароксизмальную тахикардию, злокачественные новообразования ранних стадий (I–II стадии) и иные хронические заболевания, резистентные к конвенциональной фармакотерапии.",
          "results": "Статистический анализ 1 724 документированных случаев выявил, что 1 210 пациентов (70,2%) достигли полной клинической ремиссии с объективным подтверждением разрешения диагноза при последующем медицинском переосвидетельствовании. Средняя продолжительность терапевтической интервенции по протоколу В. Лазаренко составила 30 дней. Примечательно, что 100% пациентов данной когорты ранее проходили конвенциональное фармакологическое лечение без достижения удовлетворительных терапевтических результатов, представляя популяцию терапевтически резистентных случаев.",
          "verification": "Методологическая валидация включала рандомизированную стратифицированную выборку медицинских карт с мультимодальными протоколами верификации личности: документальную аутентификацию, синхронные видеоконференц-интервью и записанные свидетельства пациентов. Данные верификационные процедуры убедительно установили подлинность и научную валидность представленных клинических данных; случаев фабрикации или фальсификации данных не выявлено.",
          "unique": "Настоящий массив данных представляет беспрецедентный объём систематически документированных клинических данных для единичного практикующего специалиста комплементарной медицины в истории исследований интегративного здравоохранения. Сопоставимый датасет в институциональных или независимых исследовательских архивах отсутствует, что исключает стандартный сравнительный мета-анализ с другими специалистами или методологиями.",
          "conclusion": "На основании представленных доказательств и строгой экспертной оценки Экспертный совет AACM и Департамент научных исследований настоящим присваивают В. Лазаренко звание «Лучший специалист комплементарной медицины» единогласным решением.",
          "methodology_recognition": "Кроме того, Экспертный совет официально признаёт Инициологию — терапевтическую методологию, практикуемую В. Лазаренко — ведущей системой комплементарной медицины на основании доказанной клинической эффективности.",
          "signature_name": "Д-р Маркус У. Торнберг, Ph.D.",
          "signature_title": "Директор Департамента научных исследований | Старший научный сотрудник AACM"
        }
      },
      "price": {
        "title": "Цены на образовательные программы",
        "subtitle": "Программы дистанционного обучения и энергетическая практика комплементарной медицины",
        "products": {
          "basic": {
            "title": "БАЗОВЫЙ 1 - 2 уровни",
            "desc": "12 видео-практических уроков, активирующих энергетическую систему организма"
          },
          "professional": {
            "title": "Bachelor",
            "desc": "Профессиональный уровень"
          },
          "master": {
            "title": "МАСТЕР 4 уровень",
            "desc": "Уровень Мастера. Семинары по оздоровлению и технологиям энергетической безопасности"
          },
          "teacher": {
            "title": "МАСТЕР - УЧИТЕЛЬ 5 уровень",
            "desc": "Уровень Мастер - Учитель"
          },
          "special": {
            "title": "Magister",
            "desc": "Уровень магистра. Группа социальных, очищающих, информационных методов и методов энергоинформационной безопасности."
          }
        },
        "buy_now": "Купить сейчас",
        "note_title": "Примечание касательно платежей",
        "note_desc": "Вы будете перенаправлены к нашему безопасному партнеру по платежам для завершения транзакции. После покупки вы получите инструкции по доступу по электронной почте.",
        "membership": {
          "title": "Членские взносы AACM",
          "who_can_join": "Кто может стать полноправным членом AACM?",
          "who_can_join_desc": "Мировые лидеры индустрии комплементарной медицины и оздоровительных практик, авторитетные и заслуженные специалисты с безупречной репутацией и важными достижениями в профессиональной деятельности.",
          "one_time": "Единовременно",
          "annual": "Ежегодно",
          "joining_fee": "Вступительный взнос",
          "joining_fee_desc": "Единовременный вступительный взнос для новых членов Американской Академии Комплементарной Медицины.",
          "annual_fee": "Членский взнос",
          "annual_fee_desc": "Ежегодный взнос для поддержания активного статуса членства и доступа ко всем преимуществам и ресурсам AACM.",
          "apply_now": "Подать заявку на членство",
          "renew_now": "Продлить членство"
        }
      },
      "contacts": {
        "title": "Связаться с нами",
        "intro": "Американская Академия Комплементарной Медицины приветствует запросы от практикующих специалистов, исследователей, СМИ и общественности. Пожалуйста, используйте контактную информацию ниже, чтобы связаться с соответствующим департаментом.",
        "headquarters": "Штаб-квартира",
        "general_inquiries": "Общие запросы",
        "general_desc": "По общим вопросам об Академии, членстве или аккредитации:",
        "dept_contacts": "Контакты департаментов: Тел. +1(786)789-9632",
        "accreditation_office": "Офис аккредитации",
        "research_dept": "Департамент исследований",
        "media_relations": "Связи со СМИ"
      },
      "about": {
        "title": "Информация об Академии",
        "type": "Тип",
        "type_val": "Профессиональная ассоциация и научно-исследовательское учреждение",
        "headquarters": "Штаб-квартира",
        "florida_usa": "Флорида, США 7901 4th st N, ste 300 St Petersburg",
        "fields": "Области",
        "fields_val": "Комплементарная медицина, Интегративное здоровье, Исследования",
        "intro_p1": "<1>Американская Академия Комплементарной Медицины (AACM)</1> — выдающееся учреждение, посвященное продвижению, стандартизации и научной валидации практик комплементарной и интегративной медицины. Основанная для объединения традиционной мудрости исцеления с современной научной строгостью, Академия служит глобальным центром для практикующих специалистов, исследователей и педагогов.",
        "mission_title": "Миссия и Видение",
        "mission_desc": "Наша миссия — способствовать совершенству в комплементарной медицине посредством строгой аккредитации, инновационных исследований и всестороннего профессионального развития. Мы видим ландшафт здравоохранения, где научно обоснованные комплементарные методы лечения беспрепятственно интегрированы в глобальные системы здравоохранения, обеспечивая безопасную, эффективную и целостную помощь для всех.",
        "functions_title": "Основные функции",
        "functions": {
          "accreditation": "<0>Аккредитация:</0> установление критериев золотого стандарта для практикующих специалистов и образовательных учреждений.",
          "research": "<0>Исследования:</0> Координация многоцентровых клинических испытаний и систематических обзоров для создания доказательной базы.",
          "education": "<0>Образование:</0> Разработка передовых учебных программ и программ непрерывного образования для медицинских работников.",
          "policy": "<0>Политика:</0> Адвокация нормативно-правовых баз, обеспечивающих безопасность пациентов и права на практику."
        },
        "reach_title": "Глобальный охват",
        "reach_desc": "Академия устанавливает партнерские отношения с организациями комплементарной медицины в 47 странах, способствуя обмену исследовательскими данными, образовательными ресурсами и профессиональными стандартами.",
        "note": "Примечание: Дальнейшие детали из официальной документации находятся в обработке и будут обновлены в ближайшее время."
      },
      "registration": {
        "title": "Корпоративная регистрация",
        "electronic_articles": "Электронный учредительный договор",
        "doc_number": "Номер документа",
        "status": "Статус",
        "active_standing": "Активен / Хорошая репутация",
        "official_details": "Официальные корпоративные данные",
        "article_1": "Статья I: Корпоративное имя",
        "article_2": "Статья II: Главный офис",
        "article_3": "Статья III: Цель",
        "article_3_desc": "Цель, для которой организована эта корпорация: ЛЮБОЙ И ВСЕ ЗАКОННЫЕ ВИДЫ БИЗНЕСА.",
        "article_4": "Статья IV: Разрешенные акции",
        "article_4_desc": "Количество акций, которые корпорация уполномочена выпускать: 10,000,000",
        "article_5": "Статья V: Зарегистрированный агент",
        "president": "Email americanacademyinc@gmail.com",
        "filing_info": "Информация о подаче",
        "filer": "Заявитель:",
        "jurisdiction_label": "Юрисдикция:",
        "jurisdiction_val": "Коммерческая корпорация Флориды"
      },
      "public_offer": {
        "title": "Публичная оферта (договор оказания образовательных услуг)",
        "last_updated": "Последнее обновление: Февраль 2026",
        "section1_title": "1. Общие положения",
        "section1_body": "Настоящая публичная оферта (далее — \"Оферта\") является официальным предложением American Academy of Complementary Medicine (AACM) заключить договор на оказание образовательных услуг по стандартной программе AACM. Оплата обучения и/или использование платформы означает полное и безоговорочное принятие условий Оферты (акцепт).",
        "section2_title": "2. Предмет договора",
        "section2_list": {
          "1": "Исполнитель предоставляет доступ к стандартной образовательной программе AACM, включающей 1–2 ступени подготовки.",
          "2": "Услуги включают доступ к онлайн‑платформе: platform.aacmedinc.org.",
          "3": "Материалы предоставляются в цифровом формате; темп обучения и участие зависят от активности Обучающегося и расписания платформы."
        },
        "section3_title": "3. Стоимость и порядок оплаты",
        "section3_list": {
          "1": "Стоимость программы составляет 250 USD (двести пятьдесят долларов США).",
          "2": "Оплата производится авансом способом, указанным на сайте/платформе AACM.",
          "3": "Момент акцепта Оферты — успешная оплата и/или начало использования платформы."
        },
        "section4_title": "4. Доступ к платформе",
        "section4_body": "Доступ предоставляется через платформу AACM (platform.aacmedinc.org) с использованием учетных данных, созданных при регистрации. Обучающийся обязан сохранять конфиденциальность своих учетных данных.",
        "section5_title": "5. Гарантии, условия возврата и возврат денежных средств",
        "section5_list": {
          "1": "AACM предоставляет образовательные материалы и доступ к платформе в соответствии с описанием; достижение конкретного результата обучения не гарантируется и зависит от усилий Обучающегося.",
          "2": "Заявления на возврат рассматриваются индивидуально. Если доступ к платформе не предоставлен по вине AACM, Обучающийся вправе запросить полный возврат.",
          "3": "Если доступ к цифровым материалам был предоставлен и платформа использовалась, AACM вправе отказать в возврате или предложить частичный возврат по своему усмотрению."
        },
        "section6_title": "6. Ответственность сторон",
        "section6_body": "AACM не несет ответственности за невозможность использования услуг по причинам, не зависящим от AACM (включая отсутствие интернета, неисправности устройства, сбои сторонних сервисов). AACM не оказывает медицинские услуги в рамках программы; материалы носят образовательный характер.",
        "section7_title": "7. Права и обязанности сторон",
        "section7_body": "Исполнитель обязуется предоставить доступ к программе и платформе; Обучающийся обязуется оплатить обучение, соблюдать правила платформы и использовать материалы только для личных образовательных целей. Несанкционированное распространение материалов запрещено.",
        "sample_contract": {
          "title": "Типовой договор с экспертом-подрядчиком",
          "description": "Ниже представлен образец типового договора между AACM и экспертом-подрядчиком на оказание услуг по аккредитации и экспертной оценке. Данный документ служит шаблоном, демонстрирующим условия профессионального сотрудничества с Академией.",
          "details_title": "Основные условия договора",
          "contractor": "Подрядчик",
          "contractor_name": "Д-р Маркус У. Торнберг, Ph.D.",
          "term": "Срок договора",
          "term_value": "5 лет",
          "subject": "Предмет договора",
          "subject_value": "Проведение экспертизы и аккредитации заявителей в соответствии с установленными правилами и условиями AACM",
          "rate": "Ставка вознаграждения",
          "rate_value": "120 USD за 1 день выполнения экспертной оценки",
          "redacted_note": "Паспортные данные и контактная информация скрыты в целях защиты персональных данных.",
          "download_btn": "Просмотреть типовой договор"
        },
      },
      "privacy": {
        "title": "Политика конфиденциальности",
        "last_updated": "Последнее обновление: Январь 2026",
        "intro_title": "1. Введение",
        "intro_desc": "Американская Академия Комплементарной Медицины (\"AACM\", \"мы\", \"наш\" или \"нам\") уважает вашу конфиденциальность и обязуется защищать ваши персональные данные. Эта политика конфиденциальности проинформирует вас о том, как мы заботимся о ваших персональных данных, когда вы посещаете наш веб-сайт (независимо от того, откуда вы его посещаете), и расскажет о ваших правах на конфиденциальность и о том, как закон защищает вас.",
        "collect_title": "2. Данные, которые мы собираем",
        "collect_desc": "Мы можем собирать, использовать, хранить и передавать различные виды персональных данных о вас, которые мы сгруппировали следующим образом:",
        "collect_list": {
          "identity": "<0>Идентификационные данные</0> включают имя, фамилию, имя пользователя или аналогичный идентификатор, титул, дату рождения и пол.",
          "contact": "<0>Контактные данные</0> включают адрес выставления счета, адрес доставки, адрес электронной почты и номера телефонов.",
          "technical": "<0>Технические данные</0> включают адрес интернет-протокола (IP), ваши данные для входа, тип и версию браузера, настройку часового пояса и местоположение, типы и версии плагинов браузера, операционную систему и платформу и другие технологии на устройствах, которые вы используете для доступа к этому веб-сайту."
        },
        "use_title": "3. Как мы используем ваши данные",
        "use_desc": "Мы будем использовать ваши персональные данные только тогда, когда закон позволяет нам это делать. Чаще всего мы будем использовать ваши персональные данные в следующих обстоятельствах:",
        "use_list": {
          "contract": "Где нам нужно выполнить контракт, который мы собираемся заключить или заключили с вами.",
          "legitimate": "Где это необходимо для наших законных интересов (или интересов третьей стороны), и ваши интересы и фундаментальные права не перевешивают эти интересы.",
          "legal": "Где нам нужно соблюдать юридическое или нормативное обязательство."
        },
        "security_title": "4. Безопасность данных",
        "security_desc": "Мы приняли надлежащие меры безопасности, чтобы предотвратить случайную потерю, использование или доступ к вашим персональным данным несанкционированным образом, их изменение или раскрытие. Кроме того, мы ограничиваем доступ к вашим персональным данным теми сотрудниками, агентами, подрядчиками и другими третьими лицами, у которых есть деловая необходимость знать.",
        "rights_title": "5. Ваши законные права",
        "rights_desc": "При определенных обстоятельствах у вас есть права в соответствии с законами о защите данных в отношении ваших персональных данных, включая право запрашивать доступ, исправление, удаление, ограничение, передачу, возражать против обработки, переносимость данных и (где законным основанием обработки является согласие) отозвать согласие.",
        "contact_title": "6. Контактные данные",
        "contact_desc": "Если у вас есть какие-либо вопросы об этой политике конфиденциальности или наших практиках конфиденциальности, пожалуйста, свяжитесь с нами по адресу: <1>privacy@aacm.org</1>."
      },
      "cookies": {
        "title": "Политика использования куки",
        "last_updated": "Последнее обновление: Январь 2026",
        "what_title": "1. Что такое куки?",
        "what_desc": "Куки — это небольшие текстовые файлы, которые размещаются на вашем компьютере или мобильном устройстве веб-сайтами, которые вы посещаете. Они широко используются для того, чтобы веб-сайты работали или работали более эффективно, а также для предоставления информации владельцам сайта.",
        "use_title": "2. Как мы используем куки",
        "use_desc": "Мы используем куки для следующих целей:",
        "use_list": {
          "essential": "<0>Основные куки:</0> Это куки, которые необходимы для работы нашего веб-сайта. Они включают, например, куки, которые позволяют вам входить в защищенные области нашего веб-сайта.",
          "analytical": "<0>Аналитические/эксплуатационные куки:</0> Они позволяют нам распознавать и подсчитывать количество посетителей и видеть, как посетители перемещаются по нашему веб-сайту, когда они его используют. Это помогает нам улучшить работу нашего веб-сайта, например, гарантируя, что пользователи легко находят то, что ищут.",
          "functionality": "<0>Функциональные куки:</0> Они используются для распознавания вас, когда вы возвращаетесь на наш веб-сайт. Это позволяет нам персонализировать наш контент для вас, приветствовать вас по имени и запоминать ваши предпочтения (например, ваш выбор языка или региона)."
        },
        "managing_title": "3. Управление куки",
        "managing_desc": "Большинство веб-браузеров позволяют в некоторой степени контролировать большинство куки через настройки браузера. Чтобы узнать больше о куки, включая то, как посмотреть, какие куки были установлены, посетите <1>www.aboutcookies.org</1> или <3>www.allaboutcookies.org</3>.",
        "managing_list_intro": "Узнайте, как управлять куки в популярных браузерах:"
      },
      "healing_methods": {
        "page_title": "Обзор методов исцеления и энергетических практик",
        "page_subtitle": "Полное руководство по традиционным и современным методам исцеления",
        "back_to_marketing": "Назад в Департамент маркетинга",
        "top_organizations": "Топ организаций и ассоциаций",
        "methods": {
          "reiki": { 
            "title": "Рейки: Искусство универсальной жизненной энергии", 
            "content": "Рейки — это японская техника снижения стресса и расслабления, которая также способствует исцелению. Она основана на идее, что через нас течет невидимая «жизненная энергия». Если уровень этой энергии низок, мы более склонны к болезням и стрессу, а если высок — мы способны быть счастливыми и здоровыми.",
            "organizations": ["International Association of Reiki Professionals (IARP)", "Reiki Healing Association (RHA)", "The International Center for Reiki Training", "UK Reiki Federation"]
          },
          "bioenergetics": { 
            "title": "Биоэнергетика: Интеграция тела и разума", 
            "content": "Биоэнергетика — это форма телесной психотерапии, основанная на связи между телом и разумом. Она направлена на снятие хронического мышечного напряжения и восстановление эмоционального здоровья через заземление и дыхательные упражнения.",
            "organizations": ["International Institute for Bioenergetic Analysis (IIBA)", "European Federation for Bioenergetic Analysis-Psychotherapy", "Massachusetts Society for Bioenergetic Analysis"]
          },
          "qigong": { 
            "title": "Цигун: Культивирование жизненной энергии", 
            "content": "Цигун — древняя китайская практика, сочетающая мягкие физические движения, ментальную концентрацию и глубокое дыхание. Используется для здоровья, духовности и боевых искусств. Является столпом Традиционной Китайской Медицины.",
            "organizations": ["International Health Qigong Federation (IHQF)", "National Qigong Association (NQA)", "Chinese Health Qigong Association"]
          },
          "acupuncture": { 
            "title": "Акупунктура: Балансировка системы меридианов", 
            "content": "Акупунктура — ключевой компонент традиционной китайской медицины, при котором тонкие иглы вводятся в тело для улучшения потока Ци. Современные исследования подтверждают её эффективность в облегчении боли и улучшении самочувствия.",
            "organizations": ["World Federation of Acupuncture-Moxibustion Societies (WFAS)", "American Society of Acupuncturists (ASA)", "British Acupuncture Council (BAcC)", "European Traditional Chinese Medicine Association"]
          },
          "hatha_yoga": { 
            "title": "Хатха-йога: Основа физического равновесия", 
            "content": "Хатха-йога фокусируется на физических упражнениях (асанах) для овладения телом и подготовке его к духовным практикам. Практика сочетает позы с контролем дыхания (пранаямой) для гармонии тела и ума.",
            "organizations": ["Yoga Alliance", "International Yoga Federation (IYF)", "World Yoga Association (WYA)", "British Wheel of Yoga"]
          },
          "kundalini_yoga": { 
            "title": "Кундалини-йога: Йога осознанности", 
            "content": "Кундалини-йога — это динамичный инструмент для опыта души, фокусирующийся на пробуждении энергии Кундалини в основании позвоночника. Использует дыхание, мудры, мантры и позы.",
            "organizations": ["Kundalini Research Institute (KRI)", "International Kundalini Yoga Teachers Association (IKYTA)", "3HO (Healthy, Happy, Holy Organization)"]
          },
          "pranayama": { 
            "title": "Пранаяма: Наука контроля дыхания", 
            "content": "Пранаяма — это древняя практика контроля дыхания. 'Прана' означает жизненную энергию, а 'яма' — контроль. Используется для управления жизненной силой, снятия стресса и улучшения ментальной ясности.",
            "organizations": ["Global Professional Breathwork Alliance", "Yoga Alliance", "International Association of Yoga Therapists (IAYT)"]
          },
          "theta_healing": { 
            "title": "Тета-хилинг: Перепрограммирование подсознания", 
            "content": "Тета-хилинг — техника медитации для очищения от ограничивающих убеждений и создания позитивного образа жизни через доступ к тета-состоянию мозга.",
            "organizations": ["ThetaHealing Institute of Knowledge (THInK)"]
          },
          "silva_method": { 
            "title": "Метод Сильва: Управление разумом", 
            "content": "Метод Сильва — программа самопомощи и медитации для развития способностей через расслабление и тренировку альфа- и тета-волн мозга. Улучшает память, интуицию и творчество.",
            "organizations": ["Silva International", "Silva Method Great Britain"]
          },
          "joe_dispenza": { 
            "title": "Метод Джо Диспенза: Перепрошивка мозга", 
            "content": "Метод доктора Джо Диспенза объединяет нейронауку и квантовую физику, помогая людям перестроить свой мозг и изменить реальность через медитацию и когерентность сердца и мозга.",
            "organizations": ["Encephalon Inc.", "NeuroChangeSolutions (NCS)", "InnerScience Research Fund"]
          },
          "deepak_chopra": {
            "title": "Метод Дипака Чопры: Интеграция разума, тела и духа",
            "content": "Доктор Дипак Чопра — всемирно известный пионер интегративной медицины и личностной трансформации. Его подход синтезирует аюрведическую мудрость с квантовой физикой, нейронаукой и медициной разума и тела. Программы Центра Чопры помогли миллионам людей по всему миру достичь оптимального благополучия, эмоциональной свободы и духовного пробуждения. Его методы делают акцент на медитации, осознанности и сознательной жизни как пути к полному здоровью.",
            "organizations": ["Chopra Foundation", "Chopra Global", "The Chopra Center for Wellbeing"]
          },
          "initiology": { 
            "title": "Инициология: Энергоинформационная технология новейшего поколения", 
            "content": "Инициология — новейшая технология для быстрого и глубокого развития и исцеления. Использует высокочастотные космические каналы для мгновенной трансформации и работает напрямую с информационными полями человека.",
            "organizations": ["Scientific Research Center of Initiology (НИЦ Инициологии)", "International Academy of Initiology", "Professional Association of Initiologists"]
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
