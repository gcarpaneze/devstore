'use client'

import { ShoppingBag } from 'lucide-react'

import { useCartContext } from '@/contexts/cart-context'

export function CartWidget() {
  const { items } = useCartContext()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
