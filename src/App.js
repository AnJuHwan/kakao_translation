import React, { Component } from "react";
import Trans_Input from "./components/input/Trans_Input";
import Trans_Result from "./components/result/Trans_Result";
import styles from "./App.module.css";

/* global kakao*/
class App extends Component {
  state = {
    translated: [],
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
  //     "https://dapi.kakao.com/v2/translation/translate?src_lang=kr&target_lang=en&query=임성현",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => this.setState({translated:result.translated_text.join()}))
  //     .catch((error) => console.log("error", error));
  //   }

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
      <div className={styles.wrap}>
        <Trans_Input onChange={this.handleQuery} />
        <Trans_Result data={this.state.translated} />
      </div>
    );
  }
}

export default App;
