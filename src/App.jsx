import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Titulo from './components/Titulo/titulo'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Titulo titulo='Los mejores Bajos Eléctricos del mercado!'/>
      <Footer />
    </div>
  )
}

export default App
