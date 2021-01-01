import { useState } from 'react';

const ShortenerCard: React.FC<any> = () => {
  const [url, setUrl] = useState<string>('');

  const handleChange = ({ target }) => {
    console.log(target);
    setUrl(target.value);
  };

  return (
    <div className='flex flex-col w-4/12 px-4 py-6 bg-gray-300 rounded-md shadow-lg'>
      <h1 className='mb-3 text-2xl font-medium text-center text-gray-700'>
        Create your shortened URL Link now!
      </h1>
      <p className='mb-5 text-xl font-medium text-center text-gray-700'>
        Put your link in the input bellow and in just a few seconds receive your
        new link!
      </p>
      <input
        type='text'
        className='px-2 py-4 rounded'
        value={url}
        onChange={handleChange}
      />
    </div>
  );
};

export { ShortenerCard };
