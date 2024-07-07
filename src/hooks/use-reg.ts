const useReg = (arr: string[]) => {
  return /^(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[$@,_.]+)[\da-zA-Z$@,_.]*$/
}