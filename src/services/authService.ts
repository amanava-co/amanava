// src/services/authService.js

import { mockUsers } from "../data/mockData"

export function mockLogin(email: string, password: string) {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  )

  if (user) {
    // Simula um JWT falso
    const fakeToken = btoa(JSON.stringify({
      id: user.id,
      tenant_id: user.tenant_id,
      name: user.name,
      role: user.role
    }))

    // Salva no localStorage (simula sessão)
    localStorage.setItem("amanava_token", fakeToken)
    localStorage.setItem("amanava_user", JSON.stringify(user))

    return { success: true, user }
  }

  return { success: false, error: "Email ou senha incorretos" }
}

export function mockLogout() {
  localStorage.removeItem("amanava_token")
  localStorage.removeItem("amanava_user")
}

export function isAuthenticated() {
  return !!localStorage.getItem("amanava_token")
}

export function getCurrentUser() {
  const user = localStorage.getItem("amanava_user")
  return user ? JSON.parse(user) : null
}
