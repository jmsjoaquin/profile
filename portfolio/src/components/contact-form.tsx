"use client";

import { useId, useState } from "react";
import { NoiseBackground } from "@/components/ui/noise-background";

const noiseButtonClass =
  "h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-sm text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]";

const noiseButtonProps = {
  containerClassName: "w-fit rounded-full p-2",
  gradientColors: [
    "rgb(255, 100, 150)",
    "rgb(100, 150, 255)",
    "rgb(255, 200, 100)",
  ],
};

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor={nameId}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            Name
          </label>
          <input
            id={nameId}
            name="name"
            required
            className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-sm text-foreground outline-none transition focus:border-border focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor={emailId}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-sm text-foreground outline-none transition focus:border-border focus:ring-2 focus:ring-cyan-500/20"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor={messageId}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Project details
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition focus:border-border focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Timeline, scope, and any constraints."
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <NoiseBackground {...noiseButtonProps}>
          <button type="submit" className={noiseButtonClass}>
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send message <span aria-hidden="true">&rarr;</span>
              </>
            )}
          </button>
        </NoiseBackground>
        {status === "sent" && (
          <span className="text-xs text-muted-foreground">
            Message sent. I will reply soon.
          </span>
        )}
        {status === "error" && (
          <span className="text-xs text-red-400">
            Something went wrong. Try email instead.
          </span>
        )}
      </div>
    </form>
  );
}
