import { ApiService } from './ApiService'

export class TodayInfoService extends ApiService {
  constructor(date: string) {
    super(`https://timor.tech/api/holiday/info/${date}`)
  }
}
