import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        css: {
            modules: {
                localsConvention: 'camelCase',
                scopeBehaviour: 'local',
                generateScopedName: '[name]_[local]_[hash:5]'
            },
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                }
            },
            postcss: {
                plugins: [postcssPresetEnv()]
            }
        },
        plugins: [
            VitePWA({
                manifest: {
                    name: 'Vite React scaffold',
                    short_name: 'Vite React',
                    start_url: '.',
                    description:
                        'React project scaffold based on TypeScript, MobX & Bootstrap, which is inspired by WebCell scaffold.',
                    scope: '.',
                    display: 'standalone',
                    orientation: 'any',
                    lang: 'en-US',
                    dir: 'ltr',
                    theme_color: 'rgba(0,0,0,0.5)',
                    background_color: 'transparent',
                    icons: [
                        {
                            src: '/logo.png',
                            type: 'image/png',
                            sizes: '180x180'
                        }
                    ]
                }
            }),
            react({
                include: /\.(mdx|js|jsx|ts|tsx)$/,
                babel: {
                    configFile: true
                }
            })
        ],
        define: {
            __APP_ENV__: env.APP_ENV
        }
    };
});
