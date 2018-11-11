import React from 'react';

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(this.props.stateVar, e.target.value);
  }

  render() {
    return(
      <div>
        <select onChange={this.handleChange}>
          <option hidden value='default'>{this.props.defaultText}</option>
          {this.props.optionsArray.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
    );
  }
}
