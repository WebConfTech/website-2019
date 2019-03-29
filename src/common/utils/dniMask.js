import * as R from 'ramda';

export const maskDni = R.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const unmaskDni = R.replace(/\./g, '');
