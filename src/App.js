import {
  ApolloClient, InMemoryCache,
  ApolloProvider,
  HttpLink, from
} from '@apollo/client'
import GetUsers from './Components/getUsers';
import Form from './Components/form'
const link = from([

  new HttpLink({ uri: "http://localhost:6969/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
      {/* <GetUsers /> */}

    </ApolloProvider>
  );
}

export default App;
