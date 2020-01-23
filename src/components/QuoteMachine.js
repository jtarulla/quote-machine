import React from 'react'
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography : {
    fontFamily: ["Indie Flower", "cursive"].join(','),
  }});

const useStyles = makeStyles({
  button: {
    background: '#2c3e50',
    border: 0,
    borderRadius: '9px',
    boxShadow: '0 3px 5px 2px rgba(400, 400, 200, .9)',
    color: '#bdc3c7',
    height: 48,
  },
});


const QuoteMachine = ({ selectedQuote, handleClick }) => (
  <Card>
    <CardContent>
    <ThemeProvider theme={theme}>
      <Typography className={useStyles().typography} id="text" color="textSecondary" align="center">
       <h2><b><i>"{selectedQuote.quote}"</i></b></h2>  <br /><Typography className={useStyles().typography}  id="author" align="right"><h2>- {selectedQuote.author}</h2></Typography>
      </Typography>
    </ThemeProvider>
    </CardContent>
    <CardActions>
      <Button className={useStyles().button} id="new-quote" size="small"  onClick={handleClick}>New Quote</Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text="${selectedQuote.quote}"&hashtags=${selectedQuote.author},randomQuoteMachine` )}
      >
        <FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon>
      </IconButton>
      <IconButton
        id="whatsapp-quote"
        target="_blank"
        href={`whatsapp://send?text="${selectedQuote.quote}" - ${selectedQuote.author}`}
        data-action={"share/whatsapp/share"}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="1x"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
)

export default QuoteMachine;
