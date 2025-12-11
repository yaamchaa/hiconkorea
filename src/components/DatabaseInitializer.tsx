import { useEffect, useState } from 'react';
import { checkTablesExist } from '../lib/initDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { AlertCircle, Database, Check, RefreshCw, XCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

export function DatabaseInitializer() {
  // 준비중 모드 - 데이터베이스 체크 비활성화
  return null;
}