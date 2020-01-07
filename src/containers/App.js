import React, { useState, useEffect } from 'react';
import QuoteMachine from '../components/QuoteMachine';
import SearchBox from '../components/SearchBox';

import 'typeface-roboto';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(45deg, #5e63fe 30%, #04e4da 0%)',
    display: 'flex',
    },
}

function App({ classes }) {

  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {  
      const data = await fetch('https://gist.githubusercontent.com/jtarulla/68006cb831e3a319511613d2db83fdde/raw/87f406a4fbe57cfbb76c662553de3ab1ac6144dc/quotes.json');
      const quotes = await data.json();
      setQuotes(quotes);
      setQuoteIndex(Math.floor(Math.random() * quotes.length))
    }
    fetchData()
  }, []); // empty array to avoid re-rendering

  function handleClick(){
    setQuoteIndex(generateQuoteIndex())
  }

  function onChange(event, values) {
    if (values) {quotes.map((e, index) => {
      if(e.quote === values.quote){
         setQuoteIndex(index)
      } 
    })}
  }

  function getSelectedQuote(){
    if(!quotes.length || !Number.isInteger(quoteIndex)) return undefined;
    return quotes[quoteIndex]
  }

  function generateQuoteIndex() {
    // it's possible use libray lodash (npm install lodash && import {random} from 'lodash')
    const index = Math.floor(Math.random() * quotes.length)
    return index
  }

  return (
    <>
      <Grid className={classes.container} id="quote-box" fixed container 
        justify="center"
        alignItems="center"
        direction= 'column' 
        spacing={3}
      >
        <Grid item>
          <SearchBox quotes={quotes} onChange={onChange} /> 
        </Grid>          
        <Grid xs={9} lg={7} sm={5} item>
          {
            getSelectedQuote() ?
            <QuoteMachine selectedQuote={getSelectedQuote()} handleClick={handleClick} /> 
            : null       
          }  
        </Grid>
        <Grid fixed item>
          <IconButton
            id="Github-icon"
            target="_blank"
            href="https://github.com/jtarulla/quote-machine"
          >
            <FontAwesomeIcon fixed icon={faGithub} size="lg"></FontAwesomeIcon>
          </IconButton>
        </Grid>
      </Grid> 
    </>
  )
}

export default withStyles(styles)(App);
