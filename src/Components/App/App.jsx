import { useState } from "react";
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form';
import './App.css'

function App() {
  const [ideas, setIdeas] = useState([])

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        {!ideas.length && <h2>No ideas yet -- add some!</h2> }
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} deleteIdea={deleteIdea} />
      </main>
    )
}

export default App;
