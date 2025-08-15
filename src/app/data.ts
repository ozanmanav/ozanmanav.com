export type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
  description: string[];
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
    description: [
      "Lead frontend architecture initiatives for a high-volume fintech platform.",
      "Introduced microfrontend structure and reusable design components across teams.",
      "Reduced frontend build time by 35% through Webpack and CI/CD pipeline optimizations.",
      "Directed async-first development processes across distributed teams.",
      "Applied advanced data visualization techniques using D3.js.",
    ],
  },
  {
    company: "Axya",
    title: "Lead Frontend Engineer",
    start: "2021",
    end: "2023",
    link: "https://axya.co/",
    id: "work2",
    description: [
      "Migrated 90% of the legacy codebase to modern React, Redux Toolkit, and modular architecture.",
      "Developed mission-critical modules such as Purchase Orders, RFQs, and Analytics.",
      "Led code reviews and refactoring strategy to ensure scalability and maintainability.",
      "Authored onboarding and architecture documentation adopted by 10+ developers, reducing onboarding time by 50%.",
    ],
  },
  {
    company: "Netguru",
    title: "Senior Frontend Engineer",
    start: "2020",
    end: "2021",
    link: "https://www.netguru.com/",
    id: "work3",
    description: [
      "Led development of user-friendly and functional web and mobile applications.",
      "Managed development workflows using React Native and ReactJS.",
      "Implemented Cypress test suites to ensure application reliability.",
      "Collaborated asynchronously with product and QA teams across three countries.",
    ],
  },
  {
    company: "Appcircle",
    title: "Software Engineer, Frontend",
    start: "2019",
    end: "2020",
    link: "https://www.appcircle.io/",
    id: "work4",
    description: [
      "Built frontend application for a mobile CI/CD platform using ReactJS and Redux.",
      "Designed and styled modern UI using SCSS/CSS.",
      "Implemented secure user data storage and processing using NodeJS and MongoDB.",
    ],
  },
  {
    company: "ATP",
    title: "Software Engineer",
    start: "2017",
    end: "2019",
    link: "https://www.atptech.com/",
    id: "work5",
    description: [
      "Developed real-time dashboards for online branches of multiple investment banks, providing instant access to critical financial data.",
      "Utilized ReactJS and GraphQL to build dynamic, interactive user interfaces with enhanced data visualization.",
      "Designed responsive and visually appealing UI using SCSS/CSS.",
      "Implemented scalable back-end systems with NodeJS, MongoDB, and GraphQL to handle low-latency real-time data updates.",
      "Integrated with banking systems to fetch and display live account balances, transactions, and market data.",
    ],
  },
  {
    company: "Paynet Payment",
    title: "Software Engineer",
    start: "2015",
    end: "2017",
    link: "https://www.paynet.com.tr/",
    id: "work6",
    description: [
      "Developed payment systems API and web applications using C#, MVC, .NET, ReactJS, and jQuery.",
      "Designed secure and scalable RESTful APIs for payment transactions, authentication, and authorization.",
      "Built responsive and interactive UI with ReactJS, HTML, CSS/SCSS, and jQuery.",
      "Integrated with third-party payment gateways and financial institutions' APIs to streamline secure payment processing.",
    ],
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

export const TechStack = [
  "React JS",
  "TypeScript",
  "Redux",
  "Node.js",
  "MongoDB",
  "GraphQL",
  "Cypress",
  "D3.js",
  "SCSS/CSS",
  ".NET",
];
