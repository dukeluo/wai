export class ApiService {
  resource: string

  constructor(resource: string) {
    if (!resource) {
      throw new Error('Resource is not provided')
    }
    this.resource = resource
  }

  getUrl() {
    return this.resource
  }

  handleError(err: unknown) {
    console.error({ error: err })
  }

  async fetch(config = {}) {
    try {
      const response = await fetch(this.getUrl(), config)

      return await response.json()
    } catch (error) {
      this.handleError(error)
    }
  }
}
