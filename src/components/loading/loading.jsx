import './loading.scss'
const Spinner = ({ height, bgc, position, stroke }) => {
    console.log(height);
    return (
        <div style={{
            height: `${height}px`,
            backgroundColor: bgc,
            position: position
        }} className="spinner-loading">
            <svg className="spinner" viewBox="0 0 50 50">
                <circle style={{
                    stroke: stroke
                }} className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        </div>
    );
}

export default Spinner;