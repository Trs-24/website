import * as React from 'react'

import { IToast } from '../../data/toast'
import { ToastContext, ToastSetter } from './context'
import Toast from './Toast'

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = React.useState<Array<IToast>>([])

  const addToast: ToastSetter = React.useCallback(
    (partialToas) =>
      setToasts((prevToasts) => [
        ...prevToasts,
        { ...partialToas, id: Date.now() }
      ]),
    []
  )

  const closeToast = React.useCallback(
    (toastId) =>
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== toastId)
      ),
    []
  )

  return (
    <ToastContext.Provider value={addToast}>
      <div className="toast" data-test-id="toast-list">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={closeToast} />
        ))}
      </div>

      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
