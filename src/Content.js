import './Content.css';
import { useState} from 'react';
<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"></link>



const Content = () => {
const [show,setShow] = useState (true);


    return (

         <main>
              <p> 
              <h2> 6 Surprising benefits to consider</h2> <br/>
              <h3>The benefits of learning to code can be surprisingly wide-ranging. Here are a few of the ways learning to code can benefit you. </h3>
              </p>    
                <button class ="button button-box sbb1" type ='button' onClick ={() => setShow (!show)}>
                  {show === true ? 'Benefit 1' : 'Benefit 1'}
                </button>
                {show && <p> 
                  <div class="box sb1"> Coding and programming careers have great earning potential </div>  
                </p>}

<br/>
                <button class ="button button-box sbb1" type ='button' onClick ={() => setShow (!show)}>
                  {show === true ? 'Benefit 2' : 'Benefit 2'}
                </button>
                {show && <p> 
                  <div class="box sb1"> Demand remains strong for coding-related jobs </div>  
                </p>}

<br/>
                <button class ="button button-box sbb1" type ='button' onClick ={() => setShow (!show)}>
                  {show === true ? 'Benefit 3' : 'Benefit 3'}
                </button>
                {show && <p> 
                  <div class="box sb1"> Coding ability gives new perspective to problem-solving </div>  
                </p>}
              
<br/>
                <button class ="button button-box sbb1" type ='button' onClick ={() => setShow (!show)}>
                  {show === true ? 'Benefit 4' : 'Benefit 4'}
                </button>
                {show && <p> 
                  <div class="box sb1"> Learning to code offers career flexibility </div>  
                </p>}

<br/>
                <button class ="button button-box sbb1" type ='button' onClick ={() => setShow (!show)}>
                  {show === true ? 'Benefit 5' : 'Benefit 5'}
                </button>
                {show && <p> 
                  <div class="box sb1"> Learning to code can be a fun bonding opportunity for families </div>  
                </p>}

<br/>
                <button class ="button button-box sbb1" type ='button' onClick ={() => setShow (!show)}>
                  {show === true ? 'Benefit 6' : 'Benefit 6'}
                </button>
                {show && <p> 
                  <div class="box sb1"> Coding can be useful in jobs you might not expect </div>  
                </p>}
         </main>
    )
}

export default Content;
