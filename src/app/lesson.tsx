"use client"
import { useState } from "react";

type LessonProps = {
  title: string;
  lecturer: string;
  description: string;
};

type LikeState = "unset" | "liked" |"disliked";

export function Lesson({title, lecturer, description}: LessonProps) {
    const [likestate, setLikestate] = useState<LikeState>("unset");

    const setLike = () => setLikestate("liked")

  return (
    <details>
        <summary>
        <h2>{title}</h2>  
        </summary>

      <h3>{lecturer}</h3>
      <p>{description}</p>
      
    </details>
  );
}
