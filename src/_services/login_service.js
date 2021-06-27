import { UALJs } from "ual-plainjs-renderer";
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";
import router from '../router'

// login functio
export default class LoginService {
    handle_login () {
        const myChain = {
          // chain id
          chainId: "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12",
          // end point details if available
          rpcEndpoints: [
            {
              protocol: "https",
              host: "",
              port: "",
            },
          ],
        };
  
        // this call after successfull login from EOSIO
        const myLoginCallback = users => {
            this.users = users
            // session details save in local storage
            localStorage.setItem('wax_user', this.users[0].accountName )
            // navigate to dashboard after login
            router.push('/dashboard')
        }
  
        const myAppName = 'My App'
  
        //auth partners
        const wax = new Wax([myChain], { appName: myAppName });         
        const anchor = new Anchor([myChain], { appName: myAppName });  
  
        // login component load to HTML
        const myAppRoot = {    
            containerElement: document.getElementById('ual-div')
        }
  
        // validate authentication
        this.ual = new UALJs(myLoginCallback, [myChain], myAppName, [wax, anchor], myAppRoot);
          (async () => {
              console.log('Loading...');
              await this.ual.init();
          })()
  
          // hide UAL button load from liabary after click
          const [buttonUAL] = document.body.getElementsByClassName('ual-button-gen');
          buttonUAL.click();
          var popups = document.getElementsByClassName('ual-button-gen'),
          i = popups.length;
  
          try {
            do {
              i--;
              // remove unnessesory popups
              popups[i].style.display = "none";
          } while (i >= 0)
          } catch (error) {
            console.warn(error)
          }
  
      }
  
  }