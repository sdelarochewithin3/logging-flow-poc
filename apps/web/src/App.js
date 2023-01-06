import { init as datadogInit } from './datadog';
// import { logger } from '@disco/logging';
import { logger } from './logger';

datadogInit();

function App() {

  const onClickHandle = () => {
    // logger.info('Button clicked updated - console!!');
  };

  return (
    <div>
      <p>Hello there!</p>
      <button type='button' onClick={onClickHandle}>hit me!</button>
    </div>
  );
}

export default App;
