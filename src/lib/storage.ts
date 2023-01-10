export const setStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

export const getStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key)
    if (item) {
      return item
    }
    return null
  } catch (e) {
    console.error(e)
  }
}
