import {generateChannelImageArray} from "./popularVideo"

async function getVideoById(id)
{ 
    const videoById = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEYS}`;
    const response= await fetch(videoById)
    const data =  await response.json()
    const items = [data.items[0].snippet.thumbnails.medium,data.items[0].snippet.channelId,data.items[0].snippet.channelTitle,data.items[0].snippet.title,data.items[0].id]
    return items
}


async function getVideoListById(idArrays)
{
    const data = await Promise.all(idArrays.map(getVideoById))
    const dataWithChannelImage = await Promise.all(data.map(generateChannelImageArray))
    return dataWithChannelImage
}


export {getVideoListById}