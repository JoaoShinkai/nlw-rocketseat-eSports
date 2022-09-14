import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'

import logoImg from './assets/logo-nlw-eSports.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <img src={logoImg} alt="" />
        <div className='text-6xl text-white font-black mt-20'>
          Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
        </div>
        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a className='relative rounded-lg overflow-hidden' href="">
            <img src="/game-1.png" alt="" />
            <div className='w-full pt-16 absolute bottom-0 left-0 right-0 pb-4 px-4 bg-card-gradient'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
            </div>
          </a>
          <a className='relative rounded-lg overflow-hidden' href="">
            <img src="/game-2.png" alt="" />
            <div className='w-full pt-16 absolute bottom-0 left-0 right-0 pb-4 px-4 bg-card-gradient'>
              <strong className='font-bold text-white block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
            </div>
          </a>
          <a className='relative rounded-lg overflow-hidden' href="">
            <img src="/game-3.png" alt="" />
            <div className='w-full pt-16 absolute bottom-0 left-0 right-0 pb-4 px-4 bg-card-gradient'>
              <strong className='font-bold text-white block'>CSGO</strong>
              <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
            </div>
          </a>
          <a className='relative rounded-lg overflow-hidden' href="">
            <img src="/game-4.png" alt="" />
            <div className='w-full pt-16 absolute bottom-0 left-0 right-0 pb-4 px-4 bg-card-gradient'>
              <strong className='font-bold text-white block'>Apex Legends</strong>
              <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
            </div>
          </a>
          <a className='relative rounded-lg overflow-hidden' href="">
            <img src="/game-5.png" alt="" />
            <div className='w-full pt-16 absolute bottom-0 left-0 right-0 pb-4 px-4 bg-card-gradient'>
              <strong className='font-bold text-white block'>Fortnite</strong>
              <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
            </div>
          </a>
          <a className='relative rounded-lg overflow-hidden' href="">
            <img src="/game-6.png" alt="" />
            <div className='w-full pt-16 absolute bottom-0 left-0 right-0 pb-4 px-4 bg-card-gradient'>
              <strong className='font-bold text-white block'>World of Warcraft</strong>
              <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
            </div>
          </a>
        </div>
        <div className='bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg borderDetail flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-bold'>Não encontrou seu duo?</strong>
            <div className='text-zinc-400'>Publique um anúncio para encontrar novos players.</div>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex gap-1'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
    </div>
  )
}

export default App
