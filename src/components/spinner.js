import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './spinner.css';

function Spinner() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timerStart = setTimeout(() => {
            setLoading(true);
        }, 8200); // Adjust the timeout duration as needed

        return () => clearTimeout(timerStart);
    }, []);
    /*useEffect(() => {
        const timerStart = setTimeout(() => {
            setLoading(false);
        }, 16000); // Adjust the timeout duration as needed

        return () => clearTimeout(timerStart);
    }, []);*/

    const override: CSSProperties = {
        animation: 'react-spinners-ClipLoader-clip 3s linear infinite normal, fadeIn 9s linear forwards',
        borderColor: 'rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) transparent',
        width: '150px',
        height: '150px',
        justifyContent: 'center',
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