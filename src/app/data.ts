type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type SocialLink = {
  label: string;
  link: string;
};

type Project = {
  name: string;
  description: string;
  link: string;
  id: string;
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Paynet Payment Systems",
    title: "Lead Frontend Engineer",
    start: "2023",
    end: "Present",
    link: "https://www.paynet.com.tr/",
    id: "work1",
  },
  {
    company: "Axya",
    title: "Lead Frontend Engineer",
    start: "2021",
    end: "2023",
    link: "https://axya.co/",
    id: "work2",
  },
  {
    company: "Netguru",
    title: "Senior Frontend Engineer",
    start: "2020",
    end: "2021",
    link: "https://www.netguru.com/",
    id: "work3",
  },
  {
    company: "Appcircle",
    title: "Software Engineer, Frontend",
    start: "2019",
    end: "2020",
    link: "https://www.appcircle.io/",
    id: "work4",
  },
  {
    company: "ATP",
    title: "Software Engineer",
    start: "2017",
    end: "2019",
    link: "https://www.atptech.com/",
    id: "work5",
  },
  {
    company: "Paynet Payment",
    title: "Software Engineer",
    start: "2015",
    end: "2017",
    link: "https://www.paynet.com.tr/",
    id: "work6",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "paynet-frontend-architecture",
    name: "Paynet Frontend Architecture & Microfrontends",
    description:
      "Led frontend architecture initiatives for a high-volume fintech platform. Implemented a microfrontend structure and reusable design components across multiple teams, improving scalability and developer experience. Optimized webpack and CI/CD pipelines, reducing build times by 35%.",
    link: "https://www.paynet.com.tr/",
  },
  {
    id: "axya-modernization",
    name: "Axya Web Platform Modernization",
    description:
      "Migrated 90% of a legacy codebase to modern React and Redux Toolkit with a modular architecture. Delivered core modules including Purchase Orders, RFQs, and Analytics. Authored onboarding and architecture documentation, reducing developer onboarding time by 50%.",
    link: "https://www.axya.co/",
  },
  {
    id: "netguru-cross-platform",
    name: "Netguru Cross-Platform Applications",
    description:
      "Led development of web and mobile applications using ReactJS and React Native. Implemented Cypress test suites to ensure accuracy and reliability. Delivered features in collaboration with distributed teams across three countries.",
    link: "https://www.netguru.com/",
  },
  {
    id: "appcircle-ci-cd-platform",
    name: "Appcircle Mobile CI/CD Frontend",
    description:
      "Built the frontend application for a mobile CI/CD platform using ReactJS and Redux. Designed and implemented a modern UI with SCSS/CSS. Integrated secure data storage and processing using Node.js and MongoDB.",
    link: "https://appcircle.io/",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/ozanmanav",
  },
  {
    label: "Twitter",
    link: "https://x.com/ozanmanav",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ozanmanav/",
  },
];

export const EMAIL = "ozan.manavv@email.com";
