import React, {useState} from 'react';
const INITIAL_FORM = { hex: '', rgba: [], text: ["",""] };

function hex (hex){
  const digit = hex.slice(1).split("");
  const r = parseInt( [digit[0],digit[1] ].join(""), 16 );
  const g = parseInt( [digit[4],digit[5] ].join(""), 16 );
  const b = parseInt( [digit[2],digit[3] ].join(""), 16 );
  return [r,g,b];
}

export default function Form() {

  const [form, setForm] = useState(INITIAL_FORM);
  const regexp = /^#[a-fA-F0-9]{6}/;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (regexp.test(form.hex)) {
      setForm((prev) => ({ ...prev, rgba: hex(form.hex), text: ["rgb(", ")"]}) )
    } else if (form.hex.length === 7) {
      setForm((prev) => ({ ...prev, rgba: ["Ошибка"], text: ["",""]}) )
    }
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, hex: e.target.value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength="7"
        onChange={handleChange}
        value={form.hex}
      />
      <div className="rgb">
        {form.text[0]}
        {form.rgba.join()}
        {form.text[1]}
      </div>

      <style jsx="true">
        {`
          .App-header {
            background: rgba(
              ${form.rgba.length !== 1 ? form.rgba.join() : [233, 75, 53]}
            );
          }
        `}
      </style>
    </form>
  );
}
