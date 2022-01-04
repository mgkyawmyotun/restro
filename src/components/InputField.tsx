import { TextField } from '@mui/material';
import { useField } from 'formik';
import React, { FC, useEffect } from 'react';
import styles from '../scss/input.module.scss';

interface InputFormProps {
  label: string;
  type: 'text' | 'password';
  name: string;
}
export const InputField: FC<InputFormProps> = ({ label, name, type }) => {
  // eslint-disable-next-line
  const [{ value, onChange, onBlur }, { error, touched }] = useField({ name });
  useEffect(() => {});
  return (
    <TextField
      label={label}
      variant="outlined"
      margin="dense"
      sx={{ input: { color: 'white' } }}
      className={styles.input}
      type={type}
      name={name}
      autoComplete={'off'}
      helperText={touched && error}
      value={value}
      error={true}
      onChange={(e) => {
        onChange(e.nativeEvent);
      }}
      onBlur={onBlur}
    />
  );
};
