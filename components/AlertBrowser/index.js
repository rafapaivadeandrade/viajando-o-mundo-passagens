import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {isIE, isChrome} from 'react-device-detect';

const AlertBrowser = () => { 

    const [isBrowser, setIsBrowser] = useState(false);
    
    useEffect(() => {       
        if(isIE){
            setIsBrowser(true);
        }
    }, []);

    setTimeout(() => {
        setIsBrowser('');
    },15000);

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
      <>
        {isBrowser && (
            <div className="alert-browser" data-aos="fade-right" >
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">                      
                        <strong className="mr-auto">Alerta de Compatibilidade</strong>
                        <small className="text-muted">Fechar!</small>
                        <button onClick={() => setIsBrowser('')} type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="toast-body">
                            Identificamos que você está usando o Internet Explorer, para uma melhor experiência em nosso site. {' '}
                            Sugerimos que baixe algumas das seguintes opçoes: {' '}
                            <a href="https://www.google.com/chrome/thank-you.html?brand=BNSD&statcb=1&installdataindex=empty&defaultbrowser=0#">Chrome</a>,{' '}
                            <a href="https://download.mozilla.org/?product=firefox-stub&os=win&lang=pt-BR&attribution_code=c291cmNlPXd3dy5nb29nbGUuY29tJm1lZGl1bT1yZWZlcnJhbCZjYW1wYWlnbj0obm90IHNldCkmY29udGVudD0obm90IHNldCkmZXhwZXJpbWVudD0obm90IHNldCkmdmFyaWF0aW9uPShub3Qgc2V0KSZ1YT1jaHJvbWU.&attribution_sig=774d9972789664be6672b065e7f33820ea1cb1e7bafb5ea8c6b2a4f4bc207c70">Firefox</a>, {' '}
                            <a href="http://appldnld.apple.com/Safari5/041-5487.20120509.INU8B/SafariSetup.exe">Safari</a> {' '}
                            ou {' '}
                            <a href="">Edge</a>.
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

export default AlertBrowser;
