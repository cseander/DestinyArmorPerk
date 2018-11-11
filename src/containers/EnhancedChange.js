import React from 'react';

export class EnhancedChange extends React.Component {
  render() {
    return (
      <div>
        <label>Secondary: </label>
        <input type='checkbox' onChange={this.props.onChange} />
      </div>
    );
  }
}
