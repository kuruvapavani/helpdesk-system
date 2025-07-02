import React from 'react'

const TicketCards = ({ name, number, color }) => {
  return (
    <div
      className="w-48 h-48 rounded-lg font-sanchez p-4"
      style={{ backgroundColor: color ,boxShadow: '6px 6px 12px #9EA6A1'}}
    >
      <div className="h-full flex flex-col justify-between items-center">
        <div className="text-xl text-center">{name}</div>
        <div className="text-8xl">{number}</div>
      </div>
    </div>
  )
}

export default TicketCards
