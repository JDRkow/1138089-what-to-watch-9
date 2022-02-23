import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  hasAuthorize: boolean;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {hasAuthorize, children} = props;

  return (
    hasAuthorize
      ? children
      : <Navigate to='/login' />
  );
}
