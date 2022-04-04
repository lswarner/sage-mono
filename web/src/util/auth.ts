const isAuthenticated = (): boolean => {
  if (localStorage.getItem('auth') === 'true') return true
  return false
}

const login = (): void => {
  localStorage.setItem('auth', 'true')
}

const logout = (): void => {
  localStorage.setItem('auth', 'false')
}

export default {
  isAuthenticated,
  login,
  logout,
}
