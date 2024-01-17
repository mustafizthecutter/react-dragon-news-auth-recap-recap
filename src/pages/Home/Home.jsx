import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Home = () => {

    const { news } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Dragon News | Home</title>
            </Helmet>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">
                    {
                        news?.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;