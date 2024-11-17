'use client'

import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, User, signOut } from 'firebase/auth'
import { customFirebaseApp } from '@/firebaseApp'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(customFirebaseApp)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.log(error)
    }
  }

  return { user, loading, logout }
}
