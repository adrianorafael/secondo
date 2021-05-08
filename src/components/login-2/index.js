import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {useForm} from 'react-hook-form'

let socialMediaColors = {
  facebook: '#365397',
  linkedin: '#006db3',
  google: '#e0452c',
  github: '#2f2f2f'
}

const Login1 = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const router = useRouter()
  const onSubmit = data => {
    console.log(data)
    router.push('/dashboards/dashboard-1')
  }
  const [checked, setChecked] = useState(true)

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm mb-4 w-full">
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">E-mail:</span>
            <input
              name="email"
              type="email"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Informe seu e-mail"
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">É necessário informar seu e-mail.</p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Senha:</span>
            <input
              name="password"
              type="password"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Digite sua senha"
            />
          </label>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">É necessário informar sua senha.</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="submit"
            className="px-4 py-3 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none"
            value="Entrar"
          />
        </div>
      </form>

      <div className="w-full children-x-1">
        <span className="text-secondary">Ainda não tem uma conta?</span>
        <span>
          <Link href="/pages/create-account">
            <a className="link">
              Crie sua conta de síndico.
            </a>
          </Link>
        </span>
        <span className="text-secondary">É grátis!</span>
      </div>
      <div className="w-full">
        <span>
          <Link href="/pages/forgot-password">
            <a className="link">
              Esqueceu a senha?
            </a>
          </Link>
        </span>
      </div>
    </>
  )
}

export default Login1
