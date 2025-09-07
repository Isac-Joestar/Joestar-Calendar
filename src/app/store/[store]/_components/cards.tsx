function CardStore(){
    return(
        <div className="h-[390px] w-[330px] bg-white rounded-[4px] p-2 flex flex-col gap-3 cursor-pointer">
            <div className="h-[240px] overflow-hidden flex items-center justify-center rounded-[4px]">
            <img className="w-full" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="flex  flex-col gap-4">

            <div>
                <p className="text-[18px] font-semibold">Corte dégradé simples</p>
                <p className="mt-1">Lorem ipsum dolor sit amet, wed w ddf consectetur adipiscing elit. asd sd</p>
            </div>
            
            <div className="bg-green-100 h-8 w-16 flex rounded-[15px] items-center justify-center">
                <p className="text-green font-semibold">30 R$</p>
            </div>
            </div>
        </div>
    )
}

export default CardStore