export const noSpaceAtBeginning = /(^\s*)/gi
export const noSpaceAtBeginningAndLast = /(^\s*)|(\s*$)/gi
export const fixDoubleSpacing = /[ ]{2,}/gi
export const fixSpacing = /\n +/
// eslint-disable-next-line no-control-regex
export const emailInputFormat = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0]{1,65}(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\-\u00A0]|[a-z\d\u00A0][a-z\d\-._~\u00A0][a-z\d\-\u00A0]{0,253})\.)+([a-z\u00A0]|[a-z\u00A0][a-z\d\-._~\u00A0]*[a-z\u00A0])\.?$/i
