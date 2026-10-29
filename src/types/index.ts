export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName?: string;
  description?: string;
  subcategories?: { id: string; name: string; slug: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  order: number;
}

export interface Book {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishYear: number;
  category: string;
  categorySlug: string;
  subCategory?: string;
  language: "Tiếng Việt" | "Tiếng Anh" | "Song ngữ";
  format: "PDF" | "EPUB" | "VIDEO";
  pages?: number;
  fileSize: string;
  coverImage: string;
  description: string;
  tableOfContents?: string[];
  views: number;
  downloads: number;
  rating: number;
  isHot?: boolean;
  isFeatured?: boolean;
  isVipOnly?: boolean;
  downloadUrl?: string;
  previewUrl?: string;
  lessons?: Lesson[];
}

export type TrendingTab = "hot" | "week" | "month";
export type ViewMode = "grid" | "list";

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  updatedDate?: string;
  author: string;
  categories: string[];
  categorySlugs: string[];
  modality: "Siêu âm" | "CT" | "MRI" | "XQ" | "Tổng hợp";
  specialty: string;
  specialtySlug: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  clinicalCase?: {
    history?: string;
    findings?: string[];
    diagnosis?: string;
    takeaways?: string[];
  };
  views: number;
  readTime: string;
  source?: string;
  tags?: string[];
  downloadUrl?: string;
}
