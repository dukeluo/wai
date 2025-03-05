import { ApiService } from './ApiService'

export class LatestUpdateService extends ApiService {
  constructor() {
    super(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/latest-update`)
  }

  async fetch(config: RequestInit = {}) {
    return super.fetch({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
    })
  }
}
