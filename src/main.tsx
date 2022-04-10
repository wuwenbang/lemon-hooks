import ReactDOM from 'react-dom';
import TestUseAsyncEffect from './components/TestUseAsyncEffect';
import TestUseUpdateEffect from './components/TestUseUpdateEffect';
import TestuseLocalStorageState from './components/TestUseLocalStorage';
import TestUseDebounce from './components/TestUseDebounce';
import TestUseHover from './components/TestUseHover';
import TestUseToggle from './components/TestUseToggle';
import TestUsePrevious from './components/TestUsePrevious';
import TestUseMount from './components/TestUseMount';
import TestUseUnmount from './components/TestUseUnmount';
import TestUseWindowSize from './components/TestUseWindowSize';
import TestUseScroll from './components/TestUseScroll';

ReactDOM.render(
  <>
    {/* <TestUseAsyncEffect /> */}
    {/* <TestUseUpdateEffect /> */}
    {/* <TestuseLocalStorageState /> */}
    {/* <TestUseDebounce /> */}
    {/* <TestUseHover /> */}
    {/* <TestUseToggle /> */}
    {/* <TestUsePrevious /> */}
    {/* <TestUseMount /> */}
    {/* <TestUseUnmount /> */}
    {/* <TestUseWindowSize /> */}
    <TestUseScroll />
  </>,
  document.getElementById('root')
);
