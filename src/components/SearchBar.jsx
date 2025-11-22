import React from 'react'

export default function SearchBar({value, onChange, placeholder}) {
  return (
    <div className="w-100">
      <input
        value={value}
        onChange={e=>onChange(e.target.value)}
        placeholder={placeholder || 'Search books...'}
        className="form-control"
      />
    </div>
  )
}
