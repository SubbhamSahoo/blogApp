import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux"

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const {loading} = useSelector(state=>state.loader)
  const handleClose = () => {
    setOpen(false);
  };

  console.log(loading)

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}