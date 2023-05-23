import React from 'react';

const Card = ({items}) => {
    const {name, image, price, recipe} = items
    return (
        <div className='flex justify-between'>
            <div>
                <img className='w-24 h-16 object-cover object-right rounded-r-full rounded-bl-full' src={image} alt="" />
            </div>
            <div className='px-5'>
                <h2 className='font-semibold'>{name} ----------------------</h2>
                <p className='text-sm text-gray-400'>{recipe}</p>
            </div>
            <div>
                <p className='font-bold text-primary'>${price}</p>
            </div>
        </div>
    );
};

export default Card;