import {MagnifyingGlass} from 'react-loader-spinner';
export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = 'orange'
    />
  );
};

