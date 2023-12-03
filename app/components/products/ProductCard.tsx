'use client';

import { formatPrice } from '@/utils/formatPrice';
import { truncateText } from '@/utils/truncateText';
import { Rating } from '@mui/material';
import Image from 'next/image';

interface ProductCardProps {
  data: any;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
  return (
    <div className='col-span-1 cursor-pointer border border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm'>
      <div className='flex flex-col w-full gap-1'>
        <div className='aspect-square overflow-hidden relative w-full'>
          <Image
            fill
            className='w-full h-full object-contain '
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div className='mt-4'>{truncateText(data.name)}</div>
        <div className='flex items-center justify-between'>
          <div>
            <Rating value={productRating} readOnly />
          </div>
          <div>{data.reviews.length} reviews</div>
        </div>
        <div className='flex justify-start font-semibold'>
          {formatPrice(data.price)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
