import ReactDOM from 'react-dom';
import TestUseAsyncEffect from './components/TestUseAsyncEffect';
import TestUseUpdateEffect from './components/TestUseUpdateEffect';
import TestuseLocalStorageState from './components/TestUseLocalStorage';

ReactDOM.render(
  <>
    {/* <TestUseAsyncEffect /> */}
    {/* <TestUseUpdateEffect /> */}
    <TestuseLocalStorageState />
  </>,
  document.getElementById('root')
);
