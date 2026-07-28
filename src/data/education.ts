export const certifications: string[] = [
  "Diploma in Full Stack Web Development — Seedbuilders",
  "Secure Coding — Secure Application Development",
  "AWS Cloud Practitioner (in progress)",
];

export type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
};

export const education: EducationEntry[] = [
  {
    degree: "B.Tech, Estate Management & Valuation",
    school: "Federal University of Technology, Minna",
    location: "Minna, Nigeria",
    start: "03/2014",
    end: "10/2018",
  },
];
