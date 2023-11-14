import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnFonts from 'unplugin-fonts/vite'

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
})
