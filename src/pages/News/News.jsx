
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";


const News = () => {
    const { id } = useParams();
    const { news } = useContext(AuthContext);

    const singleNews = news?.find(aNews => aNews._id === id);
    console.log(singleNews);

    const { _id, others_info, total_view, author, title, badge, rating, category_id, thumbnail_url, details, image_url } = singleNews;


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 space-y-3" >
                    <img className="w-full h-[600px]" src={thumbnail_url} alt="" />
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p>{details}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;