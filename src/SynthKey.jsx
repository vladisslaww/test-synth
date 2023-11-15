import { useEffect, useState } from "react";

function SynthKey(props) {
  // переменная, которая хранит состояние нажатия клавиши
  let [isPressed, setIsPressed] = useState(false);
  // создаём функцию, которая проигрывает звук
  const handleSoundStart = () => {
    props.sound.play();
    setIsPressed(true);
  };

  // создаём функцию, которая останавливает звук
  const handleSoundEnd = () => {
    props.sound.pause();
    setIsPressed(false);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === props.name.toLowerCase() && event.repeat === false) {
        handleSoundStart();
      }
    };
    const keyUpHandler = (event) => {
      if (event.key === props.name.toLowerCase()) {
        handleSoundEnd();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [props.name, handleSoundStart, handleSoundEnd]);

  let style = {};
  if (isPressed) {
    style = { fontWeight: "bold" };
  }
  // Передаём функции в атрибуты
  return (
    <button
      className="key"
      style={style}
      onMouseDown={handleSoundStart}
      onMouseUp={handleSoundEnd}
      onMouseLeave={handleSoundEnd}
    >
      {props.name}
    </button>
  );
}

export default SynthKey;
