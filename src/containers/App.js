import React, { Component } from 'react';
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
    alignItems: 'center',
    display: 'flex',
    height: '92.7vh',
    background: 'linear-gradient(45deg, #5e63fe 30%, #04e4da 1%)',
    overflow: 'hidden',
    margin: 'auto',
  },
  footer: {
    background: 'linear-gradient(45deg, #5e63fe 40%, #04e4da 80%)',
    display: 'flex',
    padding: '0% 0% 0% 48%',
    overflow: 'hidden',
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: [],
      quoteIndex: null,
    }
    // it's poddible use ES7 to avoid this
    this.quoteIndex = this.quoteIndex.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(response => response.json())
    .then(quotes => this.setState({ quotes }, this.handleClick ))
  }

  handleClick(){
    this.setState({
      quoteIndex : this.quoteIndex()
    })
  }

  onChange = (event, values) => {
    const selectedQuote = values.quote
    this.state.quotes.map((e, index) => {
      if(e.quote === selectedQuote){
        this.setState({ quoteIndex:index })
      } 
    })
  }

  // - ES6 -
  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex)) return undefined;
    return this.state.quotes[this.state.quoteIndex]
  }

  quoteIndex() {
    // it's possible use libray lodash (npm install lodash && import {random} from 'lodash')
    const index = Math.floor(Math.random() * this.state.quotes.length)
    return index
  }


  render() {
    return (
      <>
        <Grid className={this.props.classes.container} id="quote-box" fixed justify="center" container 
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
        >
          <Grid item>
            <SearchBox quotes={this.state.quotes} onChange={this.onChange} />
          </Grid>          
          <Grid xs={10} xl={6} lg={7} sm={4} item>
            {
              this.selectedQuote ?
              <QuoteMachine selectedQuote={this.selectedQuote} handleClick={this.handleClick} /> 
              : null       
            }  
          </Grid>
        </Grid> 
        <footer className={this.props.classes.footer} >
          <IconButton 
            id="Github-icon"
            target="_blank"
            href="https://github.com/jtarulla/quote-machine"
            item
          >
            <FontAwesomeIcon fixed icon={faGithub} size="md"></FontAwesomeIcon>
          </IconButton>
        </footer>
      </>
    )
  }
}

export default withStyles(styles)(App);
