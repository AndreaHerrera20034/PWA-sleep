import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: "#8936FF", 
        background_color: "#2EC6FE",
        name: "PWA Example",
        short_name: "pwaEx",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            "src": "icon512_maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icon512_rounded.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      }
    })
  ]
})
