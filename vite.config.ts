import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// @ts-ignore
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    root: "./", // 根路径
    base: "./", // 基础路径,
    css: {
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                // 重写 less 变量，定制样式
                modifyVars: {
                    // '@primary-color': 'red',
                },
            },
        }
    },
    resolve: {
        alias: {
            // @ts-ignore
            "@": path.resolve(__dirname, 'src')
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
    },
    build: {
        outDir: "dist",
        cssCodeSplit: true
    }
})
