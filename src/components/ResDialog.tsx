import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Formik } from 'formik';
import type { FC } from 'react';
import React from 'react';
import { addMenu } from '../firebase/db';
import { uploadFile } from '../firebase/storage';
import styles from '../scss/dashboard.module.scss';
import { menuSchema } from '../utils/validation';
import { InputField } from './InputField';

interface ResDialogProps {
  handleClose: () => void;
  open: boolean;
}
export const ResDialog: FC<ResDialogProps> = ({ handleClose, open }) => {
  return (
    <Dialog
      open={open}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      className={styles.dialog}
    >
      <DialogTitle className={styles.dialog__title}>
        {'စားစရာအသစ်ထည့်ပါ'}
      </DialogTitle>

      <Formik
        initialValues={{
          name: '',
          price: '',
          phone: '09',
          photo__url: '',
        }}
        onSubmit={async (values) => {
          const res = await addMenu(values);
          console.log(res);
        }}
        validationSchema={menuSchema}
      >
        {({ errors, handleSubmit, values, setValues }) => {
          return (
            <>
              <DialogContent aria-label="dialog_content">
                <InputField label="Name" name="name" type="text" />
                <InputField label="Phone" name="phone" type="number" />
                <InputField label="Price" name="price" type="number" />
                <InputField label="Photo URL" name="photo__url" type="text" />
                <h3>OR</h3>
                <Button
                  variant="contained"
                  component="label"
                  aria-label="upload__button"
                  disabled={values.photo__url != ''}
                >
                  Upload Photo
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const name = e.target.files[0].name;
                        uploadFile(e.target.files[0], name).then((res) =>
                          setValues({
                            ...values,
                            photo__url: res.ref.fullPath,
                          })
                        );
                      }
                    }}
                  />
                </Button>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="error" variant="contained">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleSubmit()}
                  color="primary"
                  variant="contained"
                >
                  Create
                </Button>
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </Dialog>
  );
};
