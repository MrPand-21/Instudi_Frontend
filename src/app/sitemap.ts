import { MetadataRoute } from 'next'
import siteMetadata from '../siteMetadata.js'

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = siteMetadata.siteUrl

    const routes = ['', 'login', 'feed', 'home'].map((route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes]
}