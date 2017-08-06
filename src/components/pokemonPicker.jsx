import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PokemonConstants from '../constants/pokemonConstants'

// var _ = require('underscore');
// var titleize = require("underscore.string/titleize");


class PokemonPicker extends Component {

  render () {
    return (
      <div>
        <Dropdown
          value={this.props.value}
          onChange={this.props.onChange}
          label='Pokémon'
          placeholder={'Pick a Pokémon'}
          search
          selection
          options={PokemonConstants.POKEMON_OPTIONS}
        />
      </div>
    )
  }
}

export default PokemonPicker
