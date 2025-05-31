import './index.css'; 
import SubscriberCards from "./components/SubscriberCards";

function App() {
    return <SubscriberCards channels={channels} />;
}

const channels = [
  { 
    name:'HowToThilakS',
    channelId: "UCoZy7lNBH1r8KeBDlzfK9BQ",
    apiKey: "AIzaSyB2aEdTAD5bXS15lbBYB7V7w1FFDVKrHtE"
  },
    { 
    name:'CodeWithThilakS',
    channelId: "UC5zpkTY1dKRDoUj1YMZcTZQ",
    apiKey: "AIzaSyB2aEdTAD5bXS15lbBYB7V7w1FFDVKrHtE"
  }
];

export default App;
