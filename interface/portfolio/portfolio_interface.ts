export interface PortfolioInterface {
  id: number;
  type_application_id: number;
  main_technology_id: number;
  title: string;
  title_slug: string;
  short_description: string;
  full_description: string;
  banner_image: string;
  github_url?: string;
  web_url?: string;
  google_playstore_url?: string;
  app_store_url?: string;
  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;
  main_technology: MainTechnology;
  type: TypeApplication;
  other_technology: OtherTechnology[];
}

interface TypeApplication {
  id: number;
  name: string;
}

interface MainTechnology {
  id: number;
  name: string;
}

interface OtherTechnology {
  id: string;
  portfolio_id: number;
  technology_id: number;
  technology: MainTechnology;
}
