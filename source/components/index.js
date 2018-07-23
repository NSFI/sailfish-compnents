import AnimationImageLoader from './AnimationImageLoader';
import AudioPlayer from './AudioPlayer';
import BizLoading from './BizLoading';
import BizTimePicker from './BizTimePicker';
import BizTable from './BizTable';
import Checkbox from './Checkbox/index.tsx';
import ColorPicker from './ColorPicker';
import Drawer from './Drawer';
import ImageLoader from './ImageLoader';
import LoadMore from './LoadMore';
import Modal from './Modal/index.tsx';
import PicturePreview from './PicturePreview';
import Radio from './Radio/index.tsx';
import RichEditor from './RichEditor';
import Select from './Select';
import SearchInput from './SearchInput';
import StickVerticalMenu from './StickVerticalMenu';
import Tabs from './Tabs';
import TextOverflow from './TextOverflow';
import TreeSelect from './TreeSelect2/index.tsx';
import VideoViewer from './VideoViewer';
import Echart from './EChart';

//<!--utils相关
import * as bom from '../utils/bom';
import * as dom from '../utils/dom';
import * as number from '../utils/number';
import {iframeC} from '../utils/iframeC';
import * as other from '../utils/other';
import * as upload from '../utils/upload';
//-->utils相关

// 通用组件从这里暴露
export {AnimationImageLoader};
export {AudioPlayer};
export {BizLoading};
export {BizTimePicker};
export {BizTable};
export {Checkbox};
export {ColorPicker};
export {Drawer};
export {ImageLoader};
export {LoadMore};
export {Modal};
export {PicturePreview};
export {Radio};
export {RichEditor};
export {Select};
export {SearchInput};
export {StickVerticalMenu};
export {Tabs};
export {TextOverflow};
export {TreeSelect};
export {VideoViewer};
export {Echart};

const util = {
  bom, dom, number, other, upload, iframeC
};
export {util};
