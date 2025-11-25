import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v2', // 假设后端API运行在本地8000端口
  headers: {
    'Content-Type': 'application/json',
  },
});

// ============ Interfaces ============ //

export interface Product {
  id: string;
  name: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  progress: number;
  image_url: string | null;
  is_featured: boolean;
}

export interface Solution {
  id: string;
  title: string;
  summary: string | null;
  content: string | null;
  category: string | null;
  cover_image_url: string | null;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string | null;
  image_url: string | null;
}

export interface TechnologySection {
  id: string;
  title: string;
  content: string | null;
  image_url: string | null;
}

export interface Setting {
  key: string;
  value: any;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// ============ API Functions ============ //

export const getWebsiteProducts = async (params: { is_featured?: boolean } = {}): Promise<Product[]> => {
  const response = await apiClient.get('/public/website/products', { params });
  return response.data;
};

export const getWebsiteSolutions = async (): Promise<Solution[]> => {
  const response = await apiClient.get('/public/website/solutions');
  return response.data;
};

export const getWebsiteAboutSections = async (): Promise<AboutSection[]> => {
  const response = await apiClient.get('/public/website/about-sections');
  return response.data;
};

export const getWebsiteTechnologySections = async (): Promise<TechnologySection[]> => {
  const response = await apiClient.get('/public/website/technology-sections');
  return response.data;
};

export const getWebsiteSettings = async (): Promise<Setting[]> => {
  const response = await apiClient.get('/public/website/settings');
  return response.data;
};

export const submitContactInquiry = async (data: ContactInquiry): Promise<any> => {
  const response = await apiClient.post('/public/inquiries/', data);
  return response.data;
};

