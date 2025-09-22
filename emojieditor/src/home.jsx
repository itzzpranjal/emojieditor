import React, { useState } from 'react';
import EmojiButton from './components/emojibutton/emojibutton';
import ImgRotate from './components/rotation.png';
import './home.css';



function Home() {
    const [emoji, setEmoji] = useState("😊");
    const [sliderValue, setSliderValue] = useState(50);
    const [angle, setAngle] = useState(0);

    return (
        <>
            <div>
                <h1>Feeling with 💡 <span className="emoji">Emoji</span></h1>
                <p className="description"><b>This is a simple React-based application showing useState</b></p>

                <div className="emoji-container" style={{
                    fontSize: `${sliderValue}px`,
                }}>
                    <span
                        style={{
                            display: "inline-block",
                            transform: `rotate(${angle}deg)`,
                            transition: "transform 0.3s",
                        }}
                        className='emoji'
                    >
                        {emoji}
                    </span>
                </div>

                <div className="slide-container">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className='slider'
                        value={sliderValue}
                        onChange={(e) => setSliderValue(e.target.value)}
                    />
                </div>

                <div className='angle-container'>
                    <img
                        src={ImgRotate}
                        alt="rotate"
                        className='rotate-image'
                        onClick={() => setAngle(angle + 45)}
                    />
                </div>

                <div className="emoji-picker">
                    <EmojiButton emoji={"🛺"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🚒"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🛵"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🌻"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"✈️"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"👇"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🤔"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🏘️"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🧺"} setEmoji={setEmoji} />
                    <EmojiButton emoji={"🚲"} setEmoji={setEmoji} />
                </div>
            </div>
        </>
    );
}

export default Home;