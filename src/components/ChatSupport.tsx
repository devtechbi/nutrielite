import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  hello: "Hello! Welcome to our 24/7 support. How can I help you today?",
  hi: "Hi there! How can I assist you with your fitness journey?",
  order: "For order-related queries, please share your order ID and I'll help you track it. You can also check your order status in the Profile section.",
  shipping: "We offer free shipping on orders above ₹999. Standard delivery takes 3-5 business days. Express delivery is available for ₹149.",
  return: "We have a 7-day return policy for unopened products. Please initiate a return request from your Profile > Orders section.",
  payment: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery. All transactions are 100% secure.",
  protein: "We have a wide range of proteins including Whey Isolate, Whey Blend, Casein, Plant-based, and more. Check our Shop section for all options!",
  creatine: "Our creatine collection includes Monohydrate, HCL, and blended formulas. All are lab-tested for purity!",
  discount: "First-time users get 10% off! Orders above ₹2000 get free 100g Creatine, and orders above ₹5000 get a free Lifting Belt!",
  default: "Thanks for reaching out! Our team is here to help. Could you please provide more details about your query? You can ask about orders, shipping, returns, products, or payments.",
};

const getResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  for (const [key, response] of Object.entries(botResponses)) {
    if (lowerMsg.includes(key)) {
      return response;
    }
  }
  return botResponses.default;
};

export const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to 24/7 Support. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full sm:bottom-6 sm:right-6 sm:w-96 transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-[500px] sm:h-[480px] flex-col rounded-t-2xl sm:rounded-2xl border bg-background shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-xs opacity-80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition-colors hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? "bg-muted text-foreground rounded-bl-md"
                        : "bg-primary text-primary-foreground rounded-br-md"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="mt-1 text-[10px] opacity-60">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t bg-background p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
