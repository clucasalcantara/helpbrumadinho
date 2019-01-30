import React, { useState, useEffect, Fragment } from 'react'
// UI Elements
import { CardList } from 'components/organisms'
import {
  Card,
  Header,
  Hero,
  Footer,
  Statistics,
  TypedText
} from 'components/molecules'
// Services
import { api } from 'services'
// Styles
import './style.scss'

const Home = ({ baseContext: { config } }) => {
  const [SPData, setSPData] = useState([])
  const [SSAData, setSSAData] = useState([])
  const [spCardsError, setSPCardsError] = useState(undefined)
  const [ssaCardsError, setSSACardsError] = useState(undefined)

  const fetchCardsByCity = async (city, dataCallback, errorCallback) => {
    const result = await api
      .get(`dropoffs?city=${city}`)
      .catch(error => errorCallback(error))

    dataCallback(result.data)
  }

  useEffect(() => {
    fetchCardsByCity('SP', setSPData, setSPCardsError)
    fetchCardsByCity('SSA', setSSAData, setSSACardsError)
  }, [])

  return (
    <Fragment>
      <Header navItems={config.nav} />
      <Hero
        headline={config.headline}
        placeholder="Digite o nome da sua cidade..."
      />
      <div className="wwcontent">
        <Statistics />
        <CardList
          title="Pontos de Coleta em Salvador (BA)"
          content={{
            data: SSAData,
            errorData: ssaCardsError
          }}
          renderItem={Card}
        />
        <TypedText config={config} />
        {/* <CardList title="Pontos de Coleta em São Paulo (SP)" data={SPData} error={cardsError} /> */}
        <CardList
          title="Pontos de Coleta em São Paulo (SP)"
          content={{
            data: SPData,
            errorData: spCardsError
          }}
          renderItem={Card}
        />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home
