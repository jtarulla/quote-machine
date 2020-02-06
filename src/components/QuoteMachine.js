import React from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
	createMuiTheme,
	ThemeProvider,
	makeStyles
} from '@material-ui/core/styles';

let theme = createMuiTheme({
	typography: {
		fontFamily: ['Caveat', 'Cinzel Decorative', 'cursive'].join(',')
	},
	card: {
		background: '#c3e8ec'
	}
});

const useStyles = makeStyles({
	button: {
		fontFamily: 'Mclaren',
		fontWeight: 'bold',
		background: '#73b2db',
		borderRadius: '9px',
		height: 35
	}
});

const QuoteMachine = ({ selectedQuote, handleClick }) => (
	<Card>
		<CardContent className={useStyles().card}>
			<ThemeProvider theme={theme}>
				<Typography className={useStyles().typography} id='text' align='center'>
					<h1>"{selectedQuote.quote}"</h1>
					<Typography
						className={useStyles().typography}
						id='author'
						align='right'
					>
						<strong>
							<h1>- {selectedQuote.author}</h1>
						</strong>
					</Typography>
				</Typography>
			</ThemeProvider>
		</CardContent>
		<CardActions>
			<Button
				className={useStyles().button}
				id='new-quote'
				size='small'
				onClick={handleClick}
				variant='outlined'
			>
				New Quote
			</Button>
			<IconButton
				id='tweet-quote'
				target='_blank'
				href={encodeURI(
					`https://twitter.com/intent/tweet?text="${selectedQuote.quote}"&hashtags=${selectedQuote.author},randomQuoteMachine`
				)}
			>
				<FontAwesomeIcon icon={faTwitter} size='1x'></FontAwesomeIcon>
			</IconButton>
			<IconButton
				id='whatsapp-quote'
				target='_blank'
				href={`whatsapp://send?text="${selectedQuote.quote}" - ${selectedQuote.author}`}
				data-action={'share/whatsapp/share'}
			>
				<FontAwesomeIcon icon={faWhatsapp} size='1x'></FontAwesomeIcon>
			</IconButton>
		</CardActions>
	</Card>
);

export default QuoteMachine;
