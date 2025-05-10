# NetMirror - Movie Streaming App

A modern, responsive movie streaming application built with React, TypeScript, and Tailwind CSS. This project provides a seamless movie discovery and streaming experience with a focus on user experience and performance.

## 🎬 Features

- **Movie Discovery**
  - Trending movies
  - New releases
  - Popular movies
  - Search functionality
  - Movie categories

- **User Experience**
  - Responsive design
  - Smooth animations
  - Loading states
  - Error handling
  - Offline support

- **User Features**
  - User authentication
  - Watchlist management
  - Viewing history
  - Personalized recommendations
  - Movie ratings

## 🛠️ Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Router v6

- **State Management**
  - React Context
  - React Query

- **API Integration**
  - TMDB API
  - RESTful architecture

- **Performance**
  - Code splitting
  - Lazy loading
  - Service worker
  - Image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohit-Sangwan/netmirror-web.git
   cd netmirror
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📁 Project Structure

```
netmirror/
├── public/
│   ├── manifest.json
│   └── sw.js
├── src/
│   ├── components/
│   │   ├── FeaturedSlider.tsx
│   │   ├── MovieCard.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── MovieDetailsPage.tsx
│   │   └── ...
│   ├── services/
│   │   └── movieService.ts
│   ├── types/
│   │   └── Movie.ts
│   ├── utils/
│   │   └── performance.ts
│   ├── App.tsx
│   └── main.tsx
├── .env
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write meaningful comments
- Follow the existing code structure

### Performance Guidelines

- Implement lazy loading for routes
- Optimize images and assets
- Use proper caching strategies
- Monitor performance metrics
- Implement error boundaries

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Router](https://reactrouter.com/) for routing

## 📞 Contact

Your Name - [@Rohit__Sangwan](https://twitter.com/Rohit__Sangwan)
Project Link: [https://github.com/Rohit-Sangwan/netmirror-web](https://github.com/Rohit-Sangwan/netmirror-web)
