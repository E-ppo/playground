import React from 'react'
import styles from './mypage.module.scss'

const LoginForm = () => {
  return (
    <form action="/post" method="POST" className={styles['login-form']}>
      <h1>로그인</h1>
      <div className={styles['login__item']}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="이메일!!!!!"
        />
      </div>
      <div className={styles['login__item']}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="비밀번호!!!!"
        />
      </div>
      <div className={styles['login__description']}>
        <p>로그인은 제껍니다</p>
      </div>
      <div className={styles['login__description']}>
        <input
          type="submit"
          value="로그인"
          className={styles['login__btn--submit']}
        />
      </div>
    </form>
  )
}

export default LoginForm
