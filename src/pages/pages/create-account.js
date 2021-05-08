import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
import Form from '../../components/create-account-1'

const CreateAccount = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Informe o CNPJ, seu e-mail e senha para criar uma conta de síndico.
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(CreateAccount)
