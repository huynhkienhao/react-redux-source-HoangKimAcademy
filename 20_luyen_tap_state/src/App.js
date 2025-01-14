import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="main">
      <Navigation />
      <Header />
      <section id="scroll">
        <div className="container-fluid p-5">
          <div className="row gx-5 align-items-center">
            <MainContent image='assets/img/01.jpg' title='For those about to rock...' />
            <MainContent image='assets/img/02.jpg' title='We salute you!' />
            <MainContent image='assets/img/03.jpg' title='Let there be rock!' />

            <MainContent image='assets/img/01.jpg' title='For those about to rock...' />
            <MainContent image='assets/img/02.jpg' title='We salute you!' />
            <MainContent image='assets/img/03.jpg' title='Let there be rock!' />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;

