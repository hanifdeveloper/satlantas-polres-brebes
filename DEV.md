https://www.figma.com/file/w5wZVUz3u4jEuHeFjquhRl/Website-Satlantas-Brebes?node-id=2%3A3

## Cpanel
host: https://my.domainesia.com/index.php?rp=/login
user: stride.overr@gmail.com
pass: Amax085643765870!

## Development
```sh
# create custom doucument
touch pages/_document.js

# create service
npm install axios
npm install bulma
npm install react-infinite-scroll-component
npm install react-paginate
touch jsconfig.json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "@/components/*": ["components/*"]
        }
    }
}

mkdir services
touch services/http-service.js

# create atoms components
mkdir components/atoms/NewsItem
touch components/atoms/NewsItem/index.jsx

mkdir components/atoms/MenuItem
touch components/atoms/MenuItem/index.jsx

# create profile page
mkdir pages/profile
mkdir pages/profile/backup
touch pages/profile/\[id]\.jsx
touch pages/profile/index.jsx

# create layanan-kami page
mkdir pages/layanan-kami
mkdir pages/layanan-kami/backup
touch pages/layanan-kami/\[id]\.jsx
touch pages/layanan-kami/index.jsx

# create berita page
mkdir pages/berita
touch pages/berita/index.jsx
touch pages/berita/\[slug]\.jsx
touch pages/berita/paginate.jsx

# create faq page
mkdir pages/faq
touch pages/faq/index.jsx
touch pages/faq/faq.module.scss

# create 404 page
touch pages/404.jsx
```

## Tailwind
```sh
https://tailwindcss.com/docs/guides/nextjs
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure your template paths
# Add the paths to all of your template files in your tailwind.config.js file.
content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],

# Add the Tailwind directives to your CSS
# Add the @tailwind directives for each of Tailwind’s layers to your ./styles/globals.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Build
https://satlantas-polres-brebes.vercel.app
```sh
# build mode static generation
npm run export
mkdir publish
cp -R out ../publish
git init
git remote add origin https://github.com/hanifdeveloper/satlantas-polres-brebes.git
git add .
git commit -m "build prod"
git push -u origin master

cp -R out ../publish
[publish] git add .
[publish] git commit -m "build prod"
[publish] git push -u origin master

# build mode server side generation
rm .DS_Store
[publish] git clone https://github.com/hanifdeveloper/satlantas-polres-brebes.git .
rsync -av . ../publish --exclude={node_modules,.git}
[publish] git add .
[publish] git commit -m "build prod"
[publish] git push -u origin master

# remove untracked file
git clean -fd

touch .htaccess
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ — [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
```