
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Sparkles, ArrowRight, Send } from "lucide-react";

const ChatbotModal = () => {
  const [messages, setMessages] = useState([
    { 
      sender: "bot",
      text: "Hi there! I'm the CodeKrafters assistant. How can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (inputMessage.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { sender: "user", text: inputMessage }]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          sender: "bot", 
          text: getBotResponse(inputMessage)
        }
      ]);
    }, 1500);
    
    setInputMessage("");
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("service") || lowerMessage.includes("offer")) {
      return "We offer web development, mobile apps, UI/UX design, and DevOps services. Would you like to know more about any specific service?";
    } else if (lowerMessage.includes("pricing") || lowerMessage.includes("cost")) {
      return "Our pricing varies based on project requirements. I'd be happy to connect you with our team for a personalized quote!";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("talk to human")) {
      return "You can reach our team at contact@codekrafters.in or I can arrange a callback for you. Would you prefer that?";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I assist you with CodeKrafters' services today?";
    } else {
      return "Thanks for your message! This is a demo of our chatbot interface. In a real implementation, I'd provide a helpful response to your specific query.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center gap-2">
          <div className="relative">
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></span>
          </div>
          <h2 className="text-lg font-semibold">CodeKrafters Assistant</h2>
          <Sparkles size={16} className="text-yellow-300 animate-pulse" />
        </div>
        <div className="text-sm bg-blue-500 px-2 py-0.5 rounded-full text-xs font-medium">Online</div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-blue-50 to-white">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.sender === "bot" ? "flex animate-fade-in" : "flex justify-end animate-fade-in"}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {message.sender === "bot" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-2">
                <MessageCircle size={16} />
              </div>
            )}
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === "bot" 
                  ? "bg-white text-gray-800 shadow-md border-l-4 border-blue-500" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex mb-4 animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-2">
              <MessageCircle size={16} />
            </div>
            <div className="max-w-[80%] p-3 rounded-lg bg-white text-gray-800 shadow-md border-l-4 border-blue-500">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex gap-2">
          <Input 
            placeholder="Type your message..." 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <Button 
            onClick={handleSend}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Send size={18} />
          </Button>
        </div>
        <div className="flex items-center justify-center text-xs text-gray-500 mt-3 gap-1">
          <Sparkles size={12} className="text-blue-400" />
          <span>Powered by CodeKrafters AI</span>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
