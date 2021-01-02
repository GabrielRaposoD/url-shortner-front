import { useRef } from 'react';

const Footer: React.FC<any> = () => {
  return (
    <footer className='absolute bottom-0 w-full mx-auto bg-transparent'>
      <div className='container flex flex-col px-4 mx-auto'>
        <hr className='border-b-1 mb-4 border-gray-500' />
        <div className='self-end py-1 mb-2 text-sm font-semibold text-white'>
          Copyright © {new Date().getFullYear()}
          {'  '}
          <a
            href='https://github.com/GabrielRaposoD'
            className='hover:text-gray-400 py-1 text-sm font-semibold text-white'
          >
            Gabriel Raposo
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
