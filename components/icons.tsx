import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M9 8.8c-.3 2.2 3.2 6 5.9 6.2.6 0 1.4-.3 1.4-1l-.3-1.2-1.6-.5-.9.8c-1-.3-2.6-1.9-2.9-2.9l.8-.9-.5-1.6-1.2-.3c-.5 0-.7.8-.7 1.4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

/* آیکون‌های بخش «چرا محاکو» */

export function FabricIcon(props: IconProps) {
  return (
    <svg {...base({ size: 32, ...props })}>
      <path d="M4 6c2.5 2 5.5 2 8 0s5.5-2 8 0M4 12c2.5 2 5.5 2 8 0s5.5-2 8 0M4 18c2.5 2 5.5 2 8 0s5.5-2 8 0" />
    </svg>
  );
}

export function NeedleIcon(props: IconProps) {
  return (
    <svg {...base({ size: 32, ...props })}>
      <path d="M19 5 8 16c-1.5 1.5-3.5 2.5-4.5 3.5.9-1.1 2-3 3.5-4.5L18 4" />
      <circle cx="18.5" cy="4.5" r="1.3" />
      <path d="M9 15c2-1 4-3 5-5" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base({ size: 32, ...props })}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base({ size: 32, ...props })}>
      <path d="M5 12a7 7 0 0 1 14 0" />
      <rect x="3.5" y="12" width="3.5" height="5.5" rx="1.5" />
      <rect x="17" y="12" width="3.5" height="5.5" rx="1.5" />
      <path d="M19 17.5c0 2-1.5 3-4 3" />
    </svg>
  );
}
