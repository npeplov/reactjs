import React , {useState} from 'react';

export default function AddForm({onAdd}) {

  let [form, setForm] = useState({date: "", distance: ""});

  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.value;
    setForm((prev) => ({...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({date: new Date(form.date), distance: +form.distance});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Container">
          <div>
            <label htmlFor="date">Дата</label>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              id=""
              value={form.date}
            />
          </div>
          <div>
            <label htmlFor="distance">Пройдено</label>
            <input
              onChange={handleChange}
              type="text"
              name="distance"
              id=""
              value={form.distance}
            />
          </div>
          <button className="Btn" type="submit">
            OK
          </button>
        </div>
      </form>

      <style>{`
        label {
          display: block;
          margin-bottom: 7px;
        }
        input {
          width: 150px;
          padding: 10px 30px;
          border-radius: 10px;
          border: 1px solid #000;
          outline: none;
          box-sizing: border-box;
          height: 35px;
        }
        button.Btn {
          border-radius: 10px;
          width: 75px;
          height: 37px;
          outline: none;
          border: none;
        }
      `}</style>
    </>
  );
}
