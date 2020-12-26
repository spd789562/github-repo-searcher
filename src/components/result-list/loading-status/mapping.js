import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faSpinner,
  faTimes,
  faHandPaper,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'

export const TextMapping = {
  loading: '載入中',
  empty: '查無結果',
  error_limit: '已達搜尋上限',
  error_unknow: '未知錯誤，請稍候再試',
  end: '已到達世界盡頭',
}

export const IconMapping = {
  loading: <FontAwesomeIcon icon={faSpinner} spin />,
  empty: <FontAwesomeIcon icon={faTimes} />,
  error_limit: <FontAwesomeIcon icon={faExclamationTriangle} />,
  error_unknow: <FontAwesomeIcon icon={faHandPaper} />,
  end: <FontAwesomeIcon icon={faTimes} />,
}
