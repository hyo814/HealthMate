import React, {useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
import {login} from '../utils/Auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Typography, Link} from '@mui/material';

import Footer from "../components/Footer/Footer";
import {validateEmail, validatePassword} from "../utils/validation";
import styles from "./@index.module.css";

type FormData = {
	email: string;
	password: string;
};

const Index: React.FC = () => {
	const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({
		mode: 'onChange',
	});
	
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		// 토큰이 존재한다면 홈 페이지로 이동
		if (token && userId) {
			window.location.href = '/Home/Home';
		}
	}, []); // 빈 배열을 넣어 한 번만 실행되도록 설정
	
	const onSubmit = async (data: FormData) => {
		const result = await login(data.email, data.password);
		if (result === undefined) {
			setErrorMessage("로그인에 실패했거나 JWT 토큰이 없습니다.")
		}
	};
	
	return (
		<>
			<div className={styles.login_layer}>
				<div className={styles.login_detail_layer}>
					<Typography variant="h4">LOGIN</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							label="Email"
							variant="outlined"
							fullWidth
							margin="normal"
							{...register('email', {
								required: '이메일을 입력해주세요.',
								validate : validateEmail
							})}
							error={Boolean(errors.email)}
							helperText={errors.email ? errors.email.message : ''}
						/>
						<TextField
							label="Password"
							type="password"
							variant="outlined"
							fullWidth
							margin="normal"
							{...register('password', {
								required: '비밀번호를 입력해주세요.',
								validate : validatePassword
							})}
							error={Boolean(errors.password)}
							helperText={errors.password ? errors.password.message : ''}
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							style={{marginTop: '20px'}}
							disabled={!isValid} // 유효성 검사에 따라 버튼 활성화/비활성화
						>
							LOGIN
						</Button>
						{errorMessage && (
							<Typography variant="subtitle1" style={{color: 'red', marginTop: '10px'}}>
								{errorMessage}
							</Typography>
						)}
						<Typography variant="subtitle1">
							Do you want to create an account? <Link href="/SignUp/SignUp">Sign-Up</Link>
						</Typography>
					</form>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Index;
