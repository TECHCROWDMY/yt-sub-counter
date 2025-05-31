// components/ChannelCard.js
import useChannelInfo from "../hooks/useChannelInfo";
import useAnimatedNumber from "../hooks/useAnimatedNumber";

export default function ChannelCard({
    channelId,
    apiKey
}) {
  const { channelInfo, CHANNEL_ID } = useChannelInfo(channelId,apiKey);
  const animatedSubscribers = useAnimatedNumber(channelInfo.subscribers);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-72 text-center shadow-lg bg-white rounded-md">
        <div className="p-6">
            <img
                src={channelInfo.thumbnail}
                alt="Channel Thumbnail"
                className="mx-auto rounded-full w-24 h-24"
            />
          <h2 className="text-lg font-semibold text-gray-800">
            {channelInfo.name}
        </h2>
          <h3 className="text-4xl mt-2">
            {animatedSubscribers.toLocaleString()}
        </h3>
          <a href={`https://www.youtube.com/channel/${CHANNEL_ID}`}>
            <button
                className="bg-red-600 text-white mt-6 px-6 py-2 rounded hover:bg-red-700 transition-colors"
            >
                ▶ Subscribe
            </button>
          </a>

        </div>
      </div>
    </div>
    
  );
}
