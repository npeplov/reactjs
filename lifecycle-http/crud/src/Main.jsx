import React, {useState} from 'react'
import Note from './components/Note';

export default function Main() {
  const [notes, setNotes] = useState([])
  let ind = 0;

  const handleGet = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(response => response.json())
      .then((notes) => setNotes(notes))
  }

  return (
    <>
      <div className="Notes">
        {notes.map((item) => (
          <Note text={item} key={ind += 1} />
        ))}
      </div>
    
      <div className="Form">
        <button onClick={handleGet}>get notes</button>
      </div>
    </>
  );
}
