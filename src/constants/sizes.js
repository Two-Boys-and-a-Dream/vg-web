import { calc } from '@chakra-ui/styled-system'

// TODO: I think we can achieve this effect in component || style-sheet
// Using the <Component style={{ width: `calc(100% - 250px`) }} || using calc in css file.

const navbarWidth = '250px'

export const SIZES = {
    navbarWidth,
    pageWidth: calc.subtract('100%', navbarWidth),
    pagePadding: '50px',
}
