import clsx from 'clsx';

export default function FullWidth({ children, fullWidth = true }: { children: React.ReactNode, fullWidth?: boolean }) {

  return (
    <div className={clsx(
              fullWidth ? 'relative w-screen ml-[-50vw] left-1/2 px-1 sm:px-4 md:px-8 lg:px-12 xl:px-24 shadow-2xl' : 'w-full'
            )}>
      {children}
    </div>
  )
}
