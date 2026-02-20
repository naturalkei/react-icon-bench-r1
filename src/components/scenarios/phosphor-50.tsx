'use client';

import { Acorn, AddressBook, AddressBookTabs, AirTrafficControl, Airplane, AirplaneInFlight, AirplaneLanding, AirplaneTakeoff, AirplaneTaxiing, AirplaneTilt, Airplay, Alarm, Alien, AlignBottom, AlignBottomSimple, AlignCenterHorizontal, AlignCenterHorizontalSimple, AlignCenterVertical, AlignCenterVerticalSimple, AlignLeft, AlignLeftSimple, AlignRight, AlignRightSimple, AlignTop, AlignTopSimple, AmazonLogo, Ambulance, Anchor, AnchorSimple, AndroidLogo, Angle, AngularLogo, Aperture, AppStoreLogo, AppWindow, AppleLogo, ApplePodcastsLogo, ApproximateEquals, Archive, Armchair, ArrowArcLeft, ArrowArcRight, ArrowBendDoubleUpLeft, ArrowBendDoubleUpRight, ArrowBendDownLeft, ArrowBendDownRight, ArrowBendLeftDown, ArrowBendLeftUp, ArrowBendRightDown, ArrowBendRightUp } from '@phosphor-icons/react';

const icons = [Acorn, AddressBook, AddressBookTabs, AirTrafficControl, Airplane, AirplaneInFlight, AirplaneLanding, AirplaneTakeoff, AirplaneTaxiing, AirplaneTilt, Airplay, Alarm, Alien, AlignBottom, AlignBottomSimple, AlignCenterHorizontal, AlignCenterHorizontalSimple, AlignCenterVertical, AlignCenterVerticalSimple, AlignLeft, AlignLeftSimple, AlignRight, AlignRightSimple, AlignTop, AlignTopSimple, AmazonLogo, Ambulance, Anchor, AnchorSimple, AndroidLogo, Angle, AngularLogo, Aperture, AppStoreLogo, AppWindow, AppleLogo, ApplePodcastsLogo, ApproximateEquals, Archive, Armchair, ArrowArcLeft, ArrowArcRight, ArrowBendDoubleUpLeft, ArrowBendDoubleUpRight, ArrowBendDownLeft, ArrowBendDownRight, ArrowBendLeftDown, ArrowBendLeftUp, ArrowBendRightDown, ArrowBendRightUp];

export function PhosphorScenario50() {
  return (
    <div className="icon-grid">
      {icons.map((Icon, idx) => (
        <div key={idx} className="icon-cell"><Icon size={20} weight="regular" /></div>
      ))}
    </div>
  );
}
