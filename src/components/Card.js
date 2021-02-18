import React from 'react'

export function Card({ name, status, src }) {
    return (
      <div className={`card-wrapper ${status}`}>
        <div className="card-title">{name}</div>
        <img src={src} alt={name}/>
        <div className="card-footer">{status}</div>
      </div>
    );
  }
  
export const MemoizedMovie = React.memo(Card);
