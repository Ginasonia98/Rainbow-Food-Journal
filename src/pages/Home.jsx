import { useEffect, useState } from "react";
import NavbarSection from "../components/Navbar";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import { useNavigate } from "react-router-dom";

import {
  getAllFoods,
  getUserLikedFoods,
  postLike,
  postUnlike,
} from "../services/api";

const Home = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [likedFoods, setLikedFoods] = useState([]);

  const handleGoToFoodDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const likeChecking = (data, id) => {
    const idExist = data.filter((like) => like.id === id);
    return idExist.length !== 0;
  };
  const handleFood = async (likedFood) => {
    const response = await getAllFoods();
    if (response.code === "200") {
      const result = response.data.map((data) => {
        const item = { ...data, isLike: likeChecking(likedFood, data.id) };
        return item;
      });
      console.log({ result });
      setFoods(result);
    }
  };
  const handleLikedFood = async () => {
    const token = localStorage.getItem("token");
    const response = await getUserLikedFoods(token);
    if (response.code === "200") {
      setLikedFoods(response.data);
      await handleFood(response.data);
    }
  };
  const handleLikeFood = async (id) => {
    const token = localStorage.getItem("token");
    const data = {
      foodId: id,
    };
    const response = await postLike(data, token);
    if (response) {
      await handleLikedFood();
    }
  };

  const handleUnlikeFood = async (id) => {
    const token = localStorage.getItem("token");
    const data = {
      foodId: id,
    };
    const response = await postUnlike(data, token);
    if (response) {
      await handleLikedFood();
    }
  };

  useEffect(() => {
    handleLikedFood();
  }, []);

  return (
    <div className="Container_wrapper">
      <NavbarSection />
      <h3 className="Explanation px-2 py-4">Food</h3>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
          <CardList
            foodJournal={foods}
            handleLikeFood={handleLikeFood}
            handleUnlikeFood={handleUnlikeFood}
            handleGoToFoodDetail={handleGoToFoodDetail}
          />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
