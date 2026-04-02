import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructName = () => {
    return `${formData.firstName} ${formData.lastName}`.trim();
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.message) {
      alert("Please fill your first name and message at least!");
      return;
    }
    const name = constructName();
    const companyInfo = formData.companyName
      ? `\nCompany: ${formData.companyName}\nIndustry: ${formData.industry}`
      : "";
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.email || "No email provided"}${companyInfo}`
    );
    window.open(
      `mailto:muhammadnuryasinalkhafid@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  const handleSendWA = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.message) {
      alert("Please fill your first name and message at least!");
      return;
    }
    const name = constructName();
    const companyInfo = formData.companyName
      ? `\nCompany: ${formData.companyName} (${formData.industry})`
      : "";
    const text = encodeURIComponent(
      `Hi Nuryasin, I am ${name} (${formData.email || "No email"}).${companyInfo}\n\n${
        formData.message
      }`
    );
    window.open(`https://wa.me/6285741538970?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background border-t-2 border-border py-24 md:py-32"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
        
        {/* ════ LEFT COLUMN: Text Info ════ */}
        <div className="flex flex-col w-full pt-4">
          <h2
            className="font-serif font-black text-foreground leading-[1.1] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Contact Me
          </h2>
          <p className="text-[1.05rem] text-muted-foreground font-medium mb-12 max-w-md leading-relaxed">
            Tell me a little bit about who you are, and let's discover how my data 
            skills can bring value to your team.
          </p>

          <h3 className="font-serif text-xl font-bold text-foreground mb-4">
            Talk to me today
          </h3>
          <ol className="list-decimal list-outside ml-5 text-base font-medium text-muted-foreground flex flex-col gap-3 mb-12 max-w-md">
            <li className="pl-2">Understanding how my analytical capabilities may fulfill your needs</li>
            <li className="pl-2">Discover the pipelines and get answers to your data questions</li>
            <li className="pl-2">Get a customized consultation</li>
          </ol>

          <h3 className="font-serif text-xl font-bold text-foreground mb-6">
            Find Me Let's Connect
          </h3>
          <div className="flex flex-col gap-5">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 neo-card bg-highlight flex items-center justify-center shrink-0">
                <MapPin size={20} strokeWidth={2.5} className="text-foreground" />
              </div>
              <span className="text-[0.95rem] font-bold text-foreground font-mono">
                Purbalingga, Indonesia
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 neo-card bg-highlight flex items-center justify-center shrink-0">
                <Phone size={20} strokeWidth={2.5} className="text-foreground" />
              </div>
              <a
                href="https://wa.me/6285741538970"
                target="_blank"
                rel="noreferrer"
                className="text-[0.95rem] font-bold text-foreground font-mono hover:text-primary transition-colors"
              >
                (62) 857-4153-8970
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 neo-card bg-highlight flex items-center justify-center shrink-0">
                <Mail size={20} strokeWidth={2.5} className="text-foreground" />
              </div>
              <a
                href="mailto:muhammadnuryasinalkhafid@gmail.com"
                className="text-[0.95rem] font-bold text-foreground font-mono hover:text-primary transition-colors"
              >
                muhammadnuryasinalkhafid<wbr/>@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ════ RIGHT COLUMN: Form Card ════ */}
        <div className="neo-card bg-primary p-6 md:p-10 lg:p-12 w-full lg:-mt-4">
          <form className="flex flex-col gap-6 w-full">
            
            {/* Name Fields Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-black text-foreground flex gap-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full p-3.5 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 font-medium text-foreground placeholder:text-muted-foreground/50 transition-all font-mono text-sm"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-black text-foreground flex gap-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full p-3.5 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 font-medium text-foreground placeholder:text-muted-foreground/50 transition-all font-mono text-sm"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-foreground flex gap-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-3.5 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 font-medium text-foreground placeholder:text-muted-foreground/50 transition-all font-mono text-sm"
                required
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-foreground flex gap-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter Your Company Name"
                className="w-full p-3.5 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 font-medium text-foreground placeholder:text-muted-foreground/50 transition-all font-mono text-sm"
                required
              />
            </div>

            {/* Industry Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-foreground flex gap-1">
                Industry <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 font-medium text-[0.9rem] text-foreground placeholder:text-muted-foreground/50 transition-all font-mono appearance-none"
                  required
                >
                  <option value="" disabled hidden>Select your industry</option>
                  <option value="Technology">Technology / IT</option>
                  <option value="Finance">Finance / Banking</option>
                  <option value="Healthcare">Healthcare / Medical</option>
                  <option value="Retail">Retail / E-Commerce</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing / Logistics</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-foreground flex gap-1">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                rows="6"
                className="w-full p-3.5 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 font-medium text-foreground placeholder:text-muted-foreground/50 transition-all resize-none font-mono text-sm"
                required
              ></textarea>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                type="button"
                onClick={handleSendEmail}
                className="neo-btn bg-highlight text-foreground font-black px-6 py-3 border-[2.5px] border-border hover:translate-y-[-2px] hover:-translate-x-0.5 active:translate-y-px transition-all flex items-center gap-2 text-sm"
              >
                <Send size={16} strokeWidth={3} />
                Send via Email
              </button>
              
              <button
                type="button"
                onClick={handleSendWA}
                className="neo-btn bg-card text-foreground font-black px-6 py-3 border-[2.5px] border-border hover:translate-y-[-2px] hover:-translate-x-0.5 active:translate-y-px transition-all flex items-center gap-2 text-sm"
              >
                <MessageCircle size={16} strokeWidth={3} />
                WhatsApp
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
};