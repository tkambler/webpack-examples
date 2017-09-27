'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    'entry': {
        'app': 'app',
        'boot': 'boot',
        'controllers': 'controllers',
        'filters': 'filters',
        'services': 'services'
    },
    'devtool': 'inline-source-map',
    'watchOptions': {
        'ignored': /node_modules/
    },
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': '[name].bundle.js'
    },
    'resolve': {
        'alias': {
            'angular$': 'angular/angular.js'
        },
        'modules': [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'scss'),
            path.resolve(__dirname, 'node_modules')
        ]
    },
    'plugins': [
        new webpack.optimize.CommonsChunkPlugin({
            'name': 'common'
        })
    ],
    'module': {
        'rules': [

            // Start: Libs

            {
                'test': /angular\.js$/,
                'use': [
                    {
                        'loader': 'exports-loader?angular'
                    }
                ]
            },

            // End: Libs

            {
                'test': /\.js$/,
                'exclude': /node_modules/,
                'use': [
                    {
                        'loader': 'babel-loader',
                        'options': {
                            'presets': ['env']
                        }
                    }
                ]
            },
            {
                'test': /\.json5$/,
                'use': 'json5-loader'
            },
            {
                'test': /\.html$/,
                'use': {
                    'loader': 'html-loader',
                    'options': {
                        'attrs': false
                    }
                }
            },
            {
                'test': /\.txt$/,
                'use': 'raw-loader'
            },
            {
                'test': /\.css/,
                'use': [
                    {
                        'loader': 'css-loader'
                    }
                ]
            },
            {
                'test': /\.scss$/,
                'use': [
                    {
                        'loader': 'style-loader'
                    },
                    {
                        'loader': 'css-loader'
                    },
                    {
                        'loader': 'sass-loader',
                        'options': {
                        }
                    }
                ]
            }
        ]
    }
};

