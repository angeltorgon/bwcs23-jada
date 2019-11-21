import React, { useEffect, useState } from 'react';
import { Graph } from "react-d3-graph";
import { axiosWithAuth } from "../utilities/axiosWithAuth";



const Map = () => {
    const [data, setData] = useState();
    const [currentRoom, setCurrentRoom] = useState("1")

    const config = {
        nodeHighlightBehavior: true,
        staticGraph: true,
        node: {
            color: "lightgreen",
            size: 120,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
    };

    useEffect(() => {
        axiosWithAuth()
        .get("http://127.0.0.1:8000/api/adv/get_rooms")
        .then((res) => {
            const arr = []
            const data = {nodes: [], links: []}
            for (let [key, value] of Object.entries(res.data.rooms)) {
                arr.push(value)
                data.nodes.push({id: key, x: value.x * 50, y: value.y * 50})
                // data.links.push({source: key, target: value.n_to})
                if (value.n_to !== 0) {
                    data.links.push({source:key ,target: String(value.n_to)})
                }
                if (value.s_to !== 0) {
                    data.links.push({source:key ,target: String(value.s_to)})
                }
                if (value.e_to !== 0) {
                    data.links.push({source:key ,target: String(value.e_to)})
                }
                if (value.w_to !== 0) {
                    data.links.push({source:key ,target: String(value.w_to)})
                }
            } 
            console.log(data, "data")
            setData(data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);
   
    // useEffect(() => {
    //     axiosWithAuth()
    //     .post("http://127.0.0.1:8000/api/adv/move", { "direction": "s" })
    //     .then(res => {
    //         const title = res.data.title.split(" ")
    //         const newRoom = title[title.length - 1]
    //         setCurrentRoom(newRoom)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // }, [currentRoom])

    const moveRoom = () => {
        axiosWithAuth()
        .post("http://127.0.0.1:8000/api/adv/move", { "direction": "s" })
        .then(res => {
            const title = res.data.title.split(" ")
            const newRoom = title[title.length - 1]
            setCurrentRoom(newRoom)

            
        })
        .catch(err => {
            console.error(err)
        }) 
    }

    if(!data) return <h1>Loading rooms...</h1>

    return (
        <div className='map-container'>
            <h1> Hello from Map</h1>
            {
                data.nodes[0].color = "black"
            }
            <Graph 
                style={{border: "1px solid red"}}
                id="graph-id" 
                data={data} 
                config={config}
                 />
            <button onClick={moveRoom}>North</button>
        </div>
    );
};

export default Map;