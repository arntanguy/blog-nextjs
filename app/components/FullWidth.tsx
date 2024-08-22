import clsx from 'clsx';

export default function FullWidth({ children, fullWidth = true, padding = true }: { children: React.ReactNode, fullWidth?: boolean, padding?: boolean }) {

  return (
    <div className={clsx(
              fullWidth ? 'relative w-[90vw] ml-[-45vw] sm:w-[95vw] sm:ml-[-47.5vw] left-1/2 overflow-hidden' : 'w-full',
              padding && 'sm:px-4 md:px-8 lg:px-20 xl:px-50'
            )}>
      {children}
    </div>
  )
}
