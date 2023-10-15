import Image from 'next/image'

export default function NavBar() {
    return (
      <header className='w-full bg-red-600 h-20 fixed top-0 left-0'>
        <div className='flex justify-between h-20' >
          <div className='w-4/12 flex justify-center'>
            <div className='flex justify-between'>
              <div className='mr-4'>
                <Image
                    src="/moiMidJourney.png"
                    alt="Description de l'image"
                    width={65} 
                    height={70}
                    className='rounded-full my-2'
                  />
              </div>
  
              <div className='flex items-center'>
                <p className='text-white'>Baptiste Grimaldi</p>
              </div>
            </div>
          </div>
  
            <div className='w-8/12 flex justify-center text-sm'>
              <div className='flex justify-between space-x-20 items-center text-white'>
                <p className='hover:scale-105 hover:opacity-50 cursor-pointer'>Présentation</p>
                <p className='hover:scale-105 cursor-pointer hover:opacity-50'>Compétences</p>
                <p className='hover:scale-105 cursor-pointer hover:opacity-50'>Réalisations</p>
                <p className='hover:scale-105 cursor-pointer hover:opacity-50'>Services</p>
                <div className='bg-teal-500 text-white pt-2 px-2 pb-1 rounded hover:scale-105 cursor-pointer'>
                  <p>Contact</p>
                </div>
              </div>
            </div>
  
        </div>
      </header>
    )
  }