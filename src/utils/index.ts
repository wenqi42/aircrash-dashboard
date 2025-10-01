import event from 'events'

export const eventEmitter = new event.EventEmitter()

export const dynamicImport = (path: string,type:string = 'text/javascript') => {
    if(path.endsWith('.js')){
    const script = document.createElement('script');
    script.src = path;
    script.type =  type;
    script.defer = true
    document.head.appendChild(script);
    } else {
        const link = document.createElement('link');
        link.href = path;
        document.head.appendChild(link);
    }
}



export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
  }