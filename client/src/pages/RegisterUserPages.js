import React from 'react'
import NavbarLoginPages from '../component/Navbar/NavbarLoginPages'
import RegisterForm from '../component/Register/RegisterForm'

const RegisterUserPages = () => {
  return (
    <div className="bg-green-900 min-h-screen flex flex-col">
      <header>
        <NavbarLoginPages/>
      </header>
      <RegisterForm/>
    </div>
  )
}

export default RegisterUserPages
