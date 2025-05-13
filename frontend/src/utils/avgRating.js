const calculateAvgRating = (reviews) => {
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);

  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : (totalRating / reviews?.length).toFixed(1);

//   const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0) ?? 0;

//   const avgRating = reviews?.length ? totalRating / reviews.length : "";

  return {
    totalRating,
    avgRating,
  };
};
export default calculateAvgRating;
