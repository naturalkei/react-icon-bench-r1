'use client';

import { AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxArrowDownIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowDownRightIcon, ArrowDownTrayIcon, ArrowLeftCircleIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftIcon, ArrowLeftOnRectangleIcon, ArrowLeftStartOnRectangleIcon, ArrowLongDownIcon, ArrowLongLeftIcon, ArrowLongRightIcon, ArrowLongUpIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon, ArrowRightCircleIcon, ArrowRightEndOnRectangleIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, ArrowRightStartOnRectangleIcon, ArrowSmallDownIcon, ArrowSmallLeftIcon, ArrowSmallRightIcon, ArrowSmallUpIcon, ArrowTopRightOnSquareIcon, ArrowTrendingDownIcon, ArrowTrendingUpIcon, ArrowTurnDownLeftIcon, ArrowTurnDownRightIcon, ArrowTurnLeftDownIcon, ArrowTurnLeftUpIcon, ArrowTurnRightDownIcon, ArrowTurnRightUpIcon, ArrowTurnUpLeftIcon, ArrowTurnUpRightIcon, ArrowUpCircleIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpOnSquareIcon, ArrowUpOnSquareStackIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const icons = [AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxArrowDownIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowDownRightIcon, ArrowDownTrayIcon, ArrowLeftCircleIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftIcon, ArrowLeftOnRectangleIcon, ArrowLeftStartOnRectangleIcon, ArrowLongDownIcon, ArrowLongLeftIcon, ArrowLongRightIcon, ArrowLongUpIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon, ArrowRightCircleIcon, ArrowRightEndOnRectangleIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, ArrowRightStartOnRectangleIcon, ArrowSmallDownIcon, ArrowSmallLeftIcon, ArrowSmallRightIcon, ArrowSmallUpIcon, ArrowTopRightOnSquareIcon, ArrowTrendingDownIcon, ArrowTrendingUpIcon, ArrowTurnDownLeftIcon, ArrowTurnDownRightIcon, ArrowTurnLeftDownIcon, ArrowTurnLeftUpIcon, ArrowTurnRightDownIcon, ArrowTurnRightUpIcon, ArrowTurnUpLeftIcon, ArrowTurnUpRightIcon, ArrowUpCircleIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpOnSquareIcon, ArrowUpOnSquareStackIcon, ArrowUpRightIcon];

export function HeroiconsScenario() {
  return (
    <div className="icon-grid">
      {icons.map((Icon, idx) => (
        <div key={idx} className="icon-cell"><Icon width={20} height={20} /></div>
      ))}
    </div>
  );
}
