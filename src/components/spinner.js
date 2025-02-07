import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './spinner.css';

function Spinner() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timerStart = setTimeout(() => {
            setLoading(true);
        }, 8300);

        return () => clearTimeout(timerStart);
    }, []);

    const override: CSSProperties = {
        animation: 'react-spinners-ClipLoader-clip 3s linear infinite normal, fade 6s linear forwards',
        borderColor: 'rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) transparent',
        width: '150px',
        height: '150px',
        justifyContent: 'center',
        position: 'relative',
    };

    return (
        <div>
            {loading ? (
                <ClipLoader className="spinner" cssOverride={override} />
            ) : (
                <p></p>
            )}
        </div>
    );
}

export default Spinner;