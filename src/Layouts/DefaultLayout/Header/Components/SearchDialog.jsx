import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, FormGroup, TextField } from "@mui/material";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {};
  return (
    <>
      <Button onClick={handleOpen} sx={{'&:hover': {backgroundColor: 'initial'}, color: '#353535', minWidth: 0, padding: 0}} >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
        }}}
      >
        <Button onClick={handleClose} sx={{
          transform: 'rotate(45deg)',
          fontSize: '28px',
          width: '50px',
          height: '50px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '50%',
          padding: '0',
          minWidth: '0',
          ":hover": {
            backgroundColor: '#333',
          },
        }}>+</Button>
        <FormGroup onSubmit={handleSubmit}>
          <TextField label='Search' variant="standard" placeholder='Search here...' inputProps={{style: {width: '470px', fontSize: '40px', color: '#999'}}}></TextField>
        </FormGroup>
      </Dialog>
    </>
  )
}
