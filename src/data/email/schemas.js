import * as yup from 'yup';

export const addEmailSchema = yup
  .string()
  .required('Introduce tu email')
  .email('Esto no parece ser un e-mail. Por favor, revisalo.')
  .trim();
