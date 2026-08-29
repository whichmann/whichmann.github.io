import path from 'node:path';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',

    context: __dirname,

    entry: './blog.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'auto',
        clean: true,
    },

    resolve: {
        extensions: ['.js'],
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'icons',
                    to: 'icons',
                },
            ],
        }),

        new ModuleFederationPlugin({
            name: 'host',

            remotes: {
                gameMfe: {
                    external: 'gameMfe@http://localhost:3002/remoteEntry.js',
                },
            },
        }),

        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],

    devServer: {
        host: 'localhost',
        port: 3000,

        static: {
            directory: path.resolve(__dirname, 'dist'),
        },

        allowedHosts: 'all',

        client: {
            webSocketURL: 'ws://localhost:3000/ws',
        },
    },
};