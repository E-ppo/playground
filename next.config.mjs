import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // SVG 설정
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // YJS 설정
    if (!isServer) {
      config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs')
    }

    return config
  },
}

export default nextConfig
