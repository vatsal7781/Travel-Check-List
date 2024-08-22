import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>
}
function Form() {
  const [description, setDescription] = useState("")
  const [quant, setQuant] = useState(7)

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = { id: Date.now(), description, quant, packed: false }
    console.log(newItem);

    // alert('text endered: ' + e.target.input)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for the trip?</h3>

      <select value={quant} onChange={e => setQuant(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(v =>
          <option value={v} key={v}
          >
            {v}
          </option>)}
      </select>

      <input type="text" placeholder="Text..." value={description} onChange={e => setDescription(e.target.value)} />

      <button type="submit">Add</button>
    </form>)
}
function PackingList() {
  return <div className="list">
    <ul >
      {initialItems.map(item => <Item item={item} key={item.id} />)}
    </ul>
  </div>
}

function Item({ item }) {
  return <li>
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
    {/* <input type="checkbox" /> */}
  </li >
}

function Stats() {
  return <footer className="stats">
    <em>You have X items on the list, and have already packed X% of items.</em>
  </footer>
}