import {useLoaderData} from 'react-router-dom'

export default function Github() {
   const data=useLoaderData()

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/AliyanA1`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Aliyan Github followers: <span className="text-blue-500">{data.followers}</span>
      </h1>
      <h1 className="text-2xl font-bold text-gray-800">
        Aliyan Github following: <span className="text-green-500">{data.following}</span>
      </h1>
      {data.avatar_url && (
        <img
          src={data.avatar_url}
          alt="Aliyan's Github Avatar"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-gray-300 mt-4"
        />
      )}

      {/* Contribution Graph */}
      <img
        src={`https://ghchart.rshah.org/3498db/AliyanA1`}
        alt="Aliyan's GitHub Contribution Graph"
        className="mt-6 w-full max-w-lg rounded-lg shadow-md"
      />
    </div>
  );
}


export const githubInfoLoader= async ()=>{
  const response= await fetch('http://api.github.com/users/AliyanA1');
  return response.json();

}