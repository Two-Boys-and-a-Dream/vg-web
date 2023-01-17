import { render } from '@testing-library/react'
import { GameCard } from '../GameCard/GameCard'

const gameCardData = {
    imageId: 123,
    summary: `God of War: Ragnarök is the ninth installment in the God of War series and the sequel to 2018's God of War. Continuing with the Norse mythology theme, the game is set in ancient Norway and feature series protagonists Kratos, the former Greek God of War, and his young son Atreus. The game is expected to kick off the events of Ragnarök, where Kratos and Atreus must journey to each of the Nine Realms in search of answers as they prepare for the prophesied battle that will end the world.`,
    rating: 80,
    gameTitle: 'Jijja mode',
    releaseDate: '12/22/22',
}

describe('<GameCard />', () => {
    it(`renders`, () => {
        const { getByTestId } = render(<GameCard {...gameCardData} />)
        expect(getByTestId('game-card')).toBeDefined()
    })
    it('renders when rating prop is not a number', () => {
        const { getByTestId } = render(<GameCard />)
        expect(getByTestId('game-card')).toBeDefined()
    })
})
