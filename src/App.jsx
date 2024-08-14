import React from 'react';
import Navbar from './components/nav';
import Header from './components/header';
import Rules from './components/rules';
import Announce from './components/announce';
import RegistrationForm from './components/registrationform'
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Rules />
      <Announce />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;