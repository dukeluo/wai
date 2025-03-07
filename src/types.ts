export type Month = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

export type Day =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'

type MonthInHistory = Partial<Record<Day, string[]>>

export type YearInHistory = Record<Month, MonthInHistory>

export type SeasonFood = Record<
  Month,
  {
    vegetables: string[]
    fruits: string[]
  }
>

export interface IContentBaseProps {
  date: Date
}

export enum Mode {
  Full = 'full',
  Continuous = 'continuous',
  Soft = 'soft',
}

export interface IModeConfig {
  turn: () => number
  isReversed: boolean
  interval: number
}

export interface IModeConfigValue {
  turn: number
  isReversed: boolean
  interval: number
}

export interface ILatestUpdate {
  message: string
}
