// Define TypeScript interfaces for the data structures
export interface AboutMe {
  id: number;
  fullName: string;
  jobFiled: string; // Note: "jobFiled" should be "jobField" if it's a typo
  profileImage: ImageStrapi;
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
  icon: ImageStrapi;
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

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface ImageStrapi {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null; // Adjust type based on actual data
      createdAt: string;
      updatedAt: string;
    };
  };
}
