import Banner from './Banner'
import monstera from '../assets/monstera.jpg'
//import Cart from './Cart'
import ShoppingList from './ShoppingList'


function App() {
  return (
    <div>
      <Banner>
        <img src={monstera} alt='monstera-la-maison-jungle' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />
    </div>
  )
}
export default App
