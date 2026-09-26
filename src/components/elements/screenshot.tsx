import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Wallpaper } from './wallpaper'

export function Screenshot({
  children,
  wallpaper,
  placement,
  className,
  ...props
}: {
  wallpaper: 'green' | 'blue' | 'purple' | 'brown'
  placement: 'bottom' | 'bottom-left' | 'bottom-right' | 'middle' | 'top' | 'top-left' | 'top-right' | 'stretch-y'
} & Omit<ComponentProps<'div'>, 'color'>) {
  return (
    <Wallpaper color={wallpaper} data-placement={placement} className={clsx('group', className)} {...props}>
      <div className="relative h-full [--padding:min(10%,--spacing(16))] group-data-[placement=bottom]:px-(--padding) group-data-[placement=bottom]:pt-(--padding) group-data-[placement=bottom-left]:pt-(--padding) group-data-[placement=bottom-left]:pr-(--padding) group-data-[placement=bottom-right]:pt-(--padding) group-data-[placement=bottom-right]:pl-(--padding) group-data-[placement=middle]:px-(--padding) group-data-[placement=middle]:py-(--padding) group-data-[placement=top]:px-(--padding) group-data-[placement=top]:pb-2 group-data-[placement=top-left]:pr-(--padding) group-data-[placement=top-left]:pb-2 group-data-[placement=top-right]:pb-2 group-data-[placement=top-right]:pl-(--padding) group-data-[placement=stretch-y]:px-(--padding)">
        <div className="*:relative  *:ring-black/10 group-data-[placement=bottom]:*:rounded-t-sm group-data-[placement=bottom-left]:*:rounded-tr-sm group-data-[placement=bottom-right]:*:rounded-tl-sm group-data-[placement=middle]:*:rounded-sm group-data-[placement=top]:*:rounded-b-sm group-data-[placement=top-left]:*:rounded-br-sm group-data-[placement=top-right]:*:rounded-bl-sm group-data-[placement=stretch-y]:*:rounded-none">
          {children}
        </div>
      </div>
    </Wallpaper>
  )
}
