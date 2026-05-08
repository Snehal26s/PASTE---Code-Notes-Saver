import { useState } from 'react'
import { useSelector } from 'react-redux'

import PasteCard from '../Components/PasteCard'

const Pastes = () => {

  const pastes = useSelector(
    (state)=>state.paste.pastes
  )

  const [search,setSearch] = useState('')

  const filteredData = pastes.filter(
    (paste)=>
      paste.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='max-w-6xl mx-auto p-10'>

      <input
        type='text'
        placeholder='Search here'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className='w-full bg-[#161b22] border border-gray-700 rounded-xl px-5 py-4 mb-8 outline-none'
      />

      <h1 className='text-5xl font-bold mb-10'>
        All Pastes
      </h1>

      <div className='flex flex-col gap-5'>

        {
          filteredData.length > 0 ?

          filteredData.map((paste)=>(
            <PasteCard
              key={paste.id}
              paste={paste}
            />
          ))

          :

          <h1 className='text-4xl text-orange-400'>
            No Data Found
          </h1>
        }

      </div>

    </div>
  )
}

export default Pastes