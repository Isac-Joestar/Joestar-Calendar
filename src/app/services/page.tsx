import Header from "@/src/components/header"
import CardService from "@/src/components/cardService"

function Services(){
    return(
        <>
            <Header/>
            <main className=" h-auto w-full flex flex-col items-center justify-center ">
                <div className="mt-[30vh] w-full flex flex-col items-center justify-center gap-10 pb-10">
                    <div className="w-4xl">
                        <input className="w-full h-11 px-5 rounded-3xl text-[18px] bg-gray-200" type="text" placeholder="Pesquisar serviço" />
                    </div>

                    <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-center">
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                        <CardService img="https://cdn.dribbble.com/userupload/44389605/file/314c94074ee4c813ab3dc747f4e02812.png?resize=752x564&vertical=center" name="Joestar Code" description="Desenvolvedor Web Full-Stack com foco na criação de  aplicações escaláveis e interfaces responsivas."/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Services