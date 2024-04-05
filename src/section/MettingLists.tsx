import { getMettingLists } from '@/app/(home)/ui/action';
import MettingCard from '@/components/card/mettingCard';
import { cn } from '@/lib/utils';


interface MettingListProps {
  className?: string;
}
export default async function MettingList({ className }: MettingListProps) {
  const mettingListData: Array<MettingListType> = await getMettingLists();

  return (
    <div
      className={cn(
        'gap-2 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
      {mettingListData.length ? (
        mettingListData.map((item, idx) => (
          <MettingCard key={idx} item={item} />
        ))
      ) : (
        <p>there aren&apos;t any metting</p>
      )}
    </div>
  );
}
