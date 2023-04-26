import { BiPulse } from "react-icons/bi";
import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";
const menuData = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Trending",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Album",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Shared",
  },
];

export default menuData;
