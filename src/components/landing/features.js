const Item = ({title, description, icon}) => (
  <div className="w-full lg:w-1/2 flex flex-row items-start justify-start mb-8 px-2">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-700">
        {icon}
      </div>
    </div>
    <div className="mx-4">
      <h5 className="text-lg leading-6 font-bold text-default mb-1">{title}</h5>
      <p className="text-base leading-6 text-secondary">{description}</p>
    </div>
  </div>
)

const Features = () => (
  <div className="flex flex-row flex-wrap items-center justify-center mb-4 pt-12">
    <Item
      title="Fácil de configurar"
      description="O síndico cadastra e gerencia seu condomínio de forma rápida e simples. Grátis e sem dificuldades."
      icon={<i className={`icon-settings text-3xl`}></i>}
    />
    <Item
      title="Velocidade e performance"
      description="Nosso sistema é rápido. As páginas não demoram e não tem travamentos. Mude agora para o Secondo!"
      icon={<i className={`icon-plane text-3xl`}></i>}
    />
    <Item
      title="Abandone os papéis"
      description="Digitalize seu condomínio com nosso sistema. Temos diversas integrações e automações para facilitar a gestão."
      icon={<i className={`icon-layers text-3xl`}></i>}
    />
    <Item
      title="Tudo sob controle"
      description="Tenha números, estatísticas e lembretes para não esquecer nenhuma conta e manter o orçamento em dia."
      icon={<i className={`icon-speedometer text-3xl`}></i>}
    />
  </div>
)
export default Features
