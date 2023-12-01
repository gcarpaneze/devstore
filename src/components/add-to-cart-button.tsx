'use client'

import { useCartContext } from '@/contexts/cart-context'

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCartContext()

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={() => addToCart(productId)}
    >
      Adicionar ao carrinho
    </button>
  )
}
