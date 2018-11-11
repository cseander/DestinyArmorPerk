import React from 'react';
import { Form } from '../components/Form';
import { NameForm } from './NameForm';
import { ArmorSelect } from './ArmorSelect';
import { WeaponType } from './WeaponType';
import { ImageUrlForm } from './ImageUrlForm';
import { DescriptionForm } from './DescriptionForm';
import { EnhancedChange } from './EnhancedChange';
// NEW
import firebase from '../firebase.js';


// --------- TO DO LIST ---------
// set propType on all of the components
// Connect this with the server code from App.js

 class AddContent extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        armorSlot: '',
        weaponType: [],
        imageUrl: '',
        description: '',
        serverPerks: [],
        secondary: false
      }

      this.setName = this.setName.bind(this);
      this.setArmorSlot = this.setArmorSlot.bind(this);
      this.setWeaponType = this.setWeaponType.bind(this);
      this.setImageUrl = this.setImageUrl.bind(this);
      this.setDescription = this.setDescription.bind(this);
      this.setSecondary = this.setSecondary.bind(this);
      // NEW
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // NEW
    handleSubmit(e) {
      e.preventDefault();
      const itemsRef = firebase.database().ref('perks');
      const item = {
        name: this.state.name,
        armorSlot: this.state.armorSlot,
        weaponType: this.state.weaponType,
        imageUrl: this.state.imageUrl,
        description: this.state.description,
        secondary: this.state.secondary
      }
      itemsRef.push(item);
      this.setState({
        name: '',
        armorSlot: '',
        weaponType: [],
        imageUrl: '',
        description: '',
        secondary: false
      });
      window.location.reload();
    }

    componentDidMount() {
      const itemsRef = firebase.database().ref('perks');
      itemsRef.on('value', (snapshot) => {
        let serverPerks = snapshot.val();
        let newState = [];
        for (let item in serverPerks) {
          newState.push( {
            id: item,
            name: serverPerks[item].name,
            armorSlot: serverPerks[item].armorSlot,
            weaponType: serverPerks[item].weaponType,
            imageUrl: serverPerks[item].imageUrl,
            description: serverPerks[item].description
          });
        }
        this.setState({
          serverPerks: newState
        });
      });
    }

    setSecondary(){
      this.setState({
        secondary: !this.state.secondary
      })
    }
    // change the name of the perk
    setName(name) {
      this.setState({
        name: name
      });
    }
    // change the armor slot
    setArmorSlot(armorSlot) {
      this.setState({
        armorSlot: armorSlot
      });
    }
    // change the weapon type list
    setWeaponType(weaponType) {
      this.setState({
        weaponType: weaponType
      })
    }
    setImageUrl(newUrl) {
      this.setState({
        imageUrl: newUrl
      });
    }
    setDescription(newDescription) {
      this.setState({
        description: newDescription
      });
    }

    makeUrl(imageUrl) {
      let newUrl = "http://www.bungie.net"+imageUrl;
      return newUrl;
    }

    getSecondary(){
      if(this.state.secondary) {
        return 'True';
      }
      return 'False';
    }

    render() {
      return (
        <div>
          <NameForm onChange={this.setName} value={this.state.name}/>
          <p><EnhancedChange onChange={this.setSecondary}/> {this.getSecondary()}</p>
          <ArmorSelect onChange={this.setArmorSlot}/>
          <WeaponType onChange={this.setWeaponType} weaponType={this.state.weaponType}/>
          <br/>
          <ImageUrlForm onChange={this.setImageUrl} value={this.state.imageUrl}/>
          <p><DescriptionForm onChange={this.setDescription} value={this.state.description}/></p>
          <button onClick={this.handleSubmit}>Submit</button>




          </div>
      );
    }
}
//<Form name={this.state.name} armorSlot={this.state.armorSlot} weaponType={this.state.weaponType} enhanced={this.state.enhanced} imageUrl={this.state.imageUrl} description={this.state.description}/>

export default AddContent;
