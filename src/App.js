import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import './App.css';

// Data arrives in the `data` prop
// Read more in http://dev.apollodata.com/react/queries.html
class App extends Component {
  renderList() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {this.props.data.Repository.map(repo => (
          <li>
            <a href={repo.url}>{repo.full_name}</a>
            :{' '}
            {repo.favorites}
            {' '}stars,{' '}
            {repo.open_issues}
            {' '}issues
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Recently updated repositories:</h1>
        {this.renderList()}
      </div>
    );
  }
}

// Declare a query tagged with "gql"
// Write new queries here: http://graphql.communitygraph.org/graphiql/
const query = gql`
  {
    Repository(orderBy: [updated_desc], first: 20) {
      url
      created
      favorites
      updated
      full_name
      homepage
      language
      score
      open_issues
      owner {
        name
      }
    }
  }
`;

// Attach the query to the component
export default graphql(query)(App);
