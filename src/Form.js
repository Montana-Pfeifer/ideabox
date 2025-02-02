import { useState } from 'react';
import './Form.css';

function Form({ addIdea }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitIdeas(event) {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return; // Prevents empty submissions

    const newIdea = {
        id: Date.now(),
        title,
        description
    };
    addIdea(newIdea);
    clearInput();
  }

  function clearInput() {
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={submitIdeas}> {/* Changed this */}
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <button type="submit">SUBMIT</button> {/* Simplified this */}
    </form>
  );
}

export default Form;
