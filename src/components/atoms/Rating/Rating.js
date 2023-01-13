import pt from 'prop-types'
import { useMemo } from 'react'

export function Rating({ value = '?' }) {
    const text = useMemo(
        () => (typeof value === 'number' ? Math.round(value) : value),
        [value]
    )

    const bgColor = useMemo(() => {
        if (typeof value !== 'number') return 'grey'

        switch (true) {
            case value >= 75:
                return 'green'
            case value >= 50:
                return 'yellow'
            default:
                return 'red'
        }
    }, [value])

    return (
        <div style={styling(bgColor)}>
            <p style={{ fontSize: '1.25rem' }}>{text}</p>
        </div>
    )
}

Rating.propTypes = {
    value: pt.oneOfType([pt.string, pt.number]),
}

const styling = (bgColor) => {
    return {
        backgroundColor: bgColor,
        height: '50px',
        minWidth: '50px',
        borderRadius: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
