export default {
  //url读key
  documents: {
    'quick-start': require('./quickStart'),
    'changelog': require('./changelog'),
    'contributing': require('./contributing'),
    'resource': require('./resource'),
    'customTheme': require('./CustomTheme'),
  },
  list: {
    '通用组件 General': {
      // 'affix': require('./affix'),
      'alert': require('./alert'),
      'avatar': require('./avatar'),
      'badge': require('./badge'),
      // 'backTop': require('./backTop'),
      'breadcrumb': require('./breadcrumb'),
      'button': require('./button'),
      'calendar': require('./calendar'),
      'card': require('./card'),
      'carousel': require('./carousel'),
      'checkbox': require('./checkbox'),
      'drawer': require('./drawer'),
      'dropdown': require('./dropdown'),
      'message': require('./message'),
      'layout': require('./layout'),
      'grid': require('./grid'),
      'divider': require('./divider'),
      'datePicker': require('./datePicker'),
      'cascader': require('./cascader'),
      'form': require('./form'),
      'imageLoader': require('./imageLoader'),
      'input': require('./input'),
      'list': require('./list'),
      'menu': require('./menu'),
      'modal': require('./modal'),
      'notification': require('./notification'),
      'pagination': require('./pagination'),
      'picturePreview': require('./picturePreview'),
      'progress': require('./progress'),
      'radio': require('./radio'),
      'select': require('./select'),
      'slider': require('./slider'),
      'steps': require('./steps'),
      'switch': require('./switch'),
      'table': require('./table'),
      'tabs': require('./tabs'),
      'tag': require('./tag'),
      'timeline': require('./timeline'),
      'tooltip': require('./tooltip'),
      'transfer': require('./transfer'),
      'tree': require('./tree'),
      'upload': require('./upload'),
      'collapse': require('./collapse'),
      'treeSelect': require('./treeSelect'),
      'timePicker': require('./timePicker')
    },
    '业务组件': {
      'loading': require('./loading'),
      'customTable': require('./customTable'),
      'bizTimePicker': require('./bizTimePicker'),
    }
  }
};
