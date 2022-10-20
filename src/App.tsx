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
      <div className={style.container}>
        <div className={style.leftside}>
          left 123
        </div>
        <div className={style.rightSide}>
          right 456
        </div>
      </div>
    </div>
  )
}

export default App;