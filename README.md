# CookBook

**Live Demo:**
https://recipes-finder-ruddy.vercel.app

## TECH STACK
### Frontend:
- React.js
- Tailwind CSS
- Zustand
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT

## Environment Variables
**Frontend**
```bash
VITE_API_BASE_URL=your_backend_url/api/
```

**Backend**
```bash
PORT=your_port
MONGO_URL=your_mongodb_uri/database_name
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=your_frontend_url
```

## Installation
**Frontend**
```bash
cd client
npm install
npm run dev
```

**Backend**
```bash
cd server
npm install
npm run dev
```
