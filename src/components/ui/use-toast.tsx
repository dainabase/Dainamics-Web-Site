import * as React from "react"

interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

type ToastActionElement = React.ReactElement

interface ToastState {
  toasts: Toast[]
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 5000

// Toast context
const ToastContext = React.createContext<{
  toasts: Toast[]
  toast: (props: Omit<Toast, "id">) => void
  dismiss: (toastId?: string) => void
}>({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
})

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const toast = React.useCallback((props: Omit<Toast, "id">) => {
    const id = genId()
    const newToast = { ...props, id }
    
    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts, newToast]
      return updatedToasts.slice(-TOAST_LIMIT)
    })

    // Auto dismiss after delay
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id))
    }, TOAST_REMOVE_DELAY)
  }, [])

  const dismiss = React.useCallback((toastId?: string) => {
    setToasts((prevToasts) => {
      if (!toastId) {
        return []
      }
      return prevToasts.filter((t) => t.id !== toastId)
    })
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastViewport toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  )
}

function ToastViewport({ 
  toasts, 
  dismiss 
}: { 
  toasts: Toast[]
  dismiss: (id?: string) => void 
}) {
  return (
    <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            group pointer-events-auto relative flex w-full items-center justify-between space-x-4 
            overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all mb-3
            ${toast.variant === "destructive" 
              ? "border-red-500 bg-red-900/20 text-red-300" 
              : "border-dainamics-border bg-dainamics-card text-dainamics-light"
            }
            animate-in slide-in-from-bottom-5 duration-300
          `}
        >
          <div className="grid gap-1">
            {toast.title && (
              <div className="text-sm font-semibold">{toast.title}</div>
            )}
            {toast.description && (
              <div className="text-sm opacity-90">{toast.description}</div>
            )}
          </div>
          {toast.action}
          <button
            onClick={() => dismiss(toast.id)}
            className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}

export function toast(props: Omit<Toast, "id">) {
  // This is a simplified version for direct import usage
  // In production, you'd use the context
  console.log('[TOAST]', props)
  
  // Fallback notification for development
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('toast', { detail: props })
    window.dispatchEvent(event)
  }
}

export function useToast() {
  const context = React.useContext(ToastContext)
  
  if (!context) {
    // Fallback for when provider is not set up
    return {
      toast: (props: Omit<Toast, "id">) => {
        console.log('[TOAST]', props)
      },
      dismiss: () => {},
      toasts: []
    }
  }
  
  return context
}