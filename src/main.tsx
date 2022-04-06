import ReactDOM from 'react-dom';
import TestUseAsyncEffect from './components/TestUseAsyncEffect';
import TestUseUpdateEffect from './components/TestUseUpdateEffect';
import TestuseLocalStorageState from './components/TestUseLocalStorage';
import TestUseDebounce from './components/TestUseDebounce';

ReactDOM.render(
  <>
    {/* <TestUseAsyncEffect /> */}
    {/* <TestUseUpdateEffect /> */}
    {/* <TestuseLocalStorageState /> */}
    <TestUseDebounce />
  </>,
  document.getElementById('root')
);
