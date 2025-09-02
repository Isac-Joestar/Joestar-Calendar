
interface Props{
    img: string,
    name: string,
    description: string
}

function CardService({img, name, description}: Props){
    return(
        <div className="h-[440px] w-[380px] p-3 rounded-2xl flex flex-col gap-4 bg-gray-100 border-2 cursor-pointer">
            <div className="w-full h-1/2 rounded-2xl overflow-hidden flex items-center justify-center">
                <img className="w-full" src={img} alt="" />
            </div>
            <div className="w-full h-1/2 flex flex-col items-start justify-between">
                <div>
                    <p className="text-xl font-semibold mb-1">{name}</p> 
                    <p>{description}</p>  
                </div>

                <div>
                    + 500 Clientes
                </div>
            </div>
        </div>
    )
}

export default CardService