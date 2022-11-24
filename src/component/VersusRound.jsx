import React from 'react'
import CountryImage from './CountryImage'

const VersusRound = ({status, winner}) => {
  return (
    <div className='versus-round' style={{justifyContent: status==='even' && 'flex-end'}}>
            {status==='odd' && <CountryImage height={20} imgUrl={`https://flagcdn.com/${winner?.code}.svg`} />}
            <span style={{margin: '0 8px'}}>{winner?.name}</span>
            {status==='even' && <CountryImage height={20} imgUrl={`https://flagcdn.com/${winner?.code}.svg`} />}
    </div>
  )
}

export default VersusRound