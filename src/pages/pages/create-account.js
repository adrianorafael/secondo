import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
import Form from '../../components/create-account-1'

const CreateAccount = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Informe seu e-mail e senha para criar seu acesso.
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(CreateAccount)
