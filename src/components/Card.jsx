import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import StarRatings from "react-star-ratings";

const Card2 = ({
  food,
  i,
  handleLikeFood,
  handleUnlikeFood,
  handleGoToRating,
  handleGoToFoodDetail,
}) => {
  return (
    <div key={`food-${i}`} className="col1">
      <div className="card1 position-relative">
        <div className="image-wrapper1">
          <img className="w-100  image-url1 " src={food.imageUrl} alt="Food" />
        </div>
        <div className="px-2">
          <div
            className="Food-name py-2 fs-6"
            onClick={() => handleGoToFoodDetail(food.id)}
          >
            {food.name}
          </div>
          <div className="deskripsi pb-2 fs-7">
            Deskripsi:
            <br />
            {food.description}
          </div>
          <div className="pb-2 fs-7">
            <div className="komposisi">Komposisi:</div>
            {food.ingredients.join(", ")}
          </div>
          <div className="fs-7 mt-5">
            <div className="rating position-absolute d-flex">
              <div
                className="me-2 d-flex flex-column justify-content-center fw-bold"
                onClick={handleGoToRating}
              >
                {food.rating}
              </div>
              <StarRatings
                rating={food.rating}
                starDimension="20px"
                starSpacing="2px"
              />
            </div>
          </div>
          <div>
            <div className="position-absolute like d-flex">
              <div className="me-2 fs-7 d-flex flex-column justify-content-center fw-bold">
                {food.totalLikes}
              </div>
              {food.isLike ? (
                <FcLike onClick={() => handleUnlikeFood(food.id)} />
              ) : (
                <FcLikePlaceholder onClick={() => handleLikeFood(food.id)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
