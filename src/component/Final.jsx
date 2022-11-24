import React from 'react'
import VersusRound from './VersusRound'

const Final = () => {
  return (
    <div className="round">
    <h2 style={{textAlign: 'center'}}>Best Losers</h2>
    <div className="round-16">
    <VersusRound odd />
    <VersusRound even />
    </div>
    <h2 style={{textAlign: 'center'}}>Final</h2>
    <div className="round-16">
    <VersusRound />
    <VersusRound />
    </div>
  </div>  )
}

export default Final