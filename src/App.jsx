import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんばんわ</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です?</ColofulMessage>
      <button onClick={onClickButton}>ボ タン</button>
    </>
  );
};

export default App;
