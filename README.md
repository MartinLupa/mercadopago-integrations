# Payment Integration with Mercado Pago APIs

![Mercado Pago Logo, Yellow background](mercadopago.png "Mercado Pago Logo, Yellow background")


## About This Repository
This repository contains multiple applications that demonstrate integrations with different Mercado Pago APIs. Each application serves as a focused learning exercise and testing environment, designed to explore specific API features and integration patterns. While these examples provide practical implementation guidance and can serve as reference material for others, they are intentionally streamlined to concentrate on core API functionality and integration concepts rather than comprehensive production-level considerations. 


## Running the Projects

All the apps contained in this repository are Next.js applications that requires Node.js to run. Follow these steps to get the projects running locally:

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Choose the integration folder**
   ```bash
   cd mercadopago-pro #Or any other integration.
   ```

3. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit .env.local with your actual credentials
   # Add your payment provider credentials, webhook URLs, etc.
   ```

### Development

1. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

3. **Expose your local server** (for webhook testing, if needed)

