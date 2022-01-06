import { Button } from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import { CreateResDialog } from './CreateResDialog';

interface CreateRestaurnatProps {}
export const CreateRestaurant: FC<CreateRestaurnatProps> = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleClickOpen()}
      >
        Create You Restaurant
      </Button>
      <CreateResDialog open={open} handleClose={handleClose} />
    </>
  );
};
