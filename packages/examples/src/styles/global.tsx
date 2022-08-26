import { Global, css } from "@emotion/react";

const style = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  * {
    margin: 0;
    padding: 0;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    box-sizing: border-box;
  }

  body,
  #root {
    height: 100vh;
  }

  li {
    list-style: none;
  }

  a {
    display: inline;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:active,
    &:hover {
      outline: 0;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
