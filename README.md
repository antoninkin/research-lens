# ResearchLens

ResearchLens is a modern web application built for analyzing and visualizing research data. It provides an intuitive interface for uploading, processing, and visualizing data using React and TypeScript.

## Features

- File upload with drag-and-drop support
- Data visualization using Recharts
- ETL (Extract, Transform, Load) capabilities
- Dark mode support
- Responsive design using Tailwind CSS

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts for data visualization
- Docker support

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/research-lens.git
   cd research-lens
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Support

To run the application using Docker:

```bash
docker-compose up
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── hooks/         # Custom React hooks
  ├── services/      # Services including ETL
  ├── types/         # TypeScript type definitions
  └── utils/         # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request