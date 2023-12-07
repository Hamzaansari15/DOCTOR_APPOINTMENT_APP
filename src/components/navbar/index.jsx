import logo from '../../assets/logo.svg'

export default function () {

    const NAV_LINK =
        [
            { title: 'Home', link: '#' },
            { title: 'Service', link: '#' },
            { title: 'Contact Us', link: '#' },
            { title: 'Blog', link: '#' },
        ]


    return (
        <nav className="flex items-center justify-between my-4">
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10' src={logo} alt="/image 16.svg" />
                <p className='text-[#007E85] font-lexend text-2xl font-semibold'>Health<span className='text-[#6EAB36]'>care</span></p>
            </div>
            <ul className='flex items-center gap-8'>
                {NAV_LINK.map(item => {
                    return (
                        <li className={`${item?.title === 'Home' ? 'text-[#007E85]' : 'text-black'} group font-lexend text-lg font-medium hover:text-[#007E85]`} key={item?.title}>
                            {item?.title}
                            <div className={`${item?.title === 'Home' ? 'w-3/5' : 'w-0'} h-0.5 bg-[#007E85] group-hover:w-3/5 transition-all duration-300`} />
                        </li>
                    )
                })}
            </ul>
            <div className='flex items-center gap-12'>
                <p className='font-lexend font-medium text-[#007E85]'>Sign Up</p>
                <button className='border-none px-8 py-1.5 bg-[#007E85] rounded-md text-white font-lexend'>Log In</button>
            </div>
        </nav>
    )
}