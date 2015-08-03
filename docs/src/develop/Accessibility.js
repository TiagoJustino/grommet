// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');

var Accessibility = React.createClass({

  _onClick: function () {
    // no-op
  },

  render: function() {
    return (
      <Article>
        <header>
          <h1>Accessibility</h1>
          <p>Accessibility guidelines.</p>
        </header>

        <Section>
          <h2>Being accessible with Grommet</h2>
          <p>This section describes the Grommet guidelines for developing accessibile applications.</p>
        </Section>
      </Article>
    );
  }
});

module.exports = Accessibility;
