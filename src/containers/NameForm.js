import React from 'react';

export class NameForm extends React.Component {
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
        <label>Name: </label>
        <input type='text' onChange={this.handleChange} value={this.props.value}/>

      </div>
    );
  }
}
