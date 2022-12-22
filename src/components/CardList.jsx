import Card from "./Card";
const CardList = ({
  foodJournal,
  handleLikeFood,
  handleUnlikeFood,
  handleGoToRating,
  handleGoToFoodDetail,
}) =>
  foodJournal.map((food, i) => (
    <Card
      food={food}
      i={i}
      handleLikeFood={handleLikeFood}
      handleUnlikeFood={handleUnlikeFood}
      handleGoToRating={handleGoToRating}
      handleGoToFoodDetail={handleGoToFoodDetail}
    />
  ));
export default CardList;
