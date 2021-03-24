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
    input: [],
    src: [],
  };
  //languageInfo 에 0번째 인덱스만 나오게 함
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
      .then((result) =>
        this.setState({ languageInfo: result.language_info[0] })
      )
      .catch((error) => console.log("error", error));
  };

  /////////////////////////////////////////

  handleInput = (query, src) => {
    this.setState({ input: query });
    this.setState({ src: src });
  };

  handleQuery = (query, src) => {
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
    //src : 번역할 말 ,   target : 번역한 것 지금 에러나는 이유는 src_lang이랑 target_lang이 같기떄문에 에러남.
    fetch(
      `https://dapi.kakao.com/v2/translation/translate?src_lang=${src}&target_lang=kr&query=${query}`,
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
            <HeaderSensing
              languageInfo={this.state.languageInfo}
              onChange={this.handleQuery}
              onHeader={this.handleHeader}
              inputData={this.state.input}
              inputSrc={this.state.src}
            />
            <Trans_Input
              languageInfo={this.state.languageInfo}
              onChange={this.handleQuery}
              onHeader={this.handleHeader}
              onInput={this.handleInput}
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
