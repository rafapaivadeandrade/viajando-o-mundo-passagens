import Image from 'next/image'
const LoadingScreen = () => {

return (
    <div className="loading">
      <Image src={`https://cdn.dribbble.com/users/107759/screenshots/2436386/copper-loader.gif`} alt=""/>
    </div>
  );
}

export default LoadingScreen;