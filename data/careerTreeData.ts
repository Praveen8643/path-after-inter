export type CareerDetail = {
    slug: string;
    title: string;
    whatItIs: string;
    eligibility: string;
    entranceExams: string[];
    topColleges: string[];
    careerOptions: string[];
    salaryDirection: string;
    higherStudies: string[];
    applyLinks: { label: string; url: string }[];
  };
  
  export type CareerLeaf = {
    title: string;
    slug: string;
    detail?: CareerDetail;
  };
  
  export type CareerCategory = {
    title: string;
    items: CareerLeaf[];
  };
  
  export type StreamBranch = {
    title: string;
    slug: string;
    categories: CareerCategory[];
  };
  
  export type LevelOneBranch = {
    title: string;
    slug: string;
    description: string;
    streams?: StreamBranch[];
    categories?: CareerCategory[];
  };
  
  export type CrossStreamSection = {
    title: string;
    slug: string;
    items: string[];
  };
  
  export const careerTreeData: LevelOneBranch[] = [
    {
      title: "Intermediate",
      slug: "intermediate",
      description: "The most common path after 10th, with multiple academic streams and degree options.",
      streams: [
        {
          title: "MPC",
          slug: "mpc",
          categories: [
            {
              title: "Engineering & Technology",
              items: [
                {
                  title: "B.Tech / BE",
                  slug: "btech-be",
                  detail: {
                    slug: "btech-be",
                    title: "B.Tech / BE",
                    whatItIs:
                      "A professional undergraduate engineering degree focused on technology, design, systems, and applied science.",
                    eligibility:
                      "Intermediate with MPC. Admission usually through engineering entrance exams.",
                    entranceExams: ["JEE Main", "JEE Advanced", "EAMCET", "State CETs"],
                    topColleges: ["IITs", "NITs", "IIITs", "State Engineering Colleges"],
                    careerOptions: [
                      "Software Engineer",
                      "Mechanical Engineer",
                      "Civil Engineer",
                      "Electrical Engineer",
                      "Electronics Engineer",
                    ],
                    salaryDirection:
                      "Wide range depending on college, branch, and skills; strong long-term growth in core and tech roles.",
                    higherStudies: ["M.Tech", "MS", "MBA", "Research Programs"],
                    applyLinks: [
                      { label: "JEE Main", url: "#" },
                      { label: "JEE Advanced", url: "#" },
                      { label: "EAMCET", url: "#" },
                    ],
                  },
                },
                {
                  title: "Integrated M.Tech",
                  slug: "integrated-mtech",
                  detail: {
                    slug: "integrated-mtech",
                    title: "Integrated M.Tech",
                    whatItIs:
                      "A combined undergraduate and postgraduate engineering program completed in one structured track.",
                    eligibility:
                      "Intermediate with MPC and entrance exam qualification depending on institution.",
                    entranceExams: ["JEE Main", "JEE Advanced", "Institute-specific exams"],
                    topColleges: ["IITs", "IIITs", "Selected Private Universities"],
                    careerOptions: [
                      "Advanced Engineering Roles",
                      "Research Engineer",
                      "Product Engineer",
                    ],
                    salaryDirection:
                      "Usually better aligned for advanced technical and research-focused opportunities.",
                    higherStudies: ["PhD", "Research Fellowships", "MBA"],
                    applyLinks: [{ label: "Engineering Admissions", url: "#" }],
                  },
                },
                {
                  title: "Dual Degree Programs",
                  slug: "dual-degree-programs",
                  detail: {
                    slug: "dual-degree-programs",
                    title: "Dual Degree Programs",
                    whatItIs:
                      "Programs that combine two academic qualifications, often in engineering and science.",
                    eligibility:
                      "Intermediate with MPC and entrance-based admission depending on institution.",
                    entranceExams: ["JEE Main", "JEE Advanced", "Institute-specific exams"],
                    topColleges: ["IITs", "IISER-linked institutions", "Top Universities"],
                    careerOptions: [
                      "Interdisciplinary Engineer",
                      "Research Associate",
                      "Technology Consultant",
                    ],
                    salaryDirection:
                      "Good for students aiming for interdisciplinary technical careers and higher studies.",
                    higherStudies: ["PhD", "MS Abroad", "MBA"],
                    applyLinks: [{ label: "Dual Degree Admissions", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Core Science",
              items: [
                {
                  title: "BSc (Physics, Maths, Chemistry)",
                  slug: "bsc-core-science",
                  detail: {
                    slug: "bsc-core-science",
                    title: "BSc (Physics, Maths, Chemistry)",
                    whatItIs:
                      "A foundational science degree for students interested in pure sciences, academics, and research.",
                    eligibility: "Intermediate with MPC or relevant science background.",
                    entranceExams: ["CUET", "University-specific admissions"],
                    topColleges: ["IISc-linked pathways", "Top State Universities", "Central Universities"],
                    careerOptions: [
                      "Research Assistant",
                      "Lecturer Pathway",
                      "Data/Analytics Entry Roles",
                      "Lab Roles",
                    ],
                    salaryDirection:
                      "Moderate at entry level, stronger growth with specialization or higher studies.",
                    higherStudies: ["MSc", "PhD", "Research Programs", "Teaching Qualifications"],
                    applyLinks: [{ label: "CUET", url: "#" }],
                  },
                },
                {
                  title: "Research (IISER, ISI)",
                  slug: "research-iiser-isi",
                  detail: {
                    slug: "research-iiser-isi",
                    title: "Research (IISER, ISI)",
                    whatItIs:
                      "Highly academic and research-focused pathways for students interested in advanced science and mathematics.",
                    eligibility:
                      "Strong science background in Intermediate with entrance-based selection.",
                    entranceExams: ["IISER Aptitude Test", "ISI Admission Test", "JEE Advanced"],
                    topColleges: ["IISERs", "ISI", "Top National Research Institutes"],
                    careerOptions: [
                      "Scientist",
                      "Researcher",
                      "Academic",
                      "Quantitative Analyst",
                    ],
                    salaryDirection:
                      "Excellent long-term potential through research, academia, analytics, and international study paths.",
                    higherStudies: ["MS", "PhD", "International Research Programs"],
                    applyLinks: [{ label: "IISER", url: "#" }, { label: "ISI", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Computer & IT",
              items: [
                {
                  title: "BCA",
                  slug: "bca",
                  detail: {
                    slug: "bca",
                    title: "BCA",
                    whatItIs:
                      "A computer applications degree focused on software, programming, systems, and web technologies.",
                    eligibility: "Intermediate, often with preference for Maths background.",
                    entranceExams: ["CUET", "University-specific exams"],
                    topColleges: ["Top Private Universities", "State Universities", "Autonomous Colleges"],
                    careerOptions: [
                      "Software Developer",
                      "Web Developer",
                      "QA Engineer",
                      "Support Engineer",
                    ],
                    salaryDirection:
                      "Good entry path into software careers, especially with strong projects and coding skills.",
                    higherStudies: ["MCA", "MS", "MBA", "Specialized Certifications"],
                    applyLinks: [{ label: "BCA Admissions", url: "#" }],
                  },
                },
                {
                  title: "BSc Computer Science",
                  slug: "bsc-computer-science",
                  detail: {
                    slug: "bsc-computer-science",
                    title: "BSc Computer Science",
                    whatItIs:
                      "A degree that covers computing fundamentals, programming, algorithms, and systems.",
                    eligibility: "Intermediate with relevant subjects; Maths often preferred.",
                    entranceExams: ["CUET", "University-specific admissions"],
                    topColleges: ["Central Universities", "State Universities", "Top Degree Colleges"],
                    careerOptions: [
                      "Software Engineer",
                      "Data Analyst",
                      "Systems Associate",
                      "IT Support",
                    ],
                    salaryDirection:
                      "Good growth potential, especially with internships, coding practice, and certifications.",
                    higherStudies: ["MSc CS", "MCA", "MS", "AI/Data Certifications"],
                    applyLinks: [{ label: "CS Admissions", url: "#" }],
                  },
                },
                {
                  title: "AI / Data Science Degrees",
                  slug: "ai-data-science-degree",
                  detail: {
                    slug: "ai-data-science-degree",
                    title: "AI / Data Science Degrees",
                    whatItIs:
                      "Modern technology degrees focused on machine learning, analytics, programming, and intelligent systems.",
                    eligibility: "Intermediate with MPC and institution-specific criteria.",
                    entranceExams: ["JEE Main", "EAMCET", "University-specific exams"],
                    topColleges: ["IIITs", "Top Engineering Colleges", "Private Tech Universities"],
                    careerOptions: [
                      "Data Analyst",
                      "ML Engineer",
                      "AI Engineer",
                      "Business Intelligence Analyst",
                    ],
                    salaryDirection:
                      "Strong market demand and high long-term upside with strong technical skills.",
                    higherStudies: ["M.Tech AI", "MS Data Science", "Research Programs"],
                    applyLinks: [{ label: "AI / DS Admissions", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Architecture",
              items: [
                {
                  title: "B.Arch (NATA)",
                  slug: "barch",
                  detail: {
                    slug: "barch",
                    title: "B.Arch",
                    whatItIs:
                      "A professional degree in architecture focused on design, planning, structures, and built environments.",
                    eligibility:
                      "Intermediate with Maths as a required subject, plus architecture entrance qualification.",
                    entranceExams: ["NATA", "JEE Paper 2"],
                    topColleges: ["SPA", "NIT Architecture Departments", "Top Architecture Schools"],
                    careerOptions: [
                      "Architect",
                      "Urban Designer",
                      "Interior Design Professional",
                      "Planning Consultant",
                    ],
                    salaryDirection:
                      "Steady growth; improves significantly with portfolio, licensing, and experience.",
                    higherStudies: ["M.Arch", "Urban Planning", "Design Specializations"],
                    applyLinks: [{ label: "NATA", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Defence & Government",
              items: [
                {
                  title: "NDA (Army/Navy/Air Force)",
                  slug: "nda",
                  detail: {
                    slug: "nda",
                    title: "NDA",
                    whatItIs:
                      "A prestigious defense pathway for students aiming to join the armed forces as officers.",
                    eligibility: "Intermediate; Maths and Physics required for some wings.",
                    entranceExams: ["UPSC NDA Exam", "SSB Interview"],
                    topColleges: ["National Defence Academy", "Defence Training Academies"],
                    careerOptions: ["Army Officer", "Navy Officer", "Air Force Officer"],
                    salaryDirection:
                      "Strong salary, benefits, career stability, and national-service prestige.",
                    higherStudies: ["Defense Specializations", "Staff Training", "Executive Education"],
                    applyLinks: [{ label: "UPSC NDA", url: "#" }],
                  },
                },
                {
                  title: "Technical Entry Schemes",
                  slug: "technical-entry-schemes",
                  detail: {
                    slug: "technical-entry-schemes",
                    title: "Technical Entry Schemes",
                    whatItIs:
                      "Defense-related technical pathways for students with strong science and math backgrounds.",
                    eligibility: "Intermediate with strong academic record in science subjects.",
                    entranceExams: ["Service-specific selection", "SSB", "Screening processes"],
                    topColleges: ["Military Technical Institutions", "Defence Academies"],
                    careerOptions: [
                      "Technical Officer",
                      "Defense Engineer",
                      "Operations Officer",
                    ],
                    salaryDirection:
                      "Stable and respected career path with strong long-term advancement.",
                    higherStudies: ["Defense Technical Training", "Advanced Service Courses"],
                    applyLinks: [{ label: "Defence Recruitment", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Merchant Navy",
              items: [
                {
                  title: "Nautical Science",
                  slug: "nautical-science",
                  detail: {
                    slug: "nautical-science",
                    title: "Nautical Science",
                    whatItIs:
                      "A maritime course for students aiming to work in navigation and ship operations.",
                    eligibility: "Intermediate with MPC, medical fitness, and institute-specific eligibility.",
                    entranceExams: ["IMU-CET", "Institute-specific admissions"],
                    topColleges: ["Indian Maritime University", "Recognized Maritime Institutes"],
                    careerOptions: ["Deck Cadet", "Navigation Officer", "Merchant Navy Officer"],
                    salaryDirection:
                      "Strong earning potential, especially in international shipping roles.",
                    higherStudies: ["Marine Certifications", "Advanced Navigation Qualifications"],
                    applyLinks: [{ label: "IMU Admissions", url: "#" }],
                  },
                },
                {
                  title: "Marine Engineering",
                  slug: "marine-engineering",
                  detail: {
                    slug: "marine-engineering",
                    title: "Marine Engineering",
                    whatItIs:
                      "A specialized engineering path focused on ship machinery, engines, and maritime systems.",
                    eligibility: "Intermediate with MPC and maritime admission requirements.",
                    entranceExams: ["IMU-CET", "Institute-specific engineering admissions"],
                    topColleges: ["Indian Maritime University", "Marine Engineering Colleges"],
                    careerOptions: [
                      "Marine Engineer",
                      "Engine Officer",
                      "Shipping Operations Roles",
                    ],
                    salaryDirection:
                      "High earning potential with international career exposure.",
                    higherStudies: ["Marine Specializations", "Management at Sea-related fields"],
                    applyLinks: [{ label: "Marine Admissions", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Aviation",
              items: [
                {
                  title: "Pilot Training",
                  slug: "pilot-training",
                  detail: {
                    slug: "pilot-training",
                    title: "Pilot Training",
                    whatItIs:
                      "A professional flight training pathway for students aiming to become commercial pilots.",
                    eligibility:
                      "Intermediate with Physics and Maths, medical fitness, and aviation training eligibility.",
                    entranceExams: ["DGCA processes", "Aptitude tests", "Institute screening"],
                    topColleges: ["Recognized Flying Schools", "Aviation Academies"],
                    careerOptions: ["Commercial Pilot", "Flight Instructor", "Aviation Operations"],
                    salaryDirection:
                      "Potentially high, but depends heavily on training quality, licensing, and market demand.",
                    higherStudies: ["Advanced Flight Certifications", "Aviation Management"],
                    applyLinks: [{ label: "DGCA", url: "#" }],
                  },
                },
                {
                  title: "Aeronautical Courses",
                  slug: "aeronautical-courses",
                  detail: {
                    slug: "aeronautical-courses",
                    title: "Aeronautical Courses",
                    whatItIs:
                      "Programs related to aircraft design, maintenance, aerospace systems, and aviation technology.",
                    eligibility: "Intermediate with MPC.",
                    entranceExams: ["Engineering entrances", "Institute-specific admissions"],
                    topColleges: ["Top Engineering Colleges", "Aerospace-focused Institutions"],
                    careerOptions: [
                      "Aeronautical Engineer",
                      "Aircraft Maintenance Roles",
                      "Aerospace Support Roles",
                    ],
                    salaryDirection:
                      "Good long-term potential with specialization and industry relevance.",
                    higherStudies: ["M.Tech Aerospace", "MS Abroad"],
                    applyLinks: [{ label: "Aeronautical Admissions", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Emerging Fields",
              items: [
                { title: "Robotics", slug: "robotics" },
                { title: "Cybersecurity", slug: "cybersecurity" },
                { title: "Data Science", slug: "data-science" },
                { title: "Game Development", slug: "game-development" },
              ],
            },
          ],
        },
        {
          title: "BiPC",
          slug: "bipc",
          categories: [
            {
              title: "Medical Core",
              items: [
                {
                  title: "MBBS",
                  slug: "mbbs",
                  detail: {
                    slug: "mbbs",
                    title: "MBBS",
                    whatItIs:
                      "A professional medical degree for students who want to become doctors.",
                    eligibility: "Intermediate with BiPC and NEET qualification.",
                    entranceExams: ["NEET"],
                    topColleges: ["AIIMS", "JIPMER", "Government Medical Colleges", "Top Private Medical Colleges"],
                    careerOptions: ["Doctor", "General Physician", "Medical Officer"],
                    salaryDirection:
                      "Strong long-term growth with specialization, residency, and clinical experience.",
                    higherStudies: ["MD", "MS", "DM", "DNB"],
                    applyLinks: [{ label: "NEET", url: "#" }],
                  },
                },
                {
                  title: "BDS",
                  slug: "bds",
                  detail: {
                    slug: "bds",
                    title: "BDS",
                    whatItIs:
                      "A professional dental degree for students interested in oral healthcare and dentistry.",
                    eligibility: "Intermediate with BiPC and NEET qualification.",
                    entranceExams: ["NEET"],
                    topColleges: ["Government Dental Colleges", "Top Private Dental Colleges"],
                    careerOptions: ["Dentist", "Dental Surgeon", "Oral Health Specialist"],
                    salaryDirection:
                      "Good potential with clinic practice, specialization, or hospital-based work.",
                    higherStudies: ["MDS", "Dental Specializations"],
                    applyLinks: [{ label: "NEET", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Pharmacy",
              items: [
                {
                  title: "B.Pharmacy",
                  slug: "bpharmacy",
                  detail: {
                    slug: "bpharmacy",
                    title: "B.Pharmacy",
                    whatItIs:
                      "A degree focused on medicines, drug development, pharmaceutical science, and healthcare systems.",
                    eligibility: "Intermediate with BiPC or MPC depending on institution.",
                    entranceExams: ["EAMCET", "State CETs", "University-specific exams"],
                    topColleges: ["Top Pharmacy Colleges", "State Universities"],
                    careerOptions: ["Pharmacist", "Quality Analyst", "Drug Safety Roles", "Pharma Sales"],
                    salaryDirection:
                      "Stable growth across pharmaceutical, hospital, and manufacturing sectors.",
                    higherStudies: ["M.Pharmacy", "Pharmaceutics", "Clinical Research"],
                    applyLinks: [{ label: "Pharmacy Admissions", url: "#" }],
                  },
                },
                {
                  title: "Pharma D",
                  slug: "pharma-d",
                  detail: {
                    slug: "pharma-d",
                    title: "Pharma D",
                    whatItIs:
                      "An advanced pharmacy-focused clinical degree with a stronger patient-care orientation.",
                    eligibility: "Intermediate with BiPC or MPC depending on institution.",
                    entranceExams: ["State-level admissions", "Institution-specific processes"],
                    topColleges: ["Recognized Pharmacy Institutions"],
                    careerOptions: ["Clinical Pharmacist", "Hospital Pharmacist", "Drug Safety Associate"],
                    salaryDirection:
                      "Good prospects in hospitals, clinical settings, and international opportunities.",
                    higherStudies: ["Clinical Pharmacy Specializations", "Public Health", "Research"],
                    applyLinks: [{ label: "Pharma D Admissions", url: "#" }],
                  },
                },
              ],
            },
            {
              title: "Allied Health Sciences",
              items: [
                { title: "BPT (Physiotherapy)", slug: "bpt" },
                { title: "Nursing", slug: "nursing" },
                { title: "Radiology", slug: "radiology" },
                { title: "Lab Technology", slug: "lab-technology" },
              ],
            },
            {
              title: "Life Sciences",
              items: [
                { title: "Biotechnology", slug: "biotechnology" },
                { title: "Microbiology", slug: "microbiology" },
                { title: "Genetics", slug: "genetics" },
              ],
            },
            {
              title: "Agriculture & Veterinary",
              items: [
                { title: "BSc Agriculture", slug: "bsc-agriculture" },
                { title: "Veterinary Science", slug: "veterinary-science" },
              ],
            },
            {
              title: "Food & Nutrition",
              items: [
                { title: "Food Technology", slug: "food-technology" },
                { title: "Nutrition & Dietetics", slug: "nutrition-dietetics" },
              ],
            },
            {
              title: "Environmental Sciences",
              items: [
                { title: "Environmental Science", slug: "environmental-science" },
                { title: "Forestry", slug: "forestry" },
              ],
            },
          ],
        },
        {
          title: "MEC",
          slug: "mec",
          categories: [
            {
              title: "Commerce & Finance",
              items: [
                { title: "B.Com", slug: "bcom" },
                { title: "Finance & Accounting", slug: "finance-accounting" },
              ],
            },
            {
              title: "Professional Courses",
              items: [
                { title: "CA (Chartered Accountant)", slug: "ca" },
                { title: "CMA", slug: "cma" },
                { title: "CS (Company Secretary)", slug: "cs" },
              ],
            },
            {
              title: "Management",
              items: [
                { title: "BBA", slug: "bba" },
                { title: "Business Analytics", slug: "business-analytics" },
              ],
            },
            {
              title: "Economics",
              items: [
                { title: "BA Economics", slug: "ba-economics" },
                { title: "Data Economics", slug: "data-economics" },
              ],
            },
            {
              title: "Banking & Govt",
              items: [
                { title: "Banking Careers", slug: "banking-careers" },
                { title: "SSC / UPSC Path", slug: "ssc-upsc-path" },
              ],
            },
          ],
        },
        {
          title: "CEC",
          slug: "cec",
          categories: [
            {
              title: "Business & Commerce",
              items: [
                { title: "B.Com", slug: "cec-bcom" },
                { title: "BBA", slug: "cec-bba" },
              ],
            },
            {
              title: "Law",
              items: [
                { title: "BA LLB", slug: "ba-llb" },
                { title: "BBA LLB", slug: "bba-llb" },
              ],
            },
            {
              title: "Public Administration",
              items: [{ title: "Civil Services (UPSC)", slug: "civil-services-upsc" }],
            },
            {
              title: "Media & Communication",
              items: [
                { title: "Journalism", slug: "journalism" },
                { title: "Mass Communication", slug: "mass-communication" },
              ],
            },
            {
              title: "Social Sciences",
              items: [
                { title: "Political Science", slug: "political-science" },
                { title: "Sociology", slug: "sociology" },
              ],
            },
          ],
        },
        {
          title: "HEC / Arts / Humanities",
          slug: "hec",
          categories: [
            {
              title: "Arts & Design",
              items: [
                { title: "Fashion Design", slug: "fashion-design" },
                { title: "Interior Design", slug: "interior-design" },
                { title: "Animation / VFX", slug: "animation-vfx" },
                { title: "Graphic Design", slug: "graphic-design" },
              ],
            },
            {
              title: "Psychology & Social Work",
              items: [
                { title: "BA Psychology", slug: "ba-psychology" },
                { title: "Social Work", slug: "social-work" },
              ],
            },
            {
              title: "Media & Journalism",
              items: [
                { title: "Journalism", slug: "hec-journalism" },
                { title: "Digital Media", slug: "digital-media" },
              ],
            },
            {
              title: "Teaching & Education",
              items: [{ title: "BA + B.Ed", slug: "ba-bed" }],
            },
            {
              title: "Civil Services Path",
              items: [{ title: "UPSC-focused Degrees", slug: "upsc-focused-degrees" }],
            },
            {
              title: "Performing Arts",
              items: [
                { title: "Music", slug: "music" },
                { title: "Dance", slug: "dance" },
                { title: "Theater", slug: "theater" },
              ],
            },
          ],
        },
        {
          title: "Vocational Courses",
          slug: "vocational-courses",
          categories: [
            {
              title: "Skill-Based Paths",
              items: [
                { title: "Hotel Management", slug: "hotel-management" },
                { title: "Tourism", slug: "tourism" },
                { title: "Retail Management", slug: "retail-management" },
                { title: "Healthcare Assistants", slug: "healthcare-assistants" },
              ],
            },
            {
              title: "Technical Skills",
              items: [
                { title: "Web Development", slug: "web-development" },
                { title: "Digital Marketing", slug: "digital-marketing" },
                { title: "Multimedia", slug: "multimedia" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Diploma / Polytechnic",
      slug: "diploma-polytechnic",
      description: "Technical and applied-learning pathways after 10th with strong job and lateral-entry potential.",
      categories: [
        {
          title: "Engineering Diplomas",
          items: [
            { title: "Civil", slug: "diploma-civil" },
            { title: "Mechanical", slug: "diploma-mechanical" },
            { title: "Electrical", slug: "diploma-electrical" },
            { title: "Electronics", slug: "diploma-electronics" },
            { title: "Computer Engineering", slug: "diploma-computer-engineering" },
          ],
        },
        {
          title: "After Diploma Options",
          items: [
            { title: "Lateral Entry B.Tech (2nd Year)", slug: "lateral-entry-btech" },
            { title: "Government Jobs", slug: "diploma-government-jobs" },
            { title: "Private Sector Jobs", slug: "diploma-private-sector-jobs" },
          ],
        },
      ],
    },
    {
      title: "ITI (Industrial Training Institute)",
      slug: "iti",
      description: "Practical training routes focused on technical and skill-based careers.",
      categories: [
        {
          title: "Technical Trades",
          items: [
            { title: "Electrician", slug: "electrician" },
            { title: "Fitter", slug: "fitter" },
            { title: "Welder", slug: "welder" },
            { title: "Mechanic", slug: "mechanic" },
          ],
        },
        {
          title: "Non-Technical Trades",
          items: [
            { title: "Tailoring", slug: "tailoring" },
            { title: "Stenography", slug: "stenography" },
            { title: "Computer Operator", slug: "computer-operator" },
          ],
        },
        {
          title: "After ITI",
          items: [
            { title: "Apprenticeships", slug: "apprenticeships" },
            { title: "Government Jobs", slug: "iti-government-jobs" },
            { title: "Skill-based Careers", slug: "iti-skill-based-careers" },
          ],
        },
      ],
    },
  ];
  
  export const crossStreamOptions: CrossStreamSection[] = [
    {
      title: "Technology Careers (All Streams)",
      slug: "technology-careers-all-streams",
      items: ["Coding Bootcamps", "UI/UX Design", "Data Analytics"],
    },
    {
      title: "Government Exams Path",
      slug: "government-exams-path",
      items: ["SSC", "UPSC", "State PSC", "Banking"],
    },
    {
      title: "Specialized Careers",
      slug: "specialized-careers",
      items: ["Aviation", "Defense", "Merchant Navy"],
    },
    {
      title: "Study Abroad",
      slug: "study-abroad",
      items: ["SAT / IELTS / TOEFL Routes"],
    },
    {
      title: "Entrepreneurship",
      slug: "entrepreneurship",
      items: ["Startups", "Freelancing"],
    },
  ];