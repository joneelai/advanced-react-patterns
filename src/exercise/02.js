// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 replace this with a call to React.Children.map and map each child in
  // props.children to a clone of that child with the props they need using
  // React.cloneElement.
  // 💰 React.Children.map(props.children, child => {/* return child clone here */})
  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
  return React.Children.map(children, child =>
    // YOU CAN ALSO CHECK THE TYPE OF CHILD, E.G. IF WANT TO ALLOW <SPAN>
    // if (typeof child.type === 'string') , YOU SHOULD RETURN CHILD AS IS
    // OR OTHERWISE ROUND YOU CAN DETERMINE WHAT ARE THE ALLOWED TYPES LIKE
    // const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]
    // if (allowedTypes.includes(child.type)) { ... }
    React.cloneElement(child, {on, toggle}),
  )
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
// const ToggleOn = ({on, children}) => {
//   if (on === true) {
//     return children
//   }
//   return null
// }
// CAN BE SIMPLIFIED TO:
function ToggleOn({on, children}) {
  return on ? children : null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => {
  if (on === false) {
    return children
  }
  return null
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle, ...props}) => {
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        {/* <span>Hello!</span> */}
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
