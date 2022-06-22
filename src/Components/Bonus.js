import React from 'react'
import bonusItems from '../data/bonusItems'


export default function Bonus(props) {
    const { sum } = props

    if (sum > 1000){
        return(
            <ul className="ul">
                <li>{bonusItems[0]}</li>
                <li>{bonusItems[1]}</li>
                <li>{bonusItems[2]}</li>
                <li>{bonusItems[3]}</li>
            </ul>
        )
    }
    if (sum >= 500){
        return(
            <ul className="ul">
                <li>{bonusItems[0]}</li>
                <li>{bonusItems[1]}</li>
                <li>{bonusItems[2]}</li>
            </ul>
        )
    }
    if (sum >= 300){
        return(
            <ul className="ul">
                <li>{bonusItems[0]}</li>
                <li>{bonusItems[1]}</li>
            </ul>
        )
    }
    if (sum >= 100){
        return(
            <ul className="ul">
                <li>{bonusItems[0]}</li>
            </ul>
        )
    } else {
        return(<ul className="ul">
               
            </ul>
        )
    }

}
