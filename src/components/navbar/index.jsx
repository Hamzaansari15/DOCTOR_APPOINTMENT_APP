import { Link, useLocation } from 'react-router-dom'
// import logo from '../../assets/logo.svg'

export default function () {

    const location = useLocation();

    const NAV_LINK =
        [
            { title: 'Home', link: '/' },
            { title: 'Service', link: '/services' },
            { title: 'Contact Us', link: '/contact-us' },
            { title: 'Blog', link: '/blog' },
        ]


    return (
        <nav className="flex items-center justify-between my-4">
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10' src='/public/images/logo.png' alt="/image 16.svg" />
                <p className='text-[#007E85] font-lexend text-2xl font-semibold'>Health<span className='text-[#6EAB36]'>care</span></p>
            </div>
            <ul className='hidden lg:flex items-center gap-8'>
                {NAV_LINK.map(item => {
                    return (
                        <Link to={item?.link} key={item?.title}>
                            <li className={`${location?.pathname === item?.link ? 'text-[#007E85]' : 'text-black'} group font-lexend text-lg font-medium hover:text-[#007E85]`}>
                                {item?.title}
                                <div className={`${location?.pathname === item?.link ? 'w-3/5' : 'w-0'} h-0.5 bg-[#007E85] group-hover:w-3/5 transition-all duration-300`} />
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <div className='hidden xs:flex items-center gap-12'>
                <button className='border-none px-8 py-1.5 bg-[#007E85] rounded-md text-white font-lexend'>Log In</button>
            </div>
        </nav>
    )
}