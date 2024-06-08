
export default function ProductSneakerPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchSneaker = async() => {
            try {
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchSneaker();
    }, []);
    return (
        <>
            <div className="flex flex-col my-[50px] justify-center items-center gap-[50px]">
                <div className="text-[30px] font-bold w-fit">SNEAKER</div>
                <div className="w-fit grid grid-cols-3 gap-20 justify-center">
                    {allProduct?.map(item => <ProductCard 
                    key={item.id} 
                    id={item.id}
                    image={item.image} 
                    name={item.name} 
                    model={item.model} 
                    color={item.color} 
                    price={item.price} 
                    />)}
                </div>
            </div>
        </>
    )
}
