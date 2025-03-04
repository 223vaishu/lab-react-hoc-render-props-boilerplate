import React from "react";
import RenderProp from "./RenderProp";

const LikeImageRender = () => {
    return(
        <RenderProp>
            {
                ({count,handleCount})=>(
                    <div>
                        <button onClick={handleCount}>Like Image Render {count}</button>
                    </div>
                )
            }
        </RenderProp>
    )
}
export default LikeImageRender;