export interface ProfileInterface {
  id: number;
  name: string;
  motto: string;
  description: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;
}
