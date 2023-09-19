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

export const supplyPhoto = (digit) =>{

  if (digit === "0") {
    return NoCrows;
  }
  if (digit === "1") {
    return OneCrows;
  }
  if (digit === "2") {
    return TwoCrows;
  }
  if (digit === "3") {
    return ThreeCrows;
  }
  if (digit === "4") {
    return FourCrows;
  }
  if (digit === "5") {
    return FiveCrows;
  }
  if (digit === "6") {
    return SixCrows;
  }
  if (digit === "7") {
    return SevenCrows;
  }
  if (digit === "8") {
    return EightCrows;
  }
  if (digit === "9") {
    return NineCrows;
  }
}

// export const supplyPhoto = (digit) =>{

//     return `/public/${digit}crows.png`;

// }