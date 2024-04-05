import MettingList from '@/section/MettingLists';
import { headers } from 'next/headers';
export default function Home() {
  headers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <MettingList />
      <p className="gap-2 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" />
    </main>
  );
}
