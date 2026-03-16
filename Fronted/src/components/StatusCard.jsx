import react from 'react';

function StatusCard({ status}){

    //funcion para manejar si la img falla al cargar
    const handleImageError = (e)=>{
        e.target.src = "https://via.placeholder.com/150?text=Error";
    };

    return (
        <div
        style={{
            border: "1px solid #ddd",
            borderRadius:"12px",
            padding:"15px",
            margin: "15px",
            maxWidth : "300px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            fontFamily:"Arial, san-serif",
        }}
        >
            <div style={{ marginBottom: "10px"}}>
                <img 
                src={status.image || "http://via.placeholder.com/300x150?text=Sin+Imagen"}
                alt={status.message}
                onError={handleImageError}
                style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                }}
                /> 
            </div>

            <div>
                <h3 style={{ margin: "0 0 5px 0", color: "#333"}}>
                    {status.code } - {status.message}
                </h3>
                <p style={{margin:"0", color:"#666", fontSize:"0.95rem"}}>
                    {status.description}
                </p>
            </div>
        </div>
    );
}
export default StatusCard;