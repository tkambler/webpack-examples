'use strict';

const path = require('path');

module.exports = {
    'entry': './src/index.ts',
    'watchOptions': {
        'ignored': /node_modules/
    },
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': 'app.bundle.js'
    },
    'resolve': {
        'extensions': [
            '.js', '.ts', '.json', '.scss', '.html', '.txt'
        ],
        'modules': [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'scss'),
            path.resolve(__dirname, 'node_modules')
        ]
    },
    'module': {
        'rules': [
            {
                'test': /\.js$/,
                'exclude': /node_modules/,
                'use': [
                    {
                        'loader': 'cache-loader'
                    },
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
                'test': /\.scss$/,
                'use': [
                    {
                        'loader': 'cache-loader'
                    },
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
            },
            {
                'test': /\.ts$/,
                'use': [
                    {
                        'loader': 'babel-loader',
                        'options': {
                            'presets': ['env']
                        }
                    },
                    {
                        'loader': 'ts-loader'
                    }
                ]
            }
        ]
    }
};
