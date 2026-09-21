import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "uchohan804@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=uchohan804@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+92 324 43 662 43",
    href: "https://wa.me/923244366243",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, PK",
    href: null,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  // ============================================================
  // HANDLE FORM SUBMIT
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* ========================================================
          PREMIUM ANIMATED BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large primary glow */}

        <div className="absolute top-[10%] left-[10%] w-[420px] h-[420px] rounded-full bg-primary/10 blur-[120px] animate-contact-glow" />

        {/* Large secondary glow */}

        <div className="absolute bottom-[10%] right-[10%] w-[360px] h-[360px] rounded-full bg-highlight/10 blur-[120px] animate-contact-glow-reverse" />

        {/* Center glow */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.025] blur-[100px]" />

        {/* Animated technical grid */}

        <div className="absolute inset-0 contact-grid opacity-40" />

        {/* Horizontal light beam */}

        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-contact-beam" />

        {/* Floating particles */}

        <span className="absolute top-[18%] left-[12%] w-1 h-1 rounded-full bg-primary/70 animate-contact-particle" />

        <span className="absolute top-[32%] right-[15%] w-1.5 h-1.5 rounded-full bg-highlight/60 animate-contact-particle-delay" />

        <span className="absolute bottom-[22%] left-[20%] w-1.5 h-1.5 rounded-full bg-primary/50 animate-contact-particle" />

        <span className="absolute bottom-[15%] right-[22%] w-1 h-1 rounded-full bg-highlight/70 animate-contact-particle-delay" />

        <span className="absolute top-[55%] left-[7%] w-1 h-1 rounded-full bg-primary/60 animate-contact-particle-slow" />

        <span className="absolute top-[70%] right-[8%] w-1 h-1 rounded-full bg-primary/50 animate-contact-particle-slow" />

        {/* Decorative rings */}

        <div className="absolute top-[15%] right-[8%] w-32 h-32 border border-primary/10 rounded-full animate-contact-ring" />

        <div className="absolute bottom-[15%] left-[8%] w-24 h-24 border border-highlight/10 rounded-full animate-contact-ring-delay" />
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}

      <div className="container mx-auto px-6 relative z-10">
        {/* ======================================================
            PREMIUM SECTION HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}

          <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl overflow-hidden animate-contact-card">
              {/* Badge glow */}

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-contact-shine" />

              {/* Icon */}

              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-contact-sparkle" />

                <span className="absolute inset-0 rounded-full border border-primary/30 animate-contact-ring-small" />
              </div>

              <span className="relative text-secondary-foreground text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                Get In Touch
              </span>
            </div>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mb-6
              text-secondary-foreground
              animate-contact-heading
            "
          >
            Let's build{" "}
            <span className="relative inline-block font-serif italic font-normal text-white">
              something great.
              {/* Heading underline */}
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-contact-line" />
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-muted-foreground
              text-base
              md:text-lg
              leading-8
              animate-contact-description
            "
          >
            Have a project in mind? Send me a message and let's discuss how we
            can work together.
          </p>

          {/* Decorative divider */}

          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />

            <span className="w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_15px_hsl(var(--primary)/0.8)] animate-pulse" />

            <span className="w-20 h-px bg-primary/30" />

            <span className="w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_15px_hsl(var(--primary)/0.8)] animate-pulse" />

            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* ======================================================
            MAIN CONTACT GRID
        ====================================================== */}

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* ====================================================
              CONTACT FORM
          ==================================================== */}

          <div className="relative group animate-contact-card">
            {/* Outer animated glow */}

            <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-primary/30 via-primary/5 to-highlight/20 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-700" />

            {/* Card */}

            <div
              className="
                relative
                glass
                p-8
                rounded-3xl
                border
                border-primary/20
                bg-background/30
                backdrop-blur-2xl
                overflow-hidden
                transition-all
                duration-700
                group-hover:border-primary/40
                group-hover:-translate-y-1
              "
            >
              {/* Card shine */}

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.035] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms]" />

              {/* Top decorative line */}

              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Form Header */}

              <div className="relative text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold text-secondary-foreground">
                  Send a Message
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  Tell me a little about your project.
                </p>
              </div>

              {/* ==================================================
                  FORM
              ================================================== */}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* ==================================================
                    NAME
                ================================================== */}

                <div className="group/field">
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-sm
                      font-medium
                      mb-2
                      text-center
                      text-secondary-foreground
                    "
                  >
                    Name
                  </label>

                  <div className="relative">
                    {/* Focus glow */}

                    <div className="absolute -inset-[1px] rounded-xl bg-primary/30 opacity-0 blur-sm transition-opacity duration-300 focus-within:opacity-100" />

                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name..."
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="
                        relative
                        w-full
                        px-4
                        py-3
                        bg-surface/80
                        rounded-xl
                        border
                        border-border/70
                        focus:border-primary/70
                        focus:ring-1
                        focus:ring-primary/40
                        outline-none
                        transition-all
                        duration-300
                        text-center
                        placeholder:text-muted-foreground/50
                        hover:border-primary/30
                      "
                    />
                  </div>
                </div>

                {/* ==================================================
                    EMAIL
                ================================================== */}

                <div className="group/field">
                  <label
                    htmlFor="email"
                    className="
                      block
                      text-sm
                      font-medium
                      mb-2
                      text-center
                      text-secondary-foreground
                    "
                  >
                    Email
                  </label>

                  <div className="relative">
                    <div className="absolute -inset-[1px] rounded-xl bg-primary/30 opacity-0 blur-sm transition-opacity duration-300 focus-within:opacity-100" />

                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="
                        relative
                        w-full
                        px-4
                        py-3
                        bg-surface/80
                        rounded-xl
                        border
                        border-border/70
                        focus:border-primary/70
                        focus:ring-1
                        focus:ring-primary/40
                        outline-none
                        transition-all
                        duration-300
                        text-center
                        placeholder:text-muted-foreground/50
                        hover:border-primary/30
                      "
                    />
                  </div>
                </div>

                {/* ==================================================
                    MESSAGE
                ================================================== */}

                <div className="group/field">
                  <label
                    htmlFor="message"
                    className="
                      block
                      text-sm
                      font-medium
                      mb-2
                      text-center
                      text-secondary-foreground
                    "
                  >
                    Message
                  </label>

                  <div className="relative">
                    <div className="absolute -inset-[1px] rounded-xl bg-primary/30 opacity-0 blur-sm transition-opacity duration-300 focus-within:opacity-100" />

                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="
                        relative
                        w-full
                        px-4
                        py-3
                        bg-surface/80
                        rounded-xl
                        border
                        border-border/70
                        focus:border-primary/70
                        focus:ring-1
                        focus:ring-primary/40
                        outline-none
                        transition-all
                        duration-300
                        resize-none
                        text-center
                        placeholder:text-muted-foreground/50
                        hover:border-primary/30
                      "
                    />
                  </div>
                </div>

                {/* ==================================================
                    SEND BUTTON
                ================================================== */}

                <div className="relative group/button">
                  {/* Button glow */}

                  <div className="absolute -inset-1 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />

                  <div className="relative overflow-hidden rounded-xl">
                    {/* Animated shine */}

                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />

                    <Button
                      className="
                        relative
                        z-0
                        w-full
                        transition-all
                        duration-500
                        hover:scale-[1.015]
                      "
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-3">
                          <span className="w-5 h-5 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                        </span>
                      )}
                    </Button>
                  </div>
                </div>

                {/* ==================================================
                    SUBMIT STATUS
                ================================================== */}

                {submitStatus.type && (
                  <div
                    className={`
                      flex
                      items-center
                      justify-center
                      gap-3
                      p-4
                      rounded-xl
                      text-center
                      animate-contact-status
                      ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400 shadow-[0_0_25px_rgba(34,197,94,0.08)]"
                          : "bg-red-500/10 border border-red-500/20 text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.08)]"
                      }
                    `}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 animate-contact-success-icon" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}

                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>

              {/* Bottom decorative dots */}

              <div className="flex justify-center gap-1.5 mt-7 opacity-40">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="w-1 h-1 rounded-full bg-primary" />
              </div>
            </div>
          </div>

          {/* ====================================================
              CONTACT INFORMATION
          ==================================================== */}

          <div className="space-y-6 animate-contact-card-delay">
            {/* ==================================================
                CONTACT INFORMATION CARD
            ================================================== */}

            <div className="relative group">
              {/* Glow */}

              <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-highlight/20 via-primary/10 to-primary/20 opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-700" />

              <div
                className="
                  relative
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-primary/20
                  bg-background/30
                  backdrop-blur-2xl
                  overflow-hidden
                  transition-all
                  duration-700
                  group-hover:border-primary/40
                  group-hover:-translate-y-1
                "
              >
                {/* Shine */}

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.035] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms]" />

                {/* Top line */}

                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                {/* Header */}

                <div className="text-center mb-7">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold text-secondary-foreground">
                    Contact Information
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    Choose your preferred way to connect.
                  </p>
                </div>

                {/* Contact Items */}

                <div className="space-y-4">
                  {contactInfo.map((item, i) =>
                    item.href ? (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          relative
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-3
                          p-5
                          rounded-2xl
                          border
                          border-transparent
                          hover:border-primary/20
                          hover:bg-primary/[0.04]
                          transition-all
                          duration-500
                          group/item
                          overflow-hidden
                        "
                      >
                        {/* Item shine */}

                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.05] to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />

                        {/* Icon */}

                        <div
                          className="
                            relative
                            w-14
                            h-14
                            rounded-2xl
                            bg-primary/10
                            border
                            border-primary/10
                            flex
                            items-center
                            justify-center
                            group-hover/item:bg-primary/20
                            group-hover/item:border-primary/30
                            group-hover/item:scale-110
                            group-hover/item:-translate-y-1
                            transition-all
                            duration-500
                          "
                        >
                          <item.icon className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />

                          <span className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-500" />
                        </div>

                        {/* Content */}

                        <div className="relative text-center">
                          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                            {item.label}
                          </div>

                          <div className="font-medium text-secondary-foreground">
                            {item.value}
                          </div>
                        </div>

                        {/* Arrow */}

                        <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-muted-foreground/40 group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300" />
                      </a>
                    ) : (
                      <div
                        key={i}
                        className="
                          relative
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-3
                          p-5
                          rounded-2xl
                          border
                          border-transparent
                          hover:border-primary/20
                          hover:bg-primary/[0.04]
                          transition-all
                          duration-500
                          group/item
                        "
                      >
                        {/* Icon */}

                        <div
                          className="
                            relative
                            w-14
                            h-14
                            rounded-2xl
                            bg-primary/10
                            border
                            border-primary/10
                            flex
                            items-center
                            justify-center
                            group-hover/item:bg-primary/20
                            group-hover/item:border-primary/30
                            group-hover/item:scale-110
                            transition-all
                            duration-500
                          "
                        >
                          <item.icon className="w-5 h-5 text-primary" />

                          <span className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-500" />
                        </div>

                        {/* Content */}

                        <div className="text-center">
                          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                            {item.label}
                          </div>

                          <div className="font-medium text-secondary-foreground">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>

                {/* Bottom decoration */}

                <div className="flex items-center justify-center gap-2 mt-6">
                  <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />

                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />

                  <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
                </div>
              </div>
            </div>

            {/* ==================================================
                AVAILABILITY CARD
            ================================================== */}

            <div className="relative group">
              {/* Animated availability glow */}

              <div className="absolute -inset-[1px] rounded-[26px] bg-green-500/10 opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-700" />

              <div
                className="
                  relative
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-primary/20
                  bg-background/30
                  backdrop-blur-2xl
                  overflow-hidden
                  transition-all
                  duration-700
                  group-hover:border-green-500/20
                  group-hover:-translate-y-1
                "
              >
                {/* Animated top line */}

                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

                {/* Availability */}

                <div className="flex items-center justify-center gap-3 mb-5">
                  {/* Status dot */}

                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-7 h-7 rounded-full border border-green-500/20 animate-contact-status-ring" />

                    <span className="absolute w-5 h-5 rounded-full bg-green-500/10 animate-pulse" />

                    <span className="relative w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
                  </div>

                  <span className="font-semibold text-secondary-foreground">
                    Currently Available
                  </span>
                </div>

                <p
                  className="
                    text-muted-foreground
                    text-sm
                    leading-7
                    text-center
                    max-w-md
                    mx-auto
                  "
                >
                  I'm currently open to new opportunities and exciting projects.
                  Whether you need a full-time engineer, let's talk!
                </p>

                {/* Bottom badge */}

                <div className="flex justify-center mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />

                    <span className="text-xs text-green-400/80 tracking-wide">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            BOTTOM DECORATIVE ELEMENT
        ====================================================== */}

        <div className="flex justify-center mt-20">
          <div className="relative flex items-center gap-4">
            <span className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent to-primary/20" />

            <div className="relative w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
              <span className="absolute inset-1 rounded-full border border-primary/10 animate-contact-ring-small" />

              <Send className="w-4 h-4 text-primary/60" />
            </div>

            <span className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent to-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};
