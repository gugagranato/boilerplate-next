import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, React, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor em frente ao computador e na tela código de programação"
      />
    </S.Wrapper>
  )
}

export default Main
