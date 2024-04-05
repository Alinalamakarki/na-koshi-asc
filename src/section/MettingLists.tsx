import MettingCard from '@/components/card/mettingCard';
import { cn } from '@/lib/utils';

interface MettingListProps {
  className?: string;
}
export default async function MettingList({ className }: MettingListProps) {
  const data = await fetch(
    'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json',
    { cache: 'force-cache', next: { tags: ['metting-lists'] } },
  );
  const mettingListData: Array<MettingListType> = await data.json();
  return (
    <div
      className={cn(
        'gap-2 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
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
