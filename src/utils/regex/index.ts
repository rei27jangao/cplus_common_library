export const noSpaceAtBeginning = /(^\s*)/gi
export const numberExp = /^[0-9]*$/
export const numberFullWidthExp = /^[０-９]*$/
export const alphaExp = /^[A-Za-z]+$/
export const alphaFullWidthExp = /^[Ａ-ｚ]+$/
export const alphaNumeric = /[^a-zA-Z0-9０-９Ａ-ｚ]/g;
export const numberFullAndHalfWidth = /^[0-9０-９]*$/
export const aplhaFullAndHalfWidth = /^[A-Za-zＡ-ｚ]*$/