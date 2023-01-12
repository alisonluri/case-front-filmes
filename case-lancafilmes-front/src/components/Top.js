import React from 'react'
import { Top} from './styled'
import Vector from '../assets/Vector.png'
import { useNavigate } from 'react-router-dom'

const Topo = (onClick) => {
    const navigate = useNavigate()

    return (
        <Top>
            <img src={Vector} alt='Logo' onClick={() => navigate(`${onClick}`)} />
        </Top>
    )
}

export default Topo