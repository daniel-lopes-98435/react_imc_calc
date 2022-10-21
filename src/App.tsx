import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';
import {levels, imcCalculate, Level} from './helpers/imc';


const App = () =>{
  const [heighField, setHeighField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heighField && weightField ){
      setToShow(imcCalculate(heighField, weightField));
    } else {
      alert("Digite todos os campos")
    }

  }

  const handleBackButton = () =>{
	setToShow(null)
	setHeighField(0);
	setWeightField(0);
  }
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela 
            Organização Mundial da Saúde para calcular o peso ideal de cada pessoa 
            </p>
          <input 
            type="number"
            placeholder="Digite a sua altura. Ex: 1.70 (em metros)"
            value={heighField > 0 ? heighField : ""}
            onChange={ h => setHeighField(parseFloat(h.target.value))}
			disabled={toShow? true : false}
            >
          </input>
          <input 
            type="number"
            placeholder="Digite o seu peso. Ex: 70 (em Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={w => setWeightField(parseFloat(w.target.value))}
			disabled={toShow? true : false}
            >
          </input>
          <button onClick={handleCalculateButton} disabled={toShow? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
			<div className={styles.grid}>
				{levels.map((item, key)=>
				<GridItem key={key} item={item} />
				)}
			</div>
          }
		  {
			toShow &&
			<div className={styles.rightBig}>
				<div className={styles.rigthArrow} onClick={handleBackButton}>
					<img src={leftArrowImage} alt="" width={25}/>
				</div>
				<GridItem item={toShow} />
			</div>
		  }
        </div>
      </div>
    </div>
  )
}

export default App;