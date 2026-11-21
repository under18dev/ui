'use client'

import { useEffect, useId, useRef, type ReactNode } from 'react'

export interface DialogProps {
  open: boolean
  onClose: () => void
  title: ReactNode
  /** タイトルの下の短い説明。aria-describedby で読み上げる */
  description?: ReactNode
  children: ReactNode
  /** 閉じるボタンの読み上げ名 */
  closeLabel?: string
}

/**
 * モーダル（ネイティブの dialog 要素）。PC は中央のカード、スマホは下から出るシート。
 * Escape・背景のクリック・閉じるボタンで閉じ、開く前にフォーカスしていた要素に戻す。
 */
export function Dialog({ open, onClose, title, description, children, closeLabel = '閉じる' }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      const previous = document.activeElement as HTMLElement | null
      dialog.showModal()
      return () => {
        if (dialog.open) dialog.close()
        previous?.focus({ preventScroll: true })
      }
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className="u18-dialog"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        // 背景（dialog 自身）をクリックしたら閉じる
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="u18-dialog__header">
        <h2 id={titleId} className="u18-dialog__title">
          {title}
        </h2>
        <button type="button" className="u18-dialog__close" onClick={onClose}>
          <span aria-hidden="true">×</span>
          <span className="u18-sr-only">{closeLabel}</span>
        </button>
      </div>
      <div className="u18-dialog__body">
        {description && (
          <p id={descriptionId} className="u18-dialog__description">
            {description}
          </p>
        )}
        {children}
      </div>
    </dialog>
  )
}
