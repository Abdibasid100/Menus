import React from 'react'

const Menu = ({items}) => {
   
  return (
    <div className='grid grid-cols-1 gap-10 w-full md:grid-cols-2 p-2 shadow-xl'>
      {
        items.map((menuItem)=> {
            const {id, title, price,img, desc} = menuItem;
            return(
                <div key={id} className='flex'>
                   <img src={img} className='w-[250px] border-4 border-orange-400'/>
                   <div>
                    <header className='flex items-center justify-between mx-4'>
                        <h2 className='text-xl font-bold'>{title}</h2>
                        <p className='text-xl font-bold'>${price}</p>
                    </header>
                    <p className='mx-4 mt-4'>{desc}</p>
                   </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Menu
