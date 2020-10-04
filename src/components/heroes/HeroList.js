import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher } ) => {

	const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]) ;

	return (

			<div >
				<div className="card-columns animate__animated animate__fadeIn">
					{
						heroes.map( hero => (
							<HeroCard 
								key = { hero.id }
								{ ...hero }
							/>
						))
					}
				</div>
			</div>

	)
}
