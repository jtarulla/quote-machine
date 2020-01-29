import React, { useState, useEffect } from 'react';
import QuoteMachine from '../components/QuoteMachine';
import SearchBox from '../components/SearchBox';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
	container: {
		height: '100vh',
		background: '#48667a'
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1vh',
		marginTop: 'auto'
	},
	footer: {
		padding: 0,
		marginTop: 'auto',
		marginBottom: 0
	}
}));

function App() {
	const [quotes, setQuotes] = useState([]);
	const [quoteIndex, setQuoteIndex] = useState(null);
	const classes = useStyles();

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(
				'https://gist.githubusercontent.com/jtarulla/68006cb831e3a319511613d2db83fdde/raw/87f406a4fbe57cfbb76c662553de3ab1ac6144dc/quotes.json'
			);
			const quotes = await data.json();
			setQuotes(quotes);
			setQuoteIndex(Math.floor(Math.random() * quotes.length));
		}
		fetchData();
	}, []); // empty array to avoid re-rendering

	function handleClick() {
		setQuoteIndex(generateQuoteIndex());
	}

	function onChange(event, values) {
		if (values) {
			quotes.map((e, index) => {
				if (e.quote === values.quote) {
					setQuoteIndex(index);
				}
			});
		}
	}

	function getSelectedQuote() {
		if (!quotes.length || !Number.isInteger(quoteIndex)) return undefined;
		return quotes[quoteIndex];
	}

	function generateQuoteIndex() {
		// it's possible use libray lodash (npm install lodash && import {random} from 'lodash')
		const index = Math.floor(Math.random() * quotes.length);
		return index;
	}

	return (
		<div className={classes.root}>
			<Grid
				className={classes.container}
				id='quote-box'
				fixed
				container
				zeroMinWidth
				justify='space-evenly'
				alignItems='center'
				direction='column'
				spacing={1}
			>
				<Grid item>
					<SearchBox quotes={quotes} onChange={onChange} />
				</Grid>
				<Grid xs sm={10} md={8} lg={10} xl={12} item>
					{getSelectedQuote() ? (
						<QuoteMachine
							selectedQuote={getSelectedQuote()}
							handleClick={handleClick}
						/>
					) : null}
				</Grid>
				<footer className={classes.footer}>
					<IconButton
						id='Github-icon'
						target='_blank'
						href='https://github.com/jtarulla/quote-machine'
					>
						<FontAwesomeIcon fixed icon={faGithub} size='md'></FontAwesomeIcon>
					</IconButton>
				</footer>
			</Grid>
		</div>
	);
}

export default withStyles()(App);
