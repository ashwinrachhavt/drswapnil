# 🤖 AI Chatbot Setup Instructions

## Quick Setup

To enable the AI-powered chatbot on Dr. Rachha's website, you need to add your OpenAI API key:

### 1. Get OpenAI API Key
- Go to [OpenAI Platform](https://platform.openai.com/api-keys)
- Create an account or log in
- Generate a new API key

### 2. Add Environment Variable

Create a `.env.local` file in the project root with:

```bash
OPENAI_API_KEY=your_actual_api_key_here
```

### 3. Restart Development Server

```bash
npm run dev
```

## ✨ Features

### 🔄 **Intelligent Fallback System**
- **AI Mode**: When API key is configured, uses OpenAI for intelligent responses
- **Offline Mode**: When API unavailable, uses pre-programmed responses for common questions

### 💬 **Enhanced User Experience**
- **Smart Quick Questions**: Pre-defined answers for common queries
- **Typing Indicators**: Realistic typing simulation
- **Clinic Info Cards**: Direct call and location buttons
- **Status Indicators**: Shows AI Online/Offline mode
- **Elegant Animations**: Smooth, professional interactions

### 📱 **Professional Features**
- **24/7 Availability**: Always responsive, even without API
- **Emergency Contact**: Direct phone integration
- **Location Services**: Google Maps integration
- **Appointment Booking**: Clear call-to-action buttons

## 🎯 Offline Responses Cover:

- Clinic hours and scheduling
- Services for children
- Location and directions
- Emergency contact information
- Dr. Rachha's expertise and credentials
- General dental care questions

## 🚀 The chatbot works perfectly in both modes!

**Without API Key**: Professional responses with clinic information
**With API Key**: AI-powered personalized assistance

No setup required for basic functionality - the chatbot enhances the user experience immediately! 