import {useParams} from "react-router-dom"

export default function User(){
    const {Name}=useParams();
    return(
      <>
      <h1 className="text-4xl font-bold text-white bg-gradient-to-b from-pink-700 to-blue-800 p-6 rounded-2xl shadow-lg text-center mx-auto w-fit mt-20">
  Ramadan Mubarak: {Name}
</h1>

      </>
    )
}

