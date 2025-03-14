# Modern Portfolio Website

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-FF6B6B?style=for-the-badge&logo=convex&logoColor=white)

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Convex for backend data management.

https://github.com/user-attachments/assets/45d52395-4a1e-498e-b91b-a18fcb07a28f

## ✨ Features

- 🌓 **Dark/Light Mode** - Beautiful theme toggling with smooth transitions
- 🎨 **Animated UI Components** - Engaging user experience with Framer Motion animations
- 📱 **Fully Responsive Design** - Optimized for all screen sizes
- 🔄 **Dynamic Content** - Skills, projects, and timeline sections powered by Convex
- 👨‍💻 **Project Showcase** - Interactive carousel to display projects
- 🌟 **Orbital Skills Display** - Unique animated skills visualization
- 📝 **Contact Form** - Functional email contact form
- 🚀 **Admin Dashboard** - Content management for projects, skills, and timeline entries

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for better development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Convex](https://www.convex.dev/)** - Backend database and API
- **[React Email](https://react.email/)** - Email templates for the contact form
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[React Toastify](https://fkhadra.github.io/react-toastify)** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm or bun

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd myPortfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:

```
CONVEX_DEPLOYMENT=your_convex_deployment_url
NEXT_PUBLIC_CONVEX_URL=your_public_convex_url
RESEND_API_KEY=your_resend_api_key
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend Setup (Convex)

1. Install Convex CLI:

```bash
npm install -g convex
```

2. Initialize Convex:

```bash
npx convex dev
```

This will set up your Convex deployment and start the local development server.

## 🗂️ Project Structure

```
/
├── convex/               # Convex backend files
│   ├── _generated/       # Generated Convex API code
│   ├── projects.ts       # Projects API endpoints
│   ├── timeline.ts       # Timeline API endpoints
│   └── schema.ts         # Database schema
├── public/               # Static files
├── src/
│   ├── app/              # Next.js app router
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── motionComp/   # Motion animation components
│   │   ├── nav/          # Navigation components
│   │   ├── providers/    # Provider components
│   │   ├── sections/     # Main page sections
│   │   └── ui/           # UI components
│   └── lib/              # Utility functions
```

## 📝 Content Management

### Adding a Project

1. Navigate to `http://localhost:3000/upload`
2. Fill in the project details:
   - Title
   - Description
   - Project URL
   - Upload an image
3. Submit the form to add the project to your portfolio

### Managing Timeline & Skills

Skills and timeline entries are managed through the Convex database. Use the Convex dashboard or create admin routes to manage these entries.

## 🔧 Customization

### Themes

The light and dark themes can be customized in `src/app/globals.css` and `tailwind.config.js`.

### Skills Configuration

Orbit configurations and skill settings can be found in `src/lib/skillsData.ts`.

### Animations

Most animations are powered by Framer Motion and can be customized in the respective component files.

## 📤 Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js portfolio:

1. Push your code to a GitHub repository
2. Import the project to [Vercel](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Deploying Convex

Your Convex backend will be automatically deployed when you run:

```bash
npx convex deploy
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](your-issues-url).


## 📬 Contact

If you have any questions or want to reach out, feel free to contact:

- Email: mrislam.fahim@gmail.com
- GitHub: [cRED-f](https://github.com/cRED-f)
- LinkedIn: [Mr. Islam Fahim](https://www.linkedin.com/in/mr-islam-fahim)

---

Built with ❤️ by [Mr. Islam Fahim](https://github.com/cRED-f)
