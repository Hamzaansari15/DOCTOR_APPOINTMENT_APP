import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ({ children }) {
    return (
        <div className='bg-[#ECECEC] flex flex-col items-center'>
            <div className='w-full max-w-7xl min-[1440px]:max-w-[1360px] min-h-[100vh] px-4'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}