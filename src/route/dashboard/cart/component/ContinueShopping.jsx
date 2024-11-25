import { useNavigate } from "react-router-dom"

const ContinueShopping = () => {
    const navigate = useNavigate()
    return (
      <div onClick={()=>navigate('/dashboard')}>
        <p className=' transition hover:opacity-100 opacity-90 cursor-pointer p-2 px-5 bg-slate-600 dark:bg-slate-300 dark:text-slate-900 inline-block text-white rounded-md shadow-md'>Continue Shopping</p>
      </div>
    )
  }

export default ContinueShopping
  