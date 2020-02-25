import React from 'react'
import Toggle from './Toggle'
import Square from '../HOCS/Square'
import ToggleRenderProps from './ToggleRenderProps'
import '../style.css'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <Square isAdmin darkMode />
      </Toggle>

      <ToggleRenderProps render={(isVisible, setIsVisible) => {
        return <div>
          {isVisible && <Square isAdmin />}
          <button onClick={() => setIsVisible(!isVisible)}>Toggle me on more time</button>
        </div>
      }}/>
    </section>
  )
}
export default RenderProps
