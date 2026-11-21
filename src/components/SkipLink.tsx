export interface SkipLinkProps {
  /** 移動先の main の id */
  targetId?: string
  label?: string
}

/** キーボードで最初に届く「メインコンテンツへ」のリンク（design.md §7.1） */
export function SkipLink({ targetId = 'main', label = 'メインコンテンツへ' }: SkipLinkProps) {
  return (
    <a className="u18-skip-link" href={`#${targetId}`}>
      {label}
    </a>
  )
}
