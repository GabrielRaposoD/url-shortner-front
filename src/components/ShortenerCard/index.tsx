import { useRef, useState } from 'react';
import axios from 'axios';

const ShortenerCard: React.FC<any> = () => {
  const [shortened, setShortened] = useState<string>(null);
  const inputEl = useRef(null);

  const handleChange = () => {
    console.log(inputEl.current.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onSubmit();
    }
  };

  const onSubmit = async (): Promise<void> => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}shortener`, {
      url: inputEl.current.value,
    });

    setShortened(`${process.env.NEXT_PUBLIC_SITE_URL}${data.id}`);

    inputEl.current.value = '';
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
        className='px-2 py-4 mb-5 rounded'
        ref={inputEl}
        id='text'
        onKeyDown={onKeyDown}
      />
      <button
        type='submit'
        onClick={onSubmit}
        className='bg-primary-400 self-center px-2 py-3 text-xl font-medium text-white rounded'
      >
        Submit
      </button>
      {shortened ? (
        <div className='flex flex-col mt-5 text-2xl font-medium text-center text-black'>
          Here is your new link:
          <a href={shortened} target='_blank' className='text-secondary-700'>
            {shortened}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export { ShortenerCard };
