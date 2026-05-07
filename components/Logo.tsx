import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Height of the logo in pixels (width scales proportionally). Default 36. */
  height?: number;
  priority?: boolean;
  label?: string;
};

// Aspect ratio of public/logo.png (1290 x 312 after trim).
const LOGO_RATIO = 1290 / 312;

export function Logo({ className, height = 36, priority = false, label = "BMI Checks" }: LogoProps) {
  const width = Math.round(height * LOGO_RATIO);
  return (
    <Image
      src="/logo.png"
      alt={label}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={className}
    />
  );
}
