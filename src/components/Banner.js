import monstera from '../assets/monstera.jpg'
import '../styles/Banner.css'


function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={monstera} alt='monstera-la-maison-jungle' className='lmj-monstera' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}
export default Banner



