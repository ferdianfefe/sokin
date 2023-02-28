import StatusBarRegistration from "components/elements/StatusBarRegistration/StatusBarRegistration";
import Image from "next/image"
import Verif from "public/img/verifikasi/verification-image.png"

const MerchantRegistrationPage4: React.FunctionComponent = (): JSX.Element =>{
    return(
        <>
            <div className="w-full h-full bg-[#FFEAD3]">
                <StatusBarRegistration
                pageIndex={4} />
                
                <span className="font-extrabold text-md text-[#E17301] text-center w-full h-full">
                    <h1 className="my-4 text-lg">Verifikasi</h1>
                </span>

                <div className="bg-white rounded-t-[50px] rounded-tl-[50px] pt-6 flex flex-col gap-4">
                    
                    <div className="flex px-6 justify-center">
                        <Image 
                            src={Verif}
                            alt="verification process"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-4 px-8 w-[80%] mx-auto my-0">
                        <div className="flex font-bold justify-center text-lg ">
                            <h2>Data usaha sedang di verifikasi</h2>
                        </div>

                        <div className="flex justify-center whitespace-pre-line text-[#817A7A]">
                            <p>Untuk mengetahui status usahamu, kamu bisa cek halaman ini secara berkala atau kamu dapat menunggu notifikasi yang akan kami kirimkan melalui emailmu</p>
                        </div>
                        
                        <div className='flex relative'>
                            <svg className='absolute ml-2 my-auto inset-y-0 left-2 flex items-center' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 3.55042L13.86 0.076416L12.699 1.45342L16.839 4.92742L18 3.55042ZM5.292 1.45342L4.14 0.076416L0 3.54142L1.161 4.91842L5.292 1.45342ZM9.45 5.60242H8.1V11.0024L12.375 13.5674L13.05 12.4604L9.45 10.3274V5.60242ZM9 2.00242C4.527 2.00242 0.9 5.62942 0.9 10.1024C0.9 14.5754 4.518 18.2024 9 18.2024C13.473 18.2024 17.1 14.5754 17.1 10.1024C17.1 5.62942 13.473 2.00242 9 2.00242ZM9 16.4024C5.517 16.4024 2.7 13.5854 2.7 10.1024C2.7 6.61942 5.517 3.80242 9 3.80242C12.483 3.80242 15.3 6.61942 15.3 10.1024C15.3 13.5854 12.483 16.4024 9 16.4024Z" fill="#FE8304"/>
                            </svg>

                            <div className='bg-[#FFE0C0] rounded-full text-xs font-medium text-[#FE8304] pl-10 pr-3 py-2 shadow-md shadow-[#FEB262]/70 shadow-inner-white shadow-inner-xl'>
                                Proses sekitar 2 hari kerja
                            </div>                            
                           

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MerchantRegistrationPage4;