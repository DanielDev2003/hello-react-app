import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
