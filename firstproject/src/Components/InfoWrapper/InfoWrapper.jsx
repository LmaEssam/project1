import './InfoWrapper.css'
import Icon from '../../assets/logo.svg'
import Arrow from '../../assets/icon-arrow.svg'

function InfoWrapper(){

    return(
      <>
      <div id='info'>
      <img src={Icon} id='logo'/>
            <h1><label id='firstpart'> We're </label>coming soon</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <div id='btn'>
            <button><img src={Arrow}/></button>
            <input placeholder='Email Address'></input>
            </div>
      </div>
      </>
    )

}
export default InfoWrapper