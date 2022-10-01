import { plantList } from '../datas/plantList'
import Care from './Care'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.bestSale && <span>🔥</span>}
                        {plant.name}
                        <Care careType='water' care={plant.water} />
                        <Care careType='light' care={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList