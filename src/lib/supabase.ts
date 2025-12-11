import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || `https://${projectId}.supabase.co`;
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || publicAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase 연결 확인
export const isSupabaseConnected = () => {
  // projectId와 publicAnonKey가 있으면 연결된 것으로 간주
  return (projectId && publicAnonKey) || 
         (supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key');
};

// 데이터베이스 타입 정의
export type WasteRecord = {
  id: string;
  date: string;
  waste_type: string;
  quantity: number;
  unit: string;
  source: string;
  status: 'received' | 'processing' | 'completed';
  created_at: string;
};

export type RecycledAggregateRecord = {
  id: string;
  date: string;
  product_type: string;
  quantity: number;
  unit: string;
  quality_grade: string;
  created_at: string;
};

export type DailyStats = {
  id: string;
  date: string;
  total_waste_received: number;
  total_aggregate_produced: number;
  recycling_rate: number;
  created_at: string;
};