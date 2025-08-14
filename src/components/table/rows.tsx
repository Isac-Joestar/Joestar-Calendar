import { BsThreeDots } from 'react-icons/bs'

interface Props {
  img?: string
  firstname: string
  lastname: string
  email: string
  date: string
  service: string
  price: string
  status: string
}

function Rows({
  img,
  firstname,
  lastname,
  email,
  date,
  service,
  price,
  status,
}: Props) {
  const initials = `${firstname[0] ?? ''}${lastname[0] ?? ''}`.toUpperCase()

  return (
    <div className="grid grid-cols-6 border-b h-15 px-4">
      <div className="col-span-1 flex items-center gap-2">
        <div className="border-purple-500 border-2 rounded-[12px] h-[44px] w-[44px] flex items-center justify-center overflow-hidden bg-gray-200">
          {img ? (
            <img src={img} alt="" className="w-[90%] rounded-[12px]" />
          ) : (
            <span className="font-bold text-purple-500 tracking-widest">
              {initials}
            </span>
          )}
        </div>
        <p>
          {firstname} {lastname}
        </p>
      </div>

      <div className="col-span-1 flex flex-row justify-between items-center">
        <p>{email}</p>
      </div>

      <div className="col-span-1 flex flex-row justify-between items-center">
        <div className="bg-purple-200 py-0.5 px-3 rounded-2xl">
          <p className="font-semibold">{date}</p>
        </div>
      </div>

      <div className="col-span-1 flex flex-row justify-between items-center">
        <p>{service}</p>
      </div>

      <div className="col-span-1 flex flex-row justify-between items-center">
        <div className="bg-green-200 py-0.5 px-3 rounded-2xl">
          <p className="font-semibold">{price}R$</p>
        </div>
      </div>

      <div className="col-span-1 flex flex-row justify-between items-center pr-2">
        <div className="col-span-1 flex flex-row justify-between items-center">
          <div className="bg-gray-200 py-1 px-3 rounded-2xl flex items-center cursor-pointer">
            <p className="font-semibold leading-[18px]">{status}</p>
          </div>
        </div>

        <div className="cursor-pointer">
          <BsThreeDots />
        </div>
      </div>
    </div>
  )
}

export default Rows
