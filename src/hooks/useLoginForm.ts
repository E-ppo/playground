'use client'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { customFirebaseApp } from '@/firebaseApp'

interface UseLoginForm {
  email: string
  pw: string
  error: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const useLoginForm = (): UseLoginForm => {
  const [email, setEmail] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const [error, setError] = useState<string>(!email || !pw ? ' ' : '')

  const validateEmail = (value: string) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!value?.match(validRegex)) {
      setError('이메일 형식이 올바르지 않습니다.')
    } else {
      setError('')
    }
  }

  const validatePassword = (value: string) => {
    if (value?.length < 8) {
      setError('비밀번호는 8자리 이상으로 입력해주세요')
    } else {
      setError('')
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'email') {
      setEmail(value)
      validateEmail(value)
    } else {
      setPw(value)
      validatePassword(value)
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const auth = getAuth(customFirebaseApp)
      await signInWithEmailAndPassword(auth, email, pw)
    } catch (error: any) {
      console.error(error)
    }
  }

  return {
    email,
    pw,
    error,
    onChange,
    onSubmit,
  }
}
