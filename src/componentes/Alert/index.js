
import React from 'react';
import   './Alert.css'

function Alert(props){
  console.log({props});
return(
<div className="alert alert-danger alert-dismissible " role="alert">

        <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo.
        <button type="button" 
        className="close" 
        data-dismiss="alert" 
        aria-label="Close"
        onClick={props.AlertSwitch}
        >
          <span aria-hidden="true">&times;</span>
        </button>
</div>
)
}
export default Alert;