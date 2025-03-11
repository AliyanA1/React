import {logo} from '../assets'

const Hero = () => {
  return (
    <div className="w-full flex  justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
       <img src={logo} alt='logo' className='w-28 object-contain' />

       <button className='black_btn' type="button" 
       onClick={()=> window.open('https://github.com/AliyanA1/React/tree/main/Ai_summerizer')}
       >Github</button>
      </nav>

      <h1 className='head_text'> 
        Summerize Articals With <br className='max-md:hidden'/>
       <span className='orange_gradient'>Open-Ai Gpt-4</span> 
      </h1>

      <h2 className='desc'>
       Simplify you reading with summize, an
       open source artical summerizer transform 
       lenghty artical into clear and concise summaries
      </h2>
    </div>
  )
}

export default Hero