import { useEffect, useState } from "react";
import StatusCard from "./StatusCard";
import { getStatus } from "../services/StatusService";

function StatusList() {

    const [statusList, setStatusList] = useState([
        {
            id:1,
            code: 200,
            message: "OK",
            description: "¡Yupi! Todo salio perfecto. Hello Kitty encontro exactamente lo que pediste y te lo trae con un moño rosa.",
            image: "/status-image/200.png"
        },
        {
            id:2,
            code: 201,
            message: "Created",
            description: "¡Nuevo amigo en Sanrio! Tu solicitud tuvo exito y se creo un nuevo recurso. ¡Es hora de celebrar!",
            image:"/status-image/201.png"
        },
        {
            id:3,
            code: 204,
            message:"No Content",
            description:"¡Exito! Todo salio bien, pero no jay nada nuevo para mostrarte. Es como una caja de regalo que ya abriste y esta vacia, ¡pero el proceso fue perfecto!",
            image:"/status-image/204.png"
        },
        {
            id:4,
            code:300,
            message:"Multiple Choices",
            description:"¡Hay muchas opciones! Hello Kitty no sabe cual de sus tortas elegir.Tenes que decidir vos a que direccion queres ir",
            image:"/status-image/300.png"
        },
        {
         id: 5,
         code:301,
         message: "Moved Permanently",
         description:"¡Mudanza total! Hello Kitty cambio de casa para siempre. Te dejamos la direccion nueva para que no te pierdas.",
         image:"/status-image/301.png"
        },
        {
            id:6,
            code: 404,
            message: "Not Found",
            description:"¡Oops! Hello Kitty busco por todo el jardin y no encontro lo que pediste. ¿Se habra perdido?",
            image:"/status-image/404.png"
        },
        {
            id:7,
            code:418,
            message:"I'm a teapot",
            description:"¡Broma de Sanrio! No puedo hacer cafe porque soy una tetera. ¿Queres un poco de te?",
            image:"/status-image/418.png"
        },
        {
            id:8,
            code:500,
            message:"Internal Server Error",
            description:"¡Rayos! La computadora de Hello Kitty se sobrecalento y algo salio mal adentro. ¡Estamos trabajando en eso!",
            image:"/status-image/500.png"
        }
    ]);

    useEffect(() => {
        loadStatus();
    }, []);

    const loadStatus = async () => {
        try {
            const data = await getStatus();
            console.log(data);

            const dataWithImage = data.map(item=>({
                ...item,
                image: item.image || "https://via.placeholder.com/300x150?text=Sin+Foto"
            }));

            setStatusList(dataWithImages);
        } catch (error) {
            console.error('error al cargar el status', error);
        }
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
            <h1 style={{ width: "100%", textAlign:"center", marginBottom: "20px"}}>
                Componente cargado
            </h1>
            {statusList.map((status)=>{
                return(
                    <StatusCard key={status.id} status={status}/>
                );
            })}
            
        </div>
    );
}

export default StatusList;