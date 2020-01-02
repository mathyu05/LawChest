import React from 'react';
import Select from 'react-select';

const MySelect = () =>
{
  return(
    <div>
      <label htmlFor={ this.props.propName }>
        { this.props.propName }
      </label>
      <Select
        id={ this.props.propName }
        options={ this.props.options }
        isMulti={ false }
        onChange={ this.handleChange }
        onBlur={ this.handleBlur }
        value={ this.props.value }
      />
      {
        !!this.props.error &&
          this.props.touched &&
          (<div>{ this.props.error.value }</div>)
      }
    </div>
  );
};

export default MySelect;