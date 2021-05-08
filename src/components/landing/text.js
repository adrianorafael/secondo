import {useSelector, shallowEqual} from 'react-redux'
const Text = () => {
  const {name} = useSelector(
    state => ({
      name: state.name
    }),
    shallowEqual
  )
  return (
    <p className="leading-6 text-secondary mb-2">
      {name} é um gerenciador de condomínios GRATUITO. Com ele o síndico pode facilmente cadastrar as unidades residenciais, moradores, membros do condomínio, funcionários e prestadores de serviços. Isso torna possível integarir e controlar toda a administração de uma forma simples e ágil. Não perca tempo, cadastre-se agora mesmo!
    </p>
  )
}

export default Text
