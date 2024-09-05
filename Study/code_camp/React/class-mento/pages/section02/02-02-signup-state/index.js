import { useState } from "react"


const SignupStatePage = () => {
    //이메일을 저장하기위해 상태를 생성해준다 상태는 남발하면 안된다
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')

    const onChangeEmail = (event) => {
        console.log(event) // event에는 어떤것이들어오냐 나의 행동
        console.log(event.target) // 작동된 태그
        console.log(event.target.value) // 작동된 태그에 입력된 값 
        setEmail(event.target.value)
        // --> 이벤트 핸들러 함수

    }

    const onChangePassword = (event) => {

    }

    const onClickSignUp = (event) => {

        if (email.includes("@") === false) {
            setEmailError('틀렸어')
        } else {
            return alert("회원가입")
        }

        //1.검증하기

        //2. 백앤드 컴퓨터에 보내주기( 백엔드 개발자가 만든 함수, 즉, API)
        // 나중에
        //3. 성공알림 보여주기
    }

    return (
        <div>
            이메일: <input type='text' onChange={onChangeEmail}></input>
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}></input>
            <button onClick={onClickSignUp}>회원가입</button>
        </div>

    )
}

export default SignupStatePage