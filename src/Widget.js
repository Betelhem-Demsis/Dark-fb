import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import "./widget.css";
function Widgets() {
  return (
    <div className="widget">
      <div className="widget_sponsors">
        <h4 style={{ fontSize: "20px" }}>Sponsored</h4>
        <div className="widget_sponsor">
          <img
            width="150px"
            height="120px"
            src="https://i.vimeocdn.com/video/1267262355-e18d1e921b827402fa934b7e5be4c9e3dbd9389789109111c?mw=1920&mh=1080&q=70"
            alt=""
          />
          <p>
            Udemy <br />
            udemy.com
          </p>
        </div>
        <div className="widget_sponsor">
          <img
            width="150px"
            height="120px"
            src="https://tradebrains.in/features/wp-content/uploads/2022/01/AMAZON-Cover-Image.jpg"
            alt=""
          />
          <p>
            Amazon
            <br /> amazon.com
          </p>
        </div>
      </div>
      <div className="widget_Birthday">
        <h4>Birthdays</h4>
        <div className="widget__info">
          <CardGiftcardIcon fontSize="large" />
          <p>Chandler Bing and 3 Other have birthday today</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
