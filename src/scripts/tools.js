import NoCrows from '../../public/0crows.png';
import OneCrows from '../../public/1crows.png';
import TwoCrows from '../../public/2crows.png';
import ThreeCrows from '../../public/3crows.png';
import FourCrows from '../../public/4crows.png';
import FiveCrows from '../../public/5crows.png';
import SixCrows from '../../public/6crows.png';
import SevenCrows from '../../public/7crows.png';
import EightCrows from '../../public/8crows.png';
import NineCrows from '../../public/9crows.png';

const crowImages = {
  '0': NoCrows,
  '1': OneCrows,
  '2': TwoCrows,
  '3': ThreeCrows,
  '4': FourCrows,
  '5': FiveCrows,
  '6': SixCrows,
  '7': SevenCrows,
  '8': EightCrows,
  '9': NineCrows
}

export const supplyPhoto = (digit) => {
  return crowImages[digit];
}