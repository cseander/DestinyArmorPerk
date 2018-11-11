import React from 'react';

export class Form extends React.Component {

  weaponType(listIn){
    let weaponTypes = [];
    let newItem = '';
    for(var item in listIn) {
      newItem = listIn[item]+' ';
      weaponTypes.push(newItem);
    }
    return weaponTypes;
  }

  isEnhanced(test) {
    if(test) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  render() {
    return(
      <div>
        <p><strong>Name:</strong> {this.props.name}</p>
        <p><strong>Armor Slot:</strong> {this.props.armorSlot}</p>
        <p><strong>Weapon Types:</strong> {this.weaponType(this.props.weaponType)}</p>
        <p><strong>Enhanced:</strong> {this.isEnhanced(this.props.enhanced)}</p>
        <p><strong>Image URL:</strong> {this.props.imageUrl}</p>
        <p><strong>Description:</strong> {this.props.description}</p>
        <img src={'http://www.bungie.net'+this.props.imageUrl} />
      </div>
    );
  }
}
