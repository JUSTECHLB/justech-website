'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { MotionConfig } from 'framer-motion'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {/* reducedMotion="user" honours the OS setting: transform and layout
          animations are dropped, opacity fades still run. Applies to every
          framer-motion element on the site, not just the newer pages. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  )
}
