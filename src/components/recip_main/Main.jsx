import React from 'react'
import SearchItem from '../recipe_addItem/SearchItem'
import './Main.scss'
import Hero from '../recipe_hero/Hero'
import Items from '../recipe_items/Items'

function Main() {
  return (
    <main>
      <SearchItem />
      <Hero />
      <Items />
    </main>
  )
}

export default Main
