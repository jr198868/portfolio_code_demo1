import React from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Arithmetic() {
    return (
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <TextField id="initial" label="The initial term" variant="filled" /><br />
          <TextField id="difference" label="The common difference" variant="filled" /><br />
          <TextField id="number" label="The number of term" variant="filled" />

        </Box>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Submit</Button>
                <Button variant="outlined">Reset</Button>
            </Stack>
        </div>
      </div>
    );
  }


