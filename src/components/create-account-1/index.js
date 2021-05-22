import React, {useState} from 'react'
import Link from 'next/link'
import {useForm} from 'react-hook-form'

let socialMediaColors = {
  facebook: '#365397',
  linkedin: '#006db3',
  google: '#e0452c',
  github: '#2f2f2f'
}

const CreateAccount = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  const [checked, setChecked] = useState(true)

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm mb-4">

        {/*input*/}
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">E-mail:</span>
            <input
              name="email"
              type="email"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Informe o seu e-mail"
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">É necessário informar o e-mail</p>
          )}
        </div>

        {/*input*/}
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Senha:</span>
            <input
              name="password"
              type="password"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Digite a senha que deseja utilizar"
            />
          </label>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">É necessário definir uma senha</p>
          )}
        </div>

        {/*input*/}
        <div className="w-full mb-4">
          <div className="inline-block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  name="terms"
                  ref={register()}
                  type="checkbox"
                  className="form-checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <span className="ltr:ml-2 rtl:mr-2">
                  Eu concordo com os{' '}
                  <Link href="/pages/terms-of-service">
                    <a className="link">Termos de uso</a>
                  </Link>{' '}
                  e a{' '}
                  <Link href="/pages/privacy-policy">
                    <a className="link">Política de privacidade</a>
                  </Link>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-full">
          <input
            type="submit"
            className="btn btn-default btn-block btn-indigo btn-rounded"
            value="Cadastrar"
          />
        </div>
      </form>

      <div className="w-full children-x-1">
        <span className="text-secondary">Já possui cadastro?</span>
        <span>
          <Link href="/pages/login">
            <a className="link">
              Acesse aqui.
            </a>
          </Link>
        </span>
      </div>
      <div className="w-full">
        <span>
          <Link href="/pages/forgot-password">
            <a className="link">
              Esqueceu sua senha?
            </a>
          </Link>
        </span>
      </div>
    </>
  )
}

export default CreateAccount
