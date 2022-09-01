import React, {useState} from "react";

function LikeButton() {
    const [counter, setCounter] = useState(100);

    return (
        <button onClick={() => setCounter(counter + 1)}>
            Like | {counter}
        </button>
    )
}

export default LikeButton;