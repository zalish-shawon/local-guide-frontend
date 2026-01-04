/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createReview, getGuideReviews } from "@/app/services/review.service";

export default function ReviewsPage({ guideId }: { guideId: string }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const {
    data: reviews = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reviews", guideId],
    queryFn: () => getGuideReviews(guideId),
  });

  const handleSubmit = async () => {
    await createReview({ guideId, rating, comment });
    refetch();
    setComment("");
  };

  if (isLoading) return <p>Loading reviews...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Reviews</h2>

      {reviews.map((r: any) => (
        <div key={r._id} className="border p-2 mb-2 rounded">
          <p>Rating: {r.rating}</p>
          <p>{r.comment}</p>
        </div>
      ))}

      <div className="mt-4 flex flex-col gap-2">
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(+e.target.value)}
          className="p-2 border rounded"
          min={1}
          max={5}
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="p-2 border rounded"
          placeholder="Write your review"
        />
        <button
          onClick={handleSubmit}
          className="p-2 bg-green-500 text-white rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
