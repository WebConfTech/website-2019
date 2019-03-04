import * as yup from 'yup';

export const ticketSchema = yup.object().shape({
  name: yup
    .string()
    .required('Introduce un nombre')
    .trim(),
  dni: yup
    .number('Esto no parece ser un número de documento. Por favor, revisalo.')
    .required('Introduce un número de documento')
    .integer('Esto no parece ser un número de documento. Por favor, revisalo.')
    .positive('Esto no parece ser un número de documento. Por favor, revisalo.'),
  email: yup
    .string()
    .required('Introduce un email')
    .email('Esto no parece ser un e-mail. Por favor, revisalo.')
    .trim()
});
