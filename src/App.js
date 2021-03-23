import React, { Component } from "react";
import Trans_Input from "./components/input/Trans_Input";
import Trans_Result from "./components/result/Trans_Result";
import styles from "./App.module.css";
import HeaderSensing from "./components/header_sensing/Header_Sensing";

/* global kakao*/
class App extends Component {
  state = {
    translated: [],
    languageInfo: [],
  };

  // componentDidMount = () => {
  //   const myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "KakaoAK 371c08739d9745e863731e0385f5fd00"
  //   );

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://dapi.kakao.com/v3/translation/language/detect?query=hello",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  ////////////////////////////////////////

  handleHeader = (query) => {
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
      `https://dapi.kakao.com/v3/translation/language/detect?query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ languageInfo: result.language_info }))
      .catch((error) => console.log("error", error));
  };

  /////////////////////////////////////////

  handleQuery = (query) => {
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
    //src : 번역할 말 ,   target : 번역한 것
    fetch(
      `https://dapi.kakao.com/v2/translation/translate?src_lang=kr&target_lang=en&query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        this.setState({ translated: result.translated_text.join() })
      )
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <>
        <div className={styles.wrap}>
          <div>
            <HeaderSensing languageInfo={this.state.languageInfo} />
            <Trans_Input
              onChange={this.handleQuery}
              onHeader={this.handleHeader}
            />
          </div>
          <div>
            <HeaderSensing />
            <Trans_Result data={this.state.translated} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
