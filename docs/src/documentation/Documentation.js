// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Documents = require('Documents');
var TBD = Documents.TBD;
var HelloWorld = require('./HelloWorld');
var DocumentFooter = require('DocumentFooter');
var MenuNavigation = require('MenuNavigation');

var contents = [
  {
    route: 'helloworld', label: 'Hello World'
  },
  {
    route: 'doc_getstarted', label: 'Get Started'
  },
  {
    route: 'doc_reference', 
    label: 'Reference',
    subNavs: [
      {
        title: 'Components',
        links: [
          {
            route: 'doc_search', label: 'Search'
          },
          {
            route: 'doc_login', label: 'Login'
          },
          {
            route: 'doc_navigation', label: 'Navigation'
          },
          {
            route: 'doc_table', label: 'Table'
          },
          {
            route: 'doc_tiles', label: 'Tiles'
          },
          {
            route: 'doc_form', label: 'Form'
          }
        ]
      },
      {
        title: 'Graphics',
        links: [
          {
            route: 'doc_meter', label: 'Meter'
          },
          {
            route: 'doc_donut', label: 'Donut'
          },
          {
            route: 'doc_chart', label: 'Chart'
          } 
        ]
      }
    ]
  },
  {
    route: 'doc_architecture', label: 'Architecture'
  }
];

var Documentation = React.createClass({

  render: function() {
    return (
      <div className="docs">
          <MenuNavigation items={contents} />
          <RouteHandler />
          <DocumentFooter />
      </div>
    );
  }
});

Documentation.routes = function () {
  return (
    <Route name="documentation" handler={Documentation}>
      <DefaultRoute name="helloworld" handler={HelloWorld} />
      <Route name="doc_getstarted" path="getstarted" handler={TBD} />
      <Route name="doc_reference" path="reference" handler={TBD}>
        <Route name="doc_search" path="search" handler={TBD} />
        <Route name="doc_login" path="login" handler={TBD} />
        <Route name="doc_navigation" path="navigation" handler={TBD} />
        <Route name="doc_table" path="table" handler={TBD} />
        <Route name="doc_tiles" path="tiles" handler={TBD} />
        <Route name="doc_form" path="form" handler={TBD} />
        <Route name="doc_meter" path="meter" handler={TBD} />
        <Route name="doc_donut" path="donut" handler={TBD} />
        <Route name="doc_chart" path="chart" handler={TBD} />
      </Route>
      <Route name="doc_architecture" path="architecture" handler={TBD} />
    </Route>
  );
};

module.exports = Documentation;