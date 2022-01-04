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
