import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <h1>나는 메인입니다.</h1>
      <Link to="/signin">
        <button>로그인</button>
      </Link>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default Main;
