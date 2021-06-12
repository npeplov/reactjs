import React, { Component } from 'react'

export default class MainClass extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this.rend = 0;
  }

  getData() {
    fetch(process.env.REACT_APP_NOTES_URL)
    .then((response) => response.json())
    .then((notes) => {
      this.setState((prev) => ({...prev, notes: notes }));
    });
  }

  componentDidMount() {
    console.log("Первичная загрузка notes..");
    this.getData();
  }

  handleChange = (e) => {
    this.setState((prev) => ({ ...prev, textArea: e.target.value }));
  };

  handleDestroy = (item) => {
    console.log(`Удаление: id #${item.id}` );
    fetch(process.env.REACT_APP_NOTES_URL + `/${item.id}`, {
      method: 'DELETE',
      body: item.id,
    })
    .then(() => this.getData())
  };

  componentDidUpdate() {
    console.log('update');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("fetch запрос POST ");

    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: this.state.textArea,
    })
    .then(() => this.getData());

  };

  render() {
    return (
      <>
        {/* Update */}
        <div className="Update">
          <h2>Notes</h2>
          <button onClick={() => this.getData()}>⭮</button>
        </div>

        {/* Notes */}
        <div className="Notes">
          {this.state.notes.map((item) => (
            <div className="Note" key={item.id}>
              <p>{item.content}</p>

              {/* Button */}
              <button onClick={() => this.handleDestroy(item)}>Destroy</button>
            </div>
          ))}
        </div>

        {/* Add Form  */}
        <form className="Form" onSubmit={this.handleSubmit}>
          <textarea value={this.state.textArea} onChange={this.handleChange} />
          <button type="submit">add</button>
        </form>
      </>
    );
  }
}
