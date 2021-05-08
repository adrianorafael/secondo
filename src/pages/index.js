import React from 'react'
import Link from 'next/link'
import Layout from '../layouts/empty'
import {withRedux} from '../lib/redux'
import ChangeDirection from '../components/change-direction'
import Logo from '../components/landing/logo'
import Icons from '../components/landing/icons'
import Images from '../components/landing/images'
import Title from '../components/landing/title'
import Text from '../components/landing/text'
import Features from '../components/landing/features'
import Options from '../components/landing/options'
import Screenshots from '../components/landing/screenshots'
import Sidebars from '../components/landing/sidebars'

const Index = () => (
  <Layout>
    <div
      className={`homepage bg-white text-default w-full py-4 px-8 flex items-center justify-start shadow`}>
      <Logo />
      <div className="hidden lg:flex homepage-navbar-actions">
        <Link href="/pages/login">
          <a className="btn btn-default">Acessar painel</a>
        </Link>
        <a
          href="/pages/create-account"
          className="btn btn-default bg-indigo-700 text-white rounded-lg">
          Cadastrar condomínio
        </a>
      </div>
    </div>
    <div className="container max-w-screen-lg mx-auto lg:px-4">
      {/*section*/}
      <div className="mb-4 lg:mb-0 pt-4 lg:pt-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full p-4 lg:w-3/5 lg:px-8">
            <Title />
            <Text />
            <div className="flex flex-row items-center justify-start">
            <a
                href="/pages/login"
                className="btn btn-default btn-lg bg-blank-700 rounded-lg">
                &gt;&gt; Acessar painel
              </a>
            </div>
            <div className="flex flex-row items-center justify-start">
              <a
                href="/pages/create-account"
                className="btn btn-default btn-lg bg-indigo-700 text-white rounded-lg">
                Cadastrar condomínio
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-2/5">
            <Images />
          </div>
        </div>
      </div>

      {/*section*/}
      <Features />

      <div className="text-center text-xs text-gray-400 pb-4">
        &copy; Secondo - Serviços de Condomínios
      </div>
    </div>
  </Layout>
)

export default withRedux(Index)