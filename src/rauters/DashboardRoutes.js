import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'


export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/marvel" component = { MarvelScreen } />
					<Route exact path="/heroe/:heroeId" component = { HeroeScreen } />
					<Route exact path="/dc" component = { DcScreen } />
					<Route exact path="/search" component = { SearchScreen } />

					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	)
}
