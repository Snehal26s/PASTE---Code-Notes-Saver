import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FaCopy } from 'react-icons/fa'
import toast from 'react-hot-toast'

const ViewPaste = () => {

  const { id } = useParams()

  const pastes = useSelector(
    (state)=>state.paste.pastes
  )

  const paste = pastes.find(
    (paste)=> paste.id === id
  )

  const copyPaste = ()=>{
    navigator.clipboard.writeText(paste.content)
    toast.success('Copied')
  }

  if(!paste){
    return (
      <h1 className='text-center text-5xl mt-20'>
        Paste Not Found
      </h1>
    )
  }

  return (
    <div className='max-w-6xl mx-auto p-10'>

      <div className='flex justify-between items-center mb-8'>

        <h1 className='text-5xl font-bold'>
          {paste.title}
        </h1>

        <button
          onClick={copyPaste}
          className='bg-green-500 p-4 rounded-xl text-xl'
        >
          <FaCopy />
        </button>

      </div>

      <div className='bg-[#161b22] border border-gray-700 rounded-2xl overflow-hidden'>

        <div className='bg-gray-700 p-4 flex gap-2'>
          <div className='w-4 h-4 rounded-full bg-red-500'></div>
          <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
          <div className='w-4 h-4 rounded-full bg-green-500'></div>
        </div>

        <pre className='p-6 whitespace-pre-wrap overflow-auto'>
          {paste.content}
        </pre>

      </div>

    </div>
  )
}

export default ViewPaste