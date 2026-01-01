import React from 'react'

type ButtonProps = {
    color: "red" | "blue" | "green",
    content : string
}

export function Button({color,content}: ButtonProps) {
    const colorClass = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500"
    }
  return (
      <div>
          <button className={`border-red-500 ${colorClass[color]} p-2 rounded-lg `}>
              {content}
          </button>
    </div>
  )
}

export default Button