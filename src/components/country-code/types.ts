import { CommonType } from '../../models/models'

export type CountryCodeType = CommonType<{
  isCounter: boolean;
  //default 2 
  minLength: number;
  //default 3
  maxLength: number;
}>

