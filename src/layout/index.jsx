import Navbar from "../components/navbar";

export default function ({ children }) {
    return (
        <div className='bg-[#ECECEC] flex justify-center'>
            <div className=' w-full max-w-7xl min-[1440px]:max-w-[1360px] h-full min-h-[100vh]'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}