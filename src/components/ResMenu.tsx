import AddIcon from '@mui/icons-material/Add';
import {
  Autocomplete,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DocumentData } from 'firebase/firestore';
import React, { FC, useEffect } from 'react';
import { getMenus } from '../firebase/db';
import { useUser } from '../hooks/useUser';
import styles from '../scss/dashboard.module.scss';
import { ItemCard } from './ItemCard';
import { ResDialog } from './ResDialog';
interface ResMenuProps {}
export const ResMenu: FC<ResMenuProps> = () => {
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = React.useState<DocumentData[]>();
  const [searchValue, setSearchValue] = React.useState('');
  const [sortBy, setSortBy] = React.useState<'price' | 'name'>('name');
  const [user] = useUser();

  useEffect(() => {
    if (!open) {
      if (user) {
        getMenus(user.uid).then((data) => {
          setMenu(data);
        });
      }
    }
  }, [open, user]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (sortBy === 'price') {
      //eslint-disable-next-line react-hooks/exhaustive-deps
      const newValues = menu?.sort((a, b) => b.price - a.price);
      setMenu(newValues);
    }
    if (sortBy === 'name') {
      //eslint-disable-next-line react-hooks/exhaustive-deps
      const newValues = menu?.sort((a, b) =>
        a.name === b.name ? 0 : a.name < b.name ? -1 : 1
      );
      setMenu(newValues);
    }
  }, [sortBy, menu]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.menu}>
      <div className={styles.topbar}>
        <Autocomplete
          id="free-solo-2-demo"
          className={styles.autocomplete}
          disableClearable
          value={searchValue}
          onChange={(_, newValue) => {
            setSearchValue(newValue);
          }}
          freeSolo
          options={(menu && menu.map((data) => data.name)) || []}
          renderInput={(params: any) => (
            <TextField
              {...params}
              key={params.name + Math.random()}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          )}
        />
        <FormControl sx={{ minWidth: 80 }} className={styles.sort}>
          <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
          >
            <MenuItem value={'name'}>Name</MenuItem>
            <MenuItem value={'price'}>Price</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.list}>
        {menu &&
          menu
            .filter((data) =>
              searchValue === ''
                ? true
                : data.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((data, index) => (
              <ItemCard
                name={data.name}
                price={data.price}
                phone={data.phone}
                photo__url={data.photo__url}
                key={index}
              />
            ))}
      </div>
      <Fab
        color="secondary"
        aria-label="add"
        className={styles.fab}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <ResDialog open={open} handleClose={handleClose} />
    </div>
  );
};
