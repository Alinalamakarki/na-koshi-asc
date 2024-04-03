import MettingCard from '@/components/card/mettingCard';
import { cn } from '@/lib/utils';
import { mettingListData } from '@/placeholderdata/mettingList';

interface MettingListProps {
  className?: string;
}
export default function MettingList({ className }: MettingListProps) {
  return (
    <div
      className={cn(
        'gap-2 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
      {mettingListData.map((item: MettingListType, idx) => (
        <MettingCard key={idx} item={item} />
      ))}
    </div>
  );
}
