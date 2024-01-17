import React from 'react'

const Categories = ({ catagories,filteritems}) => {
  return (
    <div>
      {
        catagories.map((category, index) => {
          return (
            <button
            className='text-white mx-4 bg-blue bg-none hover:bg-orange-600 transition ease-in duration-300'
            key={index} onClick={()=> filteritems(category)}>{category}</button>
          )
        })
      }
    </div>
  )
}

export default Categories
