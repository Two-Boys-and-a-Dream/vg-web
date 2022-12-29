import { calc } from '@chakra-ui/styled-system'

const navbarWidth = '250px'

export const SIZES = {
    navbarWidth,
    pageWidth: calc.subtract('100%', navbarWidth),
    pagePadding: '50px',
}
