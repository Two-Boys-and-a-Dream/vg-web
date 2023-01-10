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
            release_dates: [{ human: '12/22/22' }],
            cover: { image_id: 'testImg' },
            summary: 'long test summary',
        },
        {
            id: '2',
            name: 'Some Other Game',
            total_rating: 84.8,
            release_dates: [{ human: '12/24/22' }, { human: '1/22/23' }],
            cover: { image_id: 'testImg' },
            summary: 'long test summary 2',
        },
    ],
}

export const FAKE_NEWS = [
    {
        _id: '1',
        title: 'article one',
        link: 'somewhere.test.com',
        image: '//someUri',
    },
]