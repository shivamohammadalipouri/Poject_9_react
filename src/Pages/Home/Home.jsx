import { useEffect, useState } from "react";



const Home = () =>{

    const [data, setdata] = useState();

    useEffect(()=>{

         fetch("https://randomuser.me/api/").then(res => res.json()).then(result => setdata(result.results[0].email));

    }, [])

    function send(data){

        fetch("https://randomuser.me/api/", {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'

            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(function(res) {console.log(res)})
          .catch(function (res) {console.log(res)})

    }


    return(
        <div>
            <h1>Home</h1>
            <p>welcom</p>
            <smal>{data}</smal>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => send("h")}>send</button>
        </div>
    )
}

export default Home;