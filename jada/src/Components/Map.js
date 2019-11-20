import React, { useEffect } from 'react';
import { Graph } from "react-d3-graph";

const data = {
    nodes: [
        {
            "id": "1",
            "title": "This is room 1",
            "desc": "This is a generic room called 1.",
            "n_to": 3,
            "e_to": 0,
            "s_to": 0,
            "w_to": 2
          },
          {
            "id": "2",
            "title": "This is room 2",
            "desc": "This is a generic room called 2.",
            "n_to": 0,
            "e_to": 1,
            "s_to": 0,
            "w_to": 0
          },
          {
            "id": "3",
            "title": "This is room 3",
            "desc": "This is a generic room called 3.",
            "n_to": 0,
            "e_to": 0,
            "s_to": 1,
            "w_to": 0
          },
    ]
        ,
    links: [
        { source: "1", target: "3" }, 
        { source: "1", target: "2" }, 
        { source: "2", target: "1" }, 
        { source: "3", target: "1" }, 
    ],
};

const config = {
    nodeHighlightBehavior: true,
    // staticGraph: false,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};

const Map = () => {
    useEffect(() => {
        config.staticGraph = true
    }, []);

    return (
        <div className='map-container'>
            <h1> Hello from Map</h1>
            <Graph 
                id="graph-id" 
                data={data} 
                config={config}
                 />
        </div>
    );
};

export default Map;