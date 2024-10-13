"use client";

import React from "react";
import { VideoPlayer } from "./components/VideoPlayer";

const LiveChannels = [
  {
    channelName: "כאן 11",
    m3u8Source:
      "https://kan11.media.kan.org.il/hls/live/2024514/2024514/master.m3u8",
  },
  {
    channelName: "ערוץ 13",
    m3u8Source:
      "https://d18b0e6mopany4.cloudfront.net/out/v1/08bc71cf0a0f4712b6b03c732b0e6d25/index.m3u8",
  },
  {
    channelName: "עכשיו 14",
    m3u8Source:
      "https://ch14-channel14-content.akamaized.net/hls/live/2104807-b/CH14_CHANNEL14/0/streamPlaylist.m3u8",
  },
  {
    channelName: "רלוונט",
    m3u8Source:
      "https://6180c994cb835402.mediapackage.eu-west-1.amazonaws.com/out/v1/f1339272dd24416ca60b00e69075d783/index.m3u8",
  },
  {
    channelName: "הידברות",
    m3u8Source: "https://cdn.cybercdn.live/HidabrootIL/Live97/playlist.m3u8",
  },
  {
    channelName: "ערוץ הכנסת",
    m3u8Source: "https://contact.gostreaming.tv/Knesset/myStream/playlist.m3u8",
  },
  {
    channelName: "כאן חינוכית",
    m3u8Source:
      "https://kan23.media.kan.org.il/hls/live/2024691/2024691/master.m3u8",
  },
  {
    channelName: "ערוץ הקניות",
    m3u8Source: "https://shoppingil-rewriter.vidnt.com/index.m3u8",
  },
];

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col md:p-14 p-8 bg-black/90 text-white/90"
      dir="rtl"
    >
      <header className="flex w-full">
        <nav className="mx-5 w-full flex flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold">ציבורTV</h2>
            <h4 className="text-lg font-medium max-w-lg">
              האתר מאגד בדף אחד את כל ערוצי הטלוויזיה הזמינים לצפייה באופן חוקי
              ובחינם באינטרנט.{" "}
              <a className="cursor-help" href="https://ron.is-a.dev">
                אני
              </a>{" "}
              משתדל לעדכן את הערוצים שלא עובדים במידת הצורך.
            </h4>
          </div>
          <div className="hidden items-baseline md:flex md:flex-col">
            <h5 className="font-light">© נוצר על ידי רון נוס</h5>
            <h5 className="font-light">
              האתר זמין גם{" "}
              <a className="underline" href="https://github.com/itsrn/tziburtv">
                בקוד פתוח
              </a>
            </h5>
          </div>
        </nav>
      </header>
      <div className="container mx-auto p-4 mb-10 md:mb-0">
        <div className="flex flex-wrap items-center -mx-2">
          {LiveChannels.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 p-2">
              <div className="rounded">
                <VideoPlayer src={item.m3u8Source} title={item.channelName} />
                <h4 className="text-sm md:text-base text-white/80 font-light">
                  {item.channelName}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="flex md:hidden">
        <div className="flex flex-col">
          <h5 className="font-light">© נוצר על ידי רון נוס</h5>
          <h5 className="font-light">
            האתר זמין גם{" "}
            <a className="underline" href="https://github.com/itsrn/tziburtv">
              בקוד פתוח
            </a>
          </h5>
        </div>
      </footer>
    </main>
  );
}
