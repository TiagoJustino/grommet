// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Table = require('grommet/components/Table');
var Status = require('grommet/components/icons/Status');

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

          <h3>Icons</h3>
          <p>The icon components can be read by screen readers.  The default textual description for icons can be overridden by setting the a11yTitle.  Both the default or a11yTitle attribute use localization if it exist.</p>
          <h4>Example:</h4>
          <Table>
            <caption>Example of Icons with differnt values</caption>
            <thead>
              <tr>
              <th>Icon</th>
              <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Status value="error"/></td>
                <td><pre><code className="html">{"<Status value=\"error\">"}</code></pre></td>
              </tr>
              <tr>
                <td><Status value="error" a11yTitle="critical"/></td>
                <td><pre><code className="html">{"<Status value=\"error\" a11yTitle=\"critical\">"}</code></pre></td>
              </tr>
            </tbody>
          </Table>

          <h3>Lang attribute</h3>
          <p>
            To support Accessibility Technologies the "lang"
            attribute needs to be present in the "html" tag.
            In case you don’t add the "lang" attribute,
            Grommet will set it according to the user browser’s
            locale. Optionally, you can set the "lang" on Grommet
            App component as follow:
          </p>
          <pre><code className="html">
            {"<App lang=\"en-US\">\n  ...\n</App>"}
          </code></pre>
          <h3>Skip Links</h3>
          <p>Spik links allow blah</p>
        </Section>
      </Article>
    );
  }
});

module.exports = Accessibility;
