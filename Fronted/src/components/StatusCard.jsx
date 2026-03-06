

function StatusCard({ status }){
    return (
       <div style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        margin:"10px"
       }}>
        
        <h3>{status.code}-{status.message}</h3>
        <p>{status.description}</p>
       </div>
    );
}

export default StatusCard;