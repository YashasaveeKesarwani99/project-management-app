import AddClientModal from "./components/add-client-modal.jsx";
import Clients from "./components/clients.jsx";
import Header from "./components/header.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects:{
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache,
})

function App() {
  return (
    <>
     <ApolloProvider client={client}>
     <Header/>
     <div className="container">
      <AddClientModal/>
      <Clients/>
    </div>
     </ApolloProvider>

    </>

  );
}

export default App;