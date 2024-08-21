import clsx from 'clsx';

export default function FullWidth({ children, fullWidth = true, padding = true }: { children: React.ReactNode, fullWidth?: boolean, padding?: boolean }) {

  return (
    <div className={clsx(
              fullWidth ? 'relative w-screen ml-[-50vw] left-1/2' : 'w-full',
              padding && 'sm:px-4 md:px-8 lg:px-20 xl:px-50'
            )}>
      {children}
    </div>
  )
}
