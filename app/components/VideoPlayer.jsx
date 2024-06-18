"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export function VideoPlayer({ src, title }) {
  return (
    <MediaPlayer
      playsInline={true}
      autoPlay={true}
      muted={true}
      src={src}
      dir="ltr"
    >
      <MediaProvider />
      <DefaultVideoLayout
        dir="rtl"
        translations={{
          LIVE: "לייב",
          Pause: "עצור",
          Play: "נגן",
          Settings: "הגדרות",
          Playback: "נגינה",
          Loop: "לולאה",
          Speed: "מהירות",
          Normal: "רגיל",
          Quality: "איכות",
          Auto: "אוטומטי",
          Accessibility: "נגישות",
          Announcements: "התראות",
          "Keyboard Animations": "אנימציות מקלדת",
          Audio: "שמע",
          Boost: "הגבר",
          Fullscreen: "היכנס למסך מלא",
          Mute: "השתק",
          Unmute: "בטל השתקה",
          "Enter Fullscreen": "היכנס למסך מלא",
          "Exit Fullscreen": "צא ממסך מלא",
        }}
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}
