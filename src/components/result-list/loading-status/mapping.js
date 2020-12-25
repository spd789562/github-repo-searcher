import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faSpinner,
  faTimes,
  faHandPaper,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'

export const TextMapping = {
  loading: '載入中',
  'error-limit': '已達搜尋上線',
  'error-unknow': '未知錯誤，請稍候再試',
  end: '已到達世界盡頭',
}

export const IconMapping = {
  loading: <FontAwesomeIcon icon={faSpinner} spin />,
  'error-limit': <FontAwesomeIcon icon={faExclamationTriangle} />,
  'error-unknow': <FontAwesomeIcon icon={faHandPaper} />,
  end: <FontAwesomeIcon icon={faTimes} />,
}
