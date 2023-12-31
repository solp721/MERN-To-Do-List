import React from "react";
import { Link } from "react-router-dom";

function Signin(props) {
  return (
    <div>
      <Link to="/signup">
        <p>아이디가 없으신가요?</p>
      </Link>
      <h1>로그인</h1>
      <form>
        <label>이메일</label>
        <input type="email" placeholder="EMAIL" />
        <label>비밀번호</label>
        <input type="password" placeholder="PASSWORD" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Signin;
