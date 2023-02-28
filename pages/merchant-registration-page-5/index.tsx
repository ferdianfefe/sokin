import StatusBarRegistration from "components/elements/StatusBarRegistration/StatusBarRegistration";
import Image from "next/image"
import RegisteredMerchant from "public/img/verifikasi/registered-merchant.png"
import Button from "components/elements/Button";
const MerchantRegistrationPage5: React.FunctionComponent = (): JSX.Element =>{
    return(
        <>
            <div className="w-full h-full bg-[#FFEAD3]">
                <StatusBarRegistration
                pageIndex={4} />
                
                <span className="font-extrabold text-md text-[#E17301] text-center w-full h-full">
                    <h1 className="my-4 text-lg">Akunmu Terdaftar</h1>
                </span>

                <div className="bg-white rounded-t-[50px] rounded-tl-[50px] pt-6 flex flex-col gap-4">
                    
                    <div className="flex px-6 justify-center">
                        <Image 
                            src={RegisteredMerchant}
                            alt="merchant registered"
                        />
                    </div>
                    
                    <div className="relative flex flex-col gap-4 mx-auto my-0 max-w-[70%]">
                        <div className="flex font-bold justify-center text-lg ">
                            <h2>Akunmu berhasil terdaftar sebagai merchant Sokin</h2>
                        </div>

                        <div className="flex justify-center whitespace-pre-line text-[#817A7A]">
                            <p>Selanjutnya kamu akan diarahkan untuk mengisi menu, informasi waktu buka, dan waktu tutup dari usahamu</p>
                        </div>
                        

                    </div>

                    <div className="relative flex justify-center mt-32 mx-10">
                        
                        <Button
                            text="Lanjutkan"
                            
                        />
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default MerchantRegistrationPage5;