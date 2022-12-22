import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarSection from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getFoodById,
  getRatingFoodByFoodId,
  postCreateFoodRating,
} from "../services/api";

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFoodId] = useState(null);

  const handleFoodId = async (id) => {
    const token = localStorage.getItem("token");
    const response = await getFoodById(token, id);
    if (response.data) {
      setFoodId(response.data);
    }
  };

  useEffect(() => {
    if (id) {
      handleFoodId(id);
    }
  }, [id]);

  return (
    <div>
      <NavbarSection />
      <div className="Container_wrapper d-flex">
        <img className="detail " src={`${food?.imageUrl}`} alt="Food" />
        <div className="container d-flex flex-column justify-content-center">
          <div className="food1"> {food?.name}</div>
          <div className="food-d">Deskripsi: {food?.description}</div>
          <div className="food-d">
            Ingredients: {food?.ingredients.join(", ")}
          </div>
          <div className="food-d">Total Likes: {food?.totalLikes}</div>
          <div className="food-d">Is Likes: {food?.isLike}</div>
          <div className="food-d">Rating: {food?.rating}</div>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
};

export default FoodDetail;
