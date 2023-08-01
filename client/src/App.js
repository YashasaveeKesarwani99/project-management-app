import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Home from './pages/home.jsx';
import NotFound from './pages/not-found.jsx';
import Project from './pages/project.jsx';

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
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects/:id' exact element={<Project/>}/>
            <Route path='*' exact element={ <NotFound/> }/>
          </Routes>
        </div>
      </Router>
     </ApolloProvider>
    </>

  );
}

export default App;