import jwt from "../../mockups/prototypes/jwt.json";

export async function login(email: string, password: string): Promise<string | undefined> {
	// 1.가짜 jwt 송수신
	if (email === "ggamjige8888@naver.com" && password === "Gywls!1040") {
		const loginSuccess = jwt?.[0]?.token;
		const name = jwt?.[0]?.name;
		if (loginSuccess && name)
			localStorage.setItem('token', loginSuccess);
			localStorage.setItem('userId', name as string);
		window.location.href = '/Home/Home';
	}
	// 2. 백엔드 송수신
	try {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email, password})
		});
		const data = await response.json();
		
		if (response.ok) {
			localStorage.setItem('token', data.token);
			window.location.href = '/Home/Home';
		} else {
			console.error('로그인 실패:', data.message);
			return data.message; // 실패 메시지 반환
		}
	} catch (error) {
		console.error('로그인 오류:', error);
		return '로그인 정보를 확인 해주세요.'; // 오류 메시지 반환
	}
}

export async function signUp(name: string, email: string, password: string): Promise<void> {
	// 1. 회원정보 성공 기본 텍스트
	const signUpSuccess = jwt?.[1]?.message;
	if(signUpSuccess)
		window.location.href = '/'; // 로그인 페이지로 이동
	// 2. 회원정보 백엔드
	try {
	   const response = await fetch('/api/signup', {
	       method: 'POST',
	      headers: {
	          'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({ name, email, password })
	   });
	  const data = await response.json();
	 console.log('회원가입 성공:', data);
	 window.location.href = '/'; // 로그인 페이지로 이동
	 } catch (error) {
	  console.error('회원가입 실패:', error);
	}
}

