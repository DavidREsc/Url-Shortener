import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { ChakraProvider } from '@chakra-ui/react'
import './styles/app.css'
import Footer from './components/Footer/Footer';
import Boost from './components/Footer/Boost';

function App() {
  return (
    <ChakraProvider>
      <div className='container'>
        <Header />
        <Content />
      </div>
      <Boost />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
