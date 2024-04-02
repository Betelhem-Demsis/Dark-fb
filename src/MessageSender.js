import React, { useState } from "react";
import "./messagesender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      message: input,
      timestamp: serverTimestamp(),
      profilepic: user.photoURL,
      username: user.displayName,
    });
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind,${user.displayName}`}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live videos</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "lightgreen" }} />
          <h3>Phots/videos</h3>
        </div>
        <div className="messageSender_option">
          <MoodIcon style={{ color: "yellow" }} />
          <h3>Live videos</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
