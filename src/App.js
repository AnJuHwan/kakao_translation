import React, { Component } from "react";
import Trans_Input from "./components/input/Trans_Input";
import Trans_Result from "./components/result/Trans_Result";
import styles from "./App.module.css";
import HeaderSensing from "./components/header_sensing/Header_Sensing";
import Header_result from "./components/header_result/Header_result";

//이제 기능적으로 마지막으로 할 일 : Header_result 값을 변경하는것 , position 쓴 css 건들이기

/* global kakao*/
class App extends Component {
  state = {
    translated: [],
    languageInfo: [],
    input: [],
    src: [],
    target: [],
  };
  //languageInfo 에 0번째 인덱스만 나오게 함
  ////////////////////////////////////////

  handleHeader = (query) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
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

  stateTarget = (target) => {
    this.setState({ target: target });
  };

  handleQuery = (query, src, target) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://dapi.kakao.com/v2/translation/translate?src_lang=${src}&target_lang=${
        this.state.target.length === 0 ? "kr" : target
      }&query=${query}`,
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
              target={this.state.target}
            />
          </div>
          <div className={styles.position}>
            <Header_result stateTarget={this.stateTarget} />
            <Trans_Result data={this.state.translated} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
