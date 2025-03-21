import service from "../appwrite/post";
import {Link} from 'react-router-dom'


const PostCard = ({$id, title,image}) => {
  return (
     <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={service.getFilePreview(image)} alt={title} />
            </div>

            <h2 className="text-xl font-bold">
                {title}
            </h2>
        </div>
     </Link>
  )
}

export default PostCard