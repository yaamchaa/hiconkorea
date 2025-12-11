import { useState, useEffect } from 'react';
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Cell, ComposedChart } from 'recharts';
import { MoreVertical, Plus, ArrowRight, ArrowLeft, PlayCircle, Search, TrendingUp, TrendingDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';
import avatar1 from 'figma:asset/9bb873ada5bf1ec44d775cea49d484046080e270.png';
import avatar2 from 'figma:asset/95bb4654de298cb28859bcb152046b9f145f4b6e.png';
import avatar3 from 'figma:asset/0c82f8a5019b3c1b68d55503d246ae10075e5ea0.png';
import avatar4 from 'figma:asset/944dc0e2b6fedec2d9f8502c87b06399b0c96f05.png';

const barData = [
  { name: '1월', value: 20, target: 25, previous: 18 },
  { name: '2월', value: 45, target: 40, previous: 35 },
  { name: '3월', value: 28, target: 30, previous: 32 },
  { name: '4월', value: 80, target: 75, previous: 70 },
  { name: '5월', value: 55, target: 60, previous: 48 },
  { name: '6월', value: 40, target: 45, previous: 42 },
  { name: '7월', value: 85, target: 80, previous: 75 },
  { name: '8월', value: 30, target: 35, previous: 28 },
];

const areaData = [
  { date: '10/12', value: 100, target: 95 },
  { date: '10/13', value: 120, target: 100 },
  { date: '10/14', value: 90, target: 105 },
  { date: '10/15', value: 140, target: 110 },
  { date: '10/16', value: 110, target: 115 },
  { date: '10/17', value: 160, target: 120 },
  { date: '10/18', value: 130, target: 125 },
  { date: '10/19', value: 180, target: 130 },
];

const lineData = [
  { date: '10/12', value: 60, forecast: 65 },
  { date: '10/13', value: 80, forecast: 75 },
  { date: '10/14', value: 50, forecast: 55 },
  { date: '10/15', value: 90, forecast: 85 },
  { date: '10/16', value: 40, forecast: 45 },
  { date: '10/17', value: 100, forecast: 95 },
  { date: '10/18', value: 55, forecast: 60 },
  { date: '10/19', value: 95, forecast: 90 },
];

// 전체 직원 데이터 (30명)
const allEmployees = [
  { id: 1, name: 'MES 김민준', department: 'MES', avatar: avatar1 },
  { id: 2, name: 'TPM 박서연', department: 'TPM', avatar: avatar2 },
  { id: 3, name: 'SCM 이준호', department: 'SCM', avatar: avatar3 },
  { id: 4, name: 'TFT 최지우', department: 'TFT', avatar: avatar4 },
  { id: 5, name: '본사 정수민', department: '본사', avatar: avatar4 },
  { id: 6, name: 'MES 강동욱', department: 'MES', avatar: avatar1 },
  { id: 7, name: 'TPM 윤지혜', department: 'TPM', avatar: avatar2 },
  { id: 8, name: 'SCM 임태경', department: 'SCM', avatar: avatar3 },
  { id: 9, name: 'BOM 한예린', department: 'BOM', avatar: avatar4 },
  { id: 10, name: '품질 조현우', department: '품질', avatar: avatar1 },
  { id: 11, name: '안전 신유진', department: '안전', avatar: avatar2 },
  { id: 12, name: 'MES 오승현', department: 'MES', avatar: avatar3 },
  { id: 13, name: 'TPM 장민서', department: 'TPM', avatar: avatar4 },
  { id: 14, name: 'SCM 배성호', department: 'SCM', avatar: avatar1 },
  { id: 15, name: 'BOM 권나영', department: 'BOM', avatar: avatar2 },
  { id: 16, name: '영업 황준혁', department: '영업', avatar: avatar3 },
  { id: 17, name: '기술 송지원', department: '기술', avatar: avatar4 },
  { id: 18, name: 'MES 허재영', department: 'MES', avatar: avatar1 },
  { id: 19, name: 'TPM 차수빈', department: 'TPM', avatar: avatar2 },
  { id: 20, name: 'SCM 노현석', department: 'SCM', avatar: avatar3 },
  { id: 21, name: 'BOM 홍서아', department: 'BOM', avatar: avatar4 },
  { id: 22, name: '품질 고민재', department: '품질', avatar: avatar1 },
  { id: 23, name: '안전 류다은', department: '안전', avatar: avatar2 },
  { id: 24, name: 'TFT 문지훈', department: 'TFT', avatar: avatar3 },
  { id: 25, name: '본사 안채원', department: '본사', avatar: avatar4 },
  { id: 26, name: '영업 전상민', department: '영업', avatar: avatar1 },
  { id: 27, name: '기술 유하은', department: '기술', avatar: avatar2 },
  { id: 28, name: 'MES 곽지호', department: 'MES', avatar: avatar3 },
  { id: 29, name: 'TPM 손시우', department: 'TPM', avatar: avatar4 },
  { id: 30, name: 'SCM 진아인', department: 'SCM', avatar: avatar1 }
];

// 직원 활동 데이터
const employeeActivities = [
  {
    name: 'MES 김민준',
    avatar: avatar1,
    media: [
      { type: 'color', value: 'bg-blue-500' },
      { type: 'emoji', value: '🌿', gradient: 'from-green-400 to-blue-500' },
      { type: 'color', value: 'bg-gradient-to-br from-purple-400 to-pink-400' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop' }
    ]
  },
  {
    name: 'TPM 박서연',
    avatar: avatar2,
    media: [
      { type: 'color', value: 'bg-red-500' },
      { type: 'emoji', value: '⚡', gradient: 'from-yellow-400 to-orange-500' },
      { type: 'color', value: 'bg-gradient-to-br from-blue-400 to-cyan-400' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop' }
    ]
  },
  {
    name: 'SCM 이준호',
    avatar: avatar3,
    media: [
      { type: 'color', value: 'bg-green-500' },
      { type: 'emoji', value: '🔧', gradient: 'from-purple-400 to-pink-500' },
      { type: 'color', value: 'bg-gradient-to-br from-orange-400 to-red-400' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop' }
    ]
  },
  {
    name: 'TFT 최지우',
    avatar: avatar4,
    media: [
      { type: 'color', value: 'bg-purple-500' },
      { type: 'emoji', value: '📊', gradient: 'from-teal-400 to-blue-500' },
      { type: 'color', value: 'bg-gradient-to-br from-pink-400 to-rose-400' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop' }
    ]
  },
  {
    name: '본사 정수민',
    avatar: avatar4,
    media: [
      { type: 'color', value: 'bg-indigo-500' },
      { type: 'emoji', value: '🎯', gradient: 'from-rose-400 to-red-500' },
      { type: 'color', value: 'bg-gradient-to-br from-cyan-400 to-blue-400' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop' }
    ]
  }
];

// 전세계 유명 순환 골재 회사들 (2025-10-19 선정)
const recyclingCompanies = [
  {
    name: 'LafargeHolcim (스위스)',
    description: '지속가능한 건축 솔루션 글로벌 리더',
    videoId: 'dQw4w9WgXcQ', // 실제 YouTube ID로 교체 필요
    image: 'https://images.unsplash.com/photo-1643194253810-c9d5d884c3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3NjA4NDA2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.holcim.com'
  },
  {
    name: 'HeidelbergCement (독일)',
    description: '친환경 콘크리트 및 골재 전문',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1697107661233-a09ae03636e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA4NjkyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.heidelbergmaterials.com'
  },
  {
    name: 'CRH (아일랜드)',
    description: '건축 자재 및 순환 골재 솔루션',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1634033486098-b5c03a0d1802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwcml2ZXJ8ZW58MXx8fHwxNzYwODY5Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.crh.com'
  },
  {
    name: 'GCP Applied Technologies (미국)',
    description: '콘크리트 첨가제 및 강화 기술',
    videoId: 'dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1630450364945-0c1ec2c449cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzYwODY5Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://gcpat.com'
  }
];

// 전세계 유명 골재 파쇄기 회사들 (2025-10-19 선정)
const crusherCompanies = [
  {
    name: 'McCloskey (캐나다)',
    description: '모바일 파쇄 및 스크리닝 장비',
    image: 'https://images.unsplash.com/photo-1589201529153-5297335c1684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGNsZWFuJTIwZW5lcmd5fGVufDF8fHx8MTc2MDg2OTI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.mccloskeyinternational.com'
  },
  {
    name: 'Powerscreen (영국)',
    description: '모바일 파쇄 및 선별 솔루션',
    image: 'https://images.unsplash.com/photo-1558947314-402d7060e898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRyZWVzJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzYwODY5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.powerscreen.com'
  },
  {
    name: 'Eagle Crusher (미국)',
    description: '고효율 파쇄 및 스크리닝 시스템',
    image: 'https://images.unsplash.com/photo-1594239330127-1e9c4dc7d967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA4NjkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.eaglecrusher.com'
  },
  {
    name: 'Astec Industries (미국)',
    description: '골재 처리 및 파쇄 장비 제조',
    image: 'https://images.unsplash.com/photo-1707052161137-aeb0e3808863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2t5JTIwZ3JlZW4lMjBmaWVsZHxlbnwxfHx8fDE3NjA4NjkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    website: 'https://www.astecindustries.com'
  }
];

export function FeaturedCard1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recyclingCompanies.length);
    }, 4000); // 4초마다 자동 스크롤

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + recyclingCompanies.length) % recyclingCompanies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % recyclingCompanies.length);
  };

  const handleCardClick = () => {
    window.open(currentCompany.website, '_blank', 'noopener,noreferrer');
  };

  const currentCompany = recyclingCompanies[currentIndex];

  return (
    <div 
      className="rounded-2xl p-4 md:p-6 text-white relative overflow-hidden aspect-square shadow-2xl group cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
      onClick={handleCardClick}
    >
      {/* 배경 이미지/비디오 영역 */}
      <div className="absolute inset-0 bg-black/40">
        <img 
          src={currentCompany.image}
          alt={currentCompany.name}
          className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-70"
        />
      </div>

      {/* 상단 우측 네비게이션 아이콘들 */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* 하단 정보 */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-10" style={{ height: '120px' }}>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl mb-1 line-clamp-1">{currentCompany.name}</h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-1">{currentCompany.description}</p>
          
          {/* 인디케이터 */}
          <div className="flex gap-2">
            {recyclingCompanies.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-1 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCard2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % crusherCompanies.length);
    }, 4000); // 4초마다 자동 스크롤

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + crusherCompanies.length) % crusherCompanies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % crusherCompanies.length);
  };

  const handleCardClick = () => {
    window.open(currentCompany.website, '_blank', 'noopener,noreferrer');
  };

  const currentCompany = crusherCompanies[currentIndex];

  return (
    <div 
      className="rounded-2xl overflow-hidden aspect-square shadow-2xl bg-white flex flex-col cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* 상단: 이미지 영역 (50%) */}
      <div className="relative h-1/2 group">
        <img 
          src={currentCompany.image}
          alt={currentCompany.name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
        
        {/* 상단 우측 네비게이션 아이콘들 */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* 인디케이터 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {crusherCompanies.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-white' : 'w-1 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* 하단: 회사 정보 영역 (50%) */}
      <div className="h-1/2 bg-white relative">
        <div className="absolute bottom-[41px] left-6 right-6">
          <h3 className="text-xl mb-1 text-gray-900 line-clamp-1">{currentCompany.name}</h3>
          <p className="text-gray-700 text-sm line-clamp-1">{currentCompany.description}</p>
        </div>
      </div>
    </div>
  );
}

export function EmployeeActivityCard() {
  const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmployeeIndex((prev) => (prev + 1) % employeeActivities.length);
    }, 4000); // 4초마다 자동 롤링

    return () => clearInterval(interval);
  }, []);

  const currentEmployee = employeeActivities[currentEmployeeIndex];

  const filteredEmployees = allEmployees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleEmployee = (employeeId: number) => {
    setSelectedEmployees(prev => 
      prev.includes(employeeId) 
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const handleSelectAll = () => {
    if (selectedEmployees.length === filteredEmployees.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(filteredEmployees.map(emp => emp.id));
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm md:text-base text-gray-900"><strong>오늘</strong>직원활동</h3>
          <button 
            className="p-1 hover:bg-gray-50 rounded"
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </button>
        </div>
      
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <Avatar className="w-14 h-14">
            <AvatarImage src={currentEmployee.avatar} />
            <AvatarFallback>{currentEmployee.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-center">{currentEmployee.name}</p>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mt-1">
            {currentEmployee.media.map((item, index) => {
              if (item.type === 'color') {
                return <div key={index} className={`w-9 h-9 ${item.value} rounded`}></div>;
              } else if (item.type === 'emoji') {
                return (
                  <div key={index} className={`w-9 h-9 bg-gradient-to-br ${item.gradient} rounded flex items-center justify-center text-sm`}>
                    {item.value}
                  </div>
                );
              } else if (item.type === 'image') {
                return (
                  <div key={index} className="w-9 h-9 rounded overflow-hidden">
                    <img src={item.value} alt="media" className="w-full h-full object-cover" />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>직원 선택</DialogTitle>
            <DialogDescription>
              활동을 추적할 직원을 선택하세요. (선택됨: {selectedEmployees.length}명)
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="이름 또는 부서로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <button
                onClick={handleSelectAll}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {selectedEmployees.length === filteredEmployees.length ? '전체 해제' : '전체 선택'}
              </button>
              <span className="text-sm text-gray-500">
                {filteredEmployees.length}명 표시
              </span>
            </div>

            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-2">
                {filteredEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => handleToggleEmployee(employee.id)}
                  >
                    <Checkbox
                      checked={selectedEmployees.includes(employee.id)}
                      onCheckedChange={() => handleToggleEmployee(employee.id)}
                    />
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-gray-500">{employee.department}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                취소
              </Button>
              <Button onClick={() => setIsDialogOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                확인
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// 일일 계획 데이터
const dailyPlans = [
  {
    title: 'TPM',
    description: '오늘의 보전 작업 일일 계획'
  },
  {
    title: 'MES',
    description: '오늘의 생산관리 일일 계획'
  },
  {
    title: 'BOM',
    description: '오늘의 자재 / 장비 계획'
  }
];

export function QuickNoteCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dailyPlans.length);
    }, 4000); // 4초마다 자동 롤링

    return () => clearInterval(interval);
  }, []);

  const currentPlan = dailyPlans[currentIndex];

  return (
    <div className="bg-white rounded-2xl flex flex-col shadow-2xl relative aspect-square md:aspect-auto md:h-full">
      <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-6 pt-4 px-4 md:px-6">
        <h2 className="text-xl md:text-2xl text-gray-900">{currentPlan.title}</h2>
        
        <div className="flex-1">
          <p className="text-sm md:text-base text-gray-600">{currentPlan.description}</p>
        </div>
      </div>
      
      {/* 인디케이터 */}
      <div className="flex gap-2 mt-auto p-4 md:p-6">
        {dailyPlans.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-gray-900' : 'w-1 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function AnalyticsCards() {
  const [selectedLine, setSelectedLine] = useState('A라인');
  
  // 데이터 계산
  const currentMonthTotal = barData[barData.length - 1].value;
  const previousMonthTotal = barData[barData.length - 2].value;
  const monthlyChange = ((currentMonthTotal - previousMonthTotal) / previousMonthTotal * 100).toFixed(1);
  
  const currentRate = areaData[areaData.length - 1].value;
  const previousRate = areaData[areaData.length - 2].value;
  const rateChange = ((currentRate - previousRate) / previousRate * 100).toFixed(1);
  
  const currentBOM = lineData[lineData.length - 1].value;
  const previousBOM = lineData[lineData.length - 2].value;
  const bomChange = ((currentBOM - previousBOM) / previousBOM * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
      {/* TPM 월간 계획 */}
      <div className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-gray-900"><strong className="text-gray-900">TPM</strong> <span className="text-gray-500">월간 계획</span></h3>
              {parseFloat(monthlyChange) > 0 ? (
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs">+{monthlyChange}%</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <TrendingDown className="w-3 h-3" />
                  <span className="text-xs">{monthlyChange}%</span>
                </div>
              )}
            </div>
            <p className="text-2xl text-gray-900">{currentMonthTotal}</p>
            <p className="text-xs text-gray-400">이번 달 목표 대비</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 hover:bg-gray-50 rounded">
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectedLine('A라인')}>
                A라인
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedLine('B라인')}>
                B라인
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedLine('C라인')}>
                C라인
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={barData} barSize={16}>
              <defs>
                <linearGradient id="barGradientBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.95}/>
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <YAxis 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  backgroundColor: 'white',
                  padding: '12px 16px'
                }}
                cursor={{ fill: 'rgba(59, 130, 246, 0.08)' }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                iconType="circle"
              />
              <Bar dataKey="value" fill="url(#barGradientBlue)" radius={[6, 6, 0, 0]} name="실적" />
              <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeWidth={2} dot={false} name="목표" strokeDasharray="5 5" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* TPM 공정율 */}
      <div className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-gray-900"><strong className="text-gray-900">TPM</strong> <span className="text-gray-500">공정율</span></h3>
              {parseFloat(rateChange) > 0 ? (
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs">+{rateChange}%</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <TrendingDown className="w-3 h-3" />
                  <span className="text-xs">{rateChange}%</span>
                </div>
              )}
            </div>
            <p className="text-2xl text-green-600">{currentRate}</p>
            <p className="text-xs text-gray-400">현재 공정율</p>
          </div>
          <button className="p-1 hover:bg-gray-50 rounded">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <YAxis 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  backgroundColor: 'white',
                  padding: '12px 16px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                iconType="circle"
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#22c55e" 
                fill="url(#colorArea)" 
                strokeWidth={2.5}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5 }}
                name="공정율"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#94a3b8" 
                strokeWidth={1.5} 
                dot={false} 
                strokeDasharray="3 3"
                name="목표"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* BOM 수급율 */}
      <div className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-gray-900"><strong className="text-gray-900">BOM</strong> <span className="text-gray-500">수급율</span></h3>
              {parseFloat(bomChange) > 0 ? (
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs">+{bomChange}%</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <TrendingDown className="w-3 h-3" />
                  <span className="text-xs">{bomChange}%</span>
                </div>
              )}
            </div>
            <p className="text-2xl text-purple-600">{currentBOM}%</p>
            <p className="text-xs text-gray-400">평균 수급율</p>
          </div>
          <button className="p-1 hover:bg-gray-50 rounded">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <YAxis 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  backgroundColor: 'white',
                  padding: '12px 16px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                iconType="circle"
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="url(#lineGradient)" 
                strokeWidth={2.5} 
                dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#a855f7' }}
                name="실적"
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#cbd5e1" 
                strokeWidth={1.5} 
                dot={false} 
                strokeDasharray="5 5"
                name="예측"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <EmployeeActivityCard />
    </div>
  );
}