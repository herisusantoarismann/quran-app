import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Home = () => {
    const [data, setData] = useState(undefined)
    const [menu, setMenu] = useState(false)
    // type false if ascending and true if descending
    const [sort, setSort] = useState({number:1, type:false})

    const getData = () => {
        axios.get(`https://quran-endpoint.vercel.app/quran`)
            .then(res => {
                const quran = res.data.data
                setData(quran)
            })
    }

    const changeSort = (number, type) => {
        if(number != sort.number){
            setSort({number:number, type:false})
            type = false
        }else{
            setSort({number:number, type:type})
        }

        switch(true){
            case number == 1 && !type:
                setData(data.sort((a,b) => a.number - b.number))
                break
            case number == 1 && type:
                setData(data.sort((a,b) => b.number - a.number))
                break
            case number == 2 && !type:
                setData(data.sort((a,b) => a.asma.id.short.localeCompare(b.asma.id.short)))
                break
            case number == 2 && type:
                setData(data.sort((a,b) => b.asma.id.short.localeCompare(a.asma.id.short)))
                break
            case number == 3 && !type:
                setData(data.sort((a,b) => a.ayahCount - b.ayahCount))
                break
            case number == 3 && type:
                setData(data.sort((a,b) => b.ayahCount - a.ayahCount))
                break
            default:
                alert("Error Sorting...")
                break
        }
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
                            <div className="mr-4 border-2 border-gray-400 rounded-lg md:rounded-full">
                                <input className='w-48 px-2 sm:px-3 sm:py-1 md:p-4 md:py-2 text-sm outline-none rounded-lg md:rounded-full' type="text" placeholder='Search'/>
                                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                            </div>
                            <div className='relative'>
                                <i className="fa-solid fa-bars absolute top-2/4 transform -translate-y-2/4"  onClick={() => setMenu(true)}></i>
                            </div>
                        </div>
                    </div>
                    <div className="h-5/6 bg-primary my-6 mx-4 lg:mx-12 p-4 lg:p-6 rounded-lg overflow-scroll">
                        <div className="flex justify-end mt-2 mb-8 text-xs md:text-sm">
                            <div className="hidden sm:flex gap-4">
                                <div className={`relative p-2 w-24 md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer ${sort.number == 1 ? 'bg-white' : 'blur-[0.6px]'}`} onClick={() => changeSort(1, !sort.type)}>
                                    <div className="leading-6">
                                        <p className='text-slate-400'>Sort by</p>
                                        <p className='font-bold'>Number</p>
                                    </div>
                                    <div className='absolute right-3 bottom-3'>
                                        {sort.type && sort.number == 1 ? (
                                            <i className="fa-solid fa-arrow-up"></i>
                                        ) : (
                                            <i className="fa-solid fa-arrow-down"></i>
                                        )}
                                    </div>
                                </div>
                                <div className={`relative p-2 w-24 md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer  ${sort.number == 2 ? 'bg-white' : 'blur-[0.6px]'}`} onClick={() => changeSort(2, !sort.type)}>
                                    <div className="leading-6">
                                        <p className='text-slate-400'>Sort by</p>
                                        <p className='font-bold'>Alphabet</p>
                                    </div>
                                    <div className='absolute right-3 bottom-3'>
                                        {sort.type && sort.number == 1 ? (
                                            <i className="fa-solid fa-arrow-up"></i>
                                        ) : (
                                            <i className="fa-solid fa-arrow-down"></i>
                                        )}
                                    </div>
                                </div>
                                <div className={`relative p-2 w-24 md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer  ${sort.number == 3 ? 'bg-white' : 'blur-[0.6px]'}`} onClick={() => changeSort(3, !sort.type)}>
                                    <div className="leading-6">
                                        <p className='text-slate-400'>Sort by</p>
                                        <p className='font-bold'>Total Ayah</p>
                                    </div>
                                    <div className='absolute right-3 bottom-3'>
                                        {sort.type && sort.number == 1 ? (
                                            <i className="fa-solid fa-arrow-up"></i>
                                        ) : (
                                            <i className="fa-solid fa-arrow-down"></i>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end sm:hidden'>
                                <div className={`p-1 w-20 flex items-center gap-1 cursor-pointer ${sort.number == 1 ? 'text-black' : 'text-slate-400'}`} onClick={() => changeSort(1, !sort.type)}>
                                    <p>Number</p>
                                    {sort.type && sort.number == 1 ? (
                                        <i className="fa-solid fa-arrow-up"></i>
                                    ) : (
                                        <i className="fa-solid fa-arrow-down"></i>
                                    )}
                                </div>
                                <div className={`p-1 w-20 flex items-center gap-1 cursor-pointer ${sort.number == 2 ? 'text-black' : 'text-slate-400'}`} onClick={() => changeSort(2, !sort.type)}>
                                    <p>Alphabet</p>
                                    {sort.type && sort.number == 2 ? (
                                        <i className="fa-solid fa-arrow-up"></i>
                                    ) : (
                                        <i className="fa-solid fa-arrow-down"></i>
                                    )}
                                </div>
                                <div className={`p-1 w-20 flex items-center gap-1 cursor-pointer ${sort.number == 3 ? 'text-black' : 'text-slate-400'}`} onClick={() => changeSort(3, !sort.type)}>
                                    <p>Total Ayat</p>
                                    {sort.type && sort.number == 3 ? (
                                        <i className="fa-solid fa-arrow-up"></i>
                                    ) : (
                                        <i className="fa-solid fa-arrow-down"></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                            {data.map((item, index) => {
                                return(
                                    <div className='bg-white h-32 xl:h-40 p-2 md:p-4 rounded-md md:rounded-lg flex justify-between flex-col text-sm md:text-base shadow-sm' key={item.number}>
                                        <div className='flex justify-between items-center'>
                                            <span>{index + 1}</span>
                                            <i className="fa-solid fa-star text-secondary"></i>
                                        </div>
                                        <div className=''>
                                            <p className='font-semibold xl:font-bold tracking-wide'>{item.asma.id.short}</p>
                                            <p className='text-gray-400'>{item.asma.translation.id}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="text-center text-sm font-bold text-slate-400">
                        &copy; Copyright {new Date().getFullYear()}, All Right Reversed.
                    </div>
                </>
            ) : (
                <div>Loading</div>
            )}
            </div>
    )
}
