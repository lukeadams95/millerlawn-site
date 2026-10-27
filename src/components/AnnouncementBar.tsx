import { Link } from "react-router-dom";
import { isChristmasLightSeason } from "@/lib/season";

// Seasonal strip above the header; only shown during Christmas light season
const AnnouncementBar = () => {
  if (!isChristmasLightSeason()) return null;

  return (
    <div className="bg-ink text-cream text-center py-[5px] px-5 text-[15px] font-semibold leading-[1.4]">
      Now booking Christmas light installs! Reserve your spot early —{" "}
      <Link to="/services/christmas-lights" className="text-[#8FD07B] hover:text-[#8FD07B] underline">
        Learn more
      </Link>
    </div>
  );
};

export default AnnouncementBar;
