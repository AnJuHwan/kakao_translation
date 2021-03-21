import React, { Component } from "react";
/* global kakao*/
class App extends Component {
  componentDidMount = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "KakaoAK 371c08739d9745e863731e0385f5fd00"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://dapi.kakao.com/v2/translation/translate?src_lang=kr&target_lang=en&query=임성현",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return <div></div>;
  }
}

export default App;
