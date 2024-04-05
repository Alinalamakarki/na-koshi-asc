import MettingCard from '@/components/card/mettingCard';
import { cn } from '@/lib/utils';

interface MettingListProps {
  className?: string;
}
export default async function MettingList({ className }: MettingListProps) {
  const data = await fetch(
    'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/8d2e2f7c88565948eba992f080e7fb41be695b52/na-koshi-asc-metting-list.json',
    { next: { tags: ['metting-lists'] } },
  );
  const mettingListData: Array<MettingListType> = await data.json();
  return (
    <div className="gap-2 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {mettingListData.length ? (
        mettingListData.map((item: MettingListType, idx) => (
          <MettingCard key={idx} item={item} />
        ))
      ) : (
        <p>there aren&apos;t any metting</p>
      )}
    </div>
  );
}
