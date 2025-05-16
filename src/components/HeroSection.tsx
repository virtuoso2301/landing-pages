import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import ChatbotModal from "@/components/ChatbotModal";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 animate-fade-in">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2 flex items-center gap-1">
            <Sparkles size={16} className="animate-pulse" />
            <span>AI-Powered Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-to-r from-blue-900 to-purple-800 leading-tight">
            Your Smart Assistant for All Things CodeKrafters
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Get instant answers, support, and guidance—24/7—with our intelligent chatbot designed to enhance your CodeKrafters experience.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 rounded-md flex items-center gap-2 text-lg transform transition-all duration-300 hover:scale-105 text-lg"
              >
                <MessageCircle size={20} />
                Chat Now
                <ArrowRight size={18} className="ml-1 animate-bounce" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ChatbotModal />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
              <div className="bg-white rounded-full p-6 shadow-lg transform transition-all duration-500 hover:scale-110">
                <MessageCircle size={100} className="text-gradient-to-r from-blue-600 to-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
        <div className="w-48 h-48 bg-blue-100 rounded-full absolute -bottom-24 -left-12 opacity-50"></div>
        <div className="w-64 h-64 bg-purple-100 rounded-full absolute -bottom-32 left-1/4 opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroSection;