// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var CLASS_ROOT = "check-box";

var CheckBox = React.createClass({

  propTypes: {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    aria_describedby: React.PropTypes.string,
    toggle: React.PropTypes.bool
  },

  render: function () {
    var classes = [CLASS_ROOT];
    var labelId = 'checkbox-label-' + uuid.v1();
    if (this.props.toggle) {
      classes.push(CLASS_ROOT + "--toggle");
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    
    return (
      <label className={classes.join(' ')}
        aria-describedby={this.props.aria_describedby}
        aria-lebelledby={labelId}>
        <input tabIndex="0" className={CLASS_ROOT + "__input"}
          id={this.props.id} name={this.props.name} type="checkbox"
          checked={this.props.checked}
          defaultChecked={this.props.defaultChecked}
          onChange={this.props.onChange} />
        <span className={CLASS_ROOT + "__control"}>
          <svg className={CLASS_ROOT + "__control-check"} viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet">
            <path fill="none" d="M6,11.3 L10.3,16 L18,6.2"></path>
          </svg>
        </span>
        <span role="label" id={labelId} tabIndex="-1" className={CLASS_ROOT + "__label"}>
          {this.props.label}
        </span>
      </label>
    );
  }

});

module.exports = CheckBox;
