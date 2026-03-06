import { useEffect, useState } from "react";
import statusCard from "./StatusCard";
import {getStatus} from "../services/StatusService";

function StatusList(){

    const [statusList, setStatusList] = useState([]);

    useEffect(() =>{
        loadStatus();
    }, []);

    const loadStatus = async ()=>{
        try{
            const data = await getStatus();
            setStatusList(data);
        }catch(error){
            console.error('error al cargar el status', error);
        }
    };

    return(
        <div>
            {statusList.map((status)=>{
                <statusCard key ={status.id} status={status}/>
            })}
        </div>
    );
}

export default StatusList;