import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => (
  <div>
    <h1>ERROR - 404</h1>
    <Link to="/">
      HOMEPAGE
    </Link>
  </div>
);

export default NotFound;