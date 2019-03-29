import * as yup from 'yup';

export const ticketSchema = yup.object().shape({
  name: yup
    .string()
    .required('Introduce un nombre')
    .trim(),
  dni: yup
    .string()
    .required('Introduce un número de documento')
    .matches(/^[0-9]*$/, 'Esto no parece ser un número de documento. Por favor, revisalo.'),
  email: yup
    .string()
    .required('Introduce un email')
    .email('Esto no parece ser un e-mail. Por favor, revisalo.')
    .trim()
});
