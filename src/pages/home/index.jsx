import Layout from "../../layout";
import back from '../../assets/doctor.svg';
import play from '../../assets/play.svg';
import containerImage from '../../assets/container-image.svg';
import serviceImage1 from '../../assets/service-image1.svg';
import serviceImage2 from '../../assets/service-image2.svg';
import serviceImage3 from '../../assets/service-image3.svg';
import serviceImage4 from '../../assets/service-image4.svg';
import serviceImage5 from '../../assets/service-image5.svg';
import serviceImage6 from '../../assets/service-image6.svg';

export default function () {

    const serviceArray = [
        {
            image: serviceImage1,
        },
        {
            image: serviceImage2,
        },
        {
            image: serviceImage3,
        },
        {
            image: serviceImage4,
        },
        {
            image: serviceImage5,
        },
        {
            image: serviceImage6,
        },
    ]


    return (
        <Layout>
            <main>
                <section className="grid grid-cols-2 items-center">
                    <div className="col-span-1">
                        <p className="font-lato text-[40px] text-[#333333] leading-[48px]">
                            Providing Quality <span className="text-[#007E85]">Healthcare</span> for a <span className="text-[#6EAB36]">Brighter</span> and <span className="text-[#6EAB36]">Healthy</span> Future
                        </p>
                        <p className="text-[rgba(0,0,0,0.70)] font-lato font-medium my-3">
                            At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
                        </p>
                        <div className="flex gap-8 mt-24 items-center">
                            <button className="bg-[#007E85] px-10 py-3 rounded-md text-white font-lexend text-xl">
                                Appoinments
                            </button>
                            <img src={play} alt={play} />
                            <p className="font-lato text-xl font-medium">Watch Video</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center mt-24">
                        <div className="relative back-image w-[520px] h-[540px]">
                            <img className="absolute -bottom-3" src={back} alt={back} />
                        </div>
                    </div>
                </section>
                <section className="w-full my-12">
                    <div className="w-full max-w-7xl h-48 bg-white rounded-xl px-8 py-6">
                        <p className="font-dm text-4xl font-semibold">Find A Doctor</p>
                        <div className="flex my-4 justify-between items-center">
                            <div className="flex gap-16">
                                <input className="w-72 h-12 bg-white border border-[#007E85] outline-none px-4 rounded-lg" placeholder="Name" type="text" name="" id="" />
                                <input className="w-72 h-12 bg-white border border-[#007E85] outline-none px-4 rounded-lg" placeholder="Speciality" type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                            <button className="w-52 h-12 bg-[#007E85] rounded-lg font-dm text-white text-xl">Search</button>
                        </div>
                    </div>
                </section>
                <section className="w-full flex flex-col items-center my-20">
                    <p className="text-[#007E85] font-dm text-4xl font-bold">Our results in numbers</p>
                    <div className="w-full grid grid-cols-4 mt-12">
                        <div className="col-span-1">
                            <p className="font-dm text-4xl font-bold text-[#007E85] text-center">99<span className="opacity-50">%</span></p>
                            <p className="text-[#333333] font-dm text-2xl font-medium text-center">Customer satisfaction</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-dm text-4xl font-bold text-[#007E85] text-center">15<span className="opacity-50">k</span></p>
                            <p className="text-[#333333] font-dm text-2xl font-medium text-center">Online Patients</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-dm text-4xl font-bold text-[#007E85] text-center">12<span className="opacity-50">k</span></p>
                            <p className="text-[#333333] font-dm text-2xl font-medium text-center">Patients Recovered</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-dm text-4xl font-bold text-[#007E85] text-center">240<span className="opacity-50">%</span></p>
                            <p className="text-[#333333] font-dm text-2xl font-medium text-center">Company growth</p>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 items-center">
                    <div className="col-span-1 px-8">
                        <p className="text-4xl font-dm text-[#007E85] font-bold">
                            You have lots of reasons to choose us
                        </p>
                        <p className="font-dm text-lg text-[#555555] my-4 leading-5">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
                        </p>
                        <div className="flex gap-4 my-8">
                            <button className="bg-[#007E85] font-medium rounded-[40px] px-10 py-4 font-dm text-lg text-white hover:bg-white border hover:border-[#007E85] hover:text-[#007E85] transition-all duration-300">Get started
                            </button>
                            <button className="bg-white rounded-[40px] px-10 py-4 font-dm text-lg text-[#007E85] font-medium border border-[#007E85] hover:bg-[#007E85]
                            hover:text-white transition-all duration-300">Talk to sales
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <img className="h-96" src={containerImage} alt={containerImage} />
                    </div>
                </section>
                <section className='w-full mt-20'>
                    <p className='font-dm text-4xl text-[#007E85] font-bold text-center my-4'>Services we provide </p>
                    <p className="font-dm text-lg text-center leading-6 mb-6">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br /> elementum tempus hac tellus libero accumsan. </p>
                    <div className="grid grid-cols-3 gap-4 my-16">
                        {
                            serviceArray?.map(item => {
                                return (
                                    <div key={item?.image} className="w-full flex justify-center col-span-1">
                                        <div className="w-full max-w-[320px] bg-white h-96 rounded-2xl p-4">
                                            <img src={item?.image} alt={item?.image} />
                                            <p className="font-dm text-2xl text-[#007E85] font-semibold my-4">Dental treatments</p>
                                            <p className="font-dm text-[#555555] leading-6">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                                            <p className="font-dm text-lg text-[#007E85] my-2 font-semibold">Learn more</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </Layout>
    )
}