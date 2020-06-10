function toAscii(value: string): string {
  const charArray: number[] = []
  for (let i = value.length - 1; 0 <= i; i--) {
    const charCode = (charArray[i] = value.charCodeAt(i))
    switch (true) {
      case charCode <= 0xff5e && 0xff01 <= charCode:
        charArray[i] -= 0xfee0
        break
      case charCode === 0x3000:
        charArray[i] = 0x0020
        break
      case charCode === 0x2502:
        charArray[i] = 0xffe8
        break
      case charCode === 0x2190:
        charArray[i] = 0xffe9
        break
      case charCode === 0x2191:
        charArray[i] = 0xffea
        break
      case charCode === 0x2192:
        charArray[i] = 0xffeb
        break
      case charCode === 0x2193:
        charArray[i] = 0xffec
        break
      case charCode === 0x25a0:
        charArray[i] = 0xffed
        break
      case charCode === 0x25cb:
        charArray[i] = 0xffee
        break
      case charCode === 0xffe0:
        charArray[i] = 0x00a2
        break
      case charCode === 0xffe1:
        charArray[i] = 0x00a3
        break
      case charCode === 0xffe2:
        charArray[i] = 0x00ac
        break
      case charCode === 0xffe3:
        charArray[i] = 0x00af
        break
      case charCode === 0xffe4:
        charArray[i] = 0x00a6
        break
      case charCode === 0xffe5:
        charArray[i] = 0x00a5
        break
      case charCode === 0xffe6:
        charArray[i] = 0x00a9
        break
    }
  }
  return String.fromCharCode.apply(null, charArray)
}

type halfwidthKanaMap = {
  [key: number]: number
}

const halfwidthKanaMap: halfwidthKanaMap = {
  0x30a1: 0xff67,
  0x30a3: 0xff68,
  0x30a5: 0xff69,
  0x30a7: 0xff6a,
  0x30a9: 0xff6b,
  0x30e3: 0xff6c,
  0x30e5: 0xff6d,
  0x30e7: 0xff6e,
  0x30c3: 0xff6f,
  0x30fc: 0xff70,
  0x30a2: 0xff71,
  0x30a4: 0xff72,
  0x30a6: 0xff73,
  0x30a8: 0xff74,
  0x30aa: 0xff75,
  0x30ab: 0xff76,
  0x30ad: 0xff77,
  0x30af: 0xff78,
  0x30b1: 0xff79,
  0x30b3: 0xff7a,
  0x30b5: 0xff7b,
  0x30b7: 0xff7c,
  0x30b9: 0xff7d,
  0x30bb: 0xff7e,
  0x30bd: 0xff7f,
  0x30bf: 0xff80,
  0x30c1: 0xff81,
  0x30c4: 0xff82,
  0x30c6: 0xff83,
  0x30c8: 0xff84,
  0x30ca: 0xff85,
  0x30cb: 0xff86,
  0x30cc: 0xff87,
  0x30cd: 0xff88,
  0x30ce: 0xff89,
  0x30cf: 0xff8a,
  0x30d2: 0xff8b,
  0x30d5: 0xff8c,
  0x30d8: 0xff8d,
  0x30db: 0xff8e,
  0x30de: 0xff8f,
  0x30df: 0xff90,
  0x30e0: 0xff91,
  0x30e1: 0xff92,
  0x30e2: 0xff93,
  0x30e4: 0xff94,
  0x30e6: 0xff95,
  0x30e8: 0xff96,
  0x30e9: 0xff97,
  0x30ea: 0xff98,
  0x30eb: 0xff99,
  0x30ec: 0xff9a,
  0x30ed: 0xff9b,
  0x30ef: 0xff9c,
  0x30f3: 0xff9d,
  0x309b: 0xff9e,
  0x309c: 0xff9f,
  0x30f2: 0xff66
}

function toHalfwidthKana(value: string): string {
  const charArray: number[] = []
  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    switch (true) {
      case charCode in halfwidthKanaMap:
        charArray.push(halfwidthKanaMap[charCode])
        break
      case 0x30ab <= charCode && charCode <= 0x30c9:
        charArray.push(halfwidthKanaMap[charCode - 1], 0xff9e)
        break
      case 0x30cf <= charCode && charCode <= 0x30dd:
        charArray.push(
          halfwidthKanaMap[charCode - (charCode % 3)],
          [0xff9e, 0xff9f][(charCode % 3) - 1]
        )
        break
      case 0x30f4 === charCode:
        charArray.push(0xff73, 0xff9e)
        break
      default:
        charArray.push(charCode)
        break
    }
  }
  return String.fromCharCode.apply(null, charArray)
}

export const toHalfWidth = (value: string) => {
  const firstConvert = toHalfwidthKana(value)
  const secondConvert = toAscii(firstConvert)
  return secondConvert
}
