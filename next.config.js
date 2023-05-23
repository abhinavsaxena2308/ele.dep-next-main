/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, option) => {
    config.module.rules.push({
      test:/\.(mp4|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]'
          }
        }
      ]
    })
    return config
  }
}

module.exports = nextConfig
// module.exports = {
//   reactStrictMode: true,
  

//   webpack: (config, option) => {
//     config.module.rules.push({
//       test:/\.(mp4|webm)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/videos/',
//             outputPath: 'static/videos/',
//             name: '[name].[hash].[ext]'
//           }
//         }
//       ]
//     })
//     return config
//   }
// }
