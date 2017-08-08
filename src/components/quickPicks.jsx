import React, { Component } from 'react';
import articunoImage from '../images/144.png'
import zapdosImage from '../images/145.png'
import moltresImage from '../images/146.png'
import lugiaImage from '../images/249.png'
import { Image } from 'semantic-ui-react';

class QuickPicks extends Component {
  render () {
    return (
      <div className='quick-picks'>
        <Image
          alt='249'
          className='quick-pick'
          onClick={this.props.onClick}
          height='36px'
          src={lugiaImage}
        />
        <Image
          alt='144'
          className='quick-pick'
          onClick={this.props.onClick}
          height='36px'
          src={articunoImage}
        />
        <Image
          alt='145'
          className='quick-pick'
          onClick={this.props.onClick}
          height='36px'
          src={zapdosImage}
        />
        <Image
          alt='146'
          className='quick-pick'
          onClick={this.props.onClick}
          height='36px'
          width='36px'
          src={moltresImage}
        />
      </div>
    )
  }
}

export default QuickPicks
