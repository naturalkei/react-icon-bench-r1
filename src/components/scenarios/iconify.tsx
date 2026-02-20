'use client';

import { Icon } from '@iconify/react';
import icon0 from '@iconify-icons/mdi/a-b-c.js';
import icon1 from '@iconify-icons/mdi/a-b-c-off.js';
import icon2 from '@iconify-icons/mdi/ab-testing.js';
import icon3 from '@iconify-icons/mdi/abacus.js';
import icon4 from '@iconify-icons/mdi/abc.js';
import icon5 from '@iconify-icons/mdi/abc-off.js';
import icon6 from '@iconify-icons/mdi/abjad-arabic.js';
import icon7 from '@iconify-icons/mdi/abjad-hebrew.js';
import icon8 from '@iconify-icons/mdi/about.js';
import icon9 from '@iconify-icons/mdi/about-circle.js';
import icon10 from '@iconify-icons/mdi/about-circle-outline.js';
import icon11 from '@iconify-icons/mdi/about-outline.js';
import icon12 from '@iconify-icons/mdi/about-variant.js';
import icon13 from '@iconify-icons/mdi/abugida-devanagari.js';
import icon14 from '@iconify-icons/mdi/abugida-thai.js';
import icon15 from '@iconify-icons/mdi/ac-unit.js';
import icon16 from '@iconify-icons/mdi/academic-cap.js';
import icon17 from '@iconify-icons/mdi/academic-cap-outline.js';
import icon18 from '@iconify-icons/mdi/accelerometer.js';
import icon19 from '@iconify-icons/mdi/access-alarms.js';
import icon20 from '@iconify-icons/mdi/access-point.js';
import icon21 from '@iconify-icons/mdi/access-point-check.js';
import icon22 from '@iconify-icons/mdi/access-point-minus.js';
import icon23 from '@iconify-icons/mdi/access-point-network.js';
import icon24 from '@iconify-icons/mdi/access-point-network-off.js';
import icon25 from '@iconify-icons/mdi/access-point-off.js';
import icon26 from '@iconify-icons/mdi/access-point-plus.js';
import icon27 from '@iconify-icons/mdi/access-point-remove.js';
import icon28 from '@iconify-icons/mdi/access-point-success.js';
import icon29 from '@iconify-icons/mdi/access-point-tick.js';
import icon30 from '@iconify-icons/mdi/access-time.js';
import icon31 from '@iconify-icons/mdi/accessibility.js';
import icon32 from '@iconify-icons/mdi/accessible.js';
import icon33 from '@iconify-icons/mdi/account.js';
import icon34 from '@iconify-icons/mdi/account-add.js';
import icon35 from '@iconify-icons/mdi/account-add-outline.js';
import icon36 from '@iconify-icons/mdi/account-alert.js';
import icon37 from '@iconify-icons/mdi/account-alert-outline.js';
import icon38 from '@iconify-icons/mdi/account-arrow-down.js';
import icon39 from '@iconify-icons/mdi/account-arrow-down-outline.js';
import icon40 from '@iconify-icons/mdi/account-arrow-left.js';
import icon41 from '@iconify-icons/mdi/account-arrow-left-outline.js';
import icon42 from '@iconify-icons/mdi/account-arrow-right.js';
import icon43 from '@iconify-icons/mdi/account-arrow-right-outline.js';
import icon44 from '@iconify-icons/mdi/account-arrow-up.js';
import icon45 from '@iconify-icons/mdi/account-arrow-up-outline.js';
import icon46 from '@iconify-icons/mdi/account-badge.js';
import icon47 from '@iconify-icons/mdi/account-badge-alert.js';
import icon48 from '@iconify-icons/mdi/account-badge-alert-outline.js';
import icon49 from '@iconify-icons/mdi/account-badge-horizontal.js';

const icons = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30, icon31, icon32, icon33, icon34, icon35, icon36, icon37, icon38, icon39, icon40, icon41, icon42, icon43, icon44, icon45, icon46, icon47, icon48, icon49];

export function IconifyScenario() {
  return (
    <div className="icon-grid">
      {icons.map((iconData, idx) => (
        <div key={idx} className="icon-cell"><Icon icon={iconData} width={20} height={20} /></div>
      ))}
    </div>
  );
}
