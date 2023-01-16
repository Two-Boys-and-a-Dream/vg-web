/**
 * @see {@link https://api-docs.igdb.com/#images}
 */
export const IMAGE_SIZES = {
    cover_small: 'cover_small', // 90 x 128
    screenshot_med: 'screenshot_med', // 569 x 320
    cover_big: 'cover_big', // 264 x 374
    logo_med: 'logo_med', // 284 x 160
    screenshot_big: 'screenshot_big', // 889 x 500
    screenshot_huge: 'screenshot_huge', // 1280 x 720
    thumb: 'thumb', // 90 x 90
    micro: 'micro', // 35 x 35
    med_res: '720p', // 1280 x 720
    high_res: '1080p', // 1920 x 1080
}

/**
 * Formats and sizes url string for images from IGDB image id.
 * @param {String} imageId id of image from IGDB
 * @param {String} size @see IMAGE_SIZES
 * @returns {String} url
 */
export function constructImgURL(imageId, size = IMAGE_SIZES.cover_big) {
    return `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`
}
