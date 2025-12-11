import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Plus, Trash2, Settings2, ChevronRight, ChevronDown, Database } from 'lucide-react';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface EquipmentMasterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Equipment {
  id: string;
  code: string;
  name: string;
  materials: Material[];
}

interface Material {
  id: string;
  code: string;
  name: string;
  parts: Part[];
}

interface Part {
  id: string;
  code: string;
  name: string;
}

export function EquipmentMasterDialog({ open, onOpenChange }: EquipmentMasterDialogProps) {
  const [selectedLine, setSelectedLine] = useState<'A' | 'B' | 'C'>('A');
  const [equipmentData, setEquipmentData] = useState<{
    A: Equipment[];
    B: Equipment[];
    C: Equipment[];
  }>({
    A: [
      {
        id: '1',
        code: 'EQ-A-001',
        name: '1차 파쇄기',
        materials: [
          {
            id: '1-1',
            code: 'MAT-A-001',
            name: '파쇄 날',
            parts: [
              { id: '1-1-1', code: 'PART-A-001', name: '교체용 날' },
              { id: '1-1-2', code: 'PART-A-002', name: '고정 볼트' }
            ]
          },
          {
            id: '1-2',
            code: 'MAT-A-002',
            name: '구동부',
            parts: [
              { id: '1-2-1', code: 'PART-A-003', name: '베어링' },
              { id: '1-2-2', code: 'PART-A-004', name: '모터 벨트' }
            ]
          }
        ]
      },
      {
        id: '2',
        code: 'EQ-A-002',
        name: '스크린 선별기',
        materials: [
          {
            id: '2-1',
            code: 'MAT-A-003',
            name: '선별 망',
            parts: [
              { id: '2-1-1', code: 'PART-A-005', name: '5mm 메쉬' },
              { id: '2-1-2', code: 'PART-A-006', name: '10mm 메쉬' }
            ]
          }
        ]
      }
    ],
    B: [
      {
        id: '3',
        code: 'EQ-B-001',
        name: '2차 파쇄기',
        materials: [
          {
            id: '3-1',
            code: 'MAT-B-001',
            name: '충격 해머',
            parts: [
              { id: '3-1-1', code: 'PART-B-001', name: '해머 헤드' }
            ]
          }
        ]
      }
    ],
    C: []
  });

  const [expandedEquipment, setExpandedEquipment] = useState<Set<string>>(new Set());
  const [expandedMaterial, setExpandedMaterial] = useState<Set<string>>(new Set());

  // 새 설비 추가 폼
  const [newEquipment, setNewEquipment] = useState({ code: '', name: '' });
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>('');
  const [newMaterial, setNewMaterial] = useState({ code: '', name: '' });
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('');
  const [newPart, setNewPart] = useState({ code: '', name: '' });

  const handleAddEquipment = () => {
    if (!newEquipment.code || !newEquipment.name) {
      toast.error('설비 코드와 이름을 입력하세요');
      return;
    }

    const equipment: Equipment = {
      id: Date.now().toString(),
      code: newEquipment.code,
      name: newEquipment.name,
      materials: []
    };

    setEquipmentData({
      ...equipmentData,
      [selectedLine]: [...equipmentData[selectedLine], equipment]
    });

    setNewEquipment({ code: '', name: '' });
    toast.success(`${selectedLine}라인에 설비가 추가되었습니다`);
  };

  const handleAddMaterial = () => {
    if (!selectedEquipmentId) {
      toast.error('설비를 먼저 선택하세요');
      return;
    }
    if (!newMaterial.code || !newMaterial.name) {
      toast.error('자재 코드와 이름을 입력하세요');
      return;
    }

    const material: Material = {
      id: Date.now().toString(),
      code: newMaterial.code,
      name: newMaterial.name,
      parts: []
    };

    setEquipmentData({
      ...equipmentData,
      [selectedLine]: equipmentData[selectedLine].map(eq =>
        eq.id === selectedEquipmentId
          ? { ...eq, materials: [...eq.materials, material] }
          : eq
      )
    });

    setNewMaterial({ code: '', name: '' });
    toast.success('자재가 추가되었습니다');
  };

  const handleAddPart = () => {
    if (!selectedMaterialId) {
      toast.error('자재를 먼저 선택하세요');
      return;
    }
    if (!newPart.code || !newPart.name) {
      toast.error('부품 코드와 이름을 입력하세요');
      return;
    }

    const part: Part = {
      id: Date.now().toString(),
      code: newPart.code,
      name: newPart.name
    };

    setEquipmentData({
      ...equipmentData,
      [selectedLine]: equipmentData[selectedLine].map(eq => ({
        ...eq,
        materials: eq.materials.map(mat =>
          mat.id === selectedMaterialId
            ? { ...mat, parts: [...mat.parts, part] }
            : mat
        )
      }))
    });

    setNewPart({ code: '', name: '' });
    toast.success('부품이 추가되었습니다');
  };

  const handleDeleteEquipment = (equipmentId: string) => {
    setEquipmentData({
      ...equipmentData,
      [selectedLine]: equipmentData[selectedLine].filter(eq => eq.id !== equipmentId)
    });
    toast.success('설비가 삭제되었습니다');
  };

  const handleDeleteMaterial = (equipmentId: string, materialId: string) => {
    setEquipmentData({
      ...equipmentData,
      [selectedLine]: equipmentData[selectedLine].map(eq =>
        eq.id === equipmentId
          ? { ...eq, materials: eq.materials.filter(mat => mat.id !== materialId) }
          : eq
      )
    });
    toast.success('자재가 삭제되었습니다');
  };

  const handleDeletePart = (equipmentId: string, materialId: string, partId: string) => {
    setEquipmentData({
      ...equipmentData,
      [selectedLine]: equipmentData[selectedLine].map(eq => ({
        ...eq,
        materials: eq.materials.map(mat =>
          mat.id === materialId
            ? { ...mat, parts: mat.parts.filter(part => part.id !== partId) }
            : mat
        )
      }))
    });
    toast.success('부품이 삭제되었습니다');
  };

  const toggleEquipment = (equipmentId: string) => {
    const newExpanded = new Set(expandedEquipment);
    if (newExpanded.has(equipmentId)) {
      newExpanded.delete(equipmentId);
    } else {
      newExpanded.add(equipmentId);
    }
    setExpandedEquipment(newExpanded);
  };

  const toggleMaterial = (materialId: string) => {
    const newExpanded = new Set(expandedMaterial);
    if (newExpanded.has(materialId)) {
      newExpanded.delete(materialId);
    } else {
      newExpanded.add(materialId);
    }
    setExpandedMaterial(newExpanded);
  };

  const getLineLimit = (line: 'A' | 'B' | 'C') => {
    return line === 'A' ? 26 : line === 'B' ? 24 : 21;
  };

  const currentLineEquipmentCount = equipmentData[selectedLine].length;
  const maxEquipment = getLineLimit(selectedLine);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[96vw] lg:max-w-[1400px] max-h-[95vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            설비 마스터 등록
          </DialogTitle>
          <DialogDescription>
            생산 라인별 설비, 자재, 부품을 3단계 계층으로 등록하고 관리합니다.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedLine} onValueChange={(value) => setSelectedLine(value as 'A' | 'B' | 'C')} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="A" className="flex items-center gap-2">
              A 라인
              <span className="text-xs text-gray-500">({equipmentData.A.length}/26)</span>
            </TabsTrigger>
            <TabsTrigger value="B" className="flex items-center gap-2">
              B 라인
              <span className="text-xs text-gray-500">({equipmentData.B.length}/24)</span>
            </TabsTrigger>
            <TabsTrigger value="C" className="flex items-center gap-2">
              C 라인
              <span className="text-xs text-gray-500">({equipmentData.C.length}/21)</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedLine} className="flex-1 overflow-hidden flex gap-4 mt-4">
            {/* 좌측: 설비 등록 폼 */}
            <Card className="w-[400px] p-4 space-y-4 overflow-y-auto">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Settings2 className="w-4 h-4" />
                  1단계: 설비 기계 등록
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label>설비 코드</Label>
                    <Input
                      placeholder="예: EQ-A-001"
                      value={newEquipment.code}
                      onChange={(e) => setNewEquipment({ ...newEquipment, code: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>설비명</Label>
                    <Input
                      placeholder="예: 1차 파쇄기"
                      value={newEquipment.name}
                      onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
                    />
                  </div>
                  <Button
                    onClick={handleAddEquipment}
                    className="w-full"
                    disabled={currentLineEquipmentCount >= maxEquipment}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    설비 추가 ({currentLineEquipmentCount}/{maxEquipment})
                  </Button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Settings2 className="w-4 h-4" />
                  2단계: 하위 자재 등록
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label>상위 설비 선택</Label>
                    <Select value={selectedEquipmentId} onValueChange={setSelectedEquipmentId}>
                      <SelectTrigger>
                        <SelectValue placeholder="설비를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipmentData[selectedLine].map(eq => (
                          <SelectItem key={eq.id} value={eq.id}>
                            {eq.code} - {eq.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>자재 코드</Label>
                    <Input
                      placeholder="예: MAT-A-001"
                      value={newMaterial.code}
                      onChange={(e) => setNewMaterial({ ...newMaterial, code: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>자재명</Label>
                    <Input
                      placeholder="예: 파쇄 날"
                      value={newMaterial.name}
                      onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleAddMaterial} className="w-full" variant="secondary">
                    <Plus className="w-4 h-4 mr-2" />
                    자재 추가
                  </Button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Settings2 className="w-4 h-4" />
                  3단계: 부품/부속 등록
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label>상위 자재 선택</Label>
                    <Select value={selectedMaterialId} onValueChange={setSelectedMaterialId}>
                      <SelectTrigger>
                        <SelectValue placeholder="자재를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedEquipmentId &&
                          equipmentData[selectedLine]
                            .find(eq => eq.id === selectedEquipmentId)
                            ?.materials.map(mat => (
                              <SelectItem key={mat.id} value={mat.id}>
                                {mat.code} - {mat.name}
                              </SelectItem>
                            ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>부품 코드</Label>
                    <Input
                      placeholder="예: PART-A-001"
                      value={newPart.code}
                      onChange={(e) => setNewPart({ ...newPart, code: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>부품명</Label>
                    <Input
                      placeholder="예: 베어링"
                      value={newPart.name}
                      onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleAddPart} className="w-full" variant="secondary">
                    <Plus className="w-4 h-4 mr-2" />
                    부품 추가
                  </Button>
                </div>
              </div>
            </Card>

            {/* 우측: 설비 트리 뷰 */}
            <Card className="flex-1 p-4 overflow-hidden flex flex-col">
              <h3 className="font-semibold mb-3">
                {selectedLine}라인 설비 목록 ({currentLineEquipmentCount}/{maxEquipment})
              </h3>
              <ScrollArea className="flex-1">
                {equipmentData[selectedLine].length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    설비를 등록해주세요
                  </div>
                ) : (
                  <div className="space-y-2">
                    {equipmentData[selectedLine].map((equipment) => (
                      <div key={equipment.id} className="border rounded-lg">
                        {/* 설비 레벨 */}
                        <div className="p-3 bg-blue-50 hover:bg-blue-100 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1">
                              <button
                                onClick={() => toggleEquipment(equipment.id)}
                                className="hover:bg-blue-200 rounded p-1"
                              >
                                {expandedEquipment.has(equipment.id) ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </button>
                              <Settings2 className="w-4 h-4 text-blue-600" />
                              <div>
                                <p className="font-semibold">{equipment.code}</p>
                                <p className="text-sm text-gray-600">{equipment.name}</p>
                              </div>
                              <span className="text-xs text-gray-500 ml-2">
                                (자재: {equipment.materials.length})
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteEquipment(equipment.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* 자재 레벨 */}
                        {expandedEquipment.has(equipment.id) && (
                          <div className="pl-6 border-l-2 border-blue-200 ml-3">
                            {equipment.materials.map((material) => (
                              <div key={material.id} className="mt-2">
                                <div className="p-2 bg-green-50 hover:bg-green-100 rounded transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 flex-1">
                                      <button
                                        onClick={() => toggleMaterial(material.id)}
                                        className="hover:bg-green-200 rounded p-1"
                                      >
                                        {expandedMaterial.has(material.id) ? (
                                          <ChevronDown className="w-3 h-3" />
                                        ) : (
                                          <ChevronRight className="w-3 h-3" />
                                        )}
                                      </button>
                                      <div>
                                        <p className="font-medium text-sm">{material.code}</p>
                                        <p className="text-xs text-gray-600">{material.name}</p>
                                      </div>
                                      <span className="text-xs text-gray-500 ml-2">
                                        (부품: {material.parts.length})
                                      </span>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleDeleteMaterial(equipment.id, material.id)}
                                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>

                                {/* 부품 레벨 */}
                                {expandedMaterial.has(material.id) && (
                                  <div className="pl-6 border-l-2 border-green-200 ml-3">
                                    {material.parts.map((part) => (
                                      <div
                                        key={part.id}
                                        className="mt-2 p-2 bg-purple-50 hover:bg-purple-100 rounded transition-colors"
                                      >
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                            <div>
                                              <p className="font-medium text-sm">{part.code}</p>
                                              <p className="text-xs text-gray-600">{part.name}</p>
                                            </div>
                                          </div>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() =>
                                              handleDeletePart(equipment.id, material.id, part.id)
                                            }
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                          >
                                            <Trash2 className="w-3 h-3" />
                                          </Button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            닫기
          </Button>
          <Button onClick={() => {
            console.log('설비 마스터 데이터:', equipmentData);
            toast.success('설비 마스터 데이터가 저장되었습니다');
          }}>
            저장
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
