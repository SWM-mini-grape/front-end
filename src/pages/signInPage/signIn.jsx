import React, { useCallback, useState } from 'react'
import styles from "./signIn.module.css";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import useInput from '../../common/useInput';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from '../../reducers/user';

/*To Do: 
1. api url 설정 
2. 로그인하고 어떻게 처리할지 생각하기
*/

function SignIn() {
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.user);
    const setUser=(u)=>{
        dispatch(setUser(u));
    }
    const [id, setId]=useInput('');
    const [password, setPassword]=useInput('');
    const handleSubmit=useCallback((e)=>{
        e.preventDefault();
        if(id.trim() || password.trim()) return;
        axios.post("login Url", {id,password}, {withCredentials:true})
        .then(res=>{console.log(res)})
        .catch(err=>{console.error(err)});
    })
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.title}`}>로그인</div>
            <Form className={`${styles.mainForm}`} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Stack direction='vertical' gap={2}>
                        <Form.Control type="text" placeholder="ID" className={`${styles.input}`} value={id} onChange={setId}/>
                    </Stack>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Stack direction='vertical' gap={2}>
                        <Form.Control type="password" placeholder="Password" className={`${styles.input}`} value={password} onChange={setPassword} />
                    </Stack>
                </Form.Group>
                <Button className={`${styles.submitBtn}`}  style={{backgroundColor:"var(--main_color)", border:"1px solid var(--main-color)"}} as="input" type="submit" value="로그인"/>
            </Form>
            <div className={`${styles.linkContainer}`}>
                <a href="/signup" className={`${styles.link}`}>아이디가 없으신가요? 회원가입하기</a>
            </div>
        </div>
      );
}

export default SignIn;