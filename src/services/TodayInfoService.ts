import { ApiService } from './ApiService'

export class TodayInfoService extends ApiService {
  constructor(date: string) {
    super(`http://timor.tech/api/holiday/info/${date}`)
  }
}
