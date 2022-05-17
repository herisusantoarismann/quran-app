import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Home = () => {
    const [data, setData] = useState(undefined)
    const [menu, setMenu] = useState(false)

    const getData = () => {
        axios.get(`https://quran-endpoint.vercel.app/quran`)
            .then(res => {
                const quran = res.data.data
                setData(quran)
            })
    }

    useEffect(() => {
        getData()
    }, [])

  return (
        <div className='w-screen h-screen overflow-x-hidden'>
            {data != undefined ? (
                <>
                    <div className={`w-2/4 h-full fixed right-0 bg-secondary flex justify-center items-center flex-col z-10 ${menu ? '' : 'transform translate-x-full'} duration-500`}>
                        <i className="fa-solid fa-arrow-right absolute top-4 left-4 text-white text-lg font-bold" onClick={() => setMenu(false)}></i>
                        <span className='text-lg font-bold text-center text-white tracking-widest my-4'>Home</span>
                        <span className='text-lg font-bold text-center text-white tracking-widest my-4'>About</span>
                        <span className='text-lg font-bold text-center text-white tracking-widest my-4'>Contact</span>
                    </div>
                    <div className='mt-4 mx-6 lg:px-16 flex justify-between items-center'>
                        <div className="">
                            <h1>X</h1>
                        </div>
                        {/* <div className="w-6/10 justify-between align-center">
                            <h1>Quran</h1>
                            <div>
                                <input type="text" placeholder='Search'/>
                            </div>
                        </div> */}
                        <div className="flex">
                            <div className="mr-4 border-2 border-gray-400 rounded-lg">
                                <input className='w-48 px-2 text-sm outline-none rounded-lg' type="text" placeholder='Search'/>
                                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                            </div>
                            <div className='relative'>
                                <i className="fa-solid fa-bars absolute top-2/4 transform -translate-y-2/4"  onClick={() => setMenu(true)}></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-5/6 bg-primary my-6 mx-4 lg:mx-12 p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 rounded-lg overflow-scroll">
                        {data.map((item) => {
                            return(
                                <div className='bg-white h-32 p-2 rounded-md flex justify-between flex-col text-sm' key={item.number}>
                                    <div className='flex justify-between items-center'>
                                        <span>{item.number}</span>
                                        <i className="fa-solid fa-star text-secondary"></i>
                                    </div>
                                    <div className=''>
                                        <p className='font-semibold tracking-wide'>{item.asma.id.short}</p>
                                        <p className='text-gray-400'>{item.asma.translation.id}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            ) : (
                <div>Loading</div>
            )}
            </div>
    )
}
