import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnFonts from 'unplugin-fonts/vite'
import path from 'path'

const pathSrc = path.resolve(__dirname, './src')

import eslint from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import removeConsole from "vite-plugin-remove-console";

const PROJECT_ID = 'd81d3d42-8f83-43ca-8740-4615416293b4'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(),
		UnFonts({
			custom: {
				families: [
					{
						name: 'Fernando',
						local: 'Fernando',
						src: './src/assets/styles/fonts/FVF_Fernando.ttf'
					}
				]
			}
		}),
		eslint(),
		removeConsole(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					PROJECT_ID,
				}
			}
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "${pathSrc}/global.scss";`
			}
		}
	}
})
