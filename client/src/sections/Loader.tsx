import { loader } from "../assets/images"

export const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] gap-10">
      <img src={loader} alt="loader" className="w-[150px] h-[100px]" />
    </div>
    )
}