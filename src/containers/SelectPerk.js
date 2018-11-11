import React from 'react';

export class SelectPerk extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, this.props.imageUrl, this.props.description);
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
