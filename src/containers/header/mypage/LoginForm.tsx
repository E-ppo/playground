'use clinet'

import React, { useState } from 'react'
import styles from './mypage.module.scss'
import { useLoginForm } from '@/hooks'

const LoginForm = () => {
  const { email, pw, error, onChange, onSubmit } = useLoginForm()

  return (
    <form onSubmit={onSubmit} className={styles['login-form']}>
      <h1>로그인</h1>
      <div className={styles['login__item']}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
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
          value={pw}
          onChange={onChange}
          required
          placeholder="비밀번호!!!!"
        />
      </div>
      <div>
        <span className={styles['login__description']}>
          로그인은 제껍니다 :)
        </span>
        {error && error?.length > 0 && (
          <span className={styles['login__description-error']}>{error}</span>
        )}
      </div>

      <div className={styles['login__description']}>
        <input
          type="submit"
          value="로그인"
          disabled={error?.length > 0}
          className={styles['login__btn--submit']}
        />
      </div>
    </form>
  )
}

export default LoginForm
