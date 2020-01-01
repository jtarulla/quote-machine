import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBox({ quotes, onChange }) {
  return (
    <Autocomplete
      id="searchBox"
      options={quotes}
      autoHighlight
      getOptionLabel={option => option.quote}
      onChange={onChange}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} 
        label="search your favorite..." 
        variant="outlined" 
        fullWidth/>
      )}
    />
  );
}