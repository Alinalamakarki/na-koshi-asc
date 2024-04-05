import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { Image as Img } from '@nextui-org/image';
import { Divider } from '@nextui-org/divider';
import { Clock, Map } from 'lucide-react';
import { Tooltip } from '@nextui-org/tooltip';
import { NA_LOGO } from '@/lib/utils';
import {
  IconCalender,
  IconClock,
  IconDot,
  IconLocation,
} from '@/components/svg/icons/svgicons';
import { checkMeetingStatus } from '@/lib/metting-time-status';
interface MettingCardProps {
  item: MettingListType;
  isPressable?: boolean;
}
export default function MettingCard({
  item,
  isPressable = true,
}: MettingCardProps) {
  const status = checkMeetingStatus(item);
  return (
    <Card isPressable={isPressable} className="max-w-[400px]">
      <CardHeader className="flex gap-3 items-start">
        <Img
          alt={`${item.name} logo`}
          height={50}
          width={50}
          src={item?.img || NA_LOGO}
        />

        <div className="flex flex-col gap-2 w-[80%]">
          <div className="flex justify-between gap-3 items-center">
            <p className="text-md text-start line-clamp-3 text-ellipsis">
              {item?.name}{' '}
            </p>
            <IconDot
              content={status.message}
              danger={status.live === 0 && true}
              success={status.live === 2 && true}
              yellow={status.live === 1 && true}
              tooltipDir="bottom"
            />
          </div>
          <ul className="flex justify-between flex-col w-full pl-1.5 gap-3 flex-wrap">
            <div className="flex  justify-between w-full gap-3 gap-y-1 gap-x-12 flex-wrap">
              <li className="flex gap-1 items-center relative pl-4">
                <IconLocation className="h-4 w-4 absolute top-1 -left-2" />
                <p className="text-base font-bold text-default-500">
                  {item?.city}
                </p>
              </li>
              <li className="flex gap-1 items-center relative pl-4">
                <IconCalender className="h-4 w-4 absolute top-1 -left-2 " />
                <time className="text-base text-default-500">{item?.day}</time>
              </li>
            </div>
          </ul>
          <div className="flex items-center gap-1"></div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="flex flex-col gap-y-2">
          <Tooltip placement="top" content="metting start and closing time">
            <li className="flex justify-between group hover:bg-content2 items-start gap-2 w-full">
              <div className="flex text-default-500 group-hover:text-default-900 items-center gap-2">
                <Clock size={18} /> time: &emsp;
              </div>
              <time className="text-base text-default-600 group-hover:text-default-900">
                <b>{item?.from}</b> to{' '}
                <b>
                  {item.to} {item.time}
                </b>
              </time>
            </li>
          </Tooltip>
          <Tooltip placement="bottom" content="metting location">
            <li className="flex w-full hover:bg-content2 group justify-between items-start gap-2">
              <div className="flex text-default-500 group-hover:text-default-900 items-center gap-2">
                <Map size={18} /> Location:&emsp;
              </div>
              <Link
                href={item?.gmap}
                showAnchorIcon
                className="text-default-600 hover:underline focus-visible:underline group-hover:text-default-900"
                isExternal={item?.gmap ? true : false}
              >
                {item.location}
              </Link>
            </li>
          </Tooltip>
        </ul>
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter>
        <Link showAnchorIcon href="/ui">
          More Details
        </Link>
      </CardFooter> */}
    </Card>
  );
}
