import { useState } from 'react'
import Login from './screens/login/Login'
import Month from './screens/Month'
import Planner from './screens/Planner'
import HomeScreen from './screens/Home'
import ReflexReflects from './components/ReflexReflects'
import {Transaction} from 'types'
import './App.css'


const txs: Transaction[]= [
  {name:'Sprouts', amount: 165.87,  category: 'Groceries',date: '8/01'},
  {name:'Longtable', amount: 22.98, category: 'Alcohol', date: '8/02'},
  {name:'Illegal Petes', amount: 31.13, category: 'Restaurants', date: '8/03'},
  {name:'Amazon', amount: 67.12, category: 'Home Supplies', date: '8/03'},
  {name:'Prodigy', amount: 4.87, category: 'Coffee', date: '8/06'},
  {name:'Amazon', amount: 44.90, category: 'Pets', date: '8/08'},
  {name:'Autotrader.com', amount: 40.0, category: 'Car', date: '8/08'},
  {name:'Sprouts', amount: 97.01, category: 'Groceries', date: '8/09'},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row w-4/5 mx-auto">
          
          <HomeScreen />
    </div>
  )
}

export default App
