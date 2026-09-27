"use client";

import { useActionState, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

import { sendContactMessage } from "@/app/actions/contact";

const initialState = {
  status: "idle" as const,
  message: "",
  errors: {},
};

const initialValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );

  const [values, setValues] = useState(initialValues);

  /*
   * Clear the controlled inputs only after
   * a successful submission.
   */
  useEffect(() => {
    if (state.status === "success") {
      setValues(initialValues);
    }
  }, [state.status]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  const hasError = (field: keyof typeof values) =>
    Boolean(state.errors?.[field as "name" | "email" | "message"]);

  return (
    <form action={formAction}>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Full Name
          </label>

          <div className="relative">
            <User
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />

            <input
              id="contact-name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name"
              autoComplete="name"
              aria-invalid={hasError("name")}
              aria-describedby={
                state.errors?.name ? "contact-name-error" : undefined
              }
              className={`
                h-11
                w-full
                rounded-lg
                border
                bg-[#18181A]
                pl-10
                pr-4
                text-sm
                text-foreground
                outline-none
                placeholder:text-muted-foreground
                transition-colors
                focus:border-white/40
                ${
                  hasError("name")
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-white/10"
                }
              `}
            />
          </div>

          <FieldError
            id="contact-name-error"
            message={state.errors?.name}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email
          </label>

          <div className="relative">
            <Mail
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />

            <input
              id="contact-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="email"
              aria-invalid={hasError("email")}
              aria-describedby={
                state.errors?.email ? "contact-email-error" : undefined
              }
              className={`
                h-11
                w-full
                rounded-lg
                border
                bg-[#18181A]
                pl-10
                pr-4
                text-sm
                text-foreground
                outline-none
                placeholder:text-muted-foreground
                transition-colors
                focus:border-white/40
                ${
                  hasError("email")
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-white/10"
                }
              `}
            />
          </div>

          <FieldError
            id="contact-email-error"
            message={state.errors?.email}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>

          <div className="relative">
            <MessageSquare
              aria-hidden="true"
              className="absolute left-3 top-3 size-4 text-muted-foreground"
            />

            <textarea
              id="contact-message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              aria-invalid={hasError("message")}
              aria-describedby={
                state.errors?.message ? "contact-message-error" : undefined
              }
              className={`
                min-h-32
                w-full
                resize-none
                rounded-lg
                border
                bg-[#18181A]
                px-10
                py-3
                text-sm
                text-foreground
                outline-none
                placeholder:text-muted-foreground
                transition-colors
                focus:border-white/40
                ${
                  hasError("message")
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-white/10"
                }
              `}
            />
          </div>

          <FieldError
            id="contact-message-error"
            message={state.errors?.message}
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isPending}
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-white
              bg-transparent
              px-5
              text-sm
              font-medium
              text-foreground
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isPending ? (
              <>
                <Loader2
                  aria-hidden="true"
                  className="size-4 animate-spin"
                />
                Sending...
              </>
            ) : (
              <>
                <Send aria-hidden="true" className="size-4" />
                Send Message
              </>
            )}
          </button>

          {/* Form status */}
          <AnimatePresence mode="wait" initial={false}>
            {state.status !== "idle" && state.message && (
              <motion.div
                key={state.status}
                initial={{
                  opacity: 0,
                  y: -6,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
                role={state.status === "error" ? "alert" : "status"}
              >
                <div
                  className={`
                    mt-3
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    px-4
                    py-3
                    text-sm
                    ${
                      state.status === "success"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                        : "border-red-400/30 bg-red-400/10 text-red-400"
                    }
                  `}
                >
                  {state.status === "success" ? (
                    <CheckCircle2
                      aria-hidden="true"
                      className="size-5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      aria-hidden="true"
                      className="size-5 shrink-0"
                    />
                  )}

                  <span>{state.message}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0, y: -4 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-1.5 overflow-hidden text-xs text-red-400"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
