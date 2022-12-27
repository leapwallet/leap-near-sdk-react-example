
const path = require( 'path' );

module.exports = {

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            url: require.resolve("url/"),
            stream: require.resolve("stream-browserify")
        }
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            }
        ]
    }
};