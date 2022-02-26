import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export function RowRadioButtonsGroup(props: any) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '5px 0px 20px 0px',
        color: 'black',
        display: 'block',
        width: '100%',
      }}
    >
      <FormControl>
        <FormLabel
          style={{
            color: 'black',
            fontWeight: 600,
          }}
        >
          Number of Letters
        </FormLabel>

        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue={props.value}
          onChange={(e) => props.handleChange(e.target.value)}
        >
          {/* <FormControlLabel value="3" control={<Radio />} label="3" /> */}
          <FormControlLabel value="4" control={<Radio />} label="4" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
          <FormControlLabel value="6" control={<Radio />} label="6" />
        </RadioGroup>
      </FormControl>{' '}
    </div>
  )
}
