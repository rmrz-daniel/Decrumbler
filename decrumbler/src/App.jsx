import { useState } from 'react'
import Login from './Components/Login-Page/login'
import AddSubnet from './Components/Main-View/AddSubnet'
import Display from './Components/Main-View/Display'
import NavWindow from './Components/Side-View/NavWindow'

/**
 * @file App.js is the root component of the React application.
 * @description Decrumbler Javadocs by Jarenz Oria.
 * @author Jarenz Oria 
 * @author Daniel Ramirez 
 * @author Kendra Wallace
 * @author Rebekah Bulych 
 * @author Santiago Caicedo
 * @author Leila Nalivkina
 * @see <a href="https://www.linkedin.com/in/jarenz-oria/">Jarenz Oria Profile</a>
 * @see <a href="https://www.linkedin.com/in/rmrz-daniel/">Daniel Ramirez Profile</a>
 * @see <a href="https://www.linkedin.com/in/kendra-wallace-5bb436212/">Kendra Wallace Profile</a>
 * @see <a href="https://www.linkedin.com/in/rebekahbulych/">Rebekah Bulych Profile</a>
 * @see <a href="https://www.linkedin.com/in/santiago-caicedo/">Santiago Caicedo Profile</a>
 * @see <a href="https://www.linkedin.com/in/leilanalivkina/">Leila Nalivkina Profile</a>
 */


/**
 * Represents the React.js container component holding functional components.
 * @returns Root component within the DOM.
 */
function App() {

  return (
    <div className="App">
      {/* <Login/> */}
      {/* <AddSubnet/> */}
      <Display/>
    </div>
  )
}

export default App
