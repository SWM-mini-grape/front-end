import React, { useCallback, useState } from 'react'
import styles from "./signUp.module.css";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import useInput from '../../common/useInput';
import axios from 'axios';

/*To Do: 
1. api url 설정 
2. 로그인 실패서 어떻게 처리할 것인지 체크
*/
function SignUp() {
    const [id, setId]=useInput('');
    const [password, setPassword]=useState('');
    const [passwordConfirm, setPasswordConfirm]=useState('');
    const [isPasswordMismatch, setIsPasswordMismatch]=useState(true);

    const handleSubmit=useCallback((e)=>{
        e.preventDefault();
        if(!id.trim() || !password.trim() || !passwordConfirm.trim() || isPasswordMismatch) return;
        axios.post("SignUp Url", {id, password, passwordConfirm}, {withCredentials:true})
        .then(res=>{console.log(res);})
        .catch(err=>{console.error(err)});
    }, [id,password,passwordConfirm,isPasswordMismatch]);

    const onChangePassword=useCallback(e=>{
        setPassword(e.target.value);
        setIsPasswordMismatch(passwordConfirm!==e.target.value);
    }, [passwordConfirm]);

    const onChangePasswordConfirm=useCallback(e=>{
        setPasswordConfirm(e.target.value);
        setIsPasswordMismatch(password!==e.target.value);
    }, [password]);

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.title}`}>회원가입</div>
            <Form className={`${styles.mainForm}`} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Stack direction='vertical' gap={2}>
                        <Form.Control type="text" placeholder="아이디" className={`${styles.input}`} value={id} onChange={setId}/>
                    </Stack>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Stack direction='vertical' gap={2}>
                        <Form.Control type="password" placeholder="비밀번호" className={`${styles.input}`} value={password} onChange={onChangePassword} />
                    </Stack>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Stack direction='vertical' gap={2}>
                        <Form.Control type="password" placeholder="비밀번호확인" className={`${styles.input}`} value={passwordConfirm} onChange={onChangePasswordConfirm}/>
                    </Stack>
                </Form.Group>
                <Button className={`${styles.submitBtn}`} style={{backgroundColor:"var(--main_color)", border:"1px solid var(--main-color)"}}as="input" type="submit" value="회원가입"/>
            </Form>
            <div className={`${styles.linkContainer}`}>
                <a href="/login" className={`${styles.link}`}>이미 회원이신가요? 로그인 하러가기</a>
            </div>
        </div>
      );
}

export default SignUp;