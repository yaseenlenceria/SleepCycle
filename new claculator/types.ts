export type Meridiem = 'AM' | 'PM';

export interface TimeState {
  hour: number;
  minute: number;
  meridiem: Meridiem;
}

export interface CycleResult {
  time: Date;
  cycles: number;
  label: string;
  isSuggested: boolean;
}

export enum CalculatorMode {
  WAKE_UP = 'WAKE_UP', // I want to wake up at...
  BED_NOW = 'BED_NOW', // I am going to bed now...
}