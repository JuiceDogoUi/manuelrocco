interface PullQuoteProps {
  children: string;
  variant?: "accent" | "centered";
}

export function PullQuote({ children, variant = "accent" }: PullQuoteProps) {
  if (variant === "centered") {
    return (
      <blockquote className="my-16 py-8 text-center">
        <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
          &ldquo;{children}&rdquo;
        </p>
        <div className="mt-4 mx-auto w-16 h-1 bg-primary rounded-full" />
      </blockquote>
    );
  }

  return (
    <blockquote className="my-12 pl-6 md:pl-8 border-l-4 border-primary">
      <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}
