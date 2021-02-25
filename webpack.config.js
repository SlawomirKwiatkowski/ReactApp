const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      clientLogLevel: 'silent',
      port: 9000,
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: 'defaults',
                    },
                  ],
                  '@babel/preset-react',
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: env.NODE_ENV === 'development',
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 0,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'), //Wolimy dart-sass niż node-sass
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|awif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                //grafiki chcemy w katalogu dist/images
                context: 'public',
                name: '/images/[name]-[hash].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
  };
};
