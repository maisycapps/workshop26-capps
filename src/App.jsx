import { useState } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact";
import './App.css'


function App() {

  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
      <> 
        <div className="container">
          {selectedContactId ? (
          <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />
          ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
          )}
        </div>
      </>
  )
}

export default App
