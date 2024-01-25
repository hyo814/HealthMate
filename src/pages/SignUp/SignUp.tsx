import React from 'react';

import {useForm} from 'react-hook-form';
import {signUp} from '../../utils/Auth';
import { validateEmail, validatePassword, validateName } from '../../utils/validation';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Typography, Link} from '@mui/material';

import Footer from "../../components/Footer/Footer";
import styles from "./@sign-up.module.css";

type FormData = {
	name: string;
	email: string;
	password: string;
};

const SignUp = () => {
	const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({
		mode: 'onChange', // 실시간 유효성 검사
	});
	
	const onSubmit = async (data: FormData) => {
		await signUp(data.name, data.email, data.password);
	};
	
	return (
		<>
			<div
				className={styles.sign_layout}>
				<div className={styles.sign_detail_layout}>
					<Typography variant="h4">Create an account</Typography>
					<Typography variant="subtitle1">
						Already have an account? <Link href="/">Log in</Link>
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							label="Name"
							variant="outlined"
							fullWidth
							margin="normal"
							{...register('name', {
								required: '이름을 입력해주세요.',
								validate:validateName
							})}
							error={Boolean(errors.name)}
							helperText={errors.name ? errors.name.message : ''}
						/>
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
							CREATE AN ACCOUNT
						</Button>
					</form>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default SignUp;
