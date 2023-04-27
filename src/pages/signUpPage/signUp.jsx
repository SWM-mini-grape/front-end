import React, { useCallback, useState } from "react";
import styles from "./signUp.module.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import useInput from "../../common/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/*To Do: 
1. api url 설정 
2. 로그인 실패서 어떻게 처리할 것인지 체크
*/
function SignUp() {
  const navigate = useNavigate();

  const [id, setId] = useInput("");
  const [nick, setNick] = useInput("");
  const [password, setPassword] = useInput("");
  const [passwordConfirm, setPasswordConfirm] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
    } else {
      axios
        .post("http://3.38.118.228:8080/api/users", {
          userId: id,
          nickname: nick,
          password: password,
        })
        .then((res) => {
          if (res.data === "") {
            navigate("/signin");
          } else {
            console.log(res);
            alert("회원가입 실패! 가입된 아이디인지 확인해주세요!");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title}`}>회원가입</div>
      <Form className={`${styles.mainForm}`} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Stack direction="vertical" gap={2}>
            <Form.Control
              type="text"
              placeholder="아이디"
              className={`${styles.input}`}
              value={id}
              onChange={setId}
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Stack direction="vertical" gap={2}>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              className={`${styles.input}`}
              value={password}
              onChange={setPassword}
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Stack direction="vertical" gap={2}>
            <Form.Control
              type="password"
              placeholder="비밀번호확인"
              className={`${styles.input}`}
              value={passwordConfirm}
              onChange={setPasswordConfirm}
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Stack direction="vertical" gap={2}>
            <Form.Control
              type="text"
              placeholder="닉네임"
              className={`${styles.input}`}
              value={nick}
              onChange={setNick}
            />
          </Stack>
        </Form.Group>
        <Button
          className={`${styles.submitBtn}`}
          style={{
            backgroundColor: "var(--main_color)",
            border: "1px solid var(--main-color)",
          }}
          as="input"
          type="submit"
          value="회원가입"
          onClick={handleSubmit}
        />
      </Form>
      <div className={`${styles.linkContainer}`}>
        <a href="/signin" className={`${styles.link}`}>
          이미 회원이신가요? 로그인 하러가기
        </a>
      </div>
    </div>
  );
}

export default SignUp;
