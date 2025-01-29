import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
    const [loading, setLoading] = useState(true);
    const override: CSSProperties = {
        animation: '3s linear infinite normal both running react-spinners-ClipLoader-clip',
        borderColor: 'rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) transparent',
        width: '150px',
        height: '150px',
    };

    return (
        <div>
            {loading ? (
                <ClipLoader cssOverride={override}/>
            ) : (
                <p>Content is loaded!</p>
            )}
        </div>
    );
}

export default Spinner;