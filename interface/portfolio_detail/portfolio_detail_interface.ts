export interface PortfolioDetailInterface {
  id: number;
  type_application_id: number;
  main_technology_id: number;
  title: string;
  title_slug: string;
  short_description: string;
  full_description: string;
  banner_image: string;
  github_url: null | string;
  web_url: null | string;
  google_playstore_url: null | string;
  app_store_url: null | string;
  created_at: Date;
  updated_at: Date;
  created_by: null | number;
  updated_by: null | number;
  previewImages: PreviewImage[];
  main_technology: MainTechnology;
  type: TypeApplication;
  other_technology: OtherTechnology[];
  preview_images: PreviewImage[];
}

interface MainTechnology {
  id: number;
  name: string;
}

interface TypeApplication {
  id: number;
  name: string;
}

interface OtherTechnology {
  id: string;
  portfolio_id: number;
  technology_id: number;
  technology: MainTechnology;
}

interface PreviewImage {
  id: string;
  portfolio_id: number;
  image: string;
}
