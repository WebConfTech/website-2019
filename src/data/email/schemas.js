import * as yup from 'yup';

export const addEmailSchema = yup
  .string()
  .required('Introduce tu email')
  .email('El e-mail introducido no es válido. Intenta de nuevo')
  .trim();
