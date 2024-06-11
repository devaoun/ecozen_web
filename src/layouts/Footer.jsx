import { LogoFacebook, LogoInstagram } from "../assets/icons/icon";

export default function Footer() {
    return (
        <div className="flex items-center justify-center w-full h-[222px] bg-ec-footer-black text-white">
            <div className="flex w-fit gap-[300px]  items-center text-[20px] font-bold">
                <div className="flex gap-[120px]">
                    <div className="">
                        <div>We are in</div>
                        <div className=" font-light">Bangkok(Thailand)</div>
                        <div className=" font-light">ecozen@gmail.com</div>
                    </div>
                    <div className="">
                        <div>Let's get in touch!</div>
                        <div className="font-light flex items-center"><div className=" mr-[10px]"><LogoFacebook className="w-8 h-fit"/></div>Facebook</div>
                        <div className="font-light flex items-center"><div className=" mr-[10px]"><LogoInstagram className="w-8 f-fit"/></div>Instagram</div>
                    </div>
                </div>
                <div className=" h-fit text-[60px] font-bold">ECOZEN</div>
            </div>
        </div>
    )
}
