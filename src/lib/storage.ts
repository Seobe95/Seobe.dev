export const setStorage = async (key: string, value: string) => {
  try {
    await localStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

export const getStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  } catch (e) {
    console.error(e)
  }
}
