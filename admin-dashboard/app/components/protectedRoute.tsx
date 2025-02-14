"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ProtectedRoute({children} : {children : React.ReactNode}) {
    const router = useRouter()

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin')
        if (!isLogin) {
            router.push('/admin')
        }
    }, [router])
  return <>{children}</>
}
