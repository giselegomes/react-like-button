import React, {useState} from "react";

function LikeButton() {
    const [like, setLike] = useState(false);
    const currentLike = 100;

    return (
        <button className="like-button" onClick={() => setLike((prevLike) => !prevLike)}>
            Like | <span className="likes-counter">{like ? currentLike + 1 : currentLike}</span>
        </button>
    )
}

export default LikeButton;