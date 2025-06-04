// components/ChannelCard.js
import { FaYoutube } from "react-icons/fa";
import useChannelInfo from "../hooks/useChannelInfo";
import useAnimatedNumber from "../hooks/useAnimatedNumber";

export default function ChannelCard({channelId}) {

  const { channelInfo } = useChannelInfo(channelId, import.meta.env.VITE_API_KEY);
  const animatedSubscribers = useAnimatedNumber(channelInfo.subscribers);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-80 bg-white rounded-2xl shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl">
        <div className="p-6 flex flex-col items-center">
          <img
            src={channelInfo.thumbnail}
            alt={channelInfo.name || "Channel Thumbnail"}
            className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-white -mt-16"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800 font-circularStdBook">
            {channelInfo.name}
          </h2>
          <p className="text-gray-500 text-sm mt-1 font-circularStdBook">Subscribers</p>
          <h3 className="text-3xl font-semibold text-black-100 mt-1 font-circularStdBook">
            {animatedSubscribers.toLocaleString()}
          </h3>

          <a
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition-all font-medium flex items-center justify-center gap-2 font-circularStdBook">
              <FaYoutube className="text-lg" />
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
