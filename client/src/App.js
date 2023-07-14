import Header from "./components/header.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
     <ApolloProvider client={client}>
     <Header/>
     <div className="App">
        Hello World
    </div>
     </ApolloProvider>

    </>

  );
}

export default App;