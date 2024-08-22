import React from 'react';
import Navbar from './components/nav';
import Header from './components/header';
import Rules from './components/rules';
import Announce from './components/announce';
import RegistrationForm from './components/registrationform'
import Footer from './components/footer';
import Task from './components/task';
import Headpage from './components/head';



function App() {
  return (
    <div className="App">
      <Navbar />
      

      <Header />
      <div id="rules">

         {/* <div id="home">
      <Headpage />
      </div>  */}
      <Rules />
      </div>
      <div id="task">
        <Task/>
      </div>
      <div id="announce">
      <Announce />
      </div>
      <div id="registration">
      <RegistrationForm />
      </div>
      <div id="contact">
              <Footer />
              </div>

    </div>
  );
}

export default App;