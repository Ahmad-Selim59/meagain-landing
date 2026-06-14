export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio: string[];
  linkedIn?: string;
};

export type OpenRole = {
  id: string;
  name: string;
  role: string;
  bio: string[];
  contactEmail: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "ana-dinho",
    name: "Ana Dinho",
    role: "Founder",
    initials: "A",
    linkedIn: "https://www.linkedin.com/in/ana-d-7273b765/",
    bio: [
      "Ana founded MeAgain from lived experience. As a breast cancer survivor, she experienced treatment-induced menopause firsthand (sudden and severe symptoms) with no preparation or structured support. That experience became the foundation of everything MeAgain is building.",
      "Before founding MeAgain, Ana spent over 15 years in senior leadership roles across global technology and financial services, including Senior Director of Global Strategic Planning at Stripe, where she led operations scaling and workforce transformation across international markets.",
      "She is a certified Lean Six Sigma Black Belt and holds a degree in Management and she is pursuing a Higher Diploma in Statistics at UCD.",
    ],
  },
  {
    id: "ahmad-selim",
    name: "Ahmad Selim",
    role: "Co-Founder & Technical Lead",
    initials: "AS",
    linkedIn: "https://www.linkedin.com/in/ahmad-selim-6151b3199/",
    bio: [
      "Ahmad leads MeAgain's technical architecture and product development. A full-stack software engineer with deep experience in healthcare and AI-enabled environments, he has worked on AI-driven clinical platforms and clinician-led AI deployments — bringing hands-on expertise directly relevant to building a digital health platform that is secure, scalable, and clinically appropriate.",
      "His technical stack spans React, Next.js, TypeScript, Python, FastAPI, and AWS. Within MeAgain, Ahmad leads end-to-end platform development — including architecture, user experience, authentication, and data infrastructure — building the foundation that will carry MeAgain from pilot to scale.",
    ],
  },
  {
    id: "reda-mohammed",
    name: "Reda Mohammed",
    role: "Product Engineer",
    initials: "RA",
    linkedIn: "https://www.linkedin.com/in/reda-ali-mohammed-691832259/",
    bio: [
      "Reda brings strong software engineering experience from Workday, where he progressed from Associate Software Developer to Software Development Engineer II over nearly four years, building deep expertise in enterprise-grade software development and delivery. He also brings a VR development background from Intel, giving him a broad technical perspective on how emerging technologies can be applied to real-world problems.",
      "At MeAgain, Reda works alongside Ahmad on product engineering — turning clinical and user requirements into a platform that is intuitive, reliable, and built to the standards the healthcare environment demands.",
    ],
  },
  {
    id: "keith-hobson",
    name: "Keith Hobson",
    role: "Financial Advisor",
    initials: "K",
    bio: [
      "Keith brings over 20 years of senior financial services experience, including roles at JP Morgan and BNP Paribas, where he currently serves as Vice President. A qualified Chartered Accountant, Keith provides financial advisory support to MeAgain, bringing institutional-grade rigour to the company's early-stage planning, investment readiness, and commercial model development.",
      "His involvement reflects a genuine belief in MeAgain's mission and the importance of building the right financial foundations from the very beginning.",
    ],
  },
];

export const OPEN_ROLE: OpenRole = {
  id: "clinical-co-founder",
  name: "Clinical Co-Founder",
  role: "Open Position",
  contactEmail: "hello@mymeagain.ie",
  bio: [
    "MeAgain is looking for a Clinical Co-Founder with expertise in oncology, breast cancer care, or women's health to join the founding team. This is a unique opportunity to shape a digital health platform from the ground up bringing clinical credibility, patient insight, and healthcare ecosystem relationships to a mission-driven company at a pivotal moment in its development.",
    "If you are a clinician, nurse specialist, or healthcare professional who believes in closing the gap in support for women navigating treatment-induced menopause, we would love to hear from you.",
  ],
};
