# community-graph-starter-kit

A starter app you can build on to create an app for the Neo4j community graph hackathon. It initializes the Apollo GraphQL client, and loads a query into the app to display.

- [src/index.js](src/index.js) demonstrates how to initialize the library to connect to the right endpoint.
- [src/App.js](src/App.js) shows how to decorate a component with a GraphQL query to load data into that component.

Read more in the [documentation](http://dev.apollodata.com/react/queries.html) for Apollo Client.

Don't forget to use [GraphiQL](http://graphql.communitygraph.org/graphiql/?query=%7B%20%0A%20%20Repository(orderBy%3A%5Bupdated_desc%5D%2C%20first%3A20)%20%7B%0A%20%20%09title%0A%20%20%20%20url%0A%20%20%20%20created%0A%20%20%20%20favorites%0A%20%20%20%20updated%0A%20%20%20%20full_name%0A%20%20%20%20homepage%0A%20%20%20%20language%0A%20%20%20%20score%0A%20%20%20%20open_issues%0A%20%20%09owner%20%7B%0A%20%20%20%20%20%20name%0A%20%20%09%7D%0A%20%20%7D%0A%7D) to explore the available arguments and fields in the API!
