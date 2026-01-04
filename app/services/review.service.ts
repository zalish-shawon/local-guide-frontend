import api from "./api";

export const getGuideReviews = async (guideId: string) => {
  try {
    const res = await api.get(`/reviews/${guideId}`);
    return Array.isArray(res.data?.data) ? res.data.data : [];
  } catch (error) {
    console.error("getGuideReviews error:", error);
    return [];
  }
};

export const createReview = async (payload: {
  guideId: string;
  rating: number;
  comment: string;
}) => {
  const res = await api.post("/reviews", payload);
  return res.data;
};
