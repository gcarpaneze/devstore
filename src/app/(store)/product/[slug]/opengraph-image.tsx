import { Product } from '@/@types/products'
import { env } from '@/env'
import { api } from '@/utils/api'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

// Image metadata
export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProductDetails(slug: string): Promise<Product> {
  const product = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hora
    },
  })

  return product.json()
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductDetails(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[900],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
