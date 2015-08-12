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
          <p>The icon components can be read by screen readers. The default textual description for icons can be overridden by setting the a11yTitle. Both the default or a11yTitle attribute use localization if it exist.</p>
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
          <p>Spik links allow screen-readers and keyboard-only users to skip
          the repetitive content that is usually in the begining of a page,
          such as headers and navigation bars. By using it, your user is
          capable of jumping directly to the main content of your page or to
          the footer.</p>
          <p>The skip links come by default with grommet App. The "Skipt to
          Footer" link is added by default when you use the Footer component.
          In order to add the "Skip to Main Content" link you need to point
          what is the main content of your page. This is done by setting the
          attribute <code>primary="true"</code> in the Article or Section
          component as shown below:</p>
          <h4>Example:</h4>
          <pre><code className="html">
            {"<App>\n" +
            "  <Article>\n" +
            "    <Header>\n" +
            "      <h1>Title</h1>\n" +
            "    </Header>\n" +
            "    <Section primary={true}>\n" +
            "      <h2>Heading</h2>\n" +
            "      <p>Lorem ipsum ...</p>\n" +
            "    </Section>\n" +
            "  </Article>\n" +
            "</App>"}
          </code></pre>
        </Section>
      </Article>
    );
  }
});

module.exports = Accessibility;
