import React from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react';

export default function Arithmetic() {
    const [message_initial, setMessage_initial] = useState('');
    const [message_difference, setMessage_difference] = useState('');
    const [message_number, setMessage_number] = useState('');

    const handleChange_initial = event_initial => {
      setMessage_initial(event_initial.target.value);

      console.log(event_initial.target.value);
    };

    const handleChange_difference = event_difference => {
      setMessage_difference(event_difference.target.value);

      console.log(event_difference.target.value);
    };

    const handleChange_number = event_number => {
      setMessage_number(event_number.target.value);

      console.log(event_number.target.value);
    };

    var  arithmetic_list = []
    for (let i = 0; i < message_number; i++) {
      arithmetic_item = message_initial + (i-1)*message_difference
      arithmetic_list.push(arithmetic_item)
    };

    console.log(arithmetic_list)
    
    var arithmetic_item = message_initial + (message_number-1)*message_difference
    console.log(arithmetic_item)

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
          <TextField id="initial" label="The initial term" variant="filled" onChange={handleChange_initial} value={message_initial} /><br />
          <TextField id="difference" label="The common difference" variant="filled" onChange={handleChange_difference} value={message_difference} /><br />
          <TextField id="number" label="The number of term" variant="filled" onChange={handleChange_number} value={message_number}/>

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


