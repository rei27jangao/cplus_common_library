import { CommonType } from '../../models'

export type EmailInputType = CommonType<{
  maxLength?: number
  minLength?: number
}>
