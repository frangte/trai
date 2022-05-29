export const buildQuery = (obj) => {
  return Object.keys(obj)
    .reduce((acc, key) => {
      const value = obj[key]
      if (value) {
        acc.push(`${key}=${value}`)
      }
      return acc
    }, [])
    .join('&')
}
