import React from 'react';

export class ImageUrlForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //let text = 'http://www.bungie.net'+e.target.value;
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div>
        <label>Image URL: </label>
        <input type='text' onChange={this.handleChange} value={this.props.value}/>
      </div>
    );
  }
}
