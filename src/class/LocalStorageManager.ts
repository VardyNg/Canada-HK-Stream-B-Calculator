
export default abstract class LocalStorageManager {         

  public static setValue(key: string, value: string) {
    console.log(`setValue: ${key}, ${value}`)
    localStorage.setItem(key,value)
  }

  public static getValue(key: string) {
    localStorage.getItem(key)
  }
}
