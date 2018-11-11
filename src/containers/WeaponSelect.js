import React from 'react';
import { Primary } from './Primary';
import ReactDOM from 'react-dom';
import { PrimaryDisplay } from '../components/PrimaryDisplay';
import { SelectType } from './SelectType';
import { TestChange } from './TestChange';

const primaryArray = ['Auto Rifle', 'Hand Cannon', 'Shotgun', 'Pulse Rifle'];

class WeaponSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: '',
      secondary: '',
      heavy: '',
      fruits: []
    }

    this.setPrimaryState = this.setPrimaryState.bind(this);
    this.changeFruits = this.changeFruits.bind(this);
  }

  setPrimaryState(weaponType) {
    this.setState({ primary: weaponType});
  }

  changeFruits(newArray, test) {
    this.setState( {[test]: newArray} );
  }



  render() {
    return (
      <div>

      <TestChange incFunc={this.changeFruits} sentArr={primaryArray} arrName='fruits'/>


      <select>
      {this.state.fruits}
      </select>
      <h1>{this.state.fruits[0]}</h1>
      </div>
    )
  }
}

//<Primary onChange={this.setPrimaryState} />
//<PrimaryDisplay currentPrimary={this.state.primary} />

export default WeaponSelect;
//ReactDOM.render(<WeaponSelect />, document.getElementById('root'));
