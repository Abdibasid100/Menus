import './App.css'
import Menu from './Menu';
import Categories from './Categories';
import items from './data'
import { useState } from 'react';

const allcategories = ['All', ... new Set(items.map((item)=> item.category))] 
console.log(allcategories)

function App() {

  const [MenuItem, setMenuItem] = useState(items);
  const [catagories, setcatagories] = useState(allcategories);

  const filteritems = (category) => {
    if(category === 'All'){
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItem(newItem)
  }

  return (
    <main>
      <section>   
        <div>
      <h1>Our Menu</h1>
      <div className='bg-orange-500 w-[100px] h-1 rounded mx-auto mt-6'></div>
      </div> <br />
      <Categories catagories = {catagories} filteritems= {filteritems}/><br />
      <Menu items={MenuItem}/>
      </section>
    </main>
  )
}

export default App
