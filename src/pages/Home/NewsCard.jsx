import { CiBookmark } from "react-icons/ci";
import { FaShareNodes } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { _id, others_info, total_view, author, title, badge, rating, category_id, thumbnail_url, details, image_url } = news;

    return (
        <div className="mb-4" >
            <div className="p-4 rounded-md bg-[#F3F3F3] text-black flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="rounded-full w-[30px] h-[30px]" src={author.img} alt="" />
                    </div>
                    <div>
                        <h2>{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <CiBookmark className="text-2xl" />
                    </div>
                    <div>
                        <FaShareNodes className="text-2xl" />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl mb-2 font-bold">{title}</h2>
                <img className="w-full h-[300px]" src={thumbnail_url} />
                {details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-2xl text-blue-600">Read More...</Link></p> : <p>details</p>}

            </div>
        </div>
    );
};

export default NewsCard;