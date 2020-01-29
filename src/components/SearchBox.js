import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBox({ quotes, onChange }) {
	return (
		<Autocomplete
			id='searchBox'
			options={quotes}
			small
			autoHighlight
			getOptionLabel={option => option.quote}
			onChange={onChange}
			style={{ width: 250 }}
			renderInput={params => (
				<TextField {...params} label='find your favorite...' fullWidth />
			)}
		/>
	);
}
