import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
	searchField: {
		background: 'white',
		borderRadius: '10px',
		opacity: 0.5
	}
}));

export default function SearchBox({ quotes, onChange }) {
	const classes = useStyles();
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
				<TextField
					{...params}
					className={classes.searchField}
					id='filled-basic'
					variant='filled'
					label={<div style={{ color: 'black' }}>find your favorite...</div>}
					fullWidth
				/>
			)}
		/>
	);
}
