import MettingCard from '@/components/card/mettingCard';
import { cn } from '@/lib/utils';

export async function getMettingLists() {
  try {
    const res = await fetch(
      'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json',
      { next: {revalidate: 2, tags: ['metting-lists'] } },
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
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
