import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnFonts from 'unplugin-fonts/vite'
import path from 'path'

const pathSrc = path.resolve(__dirname, './src')

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
