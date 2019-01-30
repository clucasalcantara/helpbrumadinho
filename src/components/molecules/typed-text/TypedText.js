import React from 'react'
// UI Elements
import Typed from 'react-typed'

const TypedText = ({ config: { typed } }) => (
  <section className="hb-hightlight">
    <div className="ui container center aligned">
      <div className="ui placeholder segment">
        <div className="ui header">
          <div className="typed-wrap">
            <Typed
              className="typed"
              strings={typed.items}
              typeSpeed={typed.speed}
              loop={typed.loop}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TypedText
