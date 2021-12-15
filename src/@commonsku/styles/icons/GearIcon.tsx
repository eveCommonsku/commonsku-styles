import React from "react"

export function GearIcon({
  color="#000000", 
  width, 
  mr,
  mt,
  style,
  ...props
}: React.PropsWithChildren<{
  color?:string, 
  width?:string, 
  mr?:number,
  mt?:number,
  style?: React.CSSProperties,
}>) {
  return (
      <svg
      viewBox="0 0 35 35"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      width={width}
      style={{display:"inline-block", verticalAlign: "top", marginRight: mr, marginTop: mt, ...style }}
      {...props}
    >
      <path fill="none" d="M.004 0h35v35h-35z" />
      <path
        d="M22.879 2.634V1.468l-1.13-.288a17.224 17.224 0 00-8.495 0l-1.13.288v3.31a13.966 13.966 0 00-3.07 1.752L6.151 4.877l-.79.815a16.666 16.666 0 00-4.258 7.289l-.32 1.128 2.901 1.655a13.417 13.417 0 000 3.475l-2.9 1.655.32 1.129A16.666 16.666 0 005.36 29.31l.791.815 2.901-1.653c.942.711 1.978 1.3 3.07 1.754v3.308l1.13.288c2.788.71 5.708.71 8.496 0l1.13-.288v-3.308a14.049 14.049 0 003.07-1.754l2.901 1.653.81-.815a16.85 16.85 0 004.257-7.288l.32-1.129-2.9-1.655c.15-1.154.15-2.321 0-3.475l2.9-1.655-.32-1.128a16.85 16.85 0 00-4.257-7.289l-.81-.815-2.9 1.653a14.049 14.049 0 00-3.071-1.753V2.634zm-2.995 1.214v3.064l1.036.337a11.025 11.025 0 013.88 2.217l.81.713 2.694-1.534a13.626 13.626 0 012.354 4.045l-2.674 1.53.226 1.07a10.923 10.923 0 010 4.422l-.226 1.07 2.674 1.53a13.626 13.626 0 01-2.354 4.046l-2.694-1.534-.81.713a11.025 11.025 0 01-3.88 2.217l-1.036.337v3.065a14.206 14.206 0 01-4.747 0V28.09l-1.054-.337a11.025 11.025 0 01-3.88-2.217l-.81-.713-2.675 1.534a13.681 13.681 0 01-2.374-4.045l2.675-1.53-.226-1.07a10.923 10.923 0 010-4.422l.226-1.07-2.675-1.53a13.681 13.681 0 012.374-4.046l2.674 1.534.81-.713a11.025 11.025 0 013.88-2.217l1.055-.337V3.848a14.206 14.206 0 014.747 0zm-2.373 5.657c-4.464 0-8.081 3.587-8.081 7.998 0 4.408 3.617 7.995 8.08 7.995 4.465 0 8.063-3.587 8.063-7.995 0-4.41-3.598-7.998-8.062-7.998zm0 3c2.787 0 5.067 2.233 5.067 4.998 0 2.762-2.28 4.996-5.067 4.996-2.807 0-5.086-2.234-5.086-4.996 0-2.765 2.28-4.999 5.086-4.999z"
        fill={color}
      />
    </svg>
  )
}

export default GearIcon;