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
import { addRes } from '../firebase/db';
import { uploadResImg } from '../firebase/storage';
import { useUser } from '../hooks/useUser';
import styles from '../scss/dashboard.module.scss';
import { resSchema } from '../utils/validation';
import { InputField } from './InputField';
interface CreateResDialogProps {
  handleClose: () => void;
  open: boolean;
}
export const CreateResDialog: FC<CreateResDialogProps> = ({
  handleClose,
  open,
}) => {
  const [user] = useUser();
  return (
    <>
      <Dialog
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        className={styles.dialog}
      >
        <DialogTitle className={styles.dialog__title}>
          {'Create Your Restaurant Profile'}
        </DialogTitle>

        <Formik
          initialValues={{
            name: '',
            address: '',
            photo__url: '',
          }}
          onSubmit={async (values) => {
            if (user) {
              addRes(values, user.uid);
            }
          }}
          validationSchema={resSchema}
        >
          {({ errors, handleSubmit, values, setValues }) => {
            return (
              <>
                <DialogContent aria-label="dialog_content">
                  <InputField label="Name" name="name" type="text" />
                  <InputField label="Address" name="address" type="text" />
                  <InputField label="Photo URL" name="photo__url" type="text" />
                  <h3>OR</h3>
                  <Button
                    variant="contained"
                    component="label"
                    aria-label="upload__button"
                    disabled={values.photo__url !== ''}
                  >
                    Upload Photo
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const name = e.target.files[0].name;
                          uploadResImg(e.target.files[0], name).then((res) =>
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
                  <Button
                    onClick={handleClose}
                    color="error"
                    variant="contained"
                  >
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
    </>
  );
};
