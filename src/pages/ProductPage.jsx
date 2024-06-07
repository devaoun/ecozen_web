import modelSneaker from '../assets/model-sneaker.png'


export default function ProductPage() {
    return (
        <>
            <div className="flex flex-col my-[50px] justify-center items-center">
                <div className="border-2 text-[30px] font-bold w-fit">PRODUCTS</div>
                <div className="border-2 w-full text-center">
                    <div className="w-[400px] border-2">
                      <div className=''>
                        <img src={modelSneaker}/>
                        </div>  
                      <div></div>  
                    </div>
                </div>
            </div>
        </>
    )
}
