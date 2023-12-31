import React from "react";
import { Link } from "react-router-dom";

function Singup(props) {
  return (
    <div>
      <Link to="/signin">
        <p>아이디가 있으신가요?</p>
      </Link>
      <h1>회원가입</h1>
      <form>
        <label>이름</label>
        <input type="text" placeholder="NAME" />
        <label>이메일</label>
        <input type="email" placeholder="EMAIL" />
        <label>비밀번호</label>
        <input type="text" placeholder="PASSWORD" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Singup;
