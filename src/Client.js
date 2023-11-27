import React, { useState } from 'react'
import './Client.css'
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";

const Client = () => {

    const ClientId = sessionStorage.getItem("clientId");
    const ClientSecret = sessionStorage.getItem("clientSecret");
    const accessTokenURL = "https://oauth2authorizeserver.uc.r.appspot.com/oauth2/token";

    const [IDcopied, SetIDCopied] = useState(false);
    const [Secretcopied, SetSecretcopied] = useState(false);
    const [TokenURLcopied, SetTokenURLcopied] = useState(false);

    const handleCopyClick1 = (value) => {
        // Create a temporary textarea element
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = value;
    
        // Append the textarea to the body
        document.body.appendChild(tempTextarea);
    
        // Select and copy the text
        tempTextarea.select();
        document.execCommand("copy");
    
        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        SetIDCopied(true);
        SetSecretcopied(false);
        SetTokenURLcopied(false);
    
      };

      const handleCopyClick2 = (value) => {
        // Create a temporary textarea element
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = value;
    
        // Append the textarea to the body
        document.body.appendChild(tempTextarea);
    
        // Select and copy the text
        tempTextarea.select();
        document.execCommand("copy");
    
        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

       
        SetSecretcopied(true);
        SetTokenURLcopied(false);
        SetIDCopied(false);
        
      };

      const handleCopyClick3 = (value) => {
        // Create a temporary textarea element
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = value;
    
        // Append the textarea to the body
        document.body.appendChild(tempTextarea);
    
        // Select and copy the text
        tempTextarea.select();
        document.execCommand("copy");
    
        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        SetTokenURLcopied(true)
        SetSecretcopied(false);
        SetIDCopied(false);
        
      };

  return (
    <div className='Client_wrapper'>

        
        <div className='Client_feilds'>
                <h4>Access Token URL :</h4>
                <div className='TokenUrlCopy'>
                    <p>{accessTokenURL}</p>
                    <p onClick={() => handleCopyClick3(ClientId)} className='copy__btn'>
                        {TokenURLcopied !== true ?
                        <MdOutlineContentCopy size={20}/>
                        :
                        <IoIosDoneAll size={25}/>
                        }
                        </p>
                </div>   
        </div>

        <div className='Client_feilds'>
                <h4>Client ID :</h4>
                <div className='clientIDCopy'>
                    <p>{ClientId}</p>
                    <p onClick={() => handleCopyClick1(ClientId)} className='copy__btn'>
                        {IDcopied !== true ?
                        <MdOutlineContentCopy size={20}/>
                        :
                        <IoIosDoneAll size={25}/>
                        }
                        </p>
                </div>   
        </div>

        <div className='Client_feilds'>
                <h4>Client Secret :</h4>
                <div className='clientSecretCopy'>
                    <p>{ClientSecret}</p>
                    <p onClick={() => handleCopyClick2(ClientSecret)} className='copy__btn'>
                    {Secretcopied !== true ?
                        <MdOutlineContentCopy size={20}/>
                        :
                        <IoIosDoneAll size={25}/>
                        }
                        </p>
                </div> 
                
        </div>

        <div className='Client_feilds'>
                <h4>Grant Type :</h4>
                <p>Client Credentials</p>  
        </div>

        <div className='Client_feilds'>
                <h4>Parameter Type :</h4>
                <p>Header</p>  
        </div>

        <div className='Client_feilds'>
                <h4>Authentication Type :</h4>
                <p>OAuth2</p>  
        </div>

        
        
    </div>
  )
}

export default Client