import React from 'react'
import { useContext } from 'react'
import franceFlag from '../../assets/france.svg'
import englishFlag from '../../assets/united-kingdom.svg'
import { Context } from '../../context/LangsContext'
import spainFlag from '../../assets/spain.svg'
import './ToggleLangs.css'


export default function ToggleLangs() {

      const { toggleLang } = useContext(Context)

      return (
            <div className="container-langs">
                  <img onClick={() => toggleLang('FR')} src={franceFlag} alt="drapeau de Frnce" />
                  <img onClick={() => toggleLang('EN')} src={englishFlag} alt="drapeau anglais" />
                  <img onClick={() => toggleLang('ES')} src={spainFlag} alt="drapeau d'Espagne" />
            </div>
      )
}
