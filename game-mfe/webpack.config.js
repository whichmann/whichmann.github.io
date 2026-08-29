import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',

    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'auto',
        clean: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'gameMfe',

            filename: 'remoteEntry.js',

            exposes: {
                './Game': './src/game/game-element.tsx',
            },

            shared: {
                react: {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                },
            },
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

    devServer: {
        host: 'localhost',
        port: 3002,

        static: {
            directory: path.resolve(__dirname, 'dist'),
        },

        headers: {
            'Access-Control-Allow-Origin': '*',
        },

        allowedHosts: 'all',

        client: {
            webSocketURL: 'ws://localhost:3002/ws',
        },
    },
};