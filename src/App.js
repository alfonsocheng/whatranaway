import React, { Component } from 'react';
import './App.css';

import { MuiThemeProvider } from 'material-ui';

// My stuff
import PokemonPicker from './components/pokemonPicker'
import QuickPicks from './components/quickPicks'
import CpInput from './components/cpInput'
import RaidCheckbox from './components/raidCheckbox'
import IvOutput from './components/ivOutput'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pokemonId: '',
      cp: '',
      raidCheckboxChecked: true,
      raidCheckboxLabel: 'was a raid boss',
    };
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className='choose-a-pokemon'>
            <PokemonPicker
              value={this.state.pokemonId}
              loading={true}
              onChange={this.handlePokemonChange}
            />
            <QuickPicks
              onClick={this.handleQuickPick}
            />
          </div>
          <CpInput
            value={this.state.cp}
            onChange={this.handleCpChange}
          />
          <RaidCheckbox
            checked={this.state.raidCheckboxChecked}
            label={this.state.raidCheckboxLabel}
            onChange={this.handleRaidChange}
          />
          <IvOutput
            pokemonId={this.state.pokemonId}
            cp={this.state.cp}
            ivs={this.state.ivs}
            raid={this.state.raidCheckboxChecked}
          />
          <div className='feedback'>
            <a href='mailto:qalfy@outlook.com'>Feedback?</a>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  handlePokemonChange = (e, data) => {
    this.setState({
      pokemonId: data.value
    })
  }

  handleQuickPick = (e) => {
    this.setState({
      pokemonId: parseInt(e.target.alt, 10)
    })
  }

  handleCpChange = (e) => {
    this.setState({
      cp: e.target.value
    })
  }

  handleRaidChange = () => {
    let newChecked = !this.state.raidCheckboxChecked;
    let newLabel = newChecked ? 'was a raid boss' : 'not a raid boss';
    this.setState({
      raidCheckboxChecked: newChecked,
      raidCheckboxLabel: newLabel,
    })
  }
}

export default App;
