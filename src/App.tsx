import style from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () =>{
  return(
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
    </div>
  )
}

export default App;