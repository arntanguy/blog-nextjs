import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Arnaud TANGUY',
};

export default function Page() {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center m-4">Portfolio</h1>
      </div>
    </>
  );
}
