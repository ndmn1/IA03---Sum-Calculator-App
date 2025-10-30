import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '')
  return {
    plugins: [react()],
    server: {
      port: Number(env.PORT) || 5173,
    },
  }
})