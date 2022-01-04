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

export const deskSchema = yup.object({
  desk_name: yup.string().min(3).max(15).required(),
});

export const deskEditSchema = yup.object({
  new_desk_name: yup.string().min(3).max(15).required(),
});

export const cardSchema = yup.object({
  card_name: yup.string().min(3).max(15).required(),
});
