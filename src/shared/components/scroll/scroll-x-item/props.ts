export type ScrollXType = {
  className?: string
  children: React.ReactNode
  id?: string
  onScroll?: (e?: React.UIEvent<HTMLDivElement, UIEvent>) => void
  ref?: React.LegacyRef<HTMLDivElement>
  scrollExist?: number
  triggerData?: number
}
