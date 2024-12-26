import { productList } from '@/data/products';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const productId = (await params).id;
  const product = productList.find(
    (product) => product.id === parseInt(productId)
  );
  return NextResponse.json({
    data: product ? product : null,
  });
}
