import { FilmCardProps } from '../../types/filmCardProps';
import Main from '../main/main';

function App({mainProps}: {mainProps: FilmCardProps}): JSX.Element {
  return <Main filmCardProps={mainProps}/>;
}

export default App;
