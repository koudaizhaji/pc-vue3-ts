import OutlineHomeWork from '~icons/ic/outline-home-work'
import BaselineWechat from '~icons/ic/baseline-wechat'
import BaselineConnectedTv from '~icons/ic/baseline-connected-tv'
import OutlineSchool from '~icons/ic/outline-school'
import SharpLocationDisabled from '~icons/ic/sharp-location-disabled'
import TwotoneOtherHouses from '~icons/ic/twotone-other-houses'
import SharpMiscellaneousServices from '~icons/ic/sharp-miscellaneous-services'
import SharpSatelliteAlt from '~icons/ic/sharp-satellite-alt'
import TwotoneAddChart from '~icons/ic/twotone-add-chart'
import TwotoneSnapchat from '~icons/ic/twotone-snapchat'
import TwotoneFreeCancellation from '~icons/ic/twotone-free-cancellation'
import TwotoneStoreMallDirectory from '~icons/ic/twotone-store-mall-directory'
import BaselineApartment from '~icons/ic/baseline-apartment'
import TwotoneBusinessCenter from '~icons/ic/twotone-business-center'
import TwotoneHomeWork from '~icons/ic/twotone-home-work'
import TwotonePersonalInjury from '~icons/ic/twotone-personal-injury'

export const getIcon = (iconStr: string) => {
  switch (iconStr) {
    case 'twotone-personal-injury':
      return TwotonePersonalInjury
    case 'twotone-home-work':
      return TwotoneHomeWork
    case 'twotone-business-center':
      return TwotoneBusinessCenter
    case 'baseline-apartment':
      return BaselineApartment
    case 'twotone-store-mall-directory':
      return TwotoneStoreMallDirectory
    case 'twotone-free-cancellation':
      return TwotoneFreeCancellation
    case 'twotone-snapchat':
      return TwotoneSnapchat
    case 'twotone-add-chart':
      return TwotoneAddChart
    case 'outline-home-work':
      return OutlineHomeWork
    case 'twotone-other-houses':
      return TwotoneOtherHouses
    case 'sharp-miscellaneous-services':
      return SharpMiscellaneousServices
    case 'sharp-satellite-alt':
      return SharpSatelliteAlt
    case 'baseline-wechat':
      return BaselineWechat
    case 'baseline-connected-tv':
      return BaselineConnectedTv
    case 'outline-school':
      return OutlineSchool
    case 'sharp-location-disabled':
      return SharpLocationDisabled
    default:
      return OutlineHomeWork
  }
}
