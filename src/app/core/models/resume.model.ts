// Define TypeScript interfaces for the data structures
export interface AboutMe {
    id: number;
    fullName: string;
    jobFiled: string;  // Note: "jobFiled" should be "jobField" if it's a typo
  }
  
  export interface Project {
    id: number;
    title: string;
    startDate: string; // Consider using Date type if you need to manipulate dates
    endDate: string | null; // Consider using Date type if you need to manipulate dates
    description: string;
    projectUrl: string | null;
  }
  
  export interface Skill {
    id: number;
    title: string;
    color: string;
  }
  
  export interface Experience {
    id: number;
    title: string;
    description: string;
    startDate: string; // Consider using Date type if you need to manipulate dates
    endDate: string | null; // Consider using Date type if you need to manipulate dates
  }
  
  export interface SocialMedia {
    id: number;
    url: string;
  }
  
  export interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    aboutMe: AboutMe;
    projects: Project[];
    skills: Skill[];
    experience: Experience[];
    socialMedia: SocialMedia[];
  }
  
  export interface ResumeData {
    id: number;
    attributes: Attributes;
  }
  
  export interface ResumeApiResponse {
    data: ResumeData;
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  