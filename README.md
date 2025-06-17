# Final Year Project: Adulteration Detection Platform

## Overview
This project is a full-stack web application for detecting adulteration in samples using machine learning. It includes:
- A React + Vite frontend
- A Node.js/Express backend
- A Python-based ML model (with a Jupyter Notebook: `project-main.ipynb`)

---

## Features
- User authentication (register, login, profile)
- File upload and preview
- Real-time upload progress
- ML-powered adulteration detection
- Results visualization
- Modern, responsive UI

---

## Project Structure
```
final-year-project/
  api_ul/
    client/         # React + Vite frontend
    server/         # Node.js/Express backend
      ml_model/     # Python ML model and assets
    project-main.ipynb  # Jupyter Notebook for ML model
```

---

## 1. Frontend (client)
- Built with React and Vite
- Handles user authentication, file uploads, and result display

### Setup
```bash
cd api_ul/client
npm install
npm run dev
```

---

## 2. Backend (server)
- Node.js with Express
- Handles API requests, authentication, file management, and ML inference (calls Python script)

### Setup
```bash
cd api_ul/server
npm install
node index.js
```

---

## 3. Machine Learning Model
- Python scripts and assets in `api_ul/server/ml_model/`
- Main notebook: `project-main.ipynb`
- Model files: `mlp_color_texture.pkl`, `label_encoder3.pkl`

### Running the Model
- The backend calls `inference.py` for predictions.
- You can open and run `project-main.ipynb` in Jupyter for model training and exploration.

---

## API Endpoints
- `/api/auth` - Authentication routes
- `/api/files` - File upload and management
- `/api/ml` - ML inference

---

## Environment Variables
Create a `.env` file in `api_ul/server/` with the following (example):
```
PORT=5000
MONGO_URI=your_mongodb_uri
CLOUDINARY_URL=your_cloudinary_url
JWT_SECRET=your_jwt_secret
```

---

## Requirements
- Node.js (v18+ recommended)
- Python 3.8+
- MongoDB
- Jupyter Notebook (for running `project-main.ipynb`)

---

## How to Run the Full Stack
1. Start MongoDB.
2. Start the backend server:
   ```bash
   cd api_ul/server
   node index.js
   ```
3. Start the frontend:
   ```bash
   cd api_ul/client
   npm run dev
   ```
4. (Optional) Open and run the ML notebook:
   ```bash
   jupyter notebook api_ul/project-main.ipynb
   ```

---

## License
This project is for educational purposes.

---

## Authors
- Debayan Dhar

---

## Acknowledgements
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Cloudinary](https://cloudinary.com/)
- [scikit-learn](https://scikit-learn.org/)
