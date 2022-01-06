import * as yup from 'yup';
export const registerSchema = yup.object({
  email: yup.string().email('Invalid email address').required(),
  password: yup.string().min(6).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required(),
  password: yup.string().min(6).required(),
});
export const menuSchema = yup.object({
  name: yup.string().required(),
  price: yup.number().required(),
  phone: yup.number().required(),
  photo__url: yup.string().required(),
});

export const resSchema = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  photo__url: yup.string().required(),
});
