import type { CATEGORIES } from "../enums";

export type Question = {
  id: number;
  question: string;
  answer: string;
  position: number;
};

export type Questions = Record<CATEGORIES, Question[]>;
