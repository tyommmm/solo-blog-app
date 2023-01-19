import React from 'react';
import { Link } from 'react-router-dom';
import s from './LoginRegisterForm.module.scss';
import logo from '../../images/logo.png';
type contentType = {
  type: string;
  formHeading: string;
  buttonText: string;
  recommendationText: string;
};

interface LoginRegisterFormType {
  content: contentType;
  submitHandler: (username: string | null, email: string, pass: string) => void;
}

const activeButtonStyle = 'linear-gradient(305deg, #fe9344, #fecd20)';

const LoginRegisterForm: React.FC<LoginRegisterFormType> = ({ content, submitHandler }) => {
  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('artyom123@gmail.com');
  const [pass, setPass] = React.useState<string>('artyom123');
  const [passTwo, setPassTwo] = React.useState<string>('');

  return (
    <div className={s.wrapper}>
      <div className={s.texts}>
        <div className={s.textsContainer}>
          <div className={s.heading}>
            <div className={s.logo}>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <p>Here could be your advertisement😁</p>
        </div>
      </div>
      <div className={s.loginForm}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.heading}>
          <h1>{content.formHeading}</h1>
        </div>
        <div className={s.inputs}>
          {content.type === 'reg' && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          {content.type === 'reg' && (
            <input
              type="password"
              placeholder="Password Confirmation"
              value={passTwo}
              onChange={(e) => setPassTwo(e.target.value)}
            />
          )}
        </div>
        <div className={s.submitBtn}>
          <button
            style={{
              backgroundImage: email && pass ? activeButtonStyle : '',
              color: email && pass ? 'white' : '',
            }}
            onClick={() => {
              if (content.type === 'reg') {
                submitHandler(username, email, pass);
              } else {
                submitHandler(null, email, pass);
              }
            }}>
            {content.buttonText}
          </button>
        </div>
        <div className={s.registerLink}>
          <p>
            {content.recommendationText}{' '}
            <Link to={content.type === 'reg' ? '/login' : '/register'}>
              {content.type === 'reg' ? 'Log in' : 'Register'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
