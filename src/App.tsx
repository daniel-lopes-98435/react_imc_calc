import { useState } from 'react'
import style from './App.module.css'
import poweredImage from './assets/powered.png'
import {levels, imcCalculate} from './helpers/imc'

const App = () =>{
  const [heighField, setHeighField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const imcCalculate = () => {
    if(heighField && weightField ){

    } else {
      alert("Digite todos os campos")
    }

  }

  return(
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftside}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela 
            Organização Mundial da Saúde para calcular o peso ideal de cada pessoa 
            </p>
          <input 
            type="number"
            placeholder="Digite a sua altura. Ex: 1.70 (em metros)"
            value={heighField > 0 ? heighField : ""}
            onChange={ h => setHeighField(parseFloat(h.target.value))}
            >
          </input>
          <input 
            type="number"
            placeholder="Digite o seu peso. Ex: 70 (em Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={w => setWeightField(parseFloat(w.target.value))}
            >
          </input>
          <button onClick={imcCalculate}>Calcular</button>
        </div>
        <div className={style.rightSide}>
          right 456
        </div>
      </div>
    </div>
  )
}

export default App;