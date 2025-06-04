import './index.css'; 
import SubscriberCards from "./components/SubscriberCards";

function App() {
    return <SubscriberCards channels={channels} />;
}

const channels = [
  { 
    name:'HowToThilakS',
    channelId: "UCoZy7lNBH1r8KeBDlzfK9BQ"
  },
  { 
    name:'CodeWithThilakS',
    channelId: "UC5zpkTY1dKRDoUj1YMZcTZQ"
  },
  { 
    name:'Thilak S',
    channelId: "UCwvi403GFp94CRq9PPHNALw"
  }
];

export default App;
