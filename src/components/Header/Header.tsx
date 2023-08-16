import './style.css'
import Logo from '../../assets/rocket.svg'
export const Header = () => (

  <header className='globalCenter'>
    <div>
      <img src={Logo} alt="rocket logo" />
      <strong>to<span>do</span></strong>
    </div>
  </header>
)