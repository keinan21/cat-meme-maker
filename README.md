# Cat Meme Maker

![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222.svg?style=for-the-badge&logo=GitHub-Pages&logoColor=white)

Sebuah aplikasi web sederhana yang memungkinkan Anda membuat meme kucing dengan teks kustom. Dibuat menggunakan React.js dan Vite, aplikasi ini menggunakan API dari [cataas.com](https://cataas.com/api/docs) untuk mendapatkan gambar kucing acak dan Pico.css untuk styling minimalis.

### Fitur Utama

-   **Teks Kustom:** Tambahkan nama atau pesan Anda sendiri ke gambar kucing.
-   **Gambar Kucing Acak:** Setiap kali teks diubah, gambar kucing baru akan dimuat.
-   **Desain Responsif:** Tampilan yang bersih dan sederhana, dioptimalkan untuk perangkat seluler dan desktop.

### Demo Langsung

Coba aplikasi ini secara langsung di [**https://keinan21.github.io/cat-meme-maker/**](https://keinan21.github.io/cat-meme-maker/)

---

### Teknologi yang Digunakan

-   [**React.js**](https://reactjs.org/): Pustaka JavaScript untuk membangun antarmuka pengguna.
-   [**Vite**](https://vitejs.dev/): Build tool yang cepat untuk proyek frontend.
-   [**Pico.css**](https://picocss.com/): Framework CSS minimalis untuk styling.
-   [**cataas.com**](https://cataas.com/api/docs): API yang menyediakan gambar kucing.

---

### Instalasi dan Penggunaan (Lokal)

Ikuti langkah-langkah sederhana ini untuk menjalankan proyek di komputer Anda.

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/keinan21/cat-meme-maker.git](https://github.com/keinan21/cat-meme-maker.git)
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd cat-meme-maker
    ```
3.  **Instal semua dependensi:**
    ```bash
    npm install
    ```
4.  **Jalankan aplikasi di mode pengembangan:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173`.

---

### Deployment ke GitHub Pages

Untuk men-deploy proyek ke GitHub Pages, pastikan Anda telah mengkonfigurasi file `vite.config.js` dengan `base: '/cat-meme-maker/'`. Setelah itu, jalankan perintah ini:

```bash
npm run deploy
