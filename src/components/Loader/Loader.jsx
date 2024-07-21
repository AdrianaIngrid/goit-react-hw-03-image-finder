
import { Vortex } from "react-loader-spinner";
function Loader () {
    return(<Vortex
  visible={false}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />)
        
  
}

export default Loader;
