import React from 'react'
import { useContext } from 'react'
import franceFlag from '../../assets/france.svg'
import englishFlag from '../../assets/united-kingdom.svg'
import spainFlag from '../../assets/spain.svg'
import './ToggleLangs.css'


export default function ToggleLangs() {
      return (
            <div className="container-langs">
                  <img src={franceFlag} alt="drapeau de Frnce" />
                  <img src={englishFlag} alt="drapeau anglais" />
                  <img src={spainFlag} alt="drapeau d'Espagne" />
            </div>
      )
}
