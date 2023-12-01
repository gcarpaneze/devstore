import { Skeleton } from '@/components/skeleton'
import { CurrentSearch } from './current-search'
import { Suspense } from 'react'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="row-span-1 h-[460px] rounded-lg bg-zinc-900" />
        <Skeleton className="row-span-1 h-[460px] rounded-lg bg-zinc-900" />
        <Skeleton className="row-span-1 h-[460px] rounded-lg bg-zinc-900" />
        <Skeleton className="row-span-1 h-[460px] rounded-lg bg-zinc-900" />
        <Skeleton className="row-span-1 h-[460px] rounded-lg bg-zinc-900" />
        <Skeleton className="row-span-1 h-[460px] rounded-lg bg-zinc-900" />
      </div>
    </div>
  )
}
