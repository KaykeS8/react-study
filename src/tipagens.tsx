export interface PropsRadio {
  pergunta: string;
  options: string[];
  resposta: string;
  id: string;
  onChange: (item: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  active: boolean;
}

export interface StateResposta {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}