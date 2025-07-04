"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Dumbbell,
  Target,
  Users,
  Calendar,
  Settings,
} from "lucide-react";
import ImageCarusel from "../components/functions/ImgSlider";

const MesoShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const screenshots = [
    {
      id: 1,
      title: "Main Dashboard",
      description:
        "Your fitness journey starts here with organized mesocycles and easy navigation",
      image: "/api/placeholder/300/600",
      features: [
        "Mesocycles",
        "Current Workout",
        "Templates",
        "Profile Settings",
      ],
    },
    {
      id: 2,
      title: "Workout Tracking",
      description:
        "Detailed exercise logging with weight, reps, and progress tracking",
      image: "/api/placeholder/300/600",
      features: [
        "Exercise Tracking",
        "Weight Logging",
        "Rep Counting",
        "Progress Notes",
      ],
    },
    {
      id: 3,
      title: "Workout Templates",
      description:
        "Pre-built workout templates for different muscle groups and training styles",
      image: "/api/placeholder/300/600",
      features: [
        "Muscle Group Focus",
        "5x/week Programs",
        "Customizable Templates",
      ],
    },
    {
      id: 4,
      title: "Custom Planning",
      description:
        "Create personalized mesocycles with custom muscle group combinations",
      image: "/api/placeholder/300/600",
      features: [
        "Custom Mesocycles",
        "Muscle Group Selection",
        "Flexible Planning",
      ],
    },
    {
      id: 5,
      title: "User Profile",
      description:
        "Manage your profile and app settings for a personalized experience",
      image: "/api/placeholder/300/600",
      features: [
        "Profile Management",
        "Auto Weight Updates",
        "Exercise Settings",
      ],
    },
  ];

  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Mesocycle Training",
      description:
        "Structured periodization for optimal muscle growth and strength gains",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Detailed logging of weights, reps, and workout performance",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Customizable workout templates and training frequencies",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Smart Features",
      description:
        "Auto weight updates and intelligent exercise recommendations",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % screenshots.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, screenshots.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <div className="min-h-max bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">M</span>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              MESO
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your fitness journey with structured mesocycle
              training, intelligent progress tracking, and personalized workout
              planning.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Smartphone className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Mobile App</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">
                  Fitness Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Screenshots Carousel */}
      <div className="relative py-20 bg-black/20">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience MESO
            </h2>
            <p className="text-gray-300 text-xl">
              Explore the powerful features that make MESO your ultimate fitness
              companion
            </p>
          </div>

          <ImageCarusel />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-300 text-xl">
              Everything you need for effective strength training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 h-full border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-white">M</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              MESO - Mesocycle Training Made Simple
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 MESO. Empowering your fitness journey with intelligent
              training.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MesoShowcase;
