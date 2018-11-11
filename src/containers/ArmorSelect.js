import React from 'react';

export class ArmorSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Armor Slot: </label>
        <select onChange={this.handleChange}>
          <option hidden value='default'>Choose one</option>
          <option value='helmet'>Helmet</option>
          <option value='gauntlets'>Gauntlets</option>
          <option value='chestArmor'>Chest Armor</option>
          <option value='legArmor'>Leg Armor</option>
          <option value='classItem'>Class Item</option>
        </select>
      </div>
    );
  }
}
