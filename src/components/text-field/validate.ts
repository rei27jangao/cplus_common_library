// import * as yup from 'yup'

// export const validate = async (value: any, name: any, required: any) => {
//   const buildIfRequired = (required: any) => ({
//     is: required,
//     then: yup.string(),
//     otherwise: yup.string().required(`${name} is a required Field`)
//   })

//   let errors: any = ''

//   const schema = yup
//     .string()
//     .max(10, `${name} Must be 10 character`)
//     .when(`${name}`, buildIfRequired(required))
//   const result: any = schema
//     .validate(value)
//     .then(() => {
//       errors = null
//       return errors
//     })
//     .catch((e) => {
//       if (e.message !== null || e.message !== undefined) errors = e.message
//       return errors
//     })
//   return result
// }
