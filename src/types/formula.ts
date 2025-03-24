export interface Formula {
  name: string;
  ingredients: string[];
  taste?: string;
  temp?: string;
  complexion?: string;
  condition?: string;
}

export interface Herb {
  id: string;
  name: string;
  image: string;
  properties: {
    taste?: string;
    temperature?: string;
    meridians?: string[];
    actions?: string[];
  };
}

export interface FormulaSet {
  id: string;
  name: string;
  formulas: Formula[];
  description: string;
} 