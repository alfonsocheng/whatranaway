import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';


class CpInput extends Component {
  render () {
    return (
      <div className='cp-input'>
        <Input
          value={this.props.value}
          onChange={this.props.onChange}
          label='CP'
          labelPosition='left corner'
          type='number'
          placeholder={'Enter CP'}
        />
      </div>
    )
  }
}

export default CpInput
