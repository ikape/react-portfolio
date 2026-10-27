export type Certification = {
  name: string;
  url?: string;
};

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;

export const certifications: Certification[] = [
  { name: "Software Development Diploma — Seedbuilders", url: drive("1cn_WmA7xQ_W6kEU1oddm6eJZSrTLKkX5") },
  {
    name: "Secure Coding — Secure Application Development",
    url: drive("1d7-kRvgKcsb_5gQvyCkti2Hd2w5JYd-1"),
  },
  { name: "AWS Cloud Practitioner (in view)" },
];

export type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  url?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "B.Tech, Estate Management & Valuation",
    school: "Federal University of Technology, Minna",
    location: "Minna, Nigeria",
    start: "03/2014",
    end: "10/2018",
    url: drive("1wpGZF16yrfNo2h47M7PIhNwVTIu2EGZa"),
  },
  {
    degree: "National Youth Service Corps (NYSC) — IT Support Specialist",
    school: "Energy Commission of Nigeria",
    location: "Abuja, Nigeria",
    start: "02/2019",
    end: "03/2020",
    url: drive("1v-H6bm492KJNwszGOoVQyUQvdgmlH2n1"),
  },
];
