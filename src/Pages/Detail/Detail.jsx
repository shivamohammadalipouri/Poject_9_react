
import { useParams } from "react-router-dom";

const Detail = () =>{

    const P = useParams();

    return(

        <div>

            <h1>Detail</h1>

            <p>{P.id}</p>


        </div>

    )

}

export default Detail;