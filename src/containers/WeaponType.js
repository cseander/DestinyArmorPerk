import React from 'react';

export class WeaponType extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let selectedWeapons = this.props.weaponType;
    let index;

    if(e.target.checked) {
      selectedWeapons.push(e.target.value);
    } else {
      index = selectedWeapons.indexOf(e.target.value);
      selectedWeapons.splice(index, 1);
    }

    this.props.onChange(selectedWeapons);
  }

  render() {
    return (
      <div>
        <div>
        <p>Kinetic</p>
          <input type="checkbox" value="handCannon" onChange={this.handleChange}/>
          <label>Hand Cannon</label>
        </div>
        <div>
          <input type="checkbox" value="autoRifle" onChange={this.handleChange}/>
          <label>Auto Rifle</label>
        </div>
        <div>
          <input type="checkbox" value="pulseRifle" onChange={this.handleChange}/>
          <label>Pulse Rifle</label>
        </div>
        <div>
          <input type="checkbox" value="scoutRifle" onChange={this.handleChange}/>
          <label>Scout Rifle</label>
        </div>
        <div>
          <input type="checkbox" value="submachineGun" onChange={this.handleChange}/>
          <label>Submachine Gun</label>
        </div>
        <div>
          <input type="checkbox" value="sidearm" onChange={this.handleChange}/>
          <label>Sidearm</label>
        </div>
        <div>
          <input type="checkbox" value="bow" onChange={this.handleChange}/>
          <label>Bow</label>
        </div>
        <p>Energy</p>
        <div>
          <input type="checkbox" value="sniperRifle" onChange={this.handleChange}/>
          <label>Sniper Rifle</label>
        </div>
        <div>
          <input type="checkbox" value="shotgun" onChange={this.handleChange}/>
          <label>Shotgun</label>
        </div>
        <div>
          <input type="checkbox" value="fusionRifle" onChange={this.handleChange}/>
          <label>Fusion Rifle</label>
        </div>
        <p>Power</p>
        <div>
          <input type="checkbox" value="grenadeLauncher" onChange={this.handleChange}/>
          <label>Grenade Launcher</label>
        </div>
        <div>
          <input type="checkbox" value="rocketLauncher" onChange={this.handleChange}/>
          <label>Rocket Launcher</label>
        </div>
        <div>
          <input type="checkbox" value="sword" onChange={this.handleChange}/>
          <label>Sword</label>
        </div>
        <div>
          <input type="checkbox" value="linearFusionRifle" onChange={this.handleChange}/>
          <label>Linear Fusion Rifle</label>
        </div>
        <p>Other</p>
        <div>
          <input type="checkbox" value="other" onChange={this.handleChange}/>
          <label>Other</label>
        </div>
      </div>
    );
  }
}
