import React from 'react'

export default function Card(props) {
  const { title, description } = props
  return (
    <div className="card" style={{ width: "18rem" }}>
      
      {/* Image if exist */}
      {props.children}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href="/" className="btn btn-primary">
          Let's dosvidaniya
        </a>
      </div>

    </div>
  );
}
