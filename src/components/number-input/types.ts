import { CommonType } from '../../models/models'
export type InputNumberType = CommonType<{
  isCounter?: boolean;
  // default false
  isDecimal?: boolean;
   // default 2
  decimalPlace?: number;
  min: number;
  max: number;
}>

