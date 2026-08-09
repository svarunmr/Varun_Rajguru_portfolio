const iconDefaults = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
  width: 18,
  height: 18,
  "aria-hidden": true,
  focusable: false,
};

export function GithubIcon(props) {
  return (
    <svg {...iconDefaults} {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2.25a9.75 9.75 0 0 0-3.083 19.001c.488.09.667-.212.667-.47v-1.83c-2.713.59-3.286-1.15-3.286-1.15-.444-1.127-1.085-1.428-1.085-1.428-.886-.606.067-.594.067-.594.98.069 1.497 1.007 1.497 1.007.871 1.493 2.286 1.062 2.843.812.088-.631.341-1.062.62-1.306-2.166-.247-4.444-1.083-4.444-4.82 0-1.065.38-1.936 1.006-2.62-.101-.247-.436-1.24.096-2.584 0 0 .821-.263 2.688.999A9.33 9.33 0 0 1 12 6.93a9.34 9.34 0 0 1 2.45.337c1.865-1.262 2.685-.999 2.685-.999.534 1.344.198 2.337.098 2.584.626.684 1.005 1.555 1.005 2.62 0 3.747-2.282 4.57-4.454 4.812.35.302.663.899.663 1.812v2.685c0 .261.176.565.672.469A9.75 9.75 0 0 0 12 2.25Z"
      />
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <svg {...iconDefaults} {...props}>
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 2.75v2M12 19.25v2M21.25 12h-2M4.75 12h-2M18.54 5.46l-1.42 1.42M6.88 17.12l-1.42 1.42M18.54 18.54l-1.42-1.42M6.88 6.88 5.46 5.46" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M20.25 15.1A8.25 8.25 0 0 1 8.9 3.75 8.25 8.25 0 1 0 20.25 15.1Z" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
