/**
 * @see {@link https://api-docs.igdb.com/#images}
 */
export const IMAGE_SIZES = {
    cover_small: 'cover_small',
    screenshot_med: 'screenshot_med',
    cover_big: 'cover_big',
    logo_med: 'logo_med',
    screenshot_big: 'screenshot_big',
    screenshot_huge: 'screenshot_huge',
    thumb: 'thumb',
    micro: 'micro',
    med_res: '720p',
    high_res: '1080p',
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
