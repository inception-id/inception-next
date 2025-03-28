import { cn } from "@/lib/utils";

type TypographyH2Props = {
  className?: string;
  children: React.ReactNode;
};

export function TypographyH2({ className, children }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}
