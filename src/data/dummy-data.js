export const FAKE_GAMES = {
    count: 2,
    limit: 2,
    lastCursor: 0,
    nextCursor: 2,
    data: [
        {
            id: '1',
            name: 'Some Game',
            total_rating: 58,
            release_dates: [{ date: 1675296000 }],
            cover: { image_id: 'testImg' },
            summary: 'long test summary',
        },
        {
            id: '2',
            name: 'Some Other Game',
            total_rating: 84.8,
            release_dates: [{ date: 1675320000 }, { date: 1675490000 }],
            cover: { image_id: 'testImg' },
            summary: 'long test summary 2',
        },
    ],
}

export const ADDITIONAL_FAKE_GAMES = {
    count: 2,
    limit: 2,
    lastCursor: 2,
    nextCursor: null,
    data: [
        {
            id: '3',
            name: 'A Totally New Random Game',
            total_rating: 99,
            release_dates: [{ human: '08/12/22' }],
            cover: { image_id: 'testImg3' },
            summary: 'long test summary 3',
        },
        {
            id: '4',
            name: 'Some Other Random Game',
            total_rating: 41,
            release_dates: [{ human: '10/21/22' }],
            cover: { image_id: 'testImg4' },
            summary: 'long test summary 4',
        },
    ],
}

export const FAKE_NEWS = [
    {
        _id: '1',
        title: 'article one',
        description: 'one long description',
        link: 'somewhere.test.com',
        image: '//someUri',
        date: 'Fri, 13 Jan 2023 21:50:13 +0000',
    },
]
