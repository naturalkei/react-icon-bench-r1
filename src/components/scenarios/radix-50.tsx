'use client';

import { AccessibilityIcon, ActivityLogIcon, AlignBaselineIcon, AlignBottomIcon, AlignCenterHorizontallyIcon, AlignCenterVerticallyIcon, AlignLeftIcon, AlignRightIcon, AlignTopIcon, AllSidesIcon, AngleIcon, ArchiveIcon, ArrowBottomLeftIcon, ArrowBottomRightIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowTopLeftIcon, ArrowTopRightIcon, ArrowUpIcon, AspectRatioIcon, AvatarIcon, BackpackIcon, BadgeIcon, BarChartIcon, BellIcon, BlendingModeIcon, BookmarkIcon, BookmarkFilledIcon, BorderAllIcon, BorderBottomIcon, BorderDashedIcon, BorderDottedIcon, BorderLeftIcon, BorderNoneIcon, BorderRightIcon, BorderSolidIcon, BorderSplitIcon, BorderStyleIcon, BorderTopIcon, BorderWidthIcon, BoxIcon, BoxModelIcon, ButtonIcon, CalendarIcon, CameraIcon, CardStackIcon, CardStackMinusIcon, CardStackPlusIcon, CaretDownIcon } from '@radix-ui/react-icons';

const icons = [AccessibilityIcon, ActivityLogIcon, AlignBaselineIcon, AlignBottomIcon, AlignCenterHorizontallyIcon, AlignCenterVerticallyIcon, AlignLeftIcon, AlignRightIcon, AlignTopIcon, AllSidesIcon, AngleIcon, ArchiveIcon, ArrowBottomLeftIcon, ArrowBottomRightIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowTopLeftIcon, ArrowTopRightIcon, ArrowUpIcon, AspectRatioIcon, AvatarIcon, BackpackIcon, BadgeIcon, BarChartIcon, BellIcon, BlendingModeIcon, BookmarkIcon, BookmarkFilledIcon, BorderAllIcon, BorderBottomIcon, BorderDashedIcon, BorderDottedIcon, BorderLeftIcon, BorderNoneIcon, BorderRightIcon, BorderSolidIcon, BorderSplitIcon, BorderStyleIcon, BorderTopIcon, BorderWidthIcon, BoxIcon, BoxModelIcon, ButtonIcon, CalendarIcon, CameraIcon, CardStackIcon, CardStackMinusIcon, CardStackPlusIcon, CaretDownIcon];

export function RadixScenario50() {
  return (
    <div className="icon-grid">
      {icons.map((Icon, idx) => (
        <div key={idx} className="icon-cell"><Icon width={20} height={20} /></div>
      ))}
    </div>
  );
}
