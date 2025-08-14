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
