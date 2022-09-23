const webGetItem = async (key: string): Promise<string | null> => localStorage.getItem(key)

const webSetItem = (key: string, value: string) => localStorage.setItem(key, value)

const chromeGetItem = async (key: string): Promise<string | null> => {
  const values = await chrome.storage.sync.get(key)

  return values[key]
}

const chromeSetItem = (key: string, value: string) => chrome.storage.sync.set({ [key]: value })

const isChrome = window.chrome !== undefined

export const storage = {
  getItem: isChrome ? chromeGetItem : webGetItem,
  setItem: isChrome ? chromeSetItem : webSetItem,
}
