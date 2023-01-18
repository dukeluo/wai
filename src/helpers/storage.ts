const webGetItem = async (key: string): Promise<string | null> => localStorage.getItem(key)

const webSetItem = (key: string, value: string) => localStorage.setItem(key, value)

const extGetItem = async (key: string): Promise<string | null> => {
  const values = await chrome.storage.sync.get(key)

  return values[key]
}

const extSetItem = (key: string, value: string) => chrome.storage.sync.set({ [key]: value })

const isWebExt = window?.chrome?.runtime?.id !== undefined

export const storage = {
  getItem: isWebExt ? extGetItem : webGetItem,
  setItem: isWebExt ? extSetItem : webSetItem,
}
