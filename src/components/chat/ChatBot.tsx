"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "ai/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2, 
  Maximize2, 
  Bot, 
  User, 
  Loader2, 
  Stethoscope, 
  Heart, 
  Clock, 
  Phone,
  AlertCircle,
  RefreshCw,
  ExternalLink,
  MapPin,
  Calendar
} from "lucide-react";

const quickQuestions = [
  {
    question: "What are your clinic hours?",
    response: "Our clinic hours are:\n• Monday - Saturday: 9:00 AM - 8:00 PM\n• Sunday: 10:00 AM - 6:00 PM\n• Emergency services available 24/7\n\nCall us at +91 9022920992 for appointments!"
  },
  {
    question: "How do I book an appointment?",
    response: "You can book an appointment in several ways:\n• Call us at +91 9022920992\n• Visit our clinic at Success Square, Kothrud, Pune\n• Use the contact form on our website\n• WhatsApp us for quick booking\n\nWe'll confirm your appointment within 2 hours!"
  },
  {
    question: "What services do you offer for children?",
    response: "Dr. Rachha specializes in pediatric dentistry:\n• Anxiety-free dental treatments\n• Preventive care and education\n• Tooth fillings and cleanings\n• Emergency dental care\n• Fun, child-friendly environment\n\nWe make dental visits enjoyable for kids!"
  },
  {
    question: "Where is your clinic located?",
    response: "📍 Soulful Dental Care\nOffice No.308, 3rd Floor\nSuccess Square, Above Tanishq Showroom\nNear Axis Bank, Kothrud\nPune - 411038\n\nEasy parking available. We're just 2 minutes from Kothrud Bus Stand!"
  },
  {
    question: "Do you handle dental emergencies?",
    response: "Yes! We provide 24/7 emergency dental services:\n• Severe tooth pain\n• Broken or knocked-out teeth\n• Dental trauma\n• Swelling or infections\n\n🚨 Emergency Contact: +91 9022920992\nDr. Rachha is available for urgent cases anytime!"
  },
  {
    question: "What makes Dr. Rachha special?",
    response: "Dr. Swapnil K. Rachha brings:\n• 17+ years of experience\n• MDS in Pediatric Dentistry\n• 5000+ happy patients\n• 4.9★ patient rating\n• Child-friendly approach\n• Emergency medical training (PGD EMS)\n\nTrusted by families across Pune!"
  }
];

const clinicInfo = {
  phone: "+91 9022920992",
  address: "Success Square, Kothrud, Pune",
  hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
  emergency: "24/7 Emergency Services"
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [localMessages, setLocalMessages] = useState<Array<{id: string, role: 'user' | 'assistant', content: string, timestamp: Date}>>([]);
  const [localInput, setLocalInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Try to use the API first, fallback to local responses
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat API error:", error);
      setApiAvailable(false);
    },
    onResponse: () => {
      setApiAvailable(true);
    }
  });

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, localMessages, scrollToBottom]);

  // Add welcome message when chat opens
  useEffect(() => {
    if (isOpen && localMessages.length === 0 && messages.length === 0) {
      setLocalMessages([{
        id: 'welcome',
        role: 'assistant',
        content: "👋 Hello! I'm Dr. Rachha's assistant. How can I help you today?",
        timestamp: new Date()
      }]);
    }
  }, [isOpen, localMessages.length, messages.length]);

  const simulateTyping = useCallback((response: string, callback: () => void) => {
    setIsTyping(true);
    const typingTime = Math.min(response.length * 20, 2000); // Max 2 seconds
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, typingTime);
  }, []);

  const handleLocalSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!localInput.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: localInput,
      timestamp: new Date()
    };

    setLocalMessages(prev => [...prev, userMessage]);

    // Find matching response
    const matchedQuestion = quickQuestions.find(q => 
      localInput.toLowerCase().includes(q.question.toLowerCase().split(' ')[0]) ||
      q.question.toLowerCase().includes(localInput.toLowerCase())
    );

    const response = matchedQuestion ? matchedQuestion.response : 
      "Thank you for your question! For detailed information, please call us at +91 9022920992 or visit our clinic. Dr. Rachha and our team are always happy to help! 😊";

    simulateTyping(response, () => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: response,
        timestamp: new Date()
      };
      setLocalMessages(prev => [...prev, assistantMessage]);
    });

    setLocalInput("");
  }, [localInput, simulateTyping]);

  const handleQuickQuestion = useCallback((questionObj: typeof quickQuestions[0]) => {
    if (apiAvailable && !error) {
      handleInputChange({ target: { value: questionObj.question } } as any);
      setTimeout(() => {
        const form = document.querySelector('#chat-form') as HTMLFormElement;
        form?.requestSubmit();
      }, 100);
    } else {
      // Use local response
      const userMessage = {
        id: Date.now().toString(),
        role: 'user' as const,
        content: questionObj.question,
        timestamp: new Date()
      };

      setLocalMessages(prev => [...prev, userMessage]);

      simulateTyping(questionObj.response, () => {
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant' as const,
          content: questionObj.response,
          timestamp: new Date()
        };
        setLocalMessages(prev => [...prev, assistantMessage]);
      });
    }
  }, [apiAvailable, error, handleInputChange, simulateTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const currentMessages = apiAvailable && !error ? messages : localMessages;
  const currentInput = apiAvailable && !error ? input : localInput;
  const currentHandleInputChange = apiAvailable && !error ? handleInputChange : 
    (e: any) => setLocalInput(e.target.value);
  const currentHandleSubmit = apiAvailable && !error ? handleSubmit : handleLocalSubmit;
  const currentIsLoading = apiAvailable && !error ? isLoading : isTyping;

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <Button
          onClick={toggleChat}
          className="btn-elegant w-16 h-16 rounded-full shadow-luxury relative overflow-hidden group"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="h-6 w-6" />
                {/* Pulse Animation */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className={`w-96 max-w-[calc(100vw-3rem)] ${isMinimized ? 'h-16' : 'h-[600px]'} elegant-card border-warm-gold shadow-luxury transition-all duration-300`}>
              {/* Chat Header */}
              <CardHeader className="p-4 border-b border-warm-gold/20 bg-gradient-to-r from-navy to-sage-green text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-warm-gold flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Stethoscope className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg font-semibold">Dr. Rachha's Assistant</CardTitle>
                      <div className="flex items-center space-x-2 text-sm opacity-90">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>{apiAvailable && !error ? "AI Powered" : "Always Available"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsMinimized(!isMinimized)}
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {!isMinimized && (
                <CardContent className="p-0 flex flex-col h-[536px]">
                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                    {/* API Status Indicator */}
                    {!apiAvailable && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center"
                      >
                        <div className="flex items-center justify-center space-x-2 text-yellow-700">
                          <AlertCircle className="h-4 w-4" />
                          <span className="text-sm">Using offline responses</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Welcome Message & Quick Actions */}
                    {currentMessages.length <= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        {/* Clinic Info Cards */}
                        <div className="grid grid-cols-2 gap-2">
                          <motion.button
                            onClick={() => window.open(`tel:${clinicInfo.phone}`, '_blank')}
                            className="elegant-card p-3 text-left hover:border-warm-gold transition-all group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Phone className="h-4 w-4 text-warm-gold" />
                              <span className="text-xs font-semibold text-navy">Call Now</span>
                            </div>
                            <p className="text-xs text-warm-gray">{clinicInfo.phone}</p>
                          </motion.button>

                          <motion.button
                            onClick={() => {
                              const query = encodeURIComponent("Success Square, Kothrud, Pune");
                              window.open(`https://maps.google.com/maps?q=${query}`, '_blank');
                            }}
                            className="elegant-card p-3 text-left hover:border-warm-gold transition-all group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <MapPin className="h-4 w-4 text-sage-green" />
                              <span className="text-xs font-semibold text-navy">Location</span>
                            </div>
                            <p className="text-xs text-warm-gray">Get Directions</p>
                          </motion.button>
                        </div>

                        {/* Quick Questions */}
                        <div className="space-y-2">
                          <p className="text-xs text-warm-gray text-center font-medium">Popular Questions:</p>
                          <div className="space-y-2">
                            {quickQuestions.slice(0, 4).map((item, index) => (
                              <motion.button
                                key={item.question}
                                onClick={() => handleQuickQuestion(item)}
                                className="w-full text-left p-3 rounded-lg border border-warm-gold/30 hover:bg-warm-gold/10 transition-colors"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="text-sm text-navy">{item.question}</span>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Chat Messages */}
                    {currentMessages.map((message, index) => (
                      <motion.div
                        key={message.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start space-x-3 ${
                          message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "user" 
                            ? "bg-sage-green" 
                            : "bg-warm-gold"
                        }`}>
                          {message.role === "user" ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        
                        <div className={`elegant-card p-3 max-w-xs ${
                          message.role === "user" 
                            ? "bg-sage-green text-white" 
                            : "bg-white"
                        }`}>
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">
                            {message.content}
                          </p>
                          {/* {message.timestamp && (
                            <p className="text-xs opacity-60 mt-1">
                              {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </p>
                          )} */}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {currentIsLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-warm-gold flex items-center justify-center">
                          <Loader2 className="h-4 w-4 text-white animate-spin" />
                        </div>
                        <div className="elegant-card p-3">
                          <div className="flex space-x-1">
                            {[1, 2, 3].map((dot) => (
                              <motion.div
                                key={dot}
                                className="w-2 h-2 bg-warm-gold rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: dot * 0.2,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-4 border-t border-warm-gold/20 bg-soft-white rounded-b-lg">
                    <form 
                      id="chat-form" 
                      onSubmit={currentHandleSubmit} 
                      className="flex space-x-2"
                    >
                      <Input
                        value={currentInput}
                        onChange={currentHandleInputChange}
                        placeholder="Ask about appointments, services, or dental care..."
                        className="flex-1 elegant-input"
                        disabled={currentIsLoading}
                      />
                      <Button
                        type="submit"
                        disabled={currentIsLoading || !currentInput.trim()}
                        className="btn-elegant"
                      >
                        {currentIsLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </form>
                    
                    <div className="mt-2 flex items-center justify-between text-xs text-warm-gray">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-3 w-3" />
                        <span>Dr. Rachha's Expert Care</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {apiAvailable && !error ? (
                          <Badge className="bg-green-100 text-green-700 text-xs">AI Online</Badge>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs">Offline Mode</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot; 