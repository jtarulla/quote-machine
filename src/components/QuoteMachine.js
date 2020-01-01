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
import { createMuiTheme, ThemeProvider, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';



let theme = createMuiTheme({
  typography : {
    fontSize: 19,
    fontFamily: [
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }});

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #58cdfd 30%, #58cdfd 90%)',
    border: 0,
    borderRadius: 9,
    boxShadow: '0 3px 5px 2px rgba(169, 247, 215, .3)',
    color: 'white',
    height: 48,
  },
});


const QuoteMachine = ({ selectedQuote, handleClick }) => (
  <Card>
    <CardContent>
    <ThemeProvider theme={theme}>
      <Typography className={useStyles().typography} id="text" color="textSecondary" align="center">
       <b><i>"{selectedQuote.quote}"</i></b>  <br /><br /><Typography className={useStyles().typography}  id="author" align="right">{selectedQuote.author}</Typography>
      </Typography>
    </ThemeProvider>
    </CardContent>
    <CardActions>
      <Button className={useStyles().button} id="new-quote" size="small" onClick={handleClick}>New Quote</Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text="${selectedQuote.quote}"&hashtags=${selectedQuote.author},randomQuoteMachine` )}
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
      <IconButton
        id="whatsapp-quote"
        target="_blank"
        href={`whatsapp://send?text="${selectedQuote.quote}" - ${selectedQuote.author}`}
        data-action={"share/whatsapp/share"}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
)

export default QuoteMachine;



