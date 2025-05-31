
import ChannelCard from "./ChannelCard";

export default function SubscriberCards({ channels }) {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
         {channels.map(({ channelId, apiKey }) => (
          <ChannelCard
            key={channelId}
            channelId={channelId}
            apiKey={apiKey}
          />
        ))}
      </div>
    </div>
  );
}
