"use client";

import { useState } from "react";

// Define types for the chat messages
type Message = {
  role: "user" | "bot";
  content: string;
};

// Static responses for the chatbot
const chatbotResponses: Record<string, string> = {
  hello: "Hi there! How can I assist you today?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I'm ChatBot! Your virtual assistant.",
  bye: "Goodbye! Have a great day!",
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]); // Track the chat history
  const [input, setInput] = useState<string>(""); // Track user input

  const userMessages: Message = { role: "user", content: input.trim() };
  setMessages((prev) => [...prev, userMessages]);

  const botMessages: Message = {
    role: "bot",
    content: "im sorry, can you rephrase?",
  };
  setMessages((prev) => [...prev, botMessages]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Simple Chatbot</h1>
        <div className="h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div key={index}>{message.content}</div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              Start the conversation by saying "Hello".
            </p>
          )}
        </div>
        <div className="flex">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            value={input}
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button
            onClick={() => {
              handleMesseges();
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
