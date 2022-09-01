export interface WorkExperienceInterface {
  id: number;
  job_id: number;
  company_id: number;
  start_date: string;
  end_date?: string;
  description: string;
  company_image: string;
  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;
  company: Company;
  job: Job;
}

interface Company {
  id: number;
  name: string;
}

interface Job {
  id: number;
  name: string;
}
