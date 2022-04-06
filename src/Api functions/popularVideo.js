// const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=regionCode=IN&&maxResults=20&videoCategoryId=31&key=${process.env.REACT_APP_API_KEYS}`;
const playlist = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLPNW_gerXa4Pc8S2qoUQc5e8Ir97RLuVW&key=${process.env.REACT_APP_API_KEYS}`;

async function getChannelImage(channelId) {
  const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEYS}`;

  const response = await fetch(channelUrl);
  const data = await response.json();
  return data.items[0].snippet.thumbnails.medium.url;
}

async function generateChannelImageArray(item) {
  const array = [];
  array.push(item[0]);
  array.push(item[2]);
  array.push(item[3]);
  array.push(item[4]);
  const image = await getChannelImage(item[1]);
  array.push(image);
  return array;
}

async function getVideoData() {
  const response = await fetch(playlist);
  const data = await response.json();
  console.log(data.items[0].snippet.resourceId)
  const videoArray = data.items.map((item) => [
    item.snippet.thumbnails.medium,
    item.snippet.channelId,
    item.snippet.channelTitle,
    item.snippet.title,
    item.snippet.resourceId.videoId,
  ]);
  const responseArray = Promise.all(videoArray.map(generateChannelImageArray));
  const arrayWithImages = await responseArray;
  return arrayWithImages;
}

export { getVideoData, generateChannelImageArray };
