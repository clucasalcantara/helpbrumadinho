import React from 'react'
// UI Elements
import { Title } from 'components/atoms'
import { Loadable } from 'components/molecules'
// Styles
import './style.scss'

const CardList = ({ title, content: { data = [], error }, renderItem }) => {
  const Card = renderItem

  if (error)
    return (
      <div className="card-list">
        <Title content="Ops, something went wrong...!" />
      </div>
    )

  return (
    <section className="hb-cards py-3">
      <div className="ui container">
        <div className="ui doubling stackable column grid">
          <Title content={title} />
        </div>
        <div className="ui doubling stackable four column grid">
          <Loadable>
            {data.map(content => (
              <Card key={content.id} data={content} />
            ))}
          </Loadable>
        </div>
      </div>
    </section>
  )
}

export default CardList
