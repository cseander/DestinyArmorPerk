import React, { Component } from 'react';
import firebase from './firebase.js';
import { Select } from './containers/Select';
import { SelectPerk } from './containers/SelectPerk';
import './App.css';

// dont forget to create propTypes for everything you lazy fuckkkkk!!! :) jk
// use something like 'componentDidMount' for the creation of select list with current perks?

class App extends Component {
  constructor() {
    super();
    this.state = {
        serverPerks: [],
        kineticSelected: '',
        energySelected: '',
        powerSelected: '',
        primary: false,
        special: false,
        heavy: false,
        primaryAmmo: ['Auto Rifle', 'Pulse Rifle', 'Scout Rifle', 'Hand Cannon', 'Sidearm', 'Submachine Gun', 'Bow'],
        specialAmmo: ['Sniper Rifle', 'Shotgun', 'Fusion Rifle', 'Trace Rifle'],
        kineticWeapons: ['Auto Rifle', 'Pulse Rifle', 'Scout Rifle', 'Hand Cannon', 'Sidearm', 'Submachine Gun', 'Bow', 'Sniper Rifle', 'Shotgun', 'Grenade Launcher'],
        energyWeapons: ['Auto Rifle', 'Pulse Rifle', 'Scout Rifle', 'Hand Cannon', 'Sidearm', 'Submachine Gun', 'Bow', 'Sniper Rifle', 'Shotgun', 'Fusion Rifle', 'Trace Rifle'],
        powerWeapons: ['Rocket Launcher', 'Grenade Launcher', 'Linear Fusion Rifle', 'Sword', 'Shotgun', 'Sniper Rifle'],
        gauntletsFirst: [],
        gauntletsFirstImage: '/img/misc/missing_icon_d2.png',
        gautletsFirstDescription: 'Nothing selected',
        gauntletsSecond: [],
        gauntletsSecondImage: '/img/misc/missing_icon_d2.png',
        gautletsSecondDescription: 'Nothing selected',
        legArmorFirst: [],
        legArmorFirstImage: '/img/misc/missing_icon_d2.png',
        legArmorFirstDescription: 'Nothing selected',
        legArmorSecond: [],
        legArmorSecondImage: '/img/misc/missing_icon_d2.png',
        legArmorSecondDescription: 'Nothing selected',
        chestArmorFirst: [],
        chestArmorFirstImage: '/img/misc/missing_icon_d2.png',
        chestArmorFirstDescription: 'Nothing selected',
        chestArmorSecond: [],
        chestArmorSecondImage: '/img/misc/missing_icon_d2.png',
        chestArmorSecondDescription: 'Nothing selected',
        helmetFirst: [],
        helmetFirstImage: '/img/misc/missing_icon_d2.png',
        helmetFirstDescription: 'Nothing selected',
        helmetSecond: [],
        helmetSecondImage: '/img/misc/missing_icon_d2.png',
        helmetSecondDescription: 'Nothing selected',
        classItemFirst: [],
        classItemFirstImage: '/img/misc/missing_icon_d2.png',
        classItemFirstDescription: 'Nothing selected',
        classItemSecond: [],
        classItemSecondImage: '/img/misc/missing_icon_d2.png',
        classItemSecondDescription: 'Nothing yselectedet'

    }
    this.onChange = this.onChange.bind(this);
    this.onChangePerk = this.onChangePerk.bind(this);
    this.changePerkOptions = this.changePerkOptions.bind(this);
  }

  // FOR LATER MAYBE CHANGE SO IT DOESNT FETCH IT ALL OVER AND OVER, ONLY NEED TO FETCH ONCE REALLY
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
          description: serverPerks[item].description,
          secondary: serverPerks[item].secondary
        });
      }
      this.setState({
        serverPerks: newState
      });
    });
  }

  onChange(stateVar, newState){

    //put code here for setting ammo types since trace -> auto

    if(newState == 'Trace Rifle') {
      newState = 'Auto Rifle';
    }
    this.setState({
     [stateVar]: newState
   });
   this.changePerkOptions(stateVar, newState, 'gauntlets', 'gauntletsFirst', false);
   this.changePerkOptions(stateVar, newState, 'helmet', 'helmetFirst', false);
   this.changePerkOptions(stateVar, newState, 'chestArmor', 'chestArmorFirst', false);
   this.changePerkOptions(stateVar, newState, 'legArmor', 'legArmorFirst', false);
   this.changePerkOptions(stateVar, newState, 'classItem', 'classItemFirst', false);
   this.changePerkOptions(stateVar, newState, 'gauntlets', 'gauntletsSecond', true);
   this.changePerkOptions(stateVar, newState, 'helmet', 'helmetSecond', true);
   this.changePerkOptions(stateVar, newState, 'chestArmor', 'chestArmorSecond', true);
   this.changePerkOptions(stateVar, newState, 'legArmor', 'legArmorSecond', true);
   this.changePerkOptions(stateVar, newState, 'classItem', 'classItemSecond', true);
  }


// for selecting ammo type

  /*
  if(this.state.kineticSelected == 'Grenade Launcher') {
    this.setState({
      primary: true
    })
  }
  if(this.state.energySelected == 'Grenade Launcher') {
    this.setState({
      primary: true
    })
  }
  */



// stateVar = vapen typ
// newState = valt vapen
  changePerkOptions(stateVar, newState, armorSlot, armorSlotlist, trueOrFalse) {
    let newList = [];
    let weaponSlot = [this.state.kineticSelected, this.state.energySelected, this.state.powerSelected];
    if(stateVar == 'kineticSelected') {
      weaponSlot.splice(0, 1);
    } else if (stateVar == 'energySelected') {
      weaponSlot.splice(1, 1);
    } else {
      weaponSlot.splice(2, 1);
    }
    let i;
    this.state.serverPerks.map((item) => {
      if(item.armorSlot == armorSlot) {
        for(i = 0; i < item.weaponType.length; i++) {
          if(item.weaponType[i] == this.formatText(newState) || item.weaponType[i] == this.formatText(weaponSlot[0]) || item.weaponType[i] == this.formatText(weaponSlot[1]) || item.weaponType[i] == 'other') {
            if(!newList.includes(item.name)) {
              if(item.secondary == trueOrFalse) {
                newList.push(item.name);
              }

            }
          }
        }
      }

    })

    this.setState({
      [armorSlotlist]: newList
    })
  }

  // format text from selected weapon to fit weapon type in database
  formatText(toFormat) {
    //special case beacuse .replace only replaced the first instance of ' '.
    if(toFormat == 'Linear Fusion Rifle') {
      return 'linearFusionRifle';
    }
    let formated = toFormat.replace(' ', '');
    formated = formated.charAt(0).toLowerCase() + formated.substr(1);
    return  formated;
  }
  // make real URL from database field 'imageUrl'
  makeUrl(imageUrl) {
    let newUrl = "http://www.bungie.net"+imageUrl;
    return newUrl;
  }

  onChangePerk(selectedOption, imageToChange, descriptionToChange){
    let newDescription = '';
    let newImage = '';
    this.state.serverPerks.map((item) => {
      if(item.name == selectedOption){
        newDescription = item.description;
        newImage = item.imageUrl;
      }
    })
    this.setState({
      [imageToChange]: newImage,
      [descriptionToChange]: newDescription,
   });
  }

  render() {
    return (
      <div className='container'>
        <div className='block'>
            <ul>
              <li>
                <p>Kinetic Weapon:</p>
                <Select optionsArray={this.state.kineticWeapons} defaultText='Choose One' onChange={this.onChange} stateVar="kineticSelected"/>
              </li>
              <li>
                <p>Energy Weapon:</p>
                <Select optionsArray={this.state.energyWeapons} defaultText='Choose One' onChange={this.onChange} stateVar="energySelected"/>
              </li>
              <li>
                <p>Power Weapon:</p>
                <Select optionsArray={this.state.powerWeapons} defaultText='Choose One' onChange={this.onChange} stateVar="powerSelected"/>
              </li>
              <li>

              </li>
            </ul>
            <p>
              <h3>Perk Strength</h3>
              Tier 3: Enhanced
              <br/>
              Tier 2: Specific
              <br/>
              Tier 1: General
            </p>
            <p>
              Enhanced perks and Absolution can only be found on armor from the Dreaming City and the Last Wish raid.
            </p>
          </div>
          <div className='block'>
          <h1>HELMET</h1>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.helmetFirst}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='helmetFirstImage'
                description='helmetFirstDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.helmetFirstImage)}/>
                {this.state.helmetFirstDescription}
              </p>
            </div>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.helmetSecond}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='helmetSecondImage'
                description='helmetSecondDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.helmetSecondImage)}/>
                {this.state.helmetSecondDescription}
              </p>
            </div>
          </div>
          <div className='block'>
            <h1>GAUNTLETS</h1>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.gauntletsFirst}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='gauntletsFirstImage'
                description='gautletsFirstDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.gauntletsFirstImage)}/>
                {this.state.gautletsFirstDescription}
              </p>
            </div>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.gauntletsSecond}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='gauntletsSecondImage'
                description='gautletsSecondDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.gauntletsSecondImage)}/>
                {this.state.gautletsSecondDescription}
              </p>
            </div>
          </div>
          <div className='block'>
          <h1>CHEST ARMOR</h1>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.chestArmorFirst}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='chestArmorFirstImage'
                description='chestArmorFirstDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.chestArmorFirstImage)}/>
                {this.state.chestArmorFirstDescription}
              </p>
            </div>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.chestArmorSecond}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='chestArmorSecondImage'
                description='chestArmorSecondDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.chestArmorSecondImage)}/>
                {this.state.chestArmorSecondDescription}
              </p>
            </div>
          </div>
          <div className='block'>
          <h1>LEG ARMOR</h1>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.legArmorFirst}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='legArmorFirstImage'
                description='legArmorFirstDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.legArmorFirstImage)}/>
                {this.state.legArmorFirstDescription}
              </p>
            </div>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.legArmorSecond}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='legArmorSecondImage'
                description='legArmorSecondDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.legArmorSecondImage)}/>
                {this.state.legArmorSecondDescription}
              </p>
            </div>
          </div>
          <div className='block'>
          <h1>CLASS ITEM</h1>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.classItemFirst}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='classItemFirstImage'
                description='classItemFirstDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.classItemFirstImage)}/>
                {this.state.classItemFirstDescription}
              </p>
            </div>
            <div className='perk-display'>
              <SelectPerk
                optionsArray={this.state.classItemSecond}
                defaultText='Choose One'
                onChange={this.onChangePerk}
                imageUrl='classItemSecondImage'
                description='classItemSecondDescription'
              />
              <p className='perk-text'>
                <img src={this.makeUrl(this.state.classItemSecondImage)}/>
                {this.state.classItemSecondDescription}
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
