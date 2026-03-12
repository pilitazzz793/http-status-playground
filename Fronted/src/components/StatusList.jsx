import { useEffect, useState } from "react";
import statusCard from "./StatusCard";
import { getStatus } from "../services/StatusService";

function StatusList() {

    const [statusList, setStatusList] = useState([
         {id:1, code:200, message:"OK", description:"Todo bien"}
    ]);

    useEffect(() => {
        loadStatus();
    }, []);

    const loadStatus = async () => {
        try {
            const data = await getStatus();
            console.log(data);
            setStatusList(data);
        } catch (error) {
            console.error('error al cargar el status', error);
        }
    };

    return (
        <div>
            <h1>Componente cargado</h1>
            {statusList.map((status) => {
                <statusCard key={status.id} status={status} />
            })}
        </div>
    );
}

export default StatusList;