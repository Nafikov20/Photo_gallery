import { Link } from 'react-router-dom';
import { ROUTES } from '../../constans/routes';

export const Header = () => {
  return (
    <header className='flex w-full items-center justify-center gap-2 p-3.5 shadow-[0px_22px_70px_4px_rgb(0,0,0,0.56)] shadow-blue-500/50'>
      <div className='flex'>
        <Link to={ROUTES.home}>
          <h1>test1</h1>
        </Link>
      </div>
      <div className='flex'>
        <Link to={ROUTES.map}>
          <h1>test2</h1>
        </Link>
      </div>
      <div className='flex'>
        <Link to={ROUTES.gallery}>
          <h1>test3</h1>
        </Link>
      </div>
    </header>
  );
};
