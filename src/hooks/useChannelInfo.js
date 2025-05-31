// hooks/useChannelInfo.js
import { useState, useEffect } from "react";

export default function useChannelInfo(
    channelId,
    apiKey
) {
  const [channelInfo, setChannelInfo] = useState({
    name: "",
    subscribers: 0,
    thumbnail: "",
  });

  const fetchChannelInfo = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`
      );
      const data = await response.json();
      const channel = data.items[0];
      setChannelInfo({
        name: channel.snippet.title,
        subscribers: parseInt(channel.statistics.subscriberCount),
        thumbnail: channel.snippet.thumbnails.default.url,
      });
    } catch (error) {
      console.error("Error fetching channel info:", error);
    }
  };

  useEffect(() => {
    fetchChannelInfo();
    const interval = setInterval(fetchChannelInfo, 10000);
    return () => clearInterval(interval);
  }, []);

  return { channelInfo, channelId };
}
