import React from 'react'

const Button = ({ styles = "", title }) => (
  <button
    type={"button"}
    className={`px-12 py-3 rounded-full bg-secondary text-white text-[12px] uppercase hover:opacity-70 ${styles}`}
  >
    {title}
  </button>
)

export default Button