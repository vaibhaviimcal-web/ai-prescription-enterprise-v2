# 🏥 AI Prescription Enterprise v2.0

Enterprise-grade AI-powered prescription generator with multi-provider AI integration, patient management, and analytics.

## ✨ Features

### 🤖 AI-Powered Prescription Generation
- **Multi-Provider Support**: OpenAI GPT-4, Google Gemini, Anthropic Claude
- **Smart Symptom Analysis**: Intelligent diagnosis suggestions
- **Drug Interaction Checking**: Safety validation
- **Dosage Optimization**: Age and condition-based recommendations

### 📋 Patient Management
- Complete patient records
- Medical history tracking
- Prescription history
- Search and filter capabilities

### 📊 Analytics Dashboard
- Real-time prescription analytics
- Patient statistics
- Medicine usage tracking
- Performance metrics

### 📄 Professional PDF Export
- Clinic branding and letterhead
- Digital signatures
- QR code verification
- Print-ready format

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (optional for database)
- OpenAI API key (optional for real AI)

### Installation

\`\`\`bash
# Clone repository
git clone https://github.com/vaibhaviimcal-web/ai-prescription-enterprise-v2.git
cd ai-prescription-enterprise-v2

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vaibhaviimcal-web/ai-prescription-enterprise-v2)

1. Click the button above
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

### Manual Deployment

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🔧 Configuration

### Environment Variables

\`\`\`env
# Supabase (Optional - for database features)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# AI Providers (Optional - for real AI integration)
OPENAI_API_KEY=your_openai_key
GOOGLE_AI_API_KEY=your_google_key
ANTHROPIC_API_KEY=your_anthropic_key
\`\`\`

## 📱 Features Roadmap

### ✅ Phase 1 (Current)
- [x] Basic prescription generation
- [x] Multi-AI provider support
- [x] Professional UI/UX
- [x] PDF export

### 🚧 Phase 2 (In Progress)
- [ ] Database integration
- [ ] User authentication
- [ ] Patient management
- [ ] Prescription history

### 📅 Phase 3 (Planned)
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Multi-clinic support
- [ ] Mobile app

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI, Google Gemini, Anthropic Claude
- **Database**: Supabase (PostgreSQL)
- **PDF**: jsPDF
- **Deployment**: Vercel

## 📖 Documentation

- [Installation Guide](./docs/installation.md)
- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing](./CONTRIBUTING.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md).

## 📄 License

MIT License - see [LICENSE](./LICENSE)

## 👨‍💻 Author

**Kumar Vaibhav**
- GitHub: [@vaibhaviimcal-web](https://github.com/vaibhaviimcal-web)
- Email: vaibhav.iimcal@gmail.com

## 🙏 Acknowledgments

- OpenAI for GPT-4 API
- Google for Gemini API
- Anthropic for Claude API
- Vercel for hosting platform

---

**⭐ Star this repo if you find it useful!**