import React from "react"
import "./PlayListContainer.css"
import { PlayListBar } from "../PlayListBar/PlayListBar"
export function PlayListContainer({playListData})
{  console.log(playListData)
    return <div className="playlist__container">
        {

            playListData.map(data=>
                {
                    return <PlayListBar image ={data[0].url} title ={data[2]} channelName ={data[1]}/>
                })
        }
    
    </div>
}
