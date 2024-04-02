import React from "react";
import "./storyreel.css";
import bet from "./b (2).png";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://th.bing.com/th/id/OIP.nNQGpca3SnWUKxcznlC49QHaFj?rs=1&pid=ImgDetMain"
        profileSrc={bet}
        title="Your Story"
      ></Story>
      <Story
        image="https://th.bing.com/th/id/OIP.6Ww5LcvJ_cr8_6sy7G0dKwHaEo?rs=1&pid=ImgDetMain"
        profileSrc="https://th.bing.com/th/id/OIP.Tv3oG-Is7dcMNcysxIVwLAAAAA?rs=1&pid=ImgDetMain"
        title="dwight"
      ></Story>
      <Story
        image="https://th.bing.com/th/id/OIP.SFJGkHX4PXGNUomTdIpgsQHaEo?rs=1&pid=ImgDetMain"
        profileSrc="https://th.bing.com/th/id/R.d2107c3609c168b70504ab3c26b65025?rik=Lmjlc6DS1wIWwg&pid=ImgRaw&r=0"
        title="chandler"
      ></Story>
      <Story
        image="https://th.bing.com/th/id/R.b4ce7796ef9212b24ebea62f0ebe79d8?rik=3yhg5gXR2B0V8A&pid=ImgRaw&r=0"
        profileSrc="https://th.bing.com/th/id/R.6cb9e70c2f190e6ca29048920fd1e163?rik=he0f7SZL3Gi7pw&pid=ImgRaw&r=0"
        title="michael"
      ></Story>
      <Story
        image="https://th.bing.com/th/id/OIP.JmlNAjICaUdLrL8zXLSZCwHaFj?rs=1&pid=ImgDetMain"
        profileSrc="https://th.bing.com/th/id/OIP.nUUwoDHmCNBWiDkQ7If6qwHaE8?rs=1&pid=ImgDetMain"
        title="joey"
      ></Story>
    </div>
  );
}

export default StoryReel;
